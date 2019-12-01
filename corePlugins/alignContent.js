import generator from '../util/generator';

export default generator.generate('content', 'alignContent', [
    ['start', 'flex-start'],
    ['end', 'flex-end'],
    'center',
    'stretch',
    ['between', 'space-between'],
    ['around', 'space-around'],
]);
