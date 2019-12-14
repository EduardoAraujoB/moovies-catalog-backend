# Overview

It's an project to learn TDD with Jest and Typescript,and will recreate a sistem of a moovie catalog

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
 
  - `NODE_ENV`: Use it to setup your environment
 
**Application Options**
 
  - `APP_PORT`: Use it to set the port of the application
  - `APP_URL`: Uset it to sete the url of the application
  
**Authentication**
 
  - `APP_SECRET`: Use it to set the secret used to generate the tokens of the aplicattion
  - `TOKEN_DURATION`: Use it to set the expiration date of the aplicattion token

**Database**

  - `DB_DIALECT`: use to set the dialect of your database, *if you use a diferent database you'll need to install your dependency*
  - `DB_HOST`: use set where you database is running
  - `DB_USER`: use to set your database user
  - `DB_PASS`: use to set the password of your user
  - `DB_NAME`: use to set the name of you database


## Tests Environment
  
  You can use the `.env.test` to set diferent [environment variables](#environment-variables) to tests, i realy recomended you to use a `sqlite` database in tests to improve the performance


## Scripts

  - `dev`: use to run the application in **development** mode
  - `test`: use to run the **tests** of the application
  - `build`: i don't have an application build script because i'm still working on the project 

  **NOTE**: I'm using sucrase to compile the Typescript

## Code Linters

The code linters used in this project is:
   
   - **Eslint**: used to improve code syntax and report errors
   - **Prettier**: used to enforce code style

You can find the configurations of the linters in your respective configuration file, i'm using `editor config` to set some configs between others editors
