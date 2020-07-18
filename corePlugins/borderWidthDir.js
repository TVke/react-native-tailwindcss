import generator from '../util/generator';

export default ({theme}) => generator.generate('border-dir', 'borderWidth', theme.borderWidth, [
    ['x', ['borderEndWidth', 'borderStartWidth']],
    ['e', 'borderEndWidth'],
    ['s', 'borderStartWidth'],
]);
