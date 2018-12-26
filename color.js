import { colors } from '../../tailwind'
import helper from './helper'

let colorList = {}

for (let color in colors) {
  let currentColor, colorName

  if (colors.hasOwnProperty(color)) {
    colorName = color
  }

  currentColor = colors[colorName]

  currentColor = helper.translateValues(currentColor)

  colorName = helper.translateKeys(colorName)

  colorList[colorName] = currentColor
}

export default colorList
