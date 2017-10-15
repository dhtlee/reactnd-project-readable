# Readable Project
React-Redux application that allows user to submit thought-provoking posts and troll comments, as well as vote for the worst of them.

This is the second project for Udacity's React Fundamentals course.

## Pre-requisite
- [Git](https://git-scm.com)
- [Node](https://nodejs.org)

## Setting up environment
### Set up backend server
1. Git clone [Readable API Server](https://github.com/udacity/reactnd-project-readable-starter): `git clone https://github.com/udacity/reactnd-project-readable-starter.git`
1. Install dependencies: `npm install`
1. Start backend server: `npm start`

### Set up frontend server
1. Git clone this repo: `git clone https://github.com/dhtlee/reactnd-project-readable.git`
1. Install dependencies: `npm install`
1. Start frontend server: `npm start`

## Techniques
* [Redux form](https://github.com/erikras/redux-form) for create and edit views in [post-form](https://github.com/dhtlee/reactnd-project-readable/blob/master/src/components/post-form.js) and [comment-form](https://github.com/dhtlee/reactnd-project-readable/blob/master/src/components/comment-form.js)
* [React Router v4](https://github.com/ReactTraining/react-router)
* [Redux Thunk](https://github.com/gaearon/redux-thunk)
* Memoized selectors using [reselect](https://github.com/reactjs/reselect) to 'prepare' data to components ([selectors/index.js](https://github.com/dhtlee/reactnd-project-readable/blob/master/src/selectors/index.js))
* Higher order component example in [post-list.js](https://github.com/dhtlee/reactnd-project-readable/blob/master/src/components/post-list.js)

## Future improvements
* Add prop-types
* DRY up common code between post-detail.js and post-summary.js component
* DRY up common code between categories.js and quick-links.js component
* Refactor and introduce hierachy in component folder
* Add popup alert upon delete
* Deploy app to cloud service

## License
Readable is released under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgements
* Shoutout to [jansvigar](https://github.com/jansvigar) for his [Readable submission](https://github.com/jansvigar/reactnd-project-readable), in which this project has drawn inspiration from.