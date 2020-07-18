import generator from '../util/generator';

export default ({theme}) => generator.generateShadows('text-shadow', 'textShadow', theme.boxShadow);
