/* eslint-disable */

// TODO: Remove once connection with browser is done

// Sample Bazza: data
const bazzGroups = [
  {
    title: 'Group one',
    marks: [
      {
        title: 'mark one',
        favIconUrl: 'https://www.npmjs.com/static/images/touch-icons/favicon-32x32.png',
        url: 'https://www.npmjs.com'
      },
      {
        title: 'mark two',
        favIconUrl: 'https://www.google.co.jp/favicon.ico',
        url: 'https://www.google.co.jp'
      },
      {
        title: 'mark three',
        favIconUrl: 'https://assets-cdn.github.com/favicon.ico',
        url: 'https://www.github.com'
      }
    ]
  },
  {
    title: 'Group two',
    marks: [
      {
        title: 'mark one:2',
        favIconUrl: 'https://www.npmjs.com/static/images/touch-icons/favicon-32x32.png',
        url: 'https://www.npmjs.com'
      },
      {
        title: 'mark two:2',
        favIconUrl: 'https://www.google.co.jp/favicon.ico',
        url: 'https://www.google.co.jp'
      },
      {
        title: 'mark three:2',
        favIconUrl: 'https://assets-cdn.github.com/favicon.ico',
        url: 'https://www.github.com'
      }
    ]
  }
]

// Sample Chrome: open tabs array
const openTabs = [
  {
    'active': false,
    'audible': false,
    'autoDiscardable': true,
    'discarded': false,
    'favIconUrl': 'https://www.npmjs.com/static/images/touch-icons/favicon-32x32.png',
    'height': 1103,
    'highlighted': false,
    'id': 80,
    'incognito': false,
    'index': 3,
    'mutedInfo': {
      'muted': false
    },
    'pinned': false,
    'selected': false,
    'status': 'complete',
    'title': 'eslint-config-airbnb',
    'url': 'https://www.npmjs.com/package/eslint-config-airbnb',
    'width': 1920,
    'windowId': 71
  },
  {
    'active': false,
    'audible': false,
    'autoDiscardable': true,
    'discarded': false,
    'favIconUrl': 'https://assets-cdn.github.com/favicon.ico',
    'height': 1103,
    'highlighted': false,
    'id': 86,
    'incognito': false,
    'index': 4,
    'mutedInfo': {
      'muted': false
    },
    'pinned': false,
    'selected': false,
    'status': 'complete',
    'title': 'shrynx/react-super-scripts: adds super powers to create-react-app and allows custom configs without ejecting.',
    'url': 'https://github.com/shrynx/react-super-scripts',
    'width': 1920,
    'windowId': 71
  },
  {
    'active': false,
    'audible': false,
    'autoDiscardable': true,
    'discarded': false,
    'favIconUrl': 'https://assets-cdn.github.com/favicon.ico',
    'height': 1103,
    'highlighted': false,
    'id': 90,
    'incognito': false,
    'index': 5,
    'mutedInfo': {
      'muted': false
    },
    'pinned': false,
    'selected': false,
    'status': 'complete',
    'title': 'react-redux-starter-kit/src/components at master · davezuko/react-redux-starter-kit',
    'url': 'https://github.com/davezuko/react-redux-starter-kit/tree/master/src/components',
    'width': 1920,
    'windowId': 71
  }
]

// Sample Bazza: single group export json file
const singleGroupJson = {"meta":{"identifier":"BAZZA_EXPORT","type":"SINGLE","date":"Sun Mar 19 2017 21:35:07 GMT+0900 (JST)"},"data":{"title":"Group one","marks":[{"title":"mark one","favIconUrl":"https://www.npmjs.com/static/images/touch-icons/favicon-32x32.png","url":"https://www.npmjs.com"},{"title":"mark two","favIconUrl":"https://www.google.co.jp/favicon.ico","url":"https://www.google.co.jp"},{"title":"mark three","favIconUrl":"https://assets-cdn.github.com/favicon.ico","url":"https://www.github.com"}]}}

// Sample Bazza: all data export json file
const allDataJson = {"meta":{"identifier":"BAZZA_EXPORT","type":"ALL","date":"Sun Mar 19 2017 21:33:31 GMT+0900 (JST)"},"data":[{"title":"Group one","marks":[{"title":"mark one","favIconUrl":"https://www.npmjs.com/static/images/touch-icons/favicon-32x32.png","url":"https://www.npmjs.com"},{"title":"mark two","favIconUrl":"https://www.google.co.jp/favicon.ico","url":"https://www.google.co.jp"},{"title":"mark three","favIconUrl":"https://assets-cdn.github.com/favicon.ico","url":"https://www.github.com"}]},{"title":"Group two","marks":[{"title":"mark one:2","favIconUrl":"https://www.npmjs.com/static/images/touch-icons/favicon-32x32.png","url":"https://www.npmjs.com"},{"title":"mark two:2","favIconUrl":"https://www.google.co.jp/favicon.ico","url":"https://www.google.co.jp"},{"title":"mark three:2","favIconUrl":"https://assets-cdn.github.com/favicon.ico","url":"https://www.github.com"}]}]}

const dummyData = {
  bazzGroups,
  openTabs
}

module.exports = dummyData

