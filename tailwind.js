import {StyleSheet} from 'react-native';

import alignContent from './corePlugins/alignContent';
import alignItems from './corePlugins/alignItems';
import alignSelf from './corePlugins/alignSelf';
import backfaceVisibility from './corePlugins/backfaceVisibility';
import borderStyle from './corePlugins/borderStyle';
import direction from './corePlugins/direction';
import display from './corePlugins/display';
import flexDirection from './corePlugins/flexDirection';
import flexWrap from './corePlugins/flexWrap';
import fontPadding from './corePlugins/fontPadding';
import fontStyle from './corePlugins/fontStyle';
import fontWeight from './corePlugins/fontWeight';
import justifyContent from './corePlugins/justifyContent';
import objectFit from './corePlugins/objectFit';
import overflow from './corePlugins/overflow';
import position from './corePlugins/position';
import resize from './corePlugins/resize';
import textAlign from './corePlugins/textAlign';
import textDecoration from './corePlugins/textDecoration';
import textTransform from './corePlugins/textTransform';
import verticalAlign from './corePlugins/verticalAlign';
import backgroundColor from './corePlugins/backgroundColor';
import borderColor from './corePlugins/borderColor';
import borderRadius from './corePlugins/borderRadius';
import borderWidth from './corePlugins/borderWidth';
import flex from './corePlugins/flex';
import flexGrow from './corePlugins/flexGrow';
import flexShrink from './corePlugins/flexShrink';
import fontFamily from './corePlugins/fontFamily';
import fontSize from './corePlugins/fontSize';
import height from './corePlugins/height';
import inset from './corePlugins/inset';
import top from './corePlugins/top';
import bottom from './corePlugins/bottom';
import left from './corePlugins/left';
import right from './corePlugins/right';
import start from './corePlugins/start';
import end from './corePlugins/end';
import letterSpacing from './corePlugins/letterSpacing';
import lineHeight from './corePlugins/lineHeight';
import margin from './corePlugins/margin';
import maxHeight from './corePlugins/maxHeight';
import maxWidth from './corePlugins/maxWidth';
import minHeight from './corePlugins/minHeight';
import minWidth from './corePlugins/minWidth';
import opacity from './corePlugins/opacity';
import padding from './corePlugins/padding';
import textColor from './corePlugins/textColor';
import tint from './corePlugins/tint';
import width from './corePlugins/width';
import zIndex from './corePlugins/zIndex';
import boxShadow from './corePlugins/boxShadow';
import textShadow from './corePlugins/textShadow';
import insetDir from './corePlugins/insetDir';
import borderWidthDir from './corePlugins/borderWidthDir';
import borderRadiusDir from './corePlugins/borderRadiusDir';

let style = {};

Object.assign(style,
    alignContent,
    alignItems,
    alignSelf,
    backfaceVisibility,
    borderStyle,
    direction,
    display,
    flexDirection,
    flexWrap,
    fontPadding,
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
    borderWidth,
    boxShadow,
    flex,
    flexGrow,
    flexShrink,
    fontFamily,
    fontSize,
    height,
    inset,
    top,
    bottom,
    left,
    right,
    start,
    end,
    letterSpacing,
    lineHeight,
    margin,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    opacity,
    padding,
    textColor,
    textShadow,
    tint,
    width,
    zIndex,
    borderRadiusDir,
    borderWidthDir,
    insetDir,
);

export default StyleSheet.create(style);
