# Bazza
#### A mate for your tabs
bazza is a simple tab management system focused on easy of use and
ease of sharing. We don't store any of your data outside of chrome. We want you to share your bookmarks through json file.

```
npm run dev     //budo server
npm run build   // webpack build for testing with chrome
```

## Project Structure
```
├── build              | The final folder used for chrome
│   ├── manifest.json  | needed for chrome premissions
│   ├── index.html     | a mindless wrapper
│   └── bundle.js      | build by webpack
├── components         | reusable components
├── containers         | view for routers made of components
├── utils              | put any random function here like logger
├── styles             | fairybread styles
└── store
    ├── reducers       | a place where reducers can run free
    ├── router
    ├── states
    └── effects        | this is for outside effect like ajax or chrome calls 
```

## Tasks
[Reference Verison](https://github.com/stagfoo/bazza/tree/backup-jquery)

[Project](https://github.com/stagfoo/bazza/projects/1)

Press the arrow to convert a note into an issue then assign it to yourself