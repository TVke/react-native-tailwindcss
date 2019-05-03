import generator from "../util/generator";

module.exports = generator.generate('resize', 'resizeMode', [
    'contain',
    'cover',
    'stretch',
    'center',
    'repeat',
]);
