import generator from '../util/generator';

export default ({theme}) => generator.generate('inset', ['top', 'bottom', 'left', 'right'], theme.inset, [
    ['x', ['left', 'right']],
    ['y', ['top', 'bottom']],
]);
