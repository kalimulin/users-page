module.exports = {
  chainWebpack: config => {
    // Загрузчик GraphQL
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
      .loader('pug-plain-loader')
      .end()
  }
}