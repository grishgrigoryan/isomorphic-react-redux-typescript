
# Isomorphic React/Redux/Material-UI TypeScript Starter Kit

This is the initial version of  starter project.


This project includes a working example of React, React-Router, Redux, and Material-UI

All the code is in TypeScript, written as either `.ts` or `.tsx` files. 
The gulp-based build generates a browserified client file which is separate from the vendor file.
The vendor file currently includes react (or react with addons) and react-router.
This separation speeds up the build process and can result in fewer client downloads when new builds are released.
The gulp build process works with gulp.watch.

This is a basic starter project with a minimal number of views and components.
As much as possible, the project uses ES6 conventions, which are supported by TypeScript.
This includes the import statement and object destructuring, for example.

## Features

* React with React Router
* Redux 
* Material-UI
* TypeScript 2 TSX
* Isomorphic between server and client
* Isomorphic async data fetching ( server and client )
* Client js is browserified
* Gulp based build with watch tasks
* Full autocomplete within Intellij Idea (latest )

## Prerequisites

* [Node.js](https://nodejs.org/) should be installed

## Setup

### Install Node modules

This will get all the packages required for development and run time. TypeScript definition files will be installed via npm
(eg. @types/express , @types/react) 

```
> npm intall
```

## Build

To run a full build, just run gulp with no arguments.

```
> gulp
```

## Development

Run watch and keep the console open. 

```
> gulp local-setup
```

Gulp will automatically rebuild when  ts or tsx files changes.

## Running

Run this command :

```
> npm run start
```


or in development mode :

```
> npm run start-dev
```
