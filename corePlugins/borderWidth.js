import generator from '../util/generator';
import theme from '../util/configHandler';

export default generator.generate('border', 'borderWidth', theme.borderWidth, [
    ['x', ['borderRightWidth', 'borderLeftWidth']],
    ['y', ['borderTopWidth', 'borderBottomWidth']],
    ['t', 'borderTopWidth'],
    ['r', 'borderRightWidth'],
    ['b', 'borderBottomWidth'],
    ['l', 'borderLeftWidth'],
    ['e', 'borderEndWidth'],
    ['s', 'borderStartWidth'],
]);
