import {
  borderRadius,
  borderWidths,
  fonts,
  fontWeights,
  height,
  leading,
  margin,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  negativeMargin,
  opacity,
  padding,
  shadows,
  textSizes,
  tracking,
  width,
  zIndex
} from '../../tailwind'
import { StyleSheet } from 'react-native'
import helper from './helper'
import colors from './color'

const borderTypes = {
  X: ['borderRightWidth', 'borderLeftWidth'],
  Y: ['borderTopWidth', 'borderBottomWidth'],
  T: ['borderTopWidth'],
  R: ['borderRightWidth'],
  B: ['borderBottomWidth'],
  L: ['borderLeftWidth'],
}

const borderStyles = {
  solid: 'solid',
  dashed: 'dashed',
  dotted: 'dotted',
}

const marginTypes = {
  x: ['marginHorizontal'],
  y: ['marginVertical'],
  t: ['marginTop'],
  r: ['marginRight'],
  b: ['marginBottom'],
  l: ['marginLeft'],
}

const paddingTypes = {
  x: ['paddingHorizontal'],
  y: ['paddingVertical'],
  t: ['paddingTop'],
  r: ['paddingRight'],
  b: ['paddingBottom'],
  l: ['paddingLeft'],
}

const roundedTypes = {
  T: ['borderTopLeftRadius', 'borderTopRightRadius'],
  R: ['borderTopRightRadius', 'borderBottomRightRadius'],
  B: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
  L: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
  TL: ['borderTopLeftRadius'],
  TR: ['borderTopRightRadius'],
  BR: ['borderBottomRightRadius'],
  BL: ['borderBottomLeftRadius'],
}

let styles = {
  contentStart: {alignContent: 'flex-start'},
  contentCenter: {alignContent: 'center'},
  contentEnd: {alignContent: 'flex-end'},
  contentBetween: {alignContent: 'space-between'},
  contentAround: {alignContent: 'space-around'},

  none: {display: 'none'},
  flex: {display: 'flex'},

  flexRow: {flexDirection: 'row'},
  flexRowReverse: {flexDirection: 'row-reverse'},
  flexCol: {flexDirection: 'column'},
  flexColReverse: {flexDirection: 'column-reverse'},

  flex1: {flex: 1},
  flexAuto: {flexBasis: 'auto'},
  flexGrow: {flexGrow: 1},
  flexShrink: {flexShrink: 1},
  flexNoGrow: {flexGrow: 0},
  flexNoShrink: {flexShrink: 0},
  flexWrap: {flexWrap: 'wrap'},
  flexNoWrap: {flexWrap: 'nowrap'},

  itemStretch: {alignItems: 'stretch'},
  itemStart: {alignItems: 'flex-start'},
  itemCenter: {alignItems: 'center'},
  itemEnd: {alignItems: 'flex-end'},
  itemBaseline: {alignItems: 'baseline'},

  justifyStart: {justifyContent: 'flex-start'},
  justifyCenter: {justifyContent: 'center'},
  justifyEnd: {justifyContent: 'flex-end'},
  justifyBetween: {justifyContent: 'space-between'},
  justifyAround: {justifyContent: 'space-around'},

  pinT: {top: 0},
  pinR: {right: 0},
  pinB: {bottom: 0},
  pinL: {left: 0},
  pinX: {left: 0, right: 0},
  pinY: {top: 0, bottom: 0},
  pin: {top: 0, bottom: 0, left: 0, right: 0},
  pinNone: {top: 'auto', bottom: 'auto', left: 'auto', right: 'auto'},

  absolute: {position: 'absolute'},
  relative: {position: 'relative'},

  selfAuto: {alignSelf: 'auto'},
  selfStart: {alignSelf: 'flex-start'},
  selfCenter: {alignSelf: 'center'},
  selfEnd: {alignSelf: 'flex-end'},
  selfStretch: {alignSelf: 'stretch'},

  textLeft: {textAlign: 'left'},
  textCenter: {textAlign: 'center'},
  textRight: {textAlign: 'right'},
  textJustify: {textAlign: 'justify'},

  italic: {fontStyle: 'italic'},
  roman: {fontStyle: 'normal'},
  uppercase: {textTransform: 'uppercase'},
  lowercase: {textTransform: 'lowercase'},
  capitalize: {textTransform: 'capitalize'},
  normalCase: {textTransform: 'none'},
  underline: {textDecorationLine: 'underline'},
  noUnderline: {textDecorationLine: 'none'},
  lineThrough: {textDecorationLine: 'line-through'},
  underlineLineThrough: {textDecorationLine: 'underline line-through'},

  overflowHidden: {overflow: 'hidden'},
  overflowVisible: {overflow: 'visible'},
  overflowScroll: {overflow: 'scroll'},
}

// background-colors
for (let color in colors) {
  let colorName, colorValue, colorKey

  if (colors.hasOwnProperty(color)) {
    colorName = color
  }

  colorValue = helper.translateValues(colors[colorName])

  colorKey = helper.translateKeys(colorName,'bg')

  styles[colorKey] = {backgroundColor: colorValue}
}

// text-colors
for (let color in colors) {
  let colorName, colorValue, colorKey

  if (colors.hasOwnProperty(color)) {
    colorName = color
  }

  colorValue = helper.translateValues(colors[colorName])

  colorKey = helper.translateKeys(colorName, 'text')

  styles[colorKey] = {color: colorValue}
}

// text-sizes
for (let size in textSizes) {
  let sizeName, sizeValue

  if (textSizes.hasOwnProperty(size)) {
    sizeName = size
  }

  sizeValue = helper.translateValues(textSizes[sizeName])

  sizeName = helper.translateKeys(sizeName, 'text')

  styles[sizeName] = {fontSize: sizeValue}
}

// border-colors
for (let color in colors) {
  let borderColorName, colorValue, colorKey

  if (colors.hasOwnProperty(color)) {
    borderColorName = color
  }

  colorValue = helper.translateValues(colors[borderColorName])

  colorKey = helper.translateKeys(borderColorName, 'border')

  styles[colorKey] = {borderColor: colorValue}
}

// border-widths
for (let width in borderWidths) {
  let borderWidth, borderWidthName

  if (borderWidths.hasOwnProperty(width)) {
    borderWidthName = width
  }

  borderWidth = helper.translateValues(borderWidths[borderWidthName])

  borderWidthName = helper.translateKeys(borderWidthName, 'border')

  styles[borderWidthName] = {borderWidth: borderWidth}
}

for (let type in borderTypes) {
  for (let width in borderWidths) {
    let borderWidth, borderWidthName

    if (borderWidths.hasOwnProperty(width)) {
      borderWidthName = width
    }

    borderWidth = helper.translateValues(borderWidths[borderWidthName])

    borderWidthName = helper.translateKeys(borderWidthName, `border${type}`)

    styles[`${borderWidthName}`] = {}

    borderTypes[type].forEach((property) => {
      styles[`${borderWidthName}`][property] = borderWidth
    })
  }
}

// border-styles
for (let style in borderStyles) {
  let borderStyle, borderStyleName

  if (borderStyles.hasOwnProperty(style)) {
    borderStyleName = style
  }

  borderStyle = helper.translateValues(borderStyles[borderStyleName])

  borderStyleName = helper.translateKeys(borderStyleName, 'border')

  styles[borderStyleName] = {borderStyle: borderStyle}
}

// font-weights
for (let weight in fontWeights) {
  let weightName, weightValue

  if (fontWeights.hasOwnProperty(weight)) {
    weightName = weight
  }

  weightValue = helper.translateValues(fontWeights[weightName])

  weightName = helper.translateKeys(weightName, 'font')

  styles[weightName] = {fontWeight: `${weightValue}`}
}

// font-families
for (let font in fonts) {
  let fontName, fontValue

  if (fonts.hasOwnProperty(font)) {
    fontName = font
  }

  fontValue = helper.translateValues(fonts[fontName])

  fontName = helper.translateKeys(fontName, 'font')

  if (typeof fontValue === 'object') {
    fontValue = fontValue[0]
  }

  styles[fontName] = {fontFamily: fontValue}
}

// heights
for (let heightAmount in height) {
  let heightName, heightValue

  if (height.hasOwnProperty(heightAmount)) {
    heightName = heightAmount
  }

  heightValue = helper.translateValues(height[heightName])

  heightName = helper.translateKeys(heightName, 'h')

  styles[heightName] = {height: heightValue}
}

// leading
for (let lineHeight in leading) {
  let leadingName, leadingValue

  if (leading.hasOwnProperty(lineHeight)) {
    leadingName = lineHeight
  }

  leadingValue = leading[leadingName]

  leadingName = helper.translateKeys(leadingName, 'leading')

  styles[leadingName] = {lineHeight: leadingValue}
}

// margins
for (let marginAmount in margin) {
  let marginName, marginValue

  if (margin.hasOwnProperty(marginAmount)) {
    marginName = marginAmount
  }

  marginValue = helper.translateValues(margin[marginName])

  if (marginValue === 'auto') {
    marginValue = 0
  }

  marginName = helper.translateKeys(marginName, 'm')

  styles[marginName] = {margin: marginValue}
}

for (let type in marginTypes) {
  for (let marginAmount in margin) {
    let marginValue, marginName

    if (margin.hasOwnProperty(marginAmount)) {
      marginName = marginAmount
    }

    marginValue = helper.translateValues(margin[marginName])

    marginName = helper.translateKeys(marginName, `m${type}`)

    styles[`${marginName}`] = {}

    marginTypes[type].forEach((property) => {
      styles[`${marginName}`][property] = marginValue
    })
  }
}

// negative-margins
for (let negativeMarginAmount in negativeMargin) {
  let negativeMarginName, negativeMarginValue

  if (negativeMargin.hasOwnProperty(negativeMarginAmount)) {
    negativeMarginName = negativeMarginAmount
  }

  negativeMarginValue = helper.translateValues(negativeMargin[negativeMarginName])

  negativeMarginName = helper.translateKeys(negativeMarginName, '_m')

  styles[negativeMarginName] = {margin: negativeMarginValue * -1}
}

for (let type in marginTypes) {
  for (let negativeMarginAmount in negativeMargin) {
    let negativeMarginValue, negativeMarginName

    if (negativeMargin.hasOwnProperty(negativeMarginAmount)) {
      negativeMarginName = negativeMarginAmount
    }

    negativeMarginValue = helper.translateValues(negativeMargin[negativeMarginName])

    negativeMarginName = helper.translateKeys(negativeMarginName, `_m${type}`)

    styles[`${negativeMarginName}`] = {}

    marginTypes[type].forEach((property) => {
      styles[`${negativeMarginName}`][property] = negativeMarginValue * -1
    })
  }
}

//max-height
for (let name in maxHeight) {
  let heightName, heightValue

  if (maxHeight.hasOwnProperty(name)) {
    heightName = name
  }

  heightValue = helper.translateValues(maxHeight[heightName])

  heightName = helper.translateKeys(heightName, 'maxH')

  styles[heightName] = {maxHeight: heightValue}
}

//max-width
for (let name in maxWidth) {
  let widthName, widthValue

  if (maxWidth.hasOwnProperty(name)) {
    widthName = name
  }

  widthValue = helper.translateValues(maxWidth[widthName])

  widthName = helper.translateKeys(widthName, 'maxW')

  styles[widthName] = {maxWidth: widthValue}
}

// min-height
for (let name in minHeight) {
  let heightName, heightValue

  if (minHeight.hasOwnProperty(name)) {
    heightName = name
  }

  heightValue = helper.translateValues(minHeight[heightName])

  heightName = helper.translateKeys(heightName, 'minH')

  styles[heightName] = {minHeight: heightValue}
}

// min-width
for (let name in minWidth) {
  let widthName, widthValue

  if (minWidth.hasOwnProperty(name)) {
    widthName = name
  }

  widthValue = helper.translateValues(minWidth[widthName])

  widthName = helper.translateKeys(widthName, 'minW')

  styles[widthName] = {minWidth: widthValue}
}

// opacity
for (let opacityAmount in opacity) {
  let opacityName, opacityValue

  if (opacity.hasOwnProperty(opacityAmount)) {
    opacityName = opacityAmount
  }

  opacityValue = helper.translateValues(opacity[opacityName])

  opacityName = helper.translateKeys(opacityName, 'opacity')

  styles[opacityName] = {opacity: opacityValue}
}

// paddings
for (let paddingAmount in padding) {
  let paddingName, paddingValue

  if (padding.hasOwnProperty(paddingAmount)) {
    paddingName = paddingAmount
  }

  paddingValue = helper.translateValues(padding[paddingName])

  if (paddingValue === 'auto') {
    paddingValue = 0
  }

  paddingName = helper.translateKeys(paddingName, 'p')

  styles[paddingName] = {padding: paddingValue}
}

for (let type in paddingTypes) {
  for (let paddingAmount in padding) {
    let paddingValue, paddingName

    if (padding.hasOwnProperty(paddingAmount)) {
      paddingName = paddingAmount
    }

    paddingValue = helper.translateValues(padding[paddingName])

    paddingName = helper.translateKeys(paddingName, `p${type}`)

    styles[`${paddingName}`] = {}

    paddingTypes[type].forEach((property) => {
      styles[`${paddingName}`][property] = paddingValue
    })
  }
}

// rounded
for (let radius in borderRadius) {
  let currentRadius, radiusName

  if (borderRadius.hasOwnProperty(radius)) {
    radiusName = radius
  }

  currentRadius = helper.translateValues(borderRadius[radiusName])

  radiusName = helper.translateKeys(radiusName, 'rounded')

  styles[radiusName] = {borderRadius: parseInt(currentRadius)}
}

for (let type in roundedTypes) {
  for (let roundedAmount in borderRadius) {
    let roundedValue, roundedName

    if (borderRadius.hasOwnProperty(roundedAmount)) {
      roundedName = roundedAmount
    }

    roundedValue = helper.translateValues(borderRadius[roundedName])

    roundedName = helper.translateKeys(roundedName, `rounded${type}`)

    styles[`${roundedName}`] = {}

    roundedTypes[type].forEach((property) => {
      styles[`${roundedName}`][property] = roundedValue
    })
  }
}

// shadows
for (let shadow in shadows) {
  let shadowName, shadowValues

  if (shadows.hasOwnProperty(shadow)) {
    shadowName = shadow
  }

  shadowValues = helper.getShadowValues(shadows[shadowName])

  shadowName = helper.translateKeys(shadowName, 'shadow')

  styles[shadowName] = {
    shadowColor: shadowValues.color,
    shadowOffset: shadowValues.offset,
    shadowRadius: shadowValues.radius,
    shadowOpacity: shadowValues.opacity,
    elevation: shadowValues.elevation,
  }
}

// trackings
for (let spacing in tracking) {
  let trackingName, trackingValue

  if (tracking.hasOwnProperty(spacing)) {
    trackingName = spacing
  }

  trackingValue = helper.translateValues(tracking[trackingName])

  trackingName = helper.translateKeys(trackingName, 'tracking')

  styles[trackingName] = {letterSpacing: trackingValue}
}

// widths
for (let name in width) {
  let widthName, widthValue

  if (width.hasOwnProperty(name)) {
    widthName = name
  }

  widthValue = helper.translateValues(width[widthName])

  widthName = helper.translateKeys(widthName, 'w')

  styles[widthName] = {width: widthValue}
}

// z-index
for (let index in zIndex) {
  let indexName, indexValue

  if (zIndex.hasOwnProperty(index)) {
    indexName = index
  }

  indexValue = helper.translateValues(zIndex[indexName])

  if (indexValue === 'auto') {
    indexValue = 0
  }

  indexName = helper.translateKeys(indexName, 'z')

  styles[indexName] = {zIndex: indexValue}
}

export default StyleSheet.create(styles)
