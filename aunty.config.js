const { resolve } = require('node:path');

module.exports = {
  type: 'svelte',
  webpack: config => {
    const svelteRule = config.module.rules.find(rule => rule.test.source.indexOf('svelte') > -1);

    if (svelteRule) {
      const svelteUseItem = svelteRule.use.find(item => item.loader.indexOf('svelte') > -1);

      if (svelteUseItem) {
        svelteUseItem.options.onwarn = (warning, handler) => {
          // Ignore a11y-click-events-have-key-events warnings (triggered by RangePips)
          if (warning.code === 'a11y-click-events-have-key-events') {
            return;
          }

          handler(warning);
        };
      }
    }

    config.resolve.alias.$components = resolve(__dirname, 'src', 'components');
    config.resolve.alias.$lib = resolve(__dirname, 'src', 'lib');

    return config;
  }
};
