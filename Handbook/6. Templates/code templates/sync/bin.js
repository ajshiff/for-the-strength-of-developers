const { main } = require('./main.js');

function getInput() {
  var input;
  // How to get input, eg. from file, commandline, inquierer, etc.
  return input;
}

function makeOutput(output) {
  // How to output data, eg. to csv, to json, to console, etc.
  return;
}

const input = getInput();
const output = main(input);
makeOutput(output);
