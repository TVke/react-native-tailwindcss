import {color} from '../index';

test('default colors', () => {
    expect(color).toEqual(require('./fixtures/outputs/color/color-output'));
});
