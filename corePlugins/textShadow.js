import generator from '../util/generator';
import theme from '../util/configHandler';

module.exports = generator.generateShadows('text-shadow', 'textShadow', theme.boxShadow);
