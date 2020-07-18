import {StyleSheet} from 'react-native';
// import resolveConfig from 'tailwindcss/resolveConfig';

import _merge from 'lodash/merge';
import _mapKeys from 'lodash/mapKeys';

import generator from './util/generator';
import defaultConfig from './stubs/defaultConfig.stub';

export class Tailwind {
    constructor() {
        this.resolveConfig = this.resolveConfig.bind(this);
        this.configure = this.configure.bind(this);
        this.plugin = this.plugin.bind(this);
        this.prefix = this.prefix.bind(this);
        this._getColors = this._getColors.bind(this);
        this.addUtilities = this.addUtilities.bind(this);
        this._addCorePlugins = this._addCorePlugins.bind(this);
        this.resetCache = this.resetCache.bind(this);
        this.converter = this.converter.bind(this);
    }

    resolveConfig(config = {}) {
        let {theme: {extend = {}, ...baseTheme} = {}, ...baseConfig} = config;
        baseConfig = {...defaultConfig, ...baseConfig};
        baseConfig.theme = {...defaultConfig.theme, ...baseTheme};
        baseConfig.theme = _merge(baseConfig.theme, extend);

        return baseConfig;
    }

    configure(config = {}) {
        this.config = this.resolveConfig(config);
        this.colors = this._getColors();

        let style = {};
        style = _merge(style, this._addCorePlugins());
        style = _merge(style, this._addPlugin());

        this.resetCache();
        this.style = StyleSheet.create(style);

        return this.style;
    }

    plugin(func) {
        return func({
            addUtilities: this.addUtilities,
            addComponents: this.addUtilities,

            config: this.config,
            colors: this.colors,
            theme: this.config.theme
        })
    }

    prefix(className) {
        return `${this.config.prefix}${this.config.separator}${className}`
    }

    _getColors() {
        let colors = {};
        const themeColors = generator.generateColors(this.config.theme.colors);
        Object.assign(colors, themeColors);
        return colors;
    }

    _addUtilitiesOption = {
        respectPrefix: true,
        respectImportant: true,
        variants: []
    };

    addUtilities(newUtilities, options = {}) {
        options = _merge(this._addUtilitiesOption, options);
        newUtilities = _mapKeys(newUtilities, (className) => {
            className = className.replaceAll('.', '');
            if (options.respectImportant) className = this.prefix(className);
            className = generator.translateKeys(className);

            return className;
        });

        return newUtilities;
    }

    _addCorePlugins() {
        let style = {};
        const colors = this.colors;
        const theme = this.config.theme;

        this.config.corePlugins.map(function (pluginName) {
            const corePlugin = require(`./corePlugins/${pluginName}`).default;
            style = {...style, ...corePlugin({theme, colors})}
        });

        return style;
    }

    _addPlugin() {
        let style = {};
        this.config.plugins(function (pluginStyle) {
            style = {...style, ...pluginStyle};
        });

        return style;
    }

    _styleCache = {};

    resetCache() {
        this._styleCache = {};
    }

    converter(classes = '') {
        const styleCache = this._styleCache;
        if (styleCache[classes]) return styleCache[classes];
        let style = {};

        classes.split(' ').map(function (className) {
            if (styleCache[className]) return style = {...style, ...styleCache[className]};
            const cn = generator.translateKeys(className);

            if (this.style[cn]) {
                styleCache[className] = this.style[cn];
                return style = {...style, ...styleCache[className]};
            } else {
                console.log(`Unsupported style ${className}`, cn, this.style[cn]);
            }
        });

        styleCache[classes] = style;
        this._styleCache = styleCache;
        return style;
    }
}

export default Tailwind;
