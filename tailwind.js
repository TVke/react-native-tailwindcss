import {StyleSheet} from 'react-native';
import resolveConfig from 'tailwindcss/resolveConfig'

import _merge from 'lodash/merge';
import _mapKeys from 'lodash/mapKeys';
import _isArray from 'lodash/isArray';
import _keys from 'lodash/keys';
import _pickBy from 'lodash/pickBy';

import generator from './util/generator';
import {corePlugins, corePluginsName} from './corePlugins';


export class Tailwind {
    constructor(config) {
        this._configure = this._configure.bind(this);
        this.plugin = this.plugin.bind(this);
        this.prefix = this.prefix.bind(this);
        this._getColors = this._getColors.bind(this);
        this.addUtilities = this.addUtilities.bind(this);
        this._addCorePlugins = this._addCorePlugins.bind(this);
        this.resetCache = this.resetCache.bind(this);
        this.converter = this.converter.bind(this);

        this._configure(config);
    }

    _configure(config = {}) {
        this.config = resolveConfig(config);

        this.colors = this._getColors();

        let style = {};
        style = _merge(style, this._addCorePlugins(this.config.corePlugins || []));
        style = _merge(style, this._addPlugin(this.config.plugins || []));

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

    _corePluginsToUse(cp) {
        if (_isArray(cp)) return cp;
        return _keys(
            _pickBy(
                {...corePluginsName, ...cp},
                plugin => plugin
            )
        );
    }

    _addCorePlugins(cp) {
        cp = this._corePluginsToUse(cp);

        let style = {};
        const colors = this.colors;
        const theme = this.config.theme;

        cp.map(function (pluginName) {
            style = {...style, ...corePlugins[pluginName]({theme, colors})}
        });

        return style;
    }

    _addPlugin(pluginNames) {
        let style = {};
        pluginNames.map(function (pluginStyle) {
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
        const t = this.style;

        let style = {};
        if (styleCache[classes]) return styleCache[classes];

        classes.split(' ').map((className) => {
            if (styleCache[className]) return style = {...style, ...styleCache[className]};

            const cn = generator.translateKeys(className);
            if (t[cn]) {
                styleCache[className] = t[cn];
                return style = {...style, ...styleCache[className]};
            } else {
                console.log(`Unsupported style ${className}`, cn, t[cn]);
            }
        });

        styleCache[classes] = style;
        this._styleCache = styleCache;
        return style;
    }
}

export default Tailwind;
