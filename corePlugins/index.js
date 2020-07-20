import _keys from 'lodash/keys';

import alignContent from './alignContent';
import alignItems from './alignItems';
import alignSelf from './alignSelf';
import backfaceVisibility from './backfaceVisibility';
import borderStyle from './borderStyle';
import direction from './direction';
import display from './display';
import flexDirection from './flexDirection';
import flexWrap from './flexWrap';
import fontPadding from './fontPadding';
import fontStyle from './fontStyle';
import fontWeight from './fontWeight';
import justifyContent from './justifyContent';
import objectFit from './objectFit';
import overflow from './overflow';
import position from './position';
import resize from './resize';
import textAlign from './textAlign';
import textDecoration from './textDecoration';
import textTransform from './textTransform';
import verticalAlign from './verticalAlign';
import backgroundColor from './backgroundColor';
import borderColor from './borderColor';
import borderRadius from './borderRadius';
import borderWidth from './borderWidth';
import flex from './flex';
import flexGrow from './flexGrow';
import flexShrink from './flexShrink';
import fontFamily from './fontFamily';
import fontSize from './fontSize';
import height from './height';
import inset from './inset';
import top from './top';
import bottom from './bottom';
import left from './left';
import right from './right';
import start from './start';
import end from './end';
import letterSpacing from './letterSpacing';
import lineHeight from './lineHeight';
import margin from './margin';
import marginOld from './marginOld';
import maxHeight from './maxHeight';
import maxWidth from './maxWidth';
import minHeight from './minHeight';
import minWidth from './minWidth';
import opacity from './opacity';
import padding from './padding';
import paddingOld from './paddingOld';
import textColor from './textColor';
import tint from './tint';
import width from './width';
import zIndex from './zIndex';
import boxShadow from './boxShadow';
import textShadow from './textShadow';
import insetDir from './insetDir';
import borderWidthDir from './borderWidthDir';
import borderRadiusDir from './borderRadiusDir';


export const corePlugins = {
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
    marginOld,
    margin,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    opacity,
    paddingOld,
    padding,
    textColor,
    textShadow,
    tint,
    width,
    zIndex,
    borderRadiusDir,
    borderWidthDir,
    insetDir,
};

export const corePluginsName = Object.assign(
    {},
    ...(_keys(corePlugins).map(key => ({[key]: true}))),
);
