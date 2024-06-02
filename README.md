# KRS App

## Description
This is an API application to store student's course selection sheet in a university. The concept was simplify due to learning reason.

# Technology
Before running the app, please ensure to install these several technologies:
1. Node v16.17.0
2. MySQL
3. 

## Getting Started
### Prerequisites
Please ensure the Node JS version 16.x running on the server.

### Installation
Install the project dependencies using this command.
```
$ npm install
```

### Setting Environment
Please copy-paste the `.env-example` and rename it to `.env`. After that, adjust the variables' value to desired value. More details about the variables needed will be explained in Environment Variables section below.

### Initializing the Table and Seeder
To initialize the app's database table, you can run the command below.
```
$ npm run init
```
The command will run the migrations and the seeders automatically.

### Running the Application
For running the application, you can use one of these commands.
```
$ npm run dev # for development mode

$ npm start # not development mode
```