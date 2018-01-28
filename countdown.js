#!/usr/bin/env node

const fs = require('fs');
const program = require('commander');
const package = require('./package.json');

program
  .version(package.version, '-v, --version');


program.parse(process.argv);
