import resolveConfig from "tailwindcss/resolveConfig";

let file;

try {
    file = require('./tailwind.config');
} catch (ex) {
    file = require('tailwindcss/stubs/simpleConfig.stub');
}

const {theme} = resolveConfig(file);

module.exports = theme;
