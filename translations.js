// can be easily swapped out for a more efficient method,
// but since obj is always small it shouldn't matter
var cloneDeep = function (obj) {
  return JSON.parse(JSON.stringify(obj));
};

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

module.exports.BemDepth = {
  name: 'bem-depth',
  defaultDisabled: true,
  options: {
    max_elements: {
      name: 'max-depth'
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

// missing: ElsePlacement

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
    var nestingSeverity = linterValue.force_nesting ? severity : 0;

    sassSettings.rules['no-mergeable-selectors'] = severity;

    if (linterValue.hasOwnProperty('force_nesting')) {
      sassSettings.rules['force-pseudo-nesting'] = nestingSeverity;
      sassSettings.rules['force-attribute-nesting'] = nestingSeverity;
      sassSettings.rules['force-element-nesting'] = nestingSeverity;
    }
  }
};

module.exports.NameFormat = {
  special_case: function (linterValue, sassSettings, severity) {
    var i, name, specificSettings,
        generalSettings = {},
        types = ['function', 'mixin', 'placeholder', 'variable'],
        translateConvention = function (_convention) {
          switch (_convention) {
          case 'hyphenated_lowercase':
            return 'hyphenatedlowercase';
          case 'snake_case':
            return 'snakecase';
          case 'camel_case':
            return 'camelcase';
          default:
            return _convention;
          }
        };

    if (linterValue.hasOwnProperty('allow_leading_underscore')) {
      generalSettings['allow-leading-underscore'] = linterValue.allow_leading_underscore;
    }

    if (linterValue.hasOwnProperty('convention')) {
      generalSettings.convention = translateConvention(linterValue.convention);
    }

    if (linterValue.hasOwnProperty('convention_explanation')) {
      generalSettings['convention-explanation'] = linterValue.convention_explanation;
    }

    for (i = 0; i < types.length; i++) {
      name = types[i];
      specificSettings = cloneDeep(generalSettings);

      if (linterValue[name + '_convention']) {
        specificSettings.convention = translateConvention(linterValue[name + '_convention']);
      }

      if (linterValue[name + '_convention_explanation']) {
        specificSettings['convention-explanation'] = linterValue[name + '_convention_explanation'];
      }

      if (Object.keys(specificSettings).length > 0) {
        sassSettings.rules[name + '-name-format'] = [severity, specificSettings];
      }
      else {
        sassSettings.rules[name + '-name-format'] = severity;
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

// missing: PropertyCount

module.exports.PropertySortOrder = {
  name: 'property-sort-order',
  options: {
    order: {
      name: 'order'
    },
    ignore_unspecified: {
      name: 'ignore-custom-properties'
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

module.exports.PropertyUnits = {
  name: 'property-units',
  options: {
    global: {
      name: 'global'
    },
    properties: {
      name: 'per-property'
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

// missing: SelectorDepth

module.exports.SelectorFormat = {
  special_case: function (linterValue, sassSettings, severity) {
    var i, name, specificSettings,
        generalSettings = {},
        types = ['attribute', 'class', 'element', 'id', 'placeholder'],
        translateConvention = function (_convention) {
          switch (_convention) {
          case 'hyphenated_lowercase':
            return 'hyphenatedlowercase';
          case 'snake_case':
            return 'snakecase';
          case 'camel_case':
            return 'camelcase';
          case 'strict_BEM':
            return 'strictbem';
          case 'hyphenated_BEM':
            return 'hyphenatedbem';
          default:
            return _convention;
          }
        };

    if (linterValue.hasOwnProperty('allow_leading_underscore')) {
      generalSettings['allow-leading-underscore'] = linterValue.allow_leading_underscore;
    }

    if (linterValue.hasOwnProperty('convention')) {
      generalSettings.convention = translateConvention(linterValue.convention);
    }

    if (linterValue.hasOwnProperty('convention_explanation')) {
      generalSettings['convention-explanation'] = linterValue.convention_explanation;
    }

    if (linterValue.hasOwnProperty('ignored_names')) {
      generalSettings.ignore = linterValue.ignored_names;
    }

    for (i = 0; i < types.length; i++) {
      name = types[i];
      specificSettings = cloneDeep(generalSettings);

      if (linterValue[name + '_convention']) {
        specificSettings.convention = translateConvention(linterValue[name + '_convention']);
      }

      if (linterValue[name + '_convention_explanation']) {
        specificSettings['convention-explanation'] = linterValue[name + '_convention_explanation'];
      }

      if (Object.keys(specificSettings).length > 0) {
        sassSettings.rules[name + '-name-format'] = [severity, specificSettings];
      }
      else {
        sassSettings.rules[name + '-name-format'] = severity;
      }
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

// TODO: This rule should either be a special case or a new rule is needed
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

// missing: TrailingWhitespace

module.exports.TrailingZero = { name: 'no-trailing-zero', defaultDisabled: true };
module.exports.TransitionAll = { name: 'no-transition-all', defaultDisabled: true };
module.exports.UnnecessaryMantissa = { name: 'no-trailing-zero' };

// missing: UnnecessaryParentReference

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
