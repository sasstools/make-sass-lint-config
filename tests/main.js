/* eslint-env mocha */

var fs = require('fs');
var assert = require('assert');
var scss2sass = require('../index');

describe('Convert', function () {
  it('folder specified', function () {
    assert.deepStrictEqual(
      scss2sass.convert({ scss_files: 'foo/bar.scss' }).files,
      { include: 'foo/bar.scss' }
    );
  });

  it('unsupported linter', function () {
    assert.deepEqual(
      scss2sass.convert({ linters: { 'UnsupportedLinter': { enabled: true } } }, { debug: true }).unsupported,
      ['UnsupportedLinter']
    );
  });

  it('unsupported linter option', function () {
    assert.ok(scss2sass.convert(
      { linters: { 'LeadingZero': { enabled: true, unsupported_option: true } } },
      { debug: true }
    ).warnings[0].indexOf('unsupported_option'));
  });

  it('unsupported linter option value', function () {
    assert.ok(scss2sass.convert(
      { linters: { 'LeadingZero': { enabled: true, style: 'unsupported_value' } } },
      { debug: true }
    ).warnings[0].indexOf('unsupported_value'));
  });
});

describe('ConvertYaml', function () {
  it('doesn\'t fail', function () {
    var yaml = fs.readFileSync('tests/scss-lint-yml/default.yml');

    assert.ok(scss2sass.convertYaml(yaml));
  });
});
