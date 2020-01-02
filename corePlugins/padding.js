import generator from '../util/generator';
import theme from '../util/configHandler';

export default generator.generate('p', 'padding', theme.padding, [
    ['x', 'paddingHorizontal'],
    ['y', 'paddingVertical'],
    ['t', 'paddingTop'],
    ['r', 'paddingRight'],
    ['b', 'paddingBottom'],
    ['l', 'paddingLeft'],
    ['s', 'paddingStart'],
    ['e', 'paddingEnd'],
]);
