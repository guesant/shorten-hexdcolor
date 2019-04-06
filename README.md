# Website demo for shorten-hexdcolor
Official website link: [https://gabrodbr.github.io/shorten-hexdcolor](https://gabrodbr.github.io/shorten-hexdcolor)

## Project setup
```sh
# setup
yarn install

# compiles and hot-reloads for development
yarn run serve

# lints and fixes files
yarn run lint
```

## Build and Deployment
### Build to dist folder
```sh
# compiles and minifies for production
yarn run build
```

### Deploy to gh-pages
```sh
git add dist
git commit -m "Build"
git subtree push --prefix dist origin gh-pages
```
