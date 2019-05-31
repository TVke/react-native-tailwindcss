import theme from '../util/configHandler';

test('resolving default config file when no config file is present', () => {
    expect(theme.flexShrink).toEqual({
        0: '0',
        'default': '1',
    });
});
