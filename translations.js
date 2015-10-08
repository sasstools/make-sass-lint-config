// TODO: BangFormat
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
// TODO DeclarationOrder
module.exports.DuplicateProperty = { name: 'no-duplicate-properties' };
module.exports.EmptyLineBetweenBlocks = { name: 'empty-line-between-blocks' };
module.exports.EmptyRule = { name: 'no-empty-rulesets' };
module.exports.ExtendDirective = { name: 'no-extends' };

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
      name: 'width'
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

module.exports.MergeableSelector = { name: 'no-mergeable-selectors' };

// TODO: NameFormat

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
module.exports.TrailingZero = { name: 'no-trailing-zero' };
module.exports.TransitionAll = { name: 'no-transition-all' };
module.exports.UrlFormat = { name: 'no-url-protocols' };
module.exports.UrlQuotes = { name: 'url-quotes' };

module.exports.VariableForProperty = {
  name: 'variable-for-property',
  options: {
    properties: {
      name: 'properties'
    }
  }
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
