#!/usr/bin/env node

'use strict';

var inquirer = require('inquirer');
var fs = require('fs');
var path = require('path');
var shell = require('shelljs');
var packagejson = JSON.parse(fs.readFileSync(path.resolve('./package.json')).toString());

inquirer.prompt([
  {
    type: 'list',
    name: 'script',
    message: 'Choose script to run',
    choices: Object.keys(packagejson.scripts),
    filter: function( val ) { return val.toLowerCase(); }
  }
], function( answers ) {
    var command = ' npm run ' + answers.script;
    console.log( 'gonna run : ' +  command );
    shell.exec(command);
});