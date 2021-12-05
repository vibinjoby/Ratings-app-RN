const path = require('path')

const externalLibs = [path.resolve(__dirname, '../node_modules/react-native')]

module.exports = {
  stories: ['../src/components/**/stories.@(tsx)'],
  addons: ['@storybook/addon-viewport'],
  webpackFinal: (config) => {
    config.module.rules.push(
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.jsx?$/,
        include: externalLibs,
        use: {
          loader: 'babel-loader',
        },
      },
    )
    config.resolve.alias = {
      'react-native$': require.resolve('react-native-web'),
    }

    config.resolve.extensions.unshift('.web.js', '.web.tsx', '.ts', '.tsx', '.js')

    return config
  },
}
