# vehicle-api
A simple API that manages vehicles data from remote source. Access the simple [web interface](https://vehicles-node-react.herokuapp.com/)t o see the current data.

### About
The idea is to download the data available on the provided
endpoint [FIPEAPI](http://fipeapi.appspot.com/) and merge it to the current data. The backend
(APIs) needs to provide the basic CRUD actions as usual for its entities (e.g. POST, GET, DELETE, etc.).

### Features
+ CRUD vechicles data through RESTFUL API
+ Visualize it through a simple react interface

### Organization
This project was based in an architecture MVC, being a node API responsible for modeling and controlling data and a react-app for viewing it.

Node API:
Serves the basic CRUD for vehicles throught a RESTFUL API. Besides, it comunicates with a remote API to populate/merge the databases with existent vehicles data.

- WEB-FRAMEWORK: To create a simple and fast RESTFUL API, it was chosen [Express JS](https://expressjs.com/). It provides us all HTTP resources and middleware needs to build a web application
- ORM: Modelling our main data object, vehicle, and manage the db, [Sequelize](http://sequelize.org/) did the job. It's a promise like ORM, which fits for our purpose here.
- Databases: POSTGRES.
- Tests: [Jest](https://jestjs.io/pt-BR/docs/testing-frameworks)

React-App:
- Suppor-componments: [React-table](https://react-table.tanstack.com/docs/examples/filtering) used to render and manager the main table. 
- CSS-Framework: [Materialize UI](https://materializecss.com/shadow.html)

Host: [Heroku](https://dashboard.heroku.com/)

### Requirements
- node version ^v16.2.0
- npm ^7.13.0
- Git

P.S you can get both with [nvm](https://github.com/nvm-sh/nvm)

### Install

- Clone project and go to root dir
````
# clone this repo locally via ssh or https:
git clone https://github.com/vicaescorcio/vehicle-api.git

# change directory to vehicle-api/
cd vehicle-api/
````

- Create .env file in root with the variables:
````
# Databases
DB_USER=garage
DB_PASSWORD=<your_db_password>
DB_HOST=<your_db_localhost>
````

- Install modules and setup data:
````
# install modules
npm install

# setup db and populate it with vehicle remote data
npm run dev:setup

````

### Start
````
npm start
````
this will open the react client, which its README is [here](https://github.com/vicaescorcio/vehicle-api/tree/main/vehicle-react-client) 


### Testing
To run the tests:

````
npm test
````

### Deploy
P.S to deploy the application, it's necessary have installed a heroku-cli and have a heroku app created. It's possible follow this [tutorial](https://devcenter.heroku.com/articles/git) to do it

After commit your changes, build the app:
````
# this will build react-app
npm run build
````
Commit your changes to Heroku
````
# it's necessary a heroku remote added
git push heroku main
````

P.S: all npm scripts are listed in [package.json](https://github.com/vicaescorcio/vehicle-api/blob/main/package.json)

### Running in production
- You can use API importing postman collection json in root


## Things to improve or add:

 On server-side Node API:
- Authentication system, at least. 
- Create validations on Vehicle model.
- Create model tests

 On react-app:
- Improve the style of the application
- Implement a search mechanism, so it be easy find the vehicle need
- Implement a show page to visualize it

