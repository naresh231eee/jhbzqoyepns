{
  "name": "Flute-APD",
  "version": "1.0.0-SNAPSHOT.1",
  "description": "Flute-APD",
  "license": "UNLICENSED",
  "main": "src/index.js",
  "scripts": {
    "build:webpack": "node ./node_modules/webpack/bin/webpack --config webpack.config.js --bail",
    "build:watch": "node ./node_modules/webpack/bin/webpack -w --config webpack.config-dev.js",
    "start-dev": "./node_modules/.bin/webpack-dev-server --config webpack.config-dev.js"
  },
  "dependencies": {
    "babel-polyfill": "6.7.4",
    "css-loader": "0.23.1",
    "gauge": "2.6.0",
    "history": "^1.17.0",
    "is-glob": "0.1.0",
    "lodash": "^4.17.1",
    "moment": "2.14.1",
    "normalize.css": "^4.1.1",
    "npmlog": "3.1.2",
    "react": "0.14.8",
    "react-addons-css-transition-group": "0.14.8",
    "react-addons-transition-group": "15.3.2",
    "react-addons-update": "15.3.2",
    "react-data-grid": "^2.0.1",
    "react-data-grid-addons": "^2.0.7",
    "react-dom": "0.14.8",
    "react-modal-dialog": "^4.0.2",
    "react-proxy": "1.1.6",
    "react-router": "1.0.0-rc3",
    "react-select": "1.0.0-beta12",
    "react-sortable-table": "^1.3.0"
  },
  "devDependencies": {
    "babel-core": "6.17.0",
    "babel-loader": "6.2.5",
    "babel-preset-es2015": "6.16.0",
    "babel-preset-react": "6.16.0",
    "object-assign": "4.0.1",
    "webpack": "1.13.0",
    "webpack-dev-server": "1.16.1"
  },
  "peerDependencies": {
    "history": "^1.17.0"
  }
}
