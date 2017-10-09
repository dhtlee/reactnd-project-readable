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

## Future improvements
* Add prop-types
* Use [reselect](https://github.com/reactjs/reselect) for memoized selector to 'prepare' (sort, filter etc.) data to components
* DRY up common code between post-detail.js and post-summary.js component
* DRY up common code between categories.js and quick-links.js component
* Refactor and introduce hierachy in component folder
* Add popup alert upon delete
* Deploy app to cloud service

## License
Readable is released under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgements
* Shoutout to [jansvigar](https://github.com/jansvigar) for his [Readable submission](https://github.com/jansvigar/reactnd-project-readable), in which this project has drawn inspiration from.