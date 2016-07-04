module.exports = {    
  entry: "./app/entry.js",
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
  }
}