const path = require("path")

module.exports = {
  "stories": ['../src/components/**/stories.tsx'],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "storybook-addon-next",
      options: {
        nextConfigPath: path.resolve(__dirname, "../next.config.js"),
      },
    }
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  docs: {
    docsPage: "automatic"
  },
  typescript: { reactDocgen: 'react-docgen' },
  staticDirs: ['../public']
};