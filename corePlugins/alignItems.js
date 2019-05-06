import generator from '../util/generator';

module.exports = generator.generate('items', 'alignItems', [
    ['start', 'flex-start'],
    ['end', 'flex-end'],
    'center',
    'stretch',
    'baseline',
]);
