const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {

  const packagesPath = [
    path.resolve(__dirname, '..', '..')
  ];

  const nodeModulesPath = [
    path.resolve(__dirname, '..', '..', '..')
  ];

  defaultConfig.module.rules.push({
    test: /\.yaml$/,
    loaders: ["json-loader","yaml-loader"],
    include: packagesPath
  });

  defaultConfig.module.rules.push({
    test: /\.less$/,
    include: packagesPath,
    use: [
      {
        loader: 'style-loader' // creates style nodes from JS strings
      },
      {
        loader: 'css-loader' // translates CSS into CommonJS
      },
      {
        loader: 'postcss-loader',
        options: { // 如果没有options这个选项将会报错 No PostCSS Config found
          plugins: (loader) => [
            require('autoprefixer')(), // CSS浏览器兼容
            require('cssnano')()  // 压缩css
          ]
        }
      },
      {
        loader: 'less-loader',
        options: {
          javascriptEnabled: true,
          paths: nodeModulesPath
        }
      }
    ]
  });

  // override test: /\.(mjs|jsx?)$/ include to packagesPath
  defaultConfig.module.rules[0].include = packagesPath;

  return defaultConfig;
};
