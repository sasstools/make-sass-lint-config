/* eslint-env mocha */

var fs = require('fs-extra'),
    path = require('path'),
    assert = require('assert'),
    childProcess = require('child_process');

describe('CLI', function () {
  it('should return help instructions', function (done) {
    var command = 'make-sass-lint-config -h';

    childProcess.exec(command, function (err, stdout) {
      if (err) {
        return done(err);
      }

      assert(stdout.indexOf('Usage') > 0);

      done(null);
    });
  });

  it('should return a version', function (done) {
    var command = 'make-sass-lint-config -V';

    childProcess.exec(command, function (err, stdout) {
      if (err) {
        return done(err);
      }

      assert.ok(stdout.match(/^[0-9]+.[0-9]+(.[0-9]+)?/));

      done(null);
    });
  });

  it('should convert default scss-lint settings and output to stdout', function (done) {
    var command = 'make-sass-lint-config tests/scss-lint-yml/default.yml';

    childProcess.exec(command, function (err, stdout) {
      if (err) {
        return done(err);
      }

      assert.ok(stdout.length > 0);
      done();
    });
  });

  it('should convert default scss-lint settings and output to specified file', function (done) {
    var command = 'make-sass-lint-config -o tests/tmp.yml tests/scss-lint-yml/default.yml',
        outputFile = path.resolve(process.cwd(), 'tests/tmp.yml');

    childProcess.exec(command, function (err) {
      if (err) {
        return done(err);
      }

      var contents = fs.readFileSync(outputFile, 'utf8');

      assert.ok(contents.length > 0);

      fs.removeSync(outputFile);
      done();
    });
  });
});
