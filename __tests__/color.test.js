import color from '../color';

test('default colors', () => {
    expect(color).toEqual(require('./fixtures/outputs/color/color-output'));
});
