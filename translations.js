module.exports.BangFormat = {
  special_case: function (linterValue, sassSettings, severity) {
    if (linterValue.hasOwnProperty('space_before_bang') || severity !== 0) {
      sassSettings.rules['space-before-bang'] = [severity, { include: linterValue.space_before_bang !== false }];
    }
    else {
      sassSettings.rules['space-before-bang'] = severity;
    }

    if (linterValue.hasOwnProperty('space_after_bang') || severity !== 0) {
      sassSettings.rules['space-after-bang'] = [severity, { include: linterValue.space_after_bang || false }];
    }
    else {
      sassSettings.rules['space-after-bang'] = severity;
    }
  }
};

module.exports.BorderZero = {
  name: 'border-zero',
  options: {
    convention: {
      name: 'convention'
    }
  }
};

module.exports.ColorKeyword = { name: 'no-color-keyword' };
module.exports.ColorVariable = { name: 'no-color-literals' };
module.exports.Comment = { name: 'no-css-comments' };
module.exports.DebugStatement = { name: 'no-debug' };

module.exports.DeclarationOrder = {
  special_case: function (linterValue, sassSettings, severity) {
    sassSettings.rules['extends-before-declarations'] = severity;
    sassSettings.rules['extends-before-mixins'] = severity;
    sassSettings.rules['mixins-before-declarations'] = severity;
  }
};

module.exports.DuplicateProperty = {
  name: 'no-duplicate-properties',
  options: {
    exclude: {
      name: 'exclude'
    }
  }
};

module.exports.EmptyLineBetweenBlocks = {
  name: 'empty-line-between-blocks',
  options: {
    ignore_single_line_blocks: {
      name: 'ignore-single-line-rulesets'
    }
  }
};

module.exports.EmptyRule = { name: 'no-empty-rulesets' };
module.exports.ExtendDirective = { name: 'no-extends', defaultDisabled: true };

module.exports.FinalNewline = {
  name: 'final-newline',
  options: {
    present: {
      name: 'include'
    }
  }
};

module.exports.HexLength = {
  name: 'hex-length',
  options: {
    style: {
      name: 'style'
    }
  }
};

module.exports.HexNotation = {
  name: 'hex-notation',
  options: {
    style: {
      name: 'style'
    }
  }
};

module.exports.HexValidation = { name: 'no-invalid-hex' };
module.exports.IdSelector = { name: 'no-ids' };
module.exports.ImportantRule = { name: 'no-important' };

module.exports.ImportPath = {
  name: 'clean-import-paths',
  options: {
    leading_underscore: {
      name: 'leading-underscore'
    },
    filename_extension: {
      name: 'filename-extension'
    }
  }
};

module.exports.Indentation = {
  name: 'indentation',
  options: {
    width: {
      name: 'size'
    }
  }
};

module.exports.LeadingZero = {
  name: 'leading-zero',
  options: {
    style: {
      name: 'include',
      values: {
        exclude_zero: false,
        include_zero: true
      }
    }
  }
};

module.exports.MergeableSelector = {
  special_case: function (linterValue, sassSettings, severity) {
    sassSettings.rules['no-mergeable-selectors'] = severity;

    if (linterValue.force_nesting) {
      sassSettings.rules['force-pseudo-nesting'] = severity;
      sassSettings.rules['force-attribute-nesting'] = severity;
      sassSettings.rules['force-element-nesting'] = severity;
    }
  }
};

module.exports.NameFormat = {
  special_case: function (linterValue, sassSettings, severity) {
    var i, name,
        allowLeadingUnderscore = linterValue.allow_leading_underscore !== false,
        types = ['function', 'mixin', 'placeholder', 'variable'],
        translateConvention = function (_convention) {
          if (_convention instanceof RegExp) {
            return _convention;
          }
          else if (typeof _convention === 'undefined' || _convention === 'hyphenated_lowercase') {
            return 'hyphenatedlowercase';
          }
          else if (_convention === 'snake_case') {
            return 'snakecase';
          }
          else if (_convention === 'camel_case') {
            return 'camelcase';
          }
          else {
            return 'ERROR_INVALID_CONVENTION';
          }
        };

    for (i = 0; i < types.length; i++) {
      name = types[i];

      // set default
      sassSettings.rules[name + '-name-format'] = [
        severity,
        {
          'allow-leading-underscore': allowLeadingUnderscore,
          convention: translateConvention(linterValue.convention)
        }
      ];

      if (linterValue[name + '_convention']) {
        sassSettings.rules[name + '-name-format'][1].convention = translateConvention(linterValue[name + '_convention']);
      }

      if (linterValue[name + '_convention_explanation']) {
        sassSettings.rules[name + '-name-format'][1]['convention-explanation'] = linterValue[name + '_convention_explanation'];
      }
      else if (linterValue.convention_explanation) {
        sassSettings.rules[name + '-name-format'][1]['convention-explanation'] = linterValue.convention_explanation;
      }
    }
  }
};

module.exports.NestingDepth = {
  name: 'nesting-depth',
  options: {
    max_depth: {
      name: 'max-depth'
    }
  }
};

module.exports.PlaceholderInExtend = { name: 'placeholder-in-extend' };

module.exports.PropertySortOrder = {
  name: 'property-sort-order',
  options: {
    order: {
      name: 'order'
    }
  }
};

module.exports.PropertySpelling = {
  name: 'no-misspelled-properties',
  options: {
    extra_properties: {
      name: 'extra-properties'
    }
  }
};

module.exports.QualifyingElement = {
  name: 'no-qualifying-elements',
  options: {
    allow_element_with_attribute: {
      name: 'allow-element-with-attribute'
    },
    allow_element_with_class: {
      name: 'allow-element-with-class'
    },
    allow_element_with_id: {
      name: 'allow-element-with-id'
    }
  }
};

module.exports.Shorthand = {
  name: 'shorthand-values',
  options: {
    allowed_shorthands: {
      name: 'allowed-shorthands'
    }
  }
};

module.exports.SingleLinePerProperty = {
  name: 'brace-style',
  options: {
    allow_single_line_rule_sets: {
      name: 'allow-single-line'
    }
  }
};

module.exports.SingleLinePerSelector = {
  name: 'single-line-per-selector'
};

module.exports.SpaceAfterComma = {
  name: 'space-after-comma',
  options: {
    style: {
      name: 'include',
      values: {
        one_space: true,
        no_space: false
      }
    }
  }
};

module.exports.SpaceAfterPropertyColon = {
  name: 'space-after-colon',
  options: {
    style: {
      name: 'include',
      values: {
        one_space: true,
        no_space: false
      }
    }
  }
};

module.exports.SpaceAfterPropertyName = { name: 'space-before-colon' };
module.exports.SpaceAfterVariableName = { name: 'space-before-colon' };

module.exports.SpaceBeforeBrace = {
  name: 'space-before-brace',
  options: {
    style: {
      name: 'include',
      values: {
        space: true
      }
    }
  }
};

module.exports.SpaceBetweenParens = {
  name: 'space-between-parens',
  options: {
    spaces: {
      name: 'include',
      values: {
        '0': false,
        '1': true
      }
    }
  }
};

module.exports.StringQuotes = {
  name: 'quotes',
  options: {
    style: {
      name: 'style',
      values: {
        single_quotes: 'single',
        double_quotes: 'double'
      }
    }
  }
};

module.exports.TrailingSemicolon = { name: 'trailing-semicolon' };
module.exports.TrailingZero = { name: 'no-trailing-zero', defaultDisabled: true };
module.exports.TransitionAll = { name: 'no-transition-all', defaultDisabled: true };
module.exports.UrlFormat = { name: 'no-url-protocols' };
module.exports.UrlQuotes = { name: 'url-quotes' };

module.exports.VariableForProperty = {
  name: 'variable-for-property',
  options: {
    properties: {
      name: 'properties'
    }
  },
  defaultDisabled: true
};

module.exports.VendorPrefix = {
  name: 'no-vendor-prefixes',
  options: {
    additional_identifiers: {
      name: 'additional-identifiers'
    },
    excluded_identifiers: {
      name: 'excluded-identifiers'
    }
  }
};

module.exports.ZeroUnit = { name: 'zero-unit' };
