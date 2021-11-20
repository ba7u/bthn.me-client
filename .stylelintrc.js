module.exports = {
  plugins: ['stylelint-order', 'stylelint-declaration-strict-value'],
  defaultSeverity: 'error',
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'at-rule-name-case': 'lower',
    'block-closing-brace-newline-after': 'always',
    'color-hex-case': 'lower',
    'color-hex-length': 'short',

    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['stylelint-commands'],
        ignoreComments: [/^rtl/],
        severity: 'error',
      },
    ],
    'custom-property-empty-line-before': [
      'always',
      {
        except: ['after-custom-property', 'first-nested'],
        ignore: ['after-comment', 'inside-single-line-block'],
      },
    ],
    'declaration-block-single-line-max-declarations': 1,
    'function-name-case': 'lower',
    'length-zero-no-unit': true,
    'max-empty-lines': [1, { severity: 'error' }],
    'order/properties-alphabetical-order': true,
    'property-case': 'lower',
    'scale-unlimited/declaration-strict-value': [
      ['/color$/', 'padding', 'margin', 'z-index'],
      {
        ignoreKeywords: {
          '/color$/': ['currentColor', 'inherit', 'transparent'],
          margin: ['0', 'auto'],
          padding: ['0'],
        },
      },
    ],
    'selector-max-empty-lines': 0,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-element-case': 'lower',
    'selector-type-case': 'lower',
    'unit-case': 'lower',
    'value-keyword-case': 'lower',
  },
};
