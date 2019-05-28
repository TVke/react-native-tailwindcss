import generator from '../util/generator';
import resolveConfig from 'tailwindcss/resolveConfig';

let file;
try {
    file = require('../../tailwind.config');
} catch (ex) {
    file = require('tailwindcss/stubs/simpleConfig.stub');
}

const {theme} = resolveConfig(file);

// general working
test('static classes', () => {
    const result = generator.generate('', 'display', [['hidden', 'none'], 'flex']);

    expect(result).toEqual({
        flex: {display: 'flex'},
        hidden: {display: 'none'},
    });
});

test('adjustable classes', () => {
    const result = generator.generate('max-h', 'maxHeight', {
        full: '100%',
        screen: '100vh',
    });

    expect(result).toEqual({
        maxHFull: {maxHeight: '100%'},
        maxHScreen: {maxHeight: '100vh'},
    });
});

test('shadow classes', () => {
    const resultBox = generator.generateShadows('shadow', 'shadow', {
        default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        none: 'none',
    });

    const resultText = generator.generateShadows('text-shadow', 'textShadow', {
        default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        none: 'none',
    });

    expect(resultBox).toEqual(require('./fixtures/outputs/generator/boxShadow'));
    expect(resultText).toEqual(require('./fixtures/outputs/generator/textShadow'));
});

test('negative classes', () => {
    const result = generator.generate('m', 'margin', {
        '-px': '-1px',
        '0': '0',
        '-1': '-0.25rem',
        '-2': '-0.5rem',
        '-3': '-0.75rem',
        '-4': '-1rem',
        '-5': '-1.25rem',
        '-6': '-1.5rem',
        '-8': '-2rem',
        '-10': '-2.5rem',
        '-12': '-3rem',
        '-16': '-4rem',
        '-20': '-5rem',
        '-24': '-6rem',
        '-32': '-8rem',
        '-40': '-10rem',
        '-48': '-12rem',
        '-56': '-14rem',
        '-64': '-16rem',
    });

    expect(result).toEqual(require('./fixtures/outputs/generator/negativeMargin'));
});

test('special classes', () => {
    const result = generator.generate('z', 'zIndex', {
        auto: 'auto',
        '0': '0',
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50',
    }, [
        ['k', 'zIndex'],
    ]);

    expect(result).toEqual(require('./fixtures/outputs/generator/zIndex'));
});

// translators

test('translateKeys', () => {
    const result = generator.translateKeys('-m-4');
    const result2 = generator.translateKeys('border-t-4');
    const result3 = generator.translateKeys('red-400');
    const result4 = generator.translateKeys('bg-red-400');
    const result5 = generator.translateKeys('w-1/3');

    expect(result).toBe('_m4');
    expect(result2).toBe('borderT4');
    expect(result3).toBe('red400');
    expect(result4).toBe('bgRed400');
    expect(result5).toBe('w1_3');
});

test('translateValues', () => {
    const result = generator.translateValues('10');
    const result2 = generator.translateValues('1px');
    const result3 = generator.translateValues('20%');
    const result4 = generator.translateValues('-5rem');
    const result5 = generator.translateValues('20rem');
    const result6 = generator.translateValues('20vh');
    const result7 = generator.translateValues('80vw');

    expect(result).toBe(10);
    expect(result2).toBe(1);
    expect(result3).toBe('20%');
    expect(result4).toBe(-80);
    expect(result5).toBe(320);
    expect(result6).toBe('20vh');
    expect(result7).toBe('80vw');
});

// smaller functions tests

test('getValue', () => {
    const result = generator.getValue(['px', '1px']);
    const result2 = generator.getValue('center');
    const result3 = generator.getValue(['hairline', 100]);
    const result4 = generator.getValue(['red400', '#fc8181']);

    expect(result).toBe('1px');
    expect(result2).toBe('center');
    expect(result3).toBe(100);
    expect(result4).toBe('#fc8181');
});

test('getValueName', () => {
    const result = generator.getValueName(['px', '1px']);
    const result2 = generator.getValueName('center');
    const result3 = generator.getValueName(['hairline', 100]);
    const result4 = generator.getValueName(['red400', '#fc8181']);

    expect(result).toBe('px');
    expect(result2).toBe('center');
    expect(result3).toBe('hairline');
    expect(result4).toBe('red400');
});

test('getKeyName', () => {
    const result = generator.getKeyName('', 'underline');
    const result2 = generator.getKeyName('flex', 'row-reverse');
    const result3 = generator.getKeyName('w', '1/2');

    expect(result).toBe('underline');
    expect(result2).toBe('flex-row-reverse');
    expect(result3).toBe('w-1/2');
});

test('guardAgainstCssNotSupportedInReactNative', () => {
    const result = generator.guardAgainstCssNotSupportedInReactNative('zIndex', 'auto');
    const result2 = generator.guardAgainstCssNotSupportedInReactNative('fontWeight', 200);
    const result3 = generator.guardAgainstCssNotSupportedInReactNative('', 'flex');
    const result4 = generator.guardAgainstCssNotSupportedInReactNative('margin', 0);

    expect(result).toBe(true);
    expect(result2).toBe(true);
    expect(result3).toBe(false);
    expect(result4).toBe(false);
});

test('guardedKeyHandler', () => {
    const result = generator.guardedKeyHandler('zIndex', 'auto');
    const result2 = generator.guardedKeyHandler('fontWeight', 200);
    const result3 = generator.guardedKeyHandler('', 'flex');
    const result4 = generator.guardedKeyHandler('margin', '-0');

    expect(result).toEqual({zIndex: 0});
    expect(result2).toEqual({fontWeight: '200'});
    expect(result3).toEqual({});
    expect(result4).toEqual({});
});

test('keyHandler', () => {

    const result = generator.keyHandler(['top', 'bottom', 'left', 'right'], 0);
    const result2 = generator.keyHandler('borderRadius', '.5rem');
    const result3 = generator.keyHandler('margin', 'auto');
    const result4 = generator.keyHandler('margin', '1px');

    expect(result).toEqual({top: 0, bottom: 0, left: 0, right: 0});
    expect(result2).toEqual({borderRadius: 8});
    expect(result3).toEqual({margin: 'auto'});
    expect(result4).toEqual({margin: 1});
});

test('parseThemeValues', () => {
    const result = generator.parseThemeValues(theme.minWidth);
    const result2 = generator.parseThemeValues(['visible', 'hidden']);

    expect(result).toEqual([['0', '0'], ['full', '100%']]);
    expect(result2).toEqual(['visible', 'hidden']);
});

test('toArray', () => {
    const result = generator.toArray({test: 'data'});

    expect(result).toEqual([['test', 'data']]);
});

test('shadows with hex colors', () => {
    const resultBox = generator.generateShadows('shadow', 'shadow', {
        default: '0 1px 3px 0 #FF0000, 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px #FFFF00, 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px #FFFFFF, 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px #00FF00, 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px #0000FF',
        inner: 'inset 0 2px 4px 0 #F0000F',
        outline: '0 0 0 3px #000FF0',
        none: 'none',
    });

    const resultText = generator.generateShadows('text-shadow', 'textShadow', {
        default: '0 1px 3px 0 #FF0000, 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px #FFFF00, 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px #FFFFFF, 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px #00FF00, 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px #0000FF',
        inner: 'inset 0 2px 4px 0 #F0000F',
        outline: '0 0 0 3px #000FF0',
        none: 'none',
    });

    expect(resultBox).toEqual(require('./fixtures/outputs/generator/hexColorBoxShadow'));
    expect(resultText).toEqual(require('./fixtures/outputs/generator/hexColorTextShadow'));
});
