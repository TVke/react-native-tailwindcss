import generator from '../util/generator';

export default ({theme}) => generator.generate('inset-dir', ['top', 'bottom', 'start', 'end'], theme.inset, [
    ['x', ['start', 'end']],
]);
