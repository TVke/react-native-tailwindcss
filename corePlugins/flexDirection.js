import generator from '../util/generator';

module.exports = generator.generate('flex', 'flexDirection', [
    'row',
    'row-reverse',
    ['col', 'column'],
    ['col-reverse', 'column-reverse'],
]);
