import resolveConfig from 'tailwindcss/resolveConfig';

let file = require('../../stubs/simpleConfig.stub');

try {
    file = require('./tailwind.config');
} catch (ex) {
    console.error('Loading tailwind config failed');
}

const {theme} = resolveConfig(file);

module.exports = theme;
