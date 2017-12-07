// eslint-disable-next-line import/no-extraneous-dependencies
require('babel-core/register');

process.env.JASMINE_CONFIG_PATH = 'specs/support/jasmine.json';

const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const Command = require('jasmine/lib/command.js');

const command = new Command(path.resolve());

// eslint-disable-next-line import/no-extraneous-dependencies
const Jasmine = require('jasmine/lib/jasmine.js');

const jasmine = new Jasmine({ projectBaseDir: path.resolve() });

command.run(jasmine, process.argv.slice(2));
