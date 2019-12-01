import generator from '../util/generator';
import theme from '../util/configHandler';

export default generator.generate('rounded', 'borderRadius', theme.borderRadius, [
    ['t', ['borderTopLeftRadius', 'borderTopRightRadius']],
    ['r', ['borderTopRightRadius', 'borderBottomRightRadius']],
    ['b', ['borderBottomLeftRadius', 'borderBottomRightRadius']],
    ['l', ['borderTopLeftRadius', 'borderBottomLeftRadius']],
    ['tl', 'borderTopLeftRadius'],
    ['tr', 'borderTopRightRadius'],
    ['br', 'borderBottomRightRadius'],
    ['bl', 'borderBottomLeftRadius'],
]);
