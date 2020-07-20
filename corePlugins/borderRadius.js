import generator from '../util/generator';

export default ({theme}) => generator.generate('rounded', 'borderRadius', theme.borderRadius, [
    ['t', ['borderTopLeftRadius', 'borderTopRightRadius']],
    ['r', ['borderTopRightRadius', 'borderBottomRightRadius']],
    ['b', ['borderBottomLeftRadius', 'borderBottomRightRadius']],
    ['l', ['borderTopLeftRadius', 'borderBottomLeftRadius']],
    ['tl', 'borderTopLeftRadius'],
    ['tr', 'borderTopRightRadius'],
    ['br', 'borderBottomRightRadius'],
    ['bl', 'borderBottomLeftRadius'],
    ['e', ['borderTopEndRadius', 'borderBottomEndRadius']],
    ['s', ['borderTopStartRadius', 'borderBottomStartRadius']],
    ['ts', 'borderTopStartRadius'],
    ['te', 'borderTopEndRadius'],
    ['be', 'borderBottomEndRadius'],
    ['bs', 'borderBottomStartRadius'],
]);
