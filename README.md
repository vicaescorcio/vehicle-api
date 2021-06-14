# vehicle-api
A simple API that manages vehicles data from remote source: http://fipeapi.appspot.com/

### About
Designed to minimally abstract database logic, this template scaffolds common API design decisions
and allows you to quickly distribute your data in common formats, such as JSON and CSV. This is meant to serve as a boilerplate for quickly establishing an API for an existing database system. We have succesfully and deployed this API framework on top of MariaDB, Postgres, and MongoDB.

While researching API design with Node.js, there were many questions, such as versioning and handling of relational databases, that did not have obvious answers. This template is one opinion on a set of answers to many common API design questions.

### Features
+ Versioning
+ Support for various data stores
+ Tests
+ Flexibility
+ Extensibility
+ The Javascript you know and love
+ Minimal abstractions


### Organization
Each version of the API functions as a self-contained module, and therefore has its own ````package.json````, ````README````, and dependencies.


### Install
````
curl -LOk https://github.com/UW-Macrostrat/node-api-template/archive/master.zip
unzip master.zip
cd node-api-template-master
npm install
````

If using MySQL or Postgres, you will need to update rename ````vx/credentials.example.js```` to ````vx/credentials.js```` and input your credentials.


### Start
````
npm start
````

The API runs on port ````5555```` by default, and the root can be accessed by navigating to ````http://localhost:5555/api```` or ````http://localhost:5555/api/vX```` in your browser.


### Testing
The tests for each version of the API can be found in ````vx/test````, and each route has its own test file. Functions used for testing the validity of each response can be found in ````validators.js````, and various settings in ````settings.js````.

To run the tests:

````
npm test
````

### Running in production
Both [forever](https://github.com/foreverjs/forever) and [pm2](https://github.com/Unitech/pm2) are great for keeping the API alive (and load balancing in the case of pm2).


### Author
[John J Czaplewski](https://github.com/jczaplew), with inspiration and assistance from [Puneet Kishor](http://punkish.org) and [Shanan Peters](http://strata.geology.wisc.edu).

### Funding
Development supported by NSF CAREER EAR-1150082 and NSF ICER-1440312.

### License
CC-BY for all code unique to this API.
