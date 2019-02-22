/* eslint-env mocha */

var fs = require('fs');
var assert = require('assert');
var scss2sass = require('../index');

describe('Overall Conversion', function () {
  it('throws an error when no arguments are passed', function () {
    assert.throws(
      function () {
        scss2sass.convert();
      },
      /no input/
    );
  });

  it('files specified', function () {
    assert.deepStrictEqual(
      scss2sass.convert({ scss_files: 'foo/bar.scss' }).files,
      { include: 'foo/bar.scss' }
    );
  });

  it('exclude specified', function () {
    assert.deepStrictEqual(
      scss2sass.convert({ exclude: 'foo/bar.scss' }).files,
      {
        ignore: 'foo/bar.scss',
        include: '**/*.s+(a|c)ss'
      }
    );
  });

  it('unsupported linter', function () {
    assert.deepEqual(
      scss2sass.convert({ linters: { 'UnsupportedLinter': { enabled: true } } }, { debug: true }).unsupported,
      ['UnsupportedLinter']
    );
  });

  it('unsupported linter option', function () {
    assert.notEqual(
      scss2sass.convert(
        { linters: { 'LeadingZero': { enabled: true, unsupported_option: true } } },
        { debug: true }
      ).warnings[0].indexOf('unsupported_option'),
      -1
    );
  });

  it('unsupported linter option value', function () {
    assert.notEqual(
      scss2sass.convert(
        { linters: { 'LeadingZero': { enabled: true, style: 'unsupported_value' } } },
        { debug: true }
      ).warnings[0].indexOf('unsupported_value'),
      -1
    );
  });
});

describe('ConvertYaml', function () {
  it('doesn\'t fail', function () {
    var yaml = fs.readFileSync('tests/scss-lint-yml/default.yml');

    assert.ok(scss2sass.convertYaml(yaml));
  });

  it('doesn\'t print warnings/errors when there are none', function () {
    var yaml = fs.readFileSync('tests/scss-lint-yml/simple.yml'),
        converted = scss2sass.convertYaml(yaml);

    assert.equal(converted.indexOf('unsupported'), -1);
    assert.equal(converted.indexOf('not yet supported'), -1);
  });
});
