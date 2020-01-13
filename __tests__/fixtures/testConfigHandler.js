import resolveConfig from 'tailwindcss/resolveConfig';

let file = require('react-native-tailwindcss/stubs/simpleConfig.stub');

try {
    file = require('./tailwind.config');
} catch (ex) {
}

const {theme} = resolveConfig(file);

module.exports = theme;
