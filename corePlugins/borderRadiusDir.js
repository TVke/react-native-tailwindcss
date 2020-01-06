import generator from '../util/generator';
import theme from '../util/configHandler';

export default generator.generate('rounded-dir', 'borderRadius', theme.borderRadius, [
    ['e', ['borderTopEndRadius', 'borderBottomEndRadius']],
    ['s', ['borderTopStartRadius', 'borderBottomStartRadius']],
    ['ts', 'borderTopStartRadius'],
    ['te', 'borderTopEndRadius'],
    ['be', 'borderBottomEndRadius'],
    ['bs', 'borderBottomStartRadius'],
]);
