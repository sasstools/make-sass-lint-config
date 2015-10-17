Make-Sass-Lint-Config
=====================
Convert your .scss-lint.yml config file into the equivalent .sass-lint.yml

Use the online converter
---

The easiest way to use this tool is to simply paste the contents of your `.scss-lint.yml` file into the demonstration converter at sasstools.github.io/make-sass-lint-config/.

Programmatic Usage
---
```javascript
var makeSassLintConfig = require('make-sass-lint-config');
var jsyaml = require('js-yaml');
var fs = require('fs');

var scssLintConfigYaml = fs.readFileSync('.scss-lint.yml', 'utf8');

// Parse YAML into an object and get the object representation
// of the sass-lint config
var scssLintConfig = jsyaml.safeLoad(scssLintConfigYaml);
console.log(makeSassLintConfig.convert(scssLintConfig));

// Convert a YAML file and get YAML output
console.log(makeSassLintConfig.convertYaml(scssLintConfigYaml));
```

### convert(scssSettings [ , options ])
Converts a scss-lint config file into a sass-lint config file
- `scssSettings` - Settings parsed from YAML
- `options.debug` - include additional debug information in the returned settings object, default `false`

### convertYaml(scssSettingsYaml)
Perform `convert` on a string and output the converted yaml
- `scssSettingsYaml` - scss-lint config in YAML format

