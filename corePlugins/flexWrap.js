import generator from '../util/generator';

module.exports = generator.generate('flex', 'flexWrap', [
    'wrap',
    'wrap-reverse',
    ['no-wrap', 'nowrap'],
]);
