import generator from '../util/generator';
import theme from '../util/configHandler';

module.exports = generator.generate('border-dir', 'borderWidth', theme.borderWidth, [
    ['x', ['borderEndWidth', 'borderStartWidth']],
    ['e', 'borderEndWidth'],
    ['s', 'borderStartWidth'],
]);
