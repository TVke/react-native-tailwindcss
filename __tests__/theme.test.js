import theme from '../theme';

test('shadows', () => {
    expect(theme).toEqual(require('./fixtures/outputs/theme/theme-output'));
});
