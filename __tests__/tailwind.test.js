import {theme, colors} from '../index';

import alignContent from '../corePlugins/alignContent';
import alignItems from '../corePlugins/alignItems';
import alignSelf from '../corePlugins/alignSelf';
import backfaceVisibility from '../corePlugins/backfaceVisibility';
import borderStyle from '../corePlugins/borderStyle';
import direction from '../corePlugins/direction';
import display from '../corePlugins/display';
import flexDirection from '../corePlugins/flexDirection';
import flexWrap from '../corePlugins/flexWrap';
import fontPadding from '../corePlugins/fontPadding';
import fontStyle from '../corePlugins/fontStyle';
import fontWeight from '../corePlugins/fontWeight';
import justifyContent from '../corePlugins/justifyContent';
import objectFit from '../corePlugins/objectFit';
import overflow from '../corePlugins/overflow';
import position from '../corePlugins/position';
import resize from '../corePlugins/resize';
import textAlign from '../corePlugins/textAlign';
import textDecoration from '../corePlugins/textDecoration';
import textTransform from '../corePlugins/textTransform';
import verticalAlign from '../corePlugins/verticalAlign';
import backgroundColor from '../corePlugins/backgroundColor';
import borderColor from '../corePlugins/borderColor';
import borderRadius from '../corePlugins/borderRadius';
import borderWidth from '../corePlugins/borderWidth';
import flex from '../corePlugins/flex';
import flexGrow from '../corePlugins/flexGrow';
import flexShrink from '../corePlugins/flexShrink';
import fontFamily from '../corePlugins/fontFamily';
import fontSize from '../corePlugins/fontSize';
import height from '../corePlugins/height';
import inset from '../corePlugins/inset';
import top from '../corePlugins/top';
import bottom from '../corePlugins/bottom';
import left from '../corePlugins/left';
import right from '../corePlugins/right';
import start from '../corePlugins/start';
import end from '../corePlugins/end';
import letterSpacing from '../corePlugins/letterSpacing';
import lineHeight from '../corePlugins/lineHeight';
import margin from '../corePlugins/margin';
import maxHeight from '../corePlugins/maxHeight';
import maxWidth from '../corePlugins/maxWidth';
import minHeight from '../corePlugins/minHeight';
import minWidth from '../corePlugins/minWidth';
import opacity from '../corePlugins/opacity';
import padding from '../corePlugins/padding';
import textColor from '../corePlugins/textColor';
import tint from '../corePlugins/tint';
import width from '../corePlugins/width';
import zIndex from '../corePlugins/zIndex';
import boxShadow from '../corePlugins/boxShadow';
import textShadow from '../corePlugins/textShadow';

test('alignContent', () => {
    expect(alignContent({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/alignContent'));
});

test('alignItems', () => {
    expect(alignItems({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/alignItems'));
});

test('alignSelf', () => {
    expect(alignSelf({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/alignSelf'));
});

test('backfaceVisibility', () => {
    expect(backfaceVisibility({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/backfaceVisibility'));
});

test('borderStyle', () => {
    expect(borderStyle({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/borderStyle'));
});

test('direction', () => {
    expect(direction({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/direction'));
});

test('display', () => {
    expect(display({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/display'));
});

test('flexDirection', () => {
    expect(flexDirection({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/flexDirection'));
});

test('flexWrap', () => {
    expect(flexWrap({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/flexWrap'));
});

test('fontPadding', () => {
    expect(fontPadding({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/fontPadding'));
});

test('fontStyle', () => {
    expect(fontStyle({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/fontStyle'));
});

test('fontWeight', () => {
    expect(fontWeight({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/fontWeight'));
});

test('justifyContent', () => {
    expect(justifyContent({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/justifyContent'));
});

test('objectFit', () => {
    expect(objectFit({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/objectFit'));
});

test('overflow', () => {
    expect(overflow({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/overflow'));
});

test('position', () => {
    expect(position({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/position'));
});

test('resize', () => {
    expect(resize({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/resize'));
});

test('textAlign', () => {
    expect(textAlign({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/textAlign'));
});

test('textDecoration', () => {
    expect(textDecoration({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/textDecoration'));
});

test('textTransform', () => {
    expect(textTransform({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/textTransform'));
});

test('verticalAlign', () => {
    expect(verticalAlign({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/verticalAlign'));
});

test('backgroundColor', () => {
    expect(backgroundColor({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/backgroundColor'));
});

test('borderColor', () => {
    expect(borderColor({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/borderColor'));
});

test('borderRadius', () => {
    expect(borderRadius({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/borderRadius'));
});

test('borderWidth', () => {
    expect(borderWidth({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/borderWidth'));
});

test('flex', () => {
    expect(flex({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/flex'));
});

test('flexGrow', () => {
    expect(flexGrow({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/flexGrow'));
});

test('flexShrink', () => {
    expect(flexShrink({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/flexShrink'));
});

test('fontFamily', () => {
    expect(fontFamily({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/fontFamily'));
});

test('fontSize', () => {
    expect(fontSize({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/fontSize'));
});

test('height', () => {
    expect(height({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/height'));
});

test('inset', () => {
    expect(inset({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/inset'));
});

test('top', () => {
    expect(top({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/top'));
});

test('bottom', () => {
    expect(bottom({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/bottom'));
});

test('left', () => {
    expect(left({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/left'));
});

test('right', () => {
    expect(right({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/right'));
});

test('start', () => {
    expect(start({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/start'));
});

test('end', () => {
    expect(end({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/end'));
});

test('letterSpacing', () => {
    expect(letterSpacing({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/letterSpacing'));
});

test('lineHeight', () => {
    expect(lineHeight({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/lineHeight'));
});

test('margin', () => {
    expect(margin({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/margin'));
});

test('maxHeight', () => {
    expect(maxHeight({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/maxHeight'));
});

test('maxWidth', () => {
    expect(maxWidth({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/maxWidth'));
});

test('minHeight', () => {
    expect(minHeight({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/minHeight'));
});

test('minWidth', () => {
    expect(minWidth({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/minWidth'));
});

test('opacity', () => {
    expect(opacity({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/opacity'));
});

test('padding', () => {
    expect(padding({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/padding'));
});

test('textColor', () => {
    expect(textColor({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/textColor'));
});

test('tint', () => {
    expect(tint({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/tint'));
});

test('width', () => {
    expect(width({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/width'));
});

test('zIndex', () => {
    expect(zIndex({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/zIndex'));
});

test('boxShadow', () => {
    expect(boxShadow({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/boxShadow'));
});

test('textShadow', () => {
    expect(textShadow({theme, colors})).toEqual(require('./fixtures/outputs/tailwind/textShadow'));
});
