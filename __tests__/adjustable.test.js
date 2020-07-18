import generator from '../util/generator';
import theme from './fixtures/testConfigHandler';

test('custom colors', () => {
    const result = generator.generate('text', 'color', generator.generateColors(theme.colors));

    expect(result).toEqual(require('./fixtures/outputs/adjustible/custom-color-output'));
});

test('custom fonts', () => {
    const result = generator.generate('font', 'fontFamily', theme.fontFamily);

    expect(result).toEqual(require('./fixtures/outputs/adjustible/custom-font-output'));
});

test('custom margin', () => {
    const result = generator.generate('m', 'margin', theme.margin, [
        ['x', 'marginHorizontal'],
        ['y', 'marginVertical'],
        ['t', 'marginTop'],
        ['r', 'marginRight'],
        ['b', 'marginBottom'],
        ['l', 'marginLeft'],
    ]);

    expect(result).toEqual(require('./fixtures/outputs/adjustible/custom-margin-output'));
});

test('negative values and keys', () => {
    const result = generator.generate('z', 'zIndex', theme.zIndex);
    const result2 = generator.generate('inset', ['top', 'bottom', 'left', 'right'], theme.inset, [
        ['x', ['left', 'right']],
        ['y', ['top', 'bottom']],
    ]);
    const result3 = generator.generate('flex', 'flex', theme.flex);

    expect(result).toEqual(require('./fixtures/outputs/adjustible/negative-z-index-output'));
    expect(result2).toEqual(require('./fixtures/outputs/adjustible/negative-inset-output'));
    expect(result3).toEqual(require('./fixtures/outputs/adjustible/negative-flex-output'));
});
