import {program} from 'commander';
import fs from 'fs';
import path from 'path';
import rewiremock from 'rewiremock';

program
    .option('-c, --config <tailwind.config.js>', 'tailwind config file input')
    .option(
        '-o, --output <file>',
        'generated react-native-tailwind output (default: rn-tailwind.ts)'
    );

program.parse(process.argv);

const configFile = program.config || 'simpleConfig.stub.js';
const outputFile = program.output || 'rn-tailwind.ts';

const config = require(path.isAbsolute(configFile)
    ? configFile
    : path.join(process.cwd(), configFile));
if (!config || !config.theme) {
    throw new Error('Tailwind config appears to be invalid');
}

const outputPath = path.isAbsolute(outputFile)
    ? outputFile
    : path.join(process.cwd(), outputFile);
if (fs.existsSync(outputPath)) {
    throw new Error('Output file already exists - refusing to overwrite.');
}

// Override internal require in `configHandler.js` with commandline input
rewiremock('../../../tailwind.config').with(config);
// Mock StyleSheet.create to just return input object, to get "bare" output from `tailwind.js`
rewiremock('react-native').with({StyleSheet: {create: o => o}});

// Run tailwind and color generators
const tailwind = rewiremock.proxy('./tailwind').default;
const color = rewiremock.proxy('./color').default;

// Hack: template together a TypeScript file for use in RN project
const output = `
import { StyleSheet } from 'react-native';
export const t = StyleSheet.create(${JSON.stringify(tailwind)});
export const color = ${JSON.stringify(color)};`;
fs.writeFileSync(outputPath, output);
