# Reax Redux Boilerplate

Redux boilerplate for React

## Install

```sh
npm install -g webpack webpack-dev-server
npm install
```

## Build

### Production

```sh
NODE_ENV=production webpack -p
PORT=3000 node server.js
```

### Development

```sh
webpack-dev-server --content-base public/ --inline --history-api-fallback --port 3000
```
