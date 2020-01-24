# tynder-express-react-ts-esm-quickstart

A boilerplate for React client + Express server project
using [Tynder](https://github.com/shellyln/tynder) data validation library.

This boilerplate is based on the generated codes of the
[express-generator](https://www.npmjs.com/package/express-generator) and
[Create React App](https://github.com/facebook/create-react-app).



## Features
* Declarative data validation.
    * Define the schema with TypeScript-like DSL.
    * Client and server share a schema.
* Client and server are written in TypeScript + ES Modules.
* Server does not depend on Babel and Webpack.


## Requirements

* Node.js >=12.13.0

## Install

```sh
git clone https://github.com/shellyln/tynder-express-react-ts-esm-quickstart.git
cd tynder-express-react-ts-esm-quickstart

rm -rf .git
git init

vi package.json  # and edit project properties...

npm install
cd client
npm install
cd ..

git add .
git commit -m "initial commit"
```


## Build
```sh
npm run build
cd client
npm run build
cd ..
```


## Debug

First terminal:
```sh
npm start
```

Second terminal:
```sh
cd client
npm start
```

## See also

* Tynder: [https://github.com/shellyln/tynder](https://github.com/shellyln/tynder)
* Modules - Node.js Documentation: [https://nodejs.org/api/modules.html](https://nodejs.org/api/modules.html)


## License
[ISC](https://github.com/shellyln/tynder-express-react-ts-esm-quickstart/blob/master/LICENSE.md)  
Copyright (c) 2020 Shellyl_N and Authors.
