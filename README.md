# Overview

This project aims to create a system of a moovie catalog

## Sumary

- [Main used Libraries](#main-used-libraries)
- [Environment Variables](#environment-variables)
- [Tests Environment](#tests-environment)
- [Scripts](#scripts)
- [Code Linters](#code-linters)


## Main Used Libraries

**Production**

  - Express
  - Sequelize
  - Yup

**Development**
  
  - Jest
  - Supertest
  - Faker
  - Factory Girl
  - Sucrase
  - Nodemon


## Environment Variables

**Environment**
 
  - `NODE_ENV`: Setup your environment
 
**Application Options**
 
  - `APP_PORT`: Set the port of the application
  - `APP_URL`: The url of the application
  
**Authentication**
 
  - `APP_SECRET`: It's a secret used to generate the tokens of the aplicattion
  - `TOKEN_DURATION`: Use it to set the expiration date of the aplicattion token

**Database**

  - `DB_DIALECT`: Set the dialect of your database, *if you use a diferent database you'll need to install your dependency*
  - `DB_HOST`: Can be used to define where your database is running
  - `DB_USER`: Set your database user
  - `DB_PASS`: The password of your database
  - `DB_NAME`: Defines the name of you database


## Tests Environment
  
  You can use the `.env.test` to setup different [environment variables](#environment-variables) to the tests, and I really recommend you to use a `sqlite` database in tests to improve the performance


## Scripts

  - `dev`: Run the application in **development** mode
  - `test`: Run the **tests** of the application
  - `build`: I don't have an application build script because i'm still working on the project 

  **NOTE**: I'm using sucrase to compile the Typescript

## Code Linters

The code linters used in this project is:
   
   - **Eslint**: Used to improve code syntax and report errors
   - **Prettier**: Used to enforce code style

You can find the configurations of the linters in your respective configuration file, and I'm using `editor config` to set some configs between others editors
