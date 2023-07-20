# 🚀 Welcome to your new awesome project!

This project has been created using **webpack-cli**, you can now run

```
npm run build
```

or

```
yarn build
```

to bundle your application

# Webpack loaders
- html-webpack-plugin to inject our Javascript bundle into our index.html automatically.
- MiniCssExtractPlugin to create one fancy css from all our css files.
- sass-loader enables support for SCSS files, turning scss into css, which is then read by css-loader and injected by style-loader.
- css-loader collects all the css we reference in our javascript and turns it into a string
- style-loader injects our the css string created by css-loader into the page.