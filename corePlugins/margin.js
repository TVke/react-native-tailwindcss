import generator from '../util/generator';
import theme from '../util/configHandler';

module.exports = generator.generate('m', 'margin', theme.margin, [
    ['x', 'marginHorizontal'],
    ['y', 'marginVertical'],
    ['t', 'marginTop'],
    ['r', 'marginRight'],
    ['b', 'marginBottom'],
    ['l', 'marginLeft'],
]);
