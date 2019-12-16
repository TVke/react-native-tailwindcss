import generator from '../util/generator';

export default generator.generate('font', 'fontWeight', [
    'normal',
    'bold',
    ['hairline', 100],
    ['thin', 200],
    ['light', 300],
    ['medium', 500],
    ['semibold', 600],
    ['extrabold', 800],
    ['black', 900],
]);
