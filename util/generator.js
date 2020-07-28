export default {
    generate(name, key, values, variation = []) {
        let i = 0,
            j = 0,
            styles = {},
            value = '',
            styleName = '',
            valueName = '',
            keyName = '',
            keys = '',
            keyStyleName = '';

        const styleValues = this.parseThemeValues(values),
            valuesLength = styleValues.length,
            variationLength = variation.length;

        for (; i < valuesLength; ++i) {
            value = this.getValue(styleValues[i]);
            valueName = this.getValueName(styleValues[i]);
            keyName = this.getKeyName(name, valueName);

            styleName = this.translateKeys(keyName);

            if (
                this.guardAgainstCssNotSupportedInReactNative(
                    key,
                    this.translateValues(value)
                )
            ) {
                styles[styleName] = this.guardedKeyHandler(key, value);

                continue;
            }

            styles[styleName] = this.keyHandler(key, value);
        }

        if (variationLength) {
            j = 0;
            value = '';
            styleName = '';
            valueName = '';
            keyName = '';
            keyStyleName = '';

            for (; j < variationLength; ++j) {
                i = 0;
                keyName = `${name}-${variation[j][0]}`;
                keys = variation[j][1];

                for (; i < valuesLength; ++i) {
                    value = this.getValue(styleValues[i]);
                    valueName = this.getValueName(styleValues[i]);
                    keyStyleName = this.getKeyName(keyName, valueName);

                    styleName = this.translateKeys(keyStyleName);

                    if (
                        this.guardAgainstCssNotSupportedInReactNative(
                            keys,
                            this.translateValues(value)
                        )
                    ) {
                        styles[styleName] = this.guardedKeyHandler(keys, value);

                        continue;
                    }

                    styles[styleName] = this.keyHandler(keys, value);
                }
            }
        }

        return styles;
    },

    generateShadows(name, key, values) {
        let i = 0,
            styles = {},
            value = '',
            styleName = '',
            valueName = '',
            keyName = '',
            shadowValues = {};

        const styleValues = this.parseThemeValues(values),
            valuesLength = styleValues.length;

        for (; i < valuesLength; ++i) {
            value = this.getValue(styleValues[i]);
            valueName = this.getValueName(styleValues[i]);
            keyName = this.getKeyName(name, valueName);
            shadowValues = this.getShadowValues(value);

            styleName = this.translateKeys(keyName);
            styles[styleName] = {};

            styles[styleName][`${key}Color`] = shadowValues.color;
            styles[styleName][`${key}Offset`] = shadowValues.offset;
            styles[styleName][`${key}Radius`] = shadowValues.radius;

            if (key === 'shadow') {
                styles[styleName][`${key}Opacity`] = shadowValues.opacity;
                styles[styleName]['elevation'] = shadowValues.elevation;
            }
        }

        return styles;
    },

    generateColors(colors) {
        let colorList = {},
            color,
            currentColor,
            colorKey,
            colorValue,
            colorName,
            currentColorKeys;

        for (color in colors) {
            colorName = color;

            currentColor = colors[colorName];

            if (typeof currentColor !== 'object') {
                colorValue = this.translateValues(currentColor);

                colorName = this.translateKeys(colorName);

                colorList[colorName] = colorValue;
            }

            if (typeof currentColor === 'object') {
                currentColorKeys = Object.getOwnPropertyNames(currentColor);

                currentColorKeys.map(key => {
                    if (['dynamic', 'semantic'].includes(key)) {
                        colorValue = this.translateValues(currentColor);

                        colorName = this.translateKeys(colorName);

                        colorList[colorName] = colorValue;
                    } else {
                        colorValue = this.translateValues(currentColor[key]);

                        colorKey = this.translateKeys(`${colorName}-${key}`);

                        colorList[colorKey] = colorValue;
                    }
                });
            }
        }

        return colorList;
    },

    getValue(value) {
        let valueToReturn = value;

        if (typeof value === 'object') {
            valueToReturn = value[1];
        }

        if (
            typeof valueToReturn === 'object' &&
            !valueToReturn.semantic &&
            !valueToReturn.dynamic
        ) {
            valueToReturn = valueToReturn[0];
        }

        return valueToReturn;
    },

    getValueName(value) {
        if (typeof value === 'object') {
            return value[0];
        }

        return value;
    },

    getKeyName(name, valueName) {
        let keyName = valueName,
            prefix = name;

        if (keyName.substring(0, 1) === '-') {
            prefix = `-${name}`;
            keyName = keyName.substring(1);
        }

        if (prefix !== '') {
            keyName = `${prefix}-${keyName}`;
        }

        return keyName;
    },

    keyHandler(keys, value) {
        let i = 0,
            tempObject = {};
        const keysLength = keys.length;

        if (typeof keys === 'object') {
            for (; i < keysLength; ++i) {
                tempObject[keys[i]] = this.translateValues(value);
            }

            return tempObject;
        }

        tempObject[keys] = this.translateValues(value);

        return tempObject;
    },

    guardAgainstCssNotSupportedInReactNative(property, value) {
        if (property === 'zIndex' && typeof value !== 'number') {
            return true;
        }

        if (property === 'fontWeight' && typeof value === 'number') {
            return true;
        }

        if (property === 'letterSpacing') {
            return true;
        }

        if (property === 'flex' && typeof value !== 'number') {
            return true;
        }

        return false;
    },

    guardedKeyHandler(property, value) {
        let tempObject = {},
            translatedValue = 0;

        if (property === 'zIndex' && typeof value !== 'number') {
            tempObject[property] = 0;
        }

        if (property === 'fontWeight') {
            tempObject[property] = `${value}`;
        }

        if (property === 'letterSpacing') {
            if (value.search('em') !== -1) {
                translatedValue = parseFloat(value.slice(0, -2)) * 16;
            }

            tempObject[property] = translatedValue;
        }

        if (property === 'flex' && typeof value !== 'number') {
            const firstNumber = value.match(/^[0-9]+/);

            translatedValue = this.translateValues(
                firstNumber && firstNumber.length ? firstNumber[0] : 0
            );

            tempObject[property] = translatedValue;
        }

        return tempObject;
    },

    translateKeys(name, prefix = '') {
        let translatedKey = name;

        if (translatedKey.search('default') !== -1) {
            translatedKey = `${prefix}${translatedKey.replace('-default', '')}`;
        }

        if (translatedKey.search(/\//) !== -1) {
            translatedKey = `${prefix}${translatedKey.replace('/', '_')}`;
        }

        if (translatedKey.search(/^-[a-zA-Z]/) !== -1) {
            translatedKey = `${prefix}${translatedKey.replace(
                /^(-)[a-zA-Z]/g,
                result => {
                    return result.replace('-', '_');
                }
            )}`;
        }

        if (translatedKey.search('-') !== -1) {
            translatedKey = translatedKey.replace(/-([a-z])/g, result => {
                return result[1].toUpperCase();
            });
        }

        if (translatedKey.search(/^[a-zA-Z_]+-[0-9]/) !== -1) {
            translatedKey = `${prefix}${translatedKey.replace('-', '')}`;
        }

        return translatedKey;
    },

    translateValues(content) {
        let translatedValue = content;

        if (translatedValue === 'transparent') {
            return 'rgba(0,0,0,0)';
        }

        if (translatedValue === 'true') {
            return true;
        }

        if (translatedValue === 'false') {
            return false;
        }

        if (typeof translatedValue !== 'string') {
            return translatedValue;
        }

        if (content.search(/^-?[0-9]*(\.[0-9]+)?px$/) !== -1) {
            translatedValue = content.replace('px', '');

            return parseInt(translatedValue);
        }

        if (content.search(/^-?[0-9]*(\.[0-9]+)?rem$/) !== -1) {
            translatedValue = content.replace('rem', '');

            translatedValue = parseFloat(translatedValue) * 16;

            return Math.round(translatedValue);
        }

        if (content.search(/^-?[0-9]*(\.[0-9]+)?em$/) !== -1) {
            translatedValue = content.replace('em', '');

            translatedValue = parseFloat(translatedValue) * 16;

            return Math.round(translatedValue);
        }

        if (content.search(/^-?[0-9]+$/) !== -1) {
            return parseInt(translatedValue);
        }

        if (content.search(/-?\.[0-9]+$/) !== -1) {
            return parseFloat(translatedValue);
        }

        return translatedValue;
    },

    getShadowValues(content) {
        let results, color, elevation;

        if (content === 'none' || content.search(/inset/) !== -1) {
            return {
                color: 'rgba(0, 0, 0, 0)',
                offset: {width: 0, height: 0},
                radius: 0,
                opacity: 0,
                elevation: 0,
            };
        }

        results = content.match(
            /^([0-9]+)p?x?\s([0-9]+)p?x?\s([0-9]+)p?x?\s(-?[0-9]+)?p?x?\s?(rgba?\(.+?\))?(#[a-zA-Z0-9]{3,8})?/
        );

        elevation = content.match(/,(?:\s+)?(-?[0-9]+)$/);

        color = results[5];

        elevation = elevation
            ? this.translateValues(elevation[1])
            : this.translateValues(results[3]) / 2;

        if (typeof color === 'undefined') {
            color = results[6];
        }

        return {
            color: color,
            offset: {
                width: this.translateValues(results[1]),
                height: this.translateValues(results[2]),
            },
            radius: this.translateValues(results[3]),
            opacity: 1,
            elevation: elevation,
        };
    },

    parseThemeValues(values) {
        if (typeof values === 'object' && !Array.isArray(values)) {
            return this.toArray(values);
        }

        return values;
    },

    toArray(object) {
        return Object.keys(object).map(value => {
            return [value, object[value]];
        });
    },
};
