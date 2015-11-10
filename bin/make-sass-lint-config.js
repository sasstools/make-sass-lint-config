#!/usr/bin/env node
'use strict';

var fs = require('fs'),
    program = require('commander'),
    meta = require('../package.json'),
    makeSassLintConfig = require('../index');

var command, convertedSettings;

program
  .version(meta.version)
  .description(meta.description)
  .usage('[path]')
  .option('-o, --output [output]', 'the path and filename where you would like output to be written')
  .action(function (cmd) {
    command = cmd;
  })
  .parse(process.argv);

if (!command) {
  program.help(); // exits
}

convertedSettings = makeSassLintConfig.convertYaml(fs.readFileSync(command, 'utf8'));

if (program.output) {
  fs.writeFile(program.output, convertedSettings, function (err) {
    if (!err) {
      console.log('Converted settings written to ' + program.output);
    }
  });
}
else {
  console.log(convertedSettings);
}
