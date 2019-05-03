import alignContent from '../corePlugins/alignContent'
import alignItems from '../corePlugins/alignItems'
import alignSelf from '../corePlugins/alignSelf'
import backfaceVisibility from '../corePlugins/backfaceVisibility'
import borderStyle from '../corePlugins/borderStyle'
import direction from '../corePlugins/direction'
import display from '../corePlugins/display'
import flexDirection from '../corePlugins/flexDirection'
import flexWrap from '../corePlugins/flexWrap'
import fontStyle from '../corePlugins/fontStyle'
import fontWeight from '../corePlugins/fontWeight'
import justifyContent from '../corePlugins/justifyContent'
import objectFit from '../corePlugins/objectFit'
import overflow from '../corePlugins/overflow'
import position from '../corePlugins/position'
import resize from '../corePlugins/resize'
import textAlign from '../corePlugins/textAlign'
import textDecoration from '../corePlugins/textDecoration'
import textTransform from '../corePlugins/textTransform'
import verticalAlign from '../corePlugins/verticalAlign'
import backgroundColor from '../corePlugins/backgroundColor'
import borderColor from '../corePlugins/borderColor'
import borderRadius from '../corePlugins/borderRadius'
import borderWidth from '../corePlugins/borderWidth'
import flex from '../corePlugins/flex'
import flexGrow from '../corePlugins/flexGrow'
import flexShrink from '../corePlugins/flexShrink'
import fontFamily from '../corePlugins/fontFamily'
import fontSize from '../corePlugins/fontSize'
import height from '../corePlugins/height'
import inset from '../corePlugins/inset'
import top from '../corePlugins/top'
import bottom from '../corePlugins/bottom'
import left from '../corePlugins/left'
import right from '../corePlugins/right'
import start from '../corePlugins/start'
import end from '../corePlugins/end'
import letterSpacing from '../corePlugins/letterSpacing'
import lineHeight from '../corePlugins/lineHeight'
import margin from '../corePlugins/margin'
import maxHeight from '../corePlugins/maxHeight'
import maxWidth from '../corePlugins/maxWidth'
import minHeight from '../corePlugins/minHeight'
import minWidth from '../corePlugins/minWidth'
import opacity from '../corePlugins/opacity'
import padding from '../corePlugins/padding'
import textColor from '../corePlugins/textColor'
import tint from '../corePlugins/tint'
import width from '../corePlugins/width'
import zIndex from '../corePlugins/zIndex'
import insetDir from '../corePlugins/insetDir'
import borderWidthDir from '../corePlugins/borderWidthDir'
import borderRadiusDir from '../corePlugins/borderRadiusDir'
import boxShadow from '../corePlugins/boxShadow'
import textShadow from '../corePlugins/textShadow'

test('alignContent', () => {
    expect(alignContent).toEqual(require('./fixtures/outputs/tailwind/alignContent'))
});

test('alignItems', () => {
    expect(alignItems).toEqual(require('./fixtures/outputs/tailwind/alignItems'))
});

test('alignSelf', () => {
    expect(alignSelf).toEqual(require('./fixtures/outputs/tailwind/alignSelf'))
});

test('backfaceVisibility', () => {
    expect(backfaceVisibility).toEqual(require('./fixtures/outputs/tailwind/backfaceVisibility'))
});

test('borderStyle', () => {
    expect(borderStyle).toEqual(require('./fixtures/outputs/tailwind/borderStyle'))
});

test('direction', () => {
    expect(direction).toEqual(require('./fixtures/outputs/tailwind/direction'))
});

test('display', () => {
    expect(display).toEqual(require('./fixtures/outputs/tailwind/display'))
});

test('flexDirection', () => {
    expect(flexDirection).toEqual(require('./fixtures/outputs/tailwind/flexDirection'))
});

test('flexWrap', () => {
    expect(flexWrap).toEqual(require('./fixtures/outputs/tailwind/flexWrap'))
});

test('fontStyle', () => {
    expect(fontStyle).toEqual(require('./fixtures/outputs/tailwind/fontStyle'))
});

test('fontWeight', () => {
    expect(fontWeight).toEqual(require('./fixtures/outputs/tailwind/fontWeight'))
});

test('justifyContent', () => {
    expect(justifyContent).toEqual(require('./fixtures/outputs/tailwind/justifyContent'))
});

test('objectFit', () => {
    expect(objectFit).toEqual(require('./fixtures/outputs/tailwind/objectFit'))
});

test('overflow', () => {
    expect(overflow).toEqual(require('./fixtures/outputs/tailwind/overflow'))
});

test('position', () => {
    expect(position).toEqual(require('./fixtures/outputs/tailwind/position'))
});

test('resize', () => {
    expect(resize).toEqual(require('./fixtures/outputs/tailwind/resize'))
});

test('textAlign', () => {
    expect(textAlign).toEqual(require('./fixtures/outputs/tailwind/textAlign'))
});

test('textDecoration', () => {
    expect(textDecoration).toEqual(require('./fixtures/outputs/tailwind/textDecoration'))
});

test('textTransform', () => {
    expect(textTransform).toEqual(require('./fixtures/outputs/tailwind/textTransform'))
});

test('verticalAlign', () => {
    expect(verticalAlign).toEqual(require('./fixtures/outputs/tailwind/verticalAlign'))
});

test('backgroundColor', () => {
    expect(backgroundColor).toEqual(require('./fixtures/outputs/tailwind/backgroundColor'))
});

test('borderColor', () => {
    expect(borderColor).toEqual(require('./fixtures/outputs/tailwind/borderColor'))
});

test('borderRadius', () => {
    expect(borderRadius).toEqual(require('./fixtures/outputs/tailwind/borderRadius'))
});

test('borderWidth', () => {
    expect(borderWidth).toEqual(require('./fixtures/outputs/tailwind/borderWidth'))
});

test('flex', () => {
    expect(flex).toEqual(require('./fixtures/outputs/tailwind/flex'))
});

test('flexGrow', () => {
    expect(flexGrow).toEqual(require('./fixtures/outputs/tailwind/flexGrow'))
});

test('flexShrink', () => {
    expect(flexShrink).toEqual(require('./fixtures/outputs/tailwind/flexShrink'))
});

test('fontFamily', () => {
    expect(fontFamily).toEqual(require('./fixtures/outputs/tailwind/fontFamily'))
});

test('fontSize', () => {
    expect(fontSize).toEqual(require('./fixtures/outputs/tailwind/fontSize'))
});

test('height', () => {
    expect(height).toEqual(require('./fixtures/outputs/tailwind/height'))
});

test('inset', () => {
    expect(inset).toEqual(require('./fixtures/outputs/tailwind/inset'))
});

test('top', () => {
    expect(top).toEqual(require('./fixtures/outputs/tailwind/top'))
});

test('bottom', () => {
    expect(bottom).toEqual(require('./fixtures/outputs/tailwind/bottom'))
});

test('left', () => {
    expect(left).toEqual(require('./fixtures/outputs/tailwind/left'))
});

test('right', () => {
    expect(right).toEqual(require('./fixtures/outputs/tailwind/right'))
});

test('start', () => {
    expect(start).toEqual(require('./fixtures/outputs/tailwind/start'))
});

test('end', () => {
    expect(end).toEqual(require('./fixtures/outputs/tailwind/end'))
});

test('letterSpacing', () => {
    expect(letterSpacing).toEqual(require('./fixtures/outputs/tailwind/letterSpacing'))
});

test('lineHeight', () => {
    expect(lineHeight).toEqual(require('./fixtures/outputs/tailwind/lineHeight'))
});

test('margin', () => {
    expect(margin).toEqual(require('./fixtures/outputs/tailwind/margin'))
});

test('maxHeight', () => {
    expect(maxHeight).toEqual(require('./fixtures/outputs/tailwind/maxHeight'))
});

test('maxWidth', () => {
    expect(maxWidth).toEqual(require('./fixtures/outputs/tailwind/maxWidth'))
});

test('minHeight', () => {
    expect(minHeight).toEqual(require('./fixtures/outputs/tailwind/minHeight'))
});

test('minWidth', () => {
    expect(minWidth).toEqual(require('./fixtures/outputs/tailwind/minWidth'))
});

test('opacity', () => {
    expect(opacity).toEqual(require('./fixtures/outputs/tailwind/opacity'))
});

test('padding', () => {
    expect(padding).toEqual(require('./fixtures/outputs/tailwind/padding'))
});

test('textColor', () => {
    expect(textColor).toEqual(require('./fixtures/outputs/tailwind/textColor'))
});

test('tint', () => {
    expect(tint).toEqual(require('./fixtures/outputs/tailwind/tint'))
});

test('width', () => {
    expect(width).toEqual(require('./fixtures/outputs/tailwind/width'))
});

test('zIndex', () => {
    expect(zIndex).toEqual(require('./fixtures/outputs/tailwind/zIndex'))
});

test('insetDir', () => {
    expect(insetDir).toEqual(require('./fixtures/outputs/tailwind/insetDir'))
});

test('borderWidthDir', () => {
    expect(borderWidthDir).toEqual(require('./fixtures/outputs/tailwind/borderWidthDir'))
});

test('borderRadiusDir', () => {
    expect(borderRadiusDir).toEqual(require('./fixtures/outputs/tailwind/borderRadiusDir'))
});

test('boxShadow', () => {
    expect(boxShadow).toEqual(require('./fixtures/outputs/tailwind/boxShadow'))
});

test('textShadow', () => {
    expect(textShadow).toEqual(require('./fixtures/outputs/tailwind/textShadow'))
});
