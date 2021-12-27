# Webpack 5

```sh
npm i -D webpack@5 webpack-cli@4 webpack-dev-server@4
```

## Development
Build for development.

```sh
npx webpack --node-env development
asset main.js 1.21 KiB [compared for emit] (name: main)
./src/index.js 29 bytes [built] [code generated]
webpack 5.65.0 compiled successfully in 86 ms
```

## Production
Build for production.

```sh
npx webpack --node-env production
asset main.621df54d056c27d5eaa8.js 27 bytes [emitted] [immutable] [minimized] (name: main)
./src/index.js 29 bytes [built] [code generated]
webpack 5.65.0 compiled successfully in 202 ms
```