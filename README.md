# Bazza
[![built with choo v4](https://img.shields.io/badge/built%20with%20choo-v4-ffc3e4.svg?style=flat-square)](https://github.com/yoshuawuyts/choo)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

#### A mate for your tabs
bazza is a simple tab management system focused on easy of use and
ease of sharing. We don't store any of your data outside of chrome. We want you to share your bookmarks through json file.

```
npm start       // start dev server
npm run build   // webpack build for testing with chrome
```

## Project Structure
```
├── .config            | webpack configuration files
├── build              | The final folder used for chrome
│   ├── manifest.json  | needed for chrome premissions
│   ├── index.html     | a mindless wrapper
│   └── bundle.js      | build by webpack
└── src                |
    ├── components     | reusable components
    ├── containers     | view for routers made of components
    ├── utils          | put any random function here like logger
    ├── styles         | fairybread styles
    └── store
    │  ├── reducers    | a place where reducers can run free
    │  ├── router
    │  ├── states
    │  └── effects     | this is for outside effect like ajax or chrome calls
    └── app.js         | application entry point
```

## Tasks
[Reference Verison](https://github.com/stagfoo/bazza/tree/backup-jquery)

[Project](https://github.com/stagfoo/bazza/projects/1)

Press the arrow to convert a note into an issue then assign it to yourself