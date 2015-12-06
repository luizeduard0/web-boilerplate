# Reax

A boilerplate for building React and Redux apps with ES6

## Install

`npm install -g webpack webpack-dev-server && npm install`

## Build

### Production

`webpack -p && PORT=80 node server.js`

### Development

`BUILD_DEV=1 webpack-dev-server --content-base public/ --inline --history-api-fallback`
