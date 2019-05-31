import resolveConfig from 'tailwindcss/resolveConfig';

let file = require('tailwindcss/stubs/simpleConfig.stub');

try {
    file = require('./tailwind.config');
} catch (ex) {
}

const {theme} = resolveConfig(file);

module.exports = theme;
