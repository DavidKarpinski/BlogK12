# Blog K-12

A simple blog made with React for the XGROW Talents K-12 challenge.


## K-12 API Installation

This project requires an "API" developed for this purpose, available at: https://github.com/DavidKarpinski/k12-api

```shell
git clone https://github.com/DavidKarpinski/local_api.git

npm i
# or
yarn

json-server --watch db.json # Must run on port 3000
# or
npm start
```

You can also install JSON Server globally:

```shell
npm i json-server -g
```


By default, JSON Server runs on https://localhost:3000.

In case of an error like: `Some error occurred Error: listen EADDRINUSE: address already in use ::1:3000`,
This is because some project is already running on port 3000 and to do so, simply add a different number such as `-p=<portnumber>` as shown in the example:

```shell
json-server --watch db.json -p=4000
```

## Installation

```shell
git clone https://github.com/DavidKarpinski/blogk12.git

cd blogk12

npm i
# or
yarn install

npm build
# or
yarn build
```