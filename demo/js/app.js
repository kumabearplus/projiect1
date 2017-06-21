requirejs.config({
  baseUrl: 'js',
  paths: {
    jquery: 'jquery-3.2.1.min'
  }
})
requirejs(['main'])