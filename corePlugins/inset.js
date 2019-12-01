import generator from '../util/generator';
import theme from '../util/configHandler';

export default generator.generate('inset', ['top', 'bottom', 'left', 'right'], theme.inset, [
    ['x', ['left', 'right']],
    ['y', ['top', 'bottom']],
]);
