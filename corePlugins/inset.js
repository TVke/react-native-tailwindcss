import generator from "../util/generator";
import theme from "../util/configHandler";

module.exports = generator.generate('inset', ['top', 'bottom', 'left', 'right'], theme.inset, [
    ['x', ['left', 'right']],
    ['y', ['top', 'bottom']],
]);
