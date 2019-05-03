import color from '../color'

test('default_colors', () => {
    expect(color).toEqual(require('./fixtures/outputs/color/color-output'));
});
