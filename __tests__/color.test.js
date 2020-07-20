import {colors} from '../index';

test('default colors', () => {
    expect(colors).toEqual(require('./fixtures/outputs/color/color-output'));
});
