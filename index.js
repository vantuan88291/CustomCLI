#!/usr/bin/env node

const program = require('commander');
const pkg = require('./package.json');
const inquirer = require('inquirer');
const addNewScreen = require('./src/GenerateScreen');
const addNewComponent = require('./src/GenerateComponent');

program
    .version(pkg.version, '-v, --version')
    .description('Simple CLI')

program
    .command('screen <name>')
    .description('Generate screens')
    .action(async (screenName) => {
        addNewScreen(screenName)
    })
program
    .command('component <name>')
    .description('Generate components')
    .action(async (componentName) => {
        addNewComponent(componentName)
    })
program.parse(process.argv)
