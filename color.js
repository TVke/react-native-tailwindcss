import generator from './util/generator';
import theme from './util/configHandler';

let colors = {};

const themeColors = generator.generateColors(theme.colors);

Object.assign(colors, themeColors);

export default colors;
