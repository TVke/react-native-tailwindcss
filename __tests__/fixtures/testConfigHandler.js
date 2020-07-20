import {Tailwind} from '../../tailwind';

const configFile = require('./tailwind.config');
const t = new Tailwind(configFile);

export const {theme} = t.config;
