# Webpack 5

```sh
npm i -D webpack@5 webpack-cli@4 webpack-dev-server@4
```

## Development
Build for development.

```sh
npx webpack --mode development
asset main.js 1.21 KiB [compared for emit] (name: main)
./src/index.js 29 bytes [built] [code generated]
webpack 5.65.0 compiled successfully in 86 ms
```

## Production
Build for production.

```sh
npx webpack --mode production
asset main.js 1.21 KiB [compared for emit] (name: main)
./src/index.js 29 bytes [built] [code generated]
webpack 5.65.0 compiled successfully in 86 ms
```