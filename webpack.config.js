module.exports = {    
  entry: "./app/js/main.js",
  output: {
      path: __dirname,
      filename: "./app/public/bundle.js"
  },
  module: {
      loaders: [
          {
            test: /\.scss$/, 
            loaders: ["style", "css", "sass"] 
          }
      ]
  }, 
  resolve: {
    alias: {
      moment: 'moment/moment.js',
    },
    moduleDirectories: ['bower_components']
  }
};