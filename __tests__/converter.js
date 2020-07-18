import {c, t} from '../index';

test('class name should match normal style', () => {
    expect(c('bg-blue-500')).toEqual(t.bgBlue500);
    expect(c('-mx-10')).toEqual(t._mx10);
    expect(c('w-1/2')).toEqual(t.w1_2);
    expect(c('shadow-md')).toEqual(t.shadowMd);
});

test('flatten classes', () => {
    let style = {};
    [t.bgBlue500, t.bgBlack, t._mx10, t.w1_2, t.shadowMd].map(
            x => {
                style = { ...style, ...x }
            }
        );

    expect(c('bg-blue-500 bg-black -mx-10 w-1/2 shadow-md')).toEqual(style);
});
