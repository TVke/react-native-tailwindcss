import {tailwind} from '../index';

test('resolving default config file when no config file is present', () => {
    expect(tailwind.flexShrink).toEqual({
        0: '0',
        'default': '1',
    });
});
