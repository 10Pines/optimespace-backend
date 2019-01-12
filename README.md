# Optimespace BackEnd

Everything you need to manage debate spaces!

When we stated the project we were thinking about conference attendees, speakers and conference organizators that 
want to assist to the most exiting subset of seminars/lectures that an event can provide.


## Technical Overview
### _Before you get started_

- We use nvm to manage node version 

### _High Level Architecture_
Optimespace is split into two different repositories: the frontend (`open-space-front` repository) 
and the backend (`optimespace-backend` repository).  

The front end is a Single Page Application built on top of [VueJS](https://vuejs.org/). 

### _Data Storage_
We don't storage data yet but soon


## _Node version_
`optimespace-backend` uses NodeJS v11.6.0.
`nvm` works great for switching NPM and NodeJS versions conveniently so we really recomend that you use it to manage your node installations.

## Development
### _Getting Started_

#### __System Applications__
There are a couple of key OS level installations that will be necessary to start development:

- [nvm](https://github.com/creationix/nvm)


#### __Local Environment Setup__
You can start setting the environment.  This can primarily be done from the `optimespace-backend` directory 
within the project.

```
$ nvm install
$ nvm use
$ npm install
```

#### __Running Locally__
Before starting the server you should assure that you are runing the correct node version you can do this and 
then start the server:

```
$ nvm use
$ npm start
```