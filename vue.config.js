const path = require('path');
const isdev = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  // 修改的配置
  // 部署应用包时的基本 URL vue-cli3之前是baseUrl,
  publicPath: '/',
  // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)
  outputDir: 'dist',
  assetsDir: '', // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  indexPath: 'index.html', // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  devServer: {
    host: '0.0.0.0', // can be overwritten by process.env.HOST
    port: '8080',
    open: false, // 是否自动用默认浏览器打开网页
    proxy: {
      '/api': {
        // target: 'http://10.164.236.31:8083',
        target: 'https://h5-test.haiermoney.com',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    // eslint在浏览器窗口中的显示内容
    overlay: {
      warnings: false, // 是否显示警告信息
      errors: true // 是否显示错误信息
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      },
      sass: {
        data: `
          @import "./src/styles/index.scss";
        `
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  configureWebpack: { // webpack配置，值位对象时会合并配置，为方法时会改写配置
    // resolve: {
    //   alias: {
    //     '@': './src',
    //     '@c': './src/components',
    //     'vue$': 'vue/dist/vue.esm.js',
    //     'jquery': 'jquery',
    //   }
    // },
    // 增加一个plugins
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    ],
    externals: {
      'vue': 'Vue', // 左侧vue是我们自己引入时候要用的，右侧是开发依赖库的主人定义的不能修改
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'axios': 'axios'
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@c', resolve('src/components'))
      .set('@p', resolve('src/pages'))
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('jquery', 'jquery');// key,value自行定义，比如.set('@@', resolve('src/components'))
  },
  lintOnSave: isdev, // 生产环境关闭eslint在浏览器中的提示
  // 设置babel编译node_modules中的内容，默认情况下babel不会编译node_modules中的所有内容
  transpileDependencies: [], // [path.resolve('node_modules/_swiper@4.4.6@swiper')],
  // build后的静态资源压缩文件是否生成map文件，这个在线上调试时非常有用
  productionSourceMap: true
};

