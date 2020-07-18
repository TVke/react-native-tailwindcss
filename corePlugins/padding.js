import generator from '../util/generator';

export default ({theme}) => generator.generate('p', 'padding', theme.padding, [
    ['x', 'paddingHorizontal'],
    ['y', 'paddingVertical'],
    ['t', 'paddingTop'],
    ['r', 'paddingRight'],
    ['b', 'paddingBottom'],
    ['l', 'paddingLeft'],
    ['s', 'paddingStart'],
    ['e', 'paddingEnd'],
], '');
