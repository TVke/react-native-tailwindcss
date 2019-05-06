import generator from '../util/generator';
import theme from '../util/configHandler';

module.exports = generator.generate('border', 'borderWidth', theme.borderWidth, [
    ['x', ['borderRightWidth', 'borderLeftWidth']],
    ['y', ['borderTopWidth', 'borderBottomWidth']],
    ['t', 'borderTopWidth'],
    ['r', 'borderRightWidth'],
    ['b', 'borderBottomWidth'],
    ['l', 'borderLeftWidth'],
]);
