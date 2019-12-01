import generator from '../util/generator';

export default generator.generate('flex', 'flexDirection', [
    'row',
    'row-reverse',
    ['col', 'column'],
    ['col-reverse', 'column-reverse'],
]);
