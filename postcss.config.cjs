const postcssJitProps = require('postcss-jit-props');
const OpenProps = require('open-props');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  // only vars used are in build output
  plugins: [
    postcssJitProps(OpenProps),
    postcssPresetEnv({
      stage: 0,
      features: {
        'logical-properties-and-values': false,
        'prefers-color-scheme-query': false,
        'gap-properties': false,
        'custom-properties': false,
        'place-properties': false,
        'not-pseudo-class': false,
        'focus-visible-pseudo-class': false,
        'focus-within-pseudo-class': false,
        'color-functional-notation': false,
      },
    }),
  ],
};
