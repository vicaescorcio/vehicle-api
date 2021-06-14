# vehicle-api
A simple API that manages vehicles data from remote source. Access the simple [web interface](https://vehicles-node-react.herokuapp.com/)t o see the current data.

### About
The idea is to download the data available on the provided
endpoint [FIPEAPI](http://fipeapi.appspot.com/) and merge it to the current data. The backend
(APIs) needs to provide the basic CRUD actions as usual for its entities (e.g. POST, GET, DELETE, etc.).

### Features
+ CRUD vechicles data
+ Visualize it through a react interface

### Requirements
- node version ^v16.2.0
- npm ^7.13.0
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

P.S: all npm scripts are listed in [package.json](https://github.com/vicaescorcio/vehicle-api/blob/main/package.json)

### Running in production
- You can use API importing postman collection json in root
