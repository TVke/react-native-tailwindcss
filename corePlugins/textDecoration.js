import generator from "../util/generator";

module.exports = generator.generate('', 'textDecorationLine', [
    ['no-underline', 'none'],
    'underline',
    'line-through',
    ['underline-line-through', 'underline line-through'],
]);
