import generator from '../util/generator';

export default ({theme}) => generator.generate('m', 'margin', theme.margin, [
    ['x', 'marginHorizontal'],
    ['y', 'marginVertical'],
    ['t', 'marginTop'],
    ['r', 'marginRight'],
    ['b', 'marginBottom'],
    ['l', 'marginLeft'],
    ['s', 'marginStart'],
    ['e', 'marginEnd'],
]);
