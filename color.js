import {theme} from './stubs/defaultConfig.stub'
import generator from './util/generator'

const colors = theme.colors;

let colorList = {};

for (let color in colors) {
    let currentColor, colorKey, colorValue, colorName, currentColorKeys;

    if (colors.hasOwnProperty(color)) {
        colorName = color
    }

    currentColor = colors[colorName];

    if (typeof currentColor !== 'object') {
        colorValue = generator.translateValues(currentColor);

        colorName = generator.translateKeys(colorName);

        colorList[colorName] = colorValue
    }

    if (typeof currentColor === 'object') {
        currentColorKeys = Object.getOwnPropertyNames(currentColor);

        currentColorKeys.map(key => {
            colorValue = generator.translateValues(currentColor[key]);

            colorKey = generator.translateKeys(`${colorName}-${key}`);

            colorList[colorKey] = colorValue
        })
    }
}

export default colorList
