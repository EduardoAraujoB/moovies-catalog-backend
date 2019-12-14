# Overview

It's an project to learn TDD with Jest and Typescript,and will recreate a sistem of a moovie catalog

## Sumary

- [Main used Libraries](#main-used-libraries)
- [Environment Variables](#environment-variables)
- [Tests Environment](#tests-environment)
- [Linters](#linters)
- [Scripts](#scripts)


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

## Tests Envinronmet
