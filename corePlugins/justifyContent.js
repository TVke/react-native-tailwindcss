import generator from '../util/generator';

export default generator.generate('justify', 'justifyContent', [
    ['start', 'flex-start'],
    ['end', 'flex-end'],
    'center',
    ['between', 'space-between'],
    ['around', 'space-around'],
    ['evenly', 'space-evenly'],
]);
