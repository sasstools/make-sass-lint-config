/* eslint-env mocha */
var assert = require('assert');
var scss2sass = require('../index');

describe('Translate rule', function () {
  it('BangFormat', function () {
    assert.deepStrictEqual(
      scss2sass.convert({
        linters: {
          'BangFormat': { enabled: true }
        }
      }).rules,
      {
        'space-after-bang': [1, { include: false }],
        'space-before-bang': [1, { include: true }]
      }
    );

    assert.deepStrictEqual(
      scss2sass.convert({
        linters: {
          'BangFormat': { enabled: true, space_after_bang: true, space_before_bang: false }
        }
      }).rules,
      {
        'space-after-bang': [1, { include: true }],
        'space-before-bang': [1, { include: false }]
      }
    );

    assert.deepStrictEqual(
      scss2sass.convert({
        linters: {
          'BangFormat': { enabled: true, space_after_bang: false, space_before_bang: true }
        }
      }).rules,
      {
        'space-after-bang': [1, { include: false }],
        'space-before-bang': [1, { include: true }]
      }
    );

    assert.deepStrictEqual(
      scss2sass.convert({
        linters: {
          'BangFormat': { enabled: true, space_after_bang: false, space_before_bang: false }
        }
      }).rules,
      {
        'space-after-bang': [1, { include: false }],
        'space-before-bang': [1, { include: false }]
      }
    );

    assert.deepStrictEqual(
      scss2sass.convert({
        linters: {
          'BangFormat': { enabled: true, space_after_bang: true, space_before_bang: true }
        }
      }).rules,
      {
        'space-after-bang': [1, { include: true }],
        'space-before-bang': [1, { include: true }]
      }
    );
  });

  it('BorderZero', function () {
    assert.deepStrictEqual(
      scss2sass.convert({
        linters: {
          'BorderZero': { enabled: true }
        }
      }).rules,
      {
        'border-zero': 1
      }
    );

    assert.deepStrictEqual(
      scss2sass.convert({
        linters: {
          'BorderZero': { enabled: true, convention: 'zero' }
        }
      }).rules,
      {
        'border-zero': [1, { convention: 'zero' }]
      }
    );

    assert.deepStrictEqual(
      scss2sass.convert({
        linters: {
          'BorderZero': { enabled: true, convention: 'none' }
        }
      }).rules,
      {
        'border-zero': [1, { convention: 'none' }]
      }
    );
  });

  it('ColorKeyword', function () {
    assert.deepStrictEqual(
      scss2sass.convert({
        linters: {
          'ColorKeyword': { enabled: true }
        }
      }).rules,
      { 'no-color-keyword': 1 }
    );
  });

  it('ColorVariable', function () {
    assert.deepStrictEqual(
      scss2sass.convert({
        linters: {
          'ColorVariable': { enabled: true }
        }
      }).rules,
      { 'no-color-literals': 1 }
    );
  });

  it('Comment', function () {
    assert.deepStrictEqual(
      scss2sass.convert({
        linters: {
          'Comment': { enabled: true }
        }
      }).rules,
      { 'no-css-comments': 1 }
    );
  });

  it('DebugStatement', function () {
    assert.deepStrictEqual(
      scss2sass.convert({
        linters: {
          'DebugStatement': { enabled: true }
        }
      }).rules,
      { 'no-debug': 1 }
    );
  });

  it('DeclarationOrder', function () {
    assert.deepStrictEqual(
      scss2sass.convert({
        linters: {
          'DeclarationOrder': { enabled: true }
        }
      }).rules,
      { 'extends-before-declarations': 1, 'extends-before-mixins': 1, 'mixins-before-declarations': 1 }
    );

    assert.deepStrictEqual(
      scss2sass.convert({
        linters: {
          'DeclarationOrder': { enabled: false }
        }
      }).rules,
      {}
    );
  });

  it('DuplicateProperty', function () {
    assert.deepStrictEqual(
      scss2sass.convert({
        linters: {
          'DuplicateProperty': { enabled: true }
        }
      }).rules,
      { 'no-duplicate-properties': 1 }
    );
  });

  it('EmptyLineBetweenBlocks', function () {
    assert.deepStrictEqual(
      scss2sass.convert({
        linters: {
          'EmptyLineBetweenBlocks': { enabled: true }
        }
      }).rules,
      { 'empty-line-between-blocks': 1 }
    );

    assert.deepStrictEqual(
      scss2sass.convert({
        linters: {
          'EmptyLineBetweenBlocks': { enabled: true, ignore_single_line_blocks: true }
        }
      }).rules,
      { 'empty-line-between-blocks': [1, { 'ignore-single-line-rulesets': true }] }
    );
  });

  it('EmptyRule', function () {
    assert.deepStrictEqual(
      scss2sass.convert({
        linters: {
          'EmptyRule': { enabled: true }
        }
      }).rules,
      { 'no-empty-rulesets': 1 }
    );
  });

  it('ExtendDirective', function () {
    assert.deepStrictEqual(
      scss2sass.convert({
        linters: {
          'ExtendDirective': { enabled: true }
        }
      }).rules,
      { 'no-extends': 1 }
    );
  });

  it('HexValidation', function () {
    assert.deepStrictEqual(
      scss2sass.convert({
        linters: {
          'HexValidation': { enabled: true }
        }
      }).rules,
      { 'no-invalid-hex': 1 }
    );
  });

  it('IdSelector', function () {
    assert.deepStrictEqual(
      scss2sass.convert({
        linters: {
          'IdSelector': { enabled: true }
        }
      }).rules,
      { 'no-ids': 1 }
    );
  });

  it('ImportantRule', function () {
    assert.deepStrictEqual(
      scss2sass.convert({
        linters: {
          'ImportantRule': { enabled: true }
        }
      }).rules,
      { 'no-important': 1 }
    );
  });

  it('PlaceholderInExtend', function () {
    assert.deepStrictEqual(
      scss2sass.convert({
        linters: {
          'PlaceholderInExtend': { enabled: true }
        }
      }).rules,
      { 'placeholder-in-extend': 1 }
    );
  });

  it('SingleLinePerSelector', function () {
    assert.deepStrictEqual(
      scss2sass.convert({
        linters: {
          'SingleLinePerSelector': { enabled: true }
        }
      }).rules,
      { 'single-line-per-selector': 1 }
    );
  });

  it('SpaceAfterPropertyName', function () {
    assert.deepStrictEqual(
      scss2sass.convert({
        linters: {
          'SpaceAfterPropertyName': { enabled: true }
        }
      }).rules,
      { 'space-before-colon': 1 }
    );
  });

  it('SpaceAfterVariableName', function () {
    assert.deepStrictEqual(
      scss2sass.convert({
        linters: {
          'SpaceAfterVariableName': { enabled: true }
        }
      }).rules,
      { 'space-before-colon': 1 }
    );
  });

  it('TrailingSemicolon', function () {
    assert.deepStrictEqual(
      scss2sass.convert({
        linters: {
          'TrailingSemicolon': { enabled: true }
        }
      }).rules,
      { 'trailing-semicolon': 1 }
    );
  });

  it('TrailingZero', function () {
    assert.deepStrictEqual(
      scss2sass.convert({
        linters: {
          'TrailingZero': { enabled: true }
        }
      }).rules,
      { 'no-trailing-zero': 1 }
    );
  });

  it('TransitionAll', function () {
    assert.deepStrictEqual(
      scss2sass.convert({
        linters: {
          'TransitionAll': { enabled: true }
        }
      }).rules,
      { 'no-transition-all': 1 }
    );
  });

  it('UrlFormat', function () {
    assert.deepStrictEqual(
      scss2sass.convert({
        linters: {
          'UrlFormat': { enabled: true }
        }
      }).rules,
      { 'no-url-protocols': 1 }
    );
  });

  it('UrlQuotes', function () {
    assert.deepStrictEqual(
      scss2sass.convert({
        linters: {
          'UrlQuotes': { enabled: true }
        }
      }).rules,
      { 'url-quotes': 1 }
    );
  });

  it('ZeroUnit', function () {
    assert.deepStrictEqual(
      scss2sass.convert({
        linters: {
          'ZeroUnit': { enabled: true }
        }
      }).rules,
      { 'zero-unit': 1 }
    );
  });
});
