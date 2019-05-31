import resolveConfig from 'tailwindcss/resolveConfig';

let file = require('tailwindcss/stubs/simpleConfig.stub');

try {
    file = require.resolve('../../../tailwind.config');
} catch (e) {}

const {theme} = resolveConfig(file);

module.exports = theme;
