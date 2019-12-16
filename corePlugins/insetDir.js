import generator from '../util/generator';
import theme from '../util/configHandler';

export default generator.generate('inset-dir', ['top', 'bottom', 'start', 'end'], theme.inset, [
    ['x', ['start', 'end']],
]);
