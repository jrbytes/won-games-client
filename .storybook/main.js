module.exports = {
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-essentials'],
  babel: async (options) => ({
    ...options,
    plugins: [
      ...options.plugins,
      '@babel/plugin-transform-react-jsx',
      ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
    ]
  }),
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  },
  typescript: { reactDocgen: 'react-docgen' }
}
