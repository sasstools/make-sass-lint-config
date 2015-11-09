/* eslint-env mocha */
var assert = require('assert');
var scss2sass = require('../index');

describe('Convert', function () {
  it('folder specified', function () {
    assert.deepStrictEqual(
      scss2sass.convert({ scss_files: 'foo/bar.scss' }).files,
      { include: 'foo/bar.scss' }
    );
  });
});
