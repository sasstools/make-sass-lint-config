/* eslint-env mocha */
var assert = require('assert');
var scss2sass = require('../index');

describe('Rule Conversion', function () {
  describe('Handling "enabled" and "severity"', function () {
    it('rule enabled by default with neither "enabled" nor "severity"', function () {
      assert.deepStrictEqual(
        scss2sass.convert({
          linters: {
            'BorderZero': { convention: 'none' }
          }
        }).rules,
        { 'border-zero': [1, { convention: 'none' }] }
      );
    });

    it('rule enabled by default with "enabled" but not "severity"', function () {
      assert.deepStrictEqual(
        scss2sass.convert({
          linters: {
            'BorderZero': { enabled: true, convention: 'none' }
          }
        }).rules,
        { 'border-zero': [1, { convention: 'none' }] }
      );

      assert.deepStrictEqual(
        scss2sass.convert({
          linters: {
            'BorderZero': { enabled: false, convention: 'none' }
          }
        }).rules,
        { 'border-zero': [0, { convention: 'none' }] }
      );
    });

    it('rule enabled by default with "severity" but not "enabled"', function () {
      assert.deepStrictEqual(
        scss2sass.convert({
          linters: {
            'BorderZero': { severity: 'warning', convention: 'none' }
          }
        }).rules,
        { 'border-zero': [1, { convention: 'none' }] }
      );

      assert.deepStrictEqual(
        scss2sass.convert({
          linters: {
            'BorderZero': { severity: 'error', convention: 'none' }
          }
        }).rules,
        { 'border-zero': [2, { convention: 'none' }] }
      );
    });

    it('rule enabled by default with "enabled" and "severity"', function () {
      assert.deepStrictEqual(
        scss2sass.convert({
          linters: {
            'BorderZero': { enabled: true, severity: 'warning', convention: 'none' }
          }
        }).rules,
        { 'border-zero': [1, { convention: 'none' }] }
      );

      assert.deepStrictEqual(
        scss2sass.convert({
          linters: {
            'BorderZero': { enabled: false, severity: 'warning', convention: 'none' }
          }
        }).rules,
        { 'border-zero': [0, { convention: 'none' }] }
      );

      assert.deepStrictEqual(
        scss2sass.convert({
          linters: {
            'BorderZero': { enabled: true, severity: 'error', convention: 'none' }
          }
        }).rules,
        { 'border-zero': [2, { convention: 'none' }] }
      );

      assert.deepStrictEqual(
        scss2sass.convert({
          linters: {
            'BorderZero': { enabled: false, severity: 'error', convention: 'none' }
          }
        }).rules,
        { 'border-zero': [0, { convention: 'none' }] }
      );
    });

    it('rule disabled by default with neither "enabled" nor "severity"', function () {
      assert.deepStrictEqual(
        scss2sass.convert({
          linters: {
            'VariableForProperty': { properties: ['font-family'] }
          }
        }).rules,
        { 'variable-for-property': [0, { properties: ['font-family'] }] }
      );
    });

    it('rule disabled by default with "enabled" but not "severity"', function () {
      assert.deepStrictEqual(
        scss2sass.convert({
          linters: {
            'VariableForProperty': { enabled: true, properties: ['font-family'] }
          }
        }).rules,
        { 'variable-for-property': [1, { properties: ['font-family'] }] }
      );

      assert.deepStrictEqual(
        scss2sass.convert({
          linters: {
            'VariableForProperty': { enabled: false, properties: ['font-family'] }
          }
        }).rules,
        { 'variable-for-property': [0, { properties: ['font-family'] }] }
      );
    });

    it('rule disabled by default with "severity" but not "enabled"', function () {
      assert.deepStrictEqual(
        scss2sass.convert({
          linters: {
            'VariableForProperty': { severity: 'warning', properties: ['font-family'] }
          }
        }).rules,
        { 'variable-for-property': [0, { properties: ['font-family'] }] }
      );

      assert.deepStrictEqual(
        scss2sass.convert({
          linters: {
            'VariableForProperty': { severity: 'error', properties: ['font-family'] }
          }
        }).rules,
        { 'variable-for-property': [0, { properties: ['font-family'] }] }
      );
    });

    it('rule disabled by default with "enabled" and "severity"', function () {
      assert.deepStrictEqual(
        scss2sass.convert({
          linters: {
            'VariableForProperty': { enabled: true, severity: 'warning', properties: ['font-family'] }
          }
        }).rules,
        { 'variable-for-property': [1, { properties: ['font-family'] }] }
      );

      assert.deepStrictEqual(
        scss2sass.convert({
          linters: {
            'VariableForProperty': { enabled: false, severity: 'warning', properties: ['font-family'] }
          }
        }).rules,
        { 'variable-for-property': [0, { properties: ['font-family'] }] }
      );

      assert.deepStrictEqual(
        scss2sass.convert({
          linters: {
            'VariableForProperty': { enabled: true, severity: 'error', properties: ['font-family'] }
          }
        }).rules,
        { 'variable-for-property': [2, { properties: ['font-family'] }] }
      );

      assert.deepStrictEqual(
        scss2sass.convert({
          linters: {
            'VariableForProperty': { enabled: false, severity: 'error', properties: ['font-family'] }
          }
        }).rules,
        { 'variable-for-property': [0, { properties: ['font-family'] }] }
      );
    });
  });

  it('BangFormat', function () {
    assert.deepStrictEqual(
      scss2sass.convert({
        linters: {
          'BangFormat': { enabled: false }
        }
      }).rules,
      {
        'space-after-bang': 0,
        'space-before-bang': 0
      }
    );

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
      { 'extends-before-declarations': 0, 'extends-before-mixins': 0, 'mixins-before-declarations': 0 }
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

  it('NestingDepth', function () {
    assert.deepStrictEqual(
      scss2sass.convert({
        linters: {
          'NestingDepth': { enabled: true }
        }
      }).rules,
      { 'nesting-depth': 1 }
    );

    assert.deepStrictEqual(
      scss2sass.convert({
        linters: {
          'NestingDepth': { enabled: true, max_depth: 4 }
        }
      }).rules,
      { 'nesting-depth': [1, { 'max-depth': 4 }] }
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
