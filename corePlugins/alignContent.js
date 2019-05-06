import generator from '../util/generator';

module.exports = generator.generate('content', 'alignContent', [
    ['start', 'flex-start'],
    ['end', 'flex-end'],
    'center',
    'stretch',
    ['between', 'space-between'],
    ['around', 'space-around'],
]);
