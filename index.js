/* global document, CodeMirror */

var makeSassLintConfig = require('make-sass-lint-config');
var convert = function () {
  result.setValue(makeSassLintConfig.convertYaml(source.getValue()));
};

document.addEventListener('DOMContentLoaded', function () {
  source = CodeMirror.fromTextArea(document.getElementById('source'), {
    mode: 'yaml',
    undoDepth: 20,
    lineWrapping: true,
    lineNumbers: true,
    viewportMargin: Infinity
  });

  result = CodeMirror.fromTextArea(document.getElementById('result'), {
    readOnly: true,
    lineWrapping: true,
    lineNumbers: true,
    viewportMargin: Infinity
  });

  source.on('change', _.throttle(convert, 500));
  convert();
});
