import resolveConfig from 'tailwindcss/resolveConfig';

let file = require('../stubs/simpleConfig.stub');

try {
    file = require('../../../tailwind.config');
} catch (e) {}

const {theme} = resolveConfig(file);

export default theme;
