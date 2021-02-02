# src

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

### Custom bash script

function gitPull {
git checkout dev
git pull
git branch -D $1
git branch $2
git checkout $2
git push --set-upstream origin $2
}

### custom

alias gitPull="gitPull"

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
