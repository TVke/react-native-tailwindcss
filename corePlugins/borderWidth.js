import generator from '../util/generator';

export default ({theme}) => generator.generate('border', 'borderWidth', theme.borderWidth, [
    ['x', ['borderRightWidth', 'borderLeftWidth']],
    ['y', ['borderTopWidth', 'borderBottomWidth']],
    ['t', 'borderTopWidth'],
    ['r', 'borderRightWidth'],
    ['b', 'borderBottomWidth'],
    ['l', 'borderLeftWidth'],
    ['e', 'borderEndWidth'],
    ['s', 'borderStartWidth'],
]);
