import {theme} from './stubs/defaultConfig.stub'
import generator from './util/generator'
import {StyleSheet} from 'react-native'
import colors from './color'

// not-adjustable
const alignContent = generator.generate('content', 'alignContent', [['start', 'flex-start'], ['end', 'flex-end'], 'center', 'stretch', ['between', 'space-between'], ['around', 'space-around'],]);
const alignItems = generator.generate('items', 'alignItems', [['start', 'flex-start'], ['end', 'flex-end'], 'center', 'stretch', 'baseline',]);
const alignSelf = generator.generate('self', 'alignSelf', ['auto', ['start', 'flex-start'], ['end', 'flex-end'], 'center', 'stretch', 'baseline',]);
const backfaceVisibility = generator.generate('backface', 'backfaceVisibility', ['visible', 'hidden',]);
const borderStyle = generator.generate('border', 'borderStyle', ['solid', 'dotted', 'dashed',]);
const direction = generator.generate('direction', 'direction', ['inherit', 'ltr', 'rtl',]);
const display = generator.generate('display', 'display', ['none', 'flex',]);
const flexDirection = generator.generate('flex', 'flexDirection', ['row', 'row-reverse', ['col', 'column'], ['col-reverse', 'column-reverse'],]);
const flexWrap = generator.generate('flex', 'flexWrap', ['wrap', 'wrap-reverse', ['no-wrap', 'nowrap'],]);
const fontStyle = generator.generate('', 'fontStyle', [['not-italic', 'normal'], 'italic',]);
const fontWeight = generator.generate('font', 'fontWeight', ['normal', 'bold',
    ['hairline', 100],
    ['thin', 200],
    ['light', 300],
    ['medium', 500],
    ['semibold', 600],
    ['extrabold', 800],
    ['black', 900],
]);
const justifyContent = generator.generate('justify', 'justifyContent', [['start', 'flex-start'], ['end', 'flex-end'], 'center', ['between', 'space-between'], ['around', 'space-around'], ['evenly', 'space-evenly'],]);
const objectFit = generator.generate('object', 'resizeMode', ['contain', 'cover', 'stretch', 'center', 'repeat']);
const overflow = generator.generate('overflow', 'overflow', ['visible', 'hidden',]);
const position = generator.generate('', 'position', ['absolute', 'relative',]);
const resize = generator.generate('resize', 'resizeMode', ['contain', 'cover', 'stretch', 'center', 'repeat',]);
const textAlign = generator.generate('text', 'textAlign', ['auto', 'left', 'right', 'center', 'justify',]);
const textDecoration = generator.generate('', 'textDecorationLine', [['no-underline', 'none'], 'underline', 'line-through', ['underline-line-through', 'underline line-through'],]);
const textTransform = generator.generate('', 'textTransform', [['normal-case', 'none'], 'uppercase', 'lowercase', 'capitalize',]);
const verticalAlign = generator.generate('align', 'textAlignVertical', ['auto', 'top', 'bottom', 'center',]);

const themeParser = key => {
    return theme[key];
};

// adjustable
const backgroundColor = generator.generate('bg', 'backgroundColor', colors);
const borderColor = generator.generate('border', 'borderColor', colors);
const borderRadius = generator.generate('border', 'borderRadius', theme.borderRadius, [
    ['t', ['borderTopLeftRadius', 'borderTopRightRadius']],
    ['r', ['borderTopRightRadius', 'borderBottomRightRadius']],
    ['b', ['borderBottomLeftRadius', 'borderBottomRightRadius']],
    ['l', ['borderTopLeftRadius', 'borderBottomLeftRadius']],
    ['tl', 'borderTopLeftRadius'],
    ['tr', 'borderTopRightRadius'],
    ['br', 'borderBottomRightRadius'],
    ['bl', 'borderBottomLeftRadius'],
]);
const borderWidth = generator.generate('border', 'borderWidth', theme.borderWidth, [
    ['x', ['borderRightWidth', 'borderLeftWidth']],
    ['y', ['borderTopWidth', 'borderBottomWidth']],
    ['t', 'borderTopWidth'],
    ['r', 'borderRightWidth'],
    ['b', 'borderBottomWidth'],
    ['l', 'borderLeftWidth'],
]);
const flex = generator.generate('flex', 'flexBasis', theme.flex);
const flexGrow = generator.generate('grow', 'flexGrow', theme.flexGrow);
const flexShrink = generator.generate('shrink', 'flexShrink', theme.flexShrink);
const fontFamily = generator.generate('font', 'fontFamily', theme.fontFamily);
const fontSize = generator.generate('text', 'fontSize', theme.fontSize);
const height = generator.generate('h', 'height', theme.height(themeParser));
const inset = generator.generate('inset', ['top', 'bottom', 'left', 'right'], theme.inset, [
    ['x', ['left', 'right']],
    ['y', ['top', 'bottom']],
]);
const top = generator.generate('top', 'top', theme.inset);
const bottom = generator.generate('bottom', 'bottom', theme.inset);
const left = generator.generate('left', 'left', theme.inset);
const right = generator.generate('right', 'right', theme.inset);
const start = generator.generate('start', 'start', theme.inset);
const end = generator.generate('end', 'end', theme.inset);
const letterSpacing = generator.generate('tracking', 'letterSpacing', theme.letterSpacing);
const linHeight = generator.generate('leading', 'lineHeight', theme.lineHeight);
const margin = generator.generate('m', 'margin', theme.margin(themeParser), [
    ['x', 'marginHorizontal'],
    ['y', 'marginVertical'],
    ['t', 'marginTop'],
    ['r', 'marginRight'],
    ['b', 'marginBottom'],
    ['l', 'marginLeft'],
]);
const maxHeight = generator.generate('max-h', 'maxHeight', theme.maxHeight);
const maxWidth = generator.generate('max-w', 'maxWidth', theme.maxWidth);
const minHeight = generator.generate('min-h', 'minHeight', theme.minHeight);
const minWidth = generator.generate('min-w', 'minWidth', theme.minWidth);
const opacity = generator.generate('opacity', 'opacity', theme.opacity);
const padding = generator.generate('p', 'padding', theme.width(themeParser), [
    ['x', 'paddingHorizontal'],
    ['y', 'paddingVertical'],
    ['t', 'paddingTop'],
    ['r', 'paddingRight'],
    ['b', 'paddingBottom'],
    ['l', 'paddingLeft'],
]);
const textColor = generator.generate('text', 'color', colors);
const tint = generator.generate('tint', 'tintColor', colors);
const width = generator.generate('w', 'width', theme.width(themeParser));
const zIndex = generator.generate('z', 'zIndex', theme.zIndex);

// directional
const insetDir = generator.generate('inset-dir', ['top', 'bottom', 'start', 'end'], theme.inset, [
    ['x', ['start', 'end']],
]);
const borderWidthDir = generator.generate('border-dir', 'borderWidth', theme.borderWidth, [
    ['x', ['borderEndWidth', 'borderStartWidth']],
    ['e', 'borderEndWidth'],
    ['s', 'borderStartWidth'],
]);
const borderRadiusDir = generator.generate('border', 'borderRadius', theme.borderRadius, [
    ['e', ['borderTopEndRadius', 'borderBottomEndRadius']],
    ['s', ['borderTopStartRadius', 'borderBottomStartRadius']],
    ['ts', 'borderTopStartRadius'],
    ['te', 'borderTopEndRadius'],
    ['be', 'borderBottomEndRadius'],
    ['bs', 'borderBottomStartRadius'],
]);

// special generators
const boxShadow = generator.generateShadows('shadow', 'shadow', theme.boxShadow);
const textShadow = generator.generateShadows('border', 'textShadow', theme.boxShadow);
const negativeMargin = generator.generateNegatives('-m', 'margin', theme.negativeMargin(themeParser), [
    ['x', 'marginHorizontal'],
    ['y', 'marginVertical'],
    ['t', 'marginTop'],
    ['r', 'marginRight'],
    ['b', 'marginBottom'],
    ['l', 'marginLeft'],
]);

let allStyles = {};

Object.assign(allStyles,
    alignContent,
    alignItems,
    alignSelf,
    backfaceVisibility,
    borderStyle,
    direction,
    display,
    flexDirection,
    flexWrap,
    fontStyle,
    fontWeight,
    justifyContent,
    objectFit,
    overflow,
    position,
    resize,
    textAlign,
    textDecoration,
    textTransform,
    verticalAlign,
    backgroundColor,
    borderColor,
    borderRadius,
    borderRadiusDir,
    borderWidth,
    borderWidthDir,
    boxShadow,
    flex,
    flexGrow,
    flexShrink,
    fontFamily,
    fontSize,
    height,
    inset,
    insetDir,
    top,
    bottom,
    left,
    right,
    start,
    end,
    letterSpacing,
    linHeight,
    margin,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    negativeMargin,
    opacity,
    padding,
    textColor,
    textShadow,
    tint,
    width,
    zIndex,
);

export default StyleSheet.create(allStyles)
