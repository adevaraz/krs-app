# KRS App

## Description
This is an API application to store student's course selection sheet in a university. The concept was simplify due to learning reason.

## Technology
Before running the app, please ensure to install these several technologies:
1. Node v16.17.0
2. MySQL

## Getting Started
### Prerequisites
Please ensure the Node JS version 16.x running on the server.

### Installation
Install the project dependencies using this command.
```
$ npm install
```

### Setting Environment
Please copy-paste the `.env-example` and rename it to `.env`. Adjust the variables' value to desired value. More details about the variables needed will be explained in [Environment Variables](#environment-variables) section below.

### Initializing the Table and Seeder
To initialize the app's database table, you can run the command below.
```
$ npm run init
```
The command will run the migrations and the seeders automatically.

### Running the Application
For running the application, you can use one of these commands.

#### Development Mode
```
$ npm run dev
```

#### Production Mode
```
$ npm start
```

## Others
### Environment Variables
Variable | Description | Example
--- | --- | ---
PORT | Server port. | 3000
env | Server environment, can be development, uat, or production. | 'development'
NODE_ENV | Node environment. | 'development'
KRSAPP_DB_USERNAME | Database username. | 'root'
KRSAPP_DB_PASSWORD | Database password. | 'rootpassword'
KRSAPP_DB_NAME | Database name will be used. | 'krsapp_local'
KRSAPP_DB_HOST | Database host. | 'localhost'
KRSAPP_DB_PORT | Database running port. | 3306
KRSAPP_DB_DIALECT | Database dialect. For this project, database dialect must be mysql. | 'mysql'