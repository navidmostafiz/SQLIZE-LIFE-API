# :beetle: SQLIZE-LIFE-API
NodeJs Express MySQL Sequalize RESTful API

## :beetle: The Stack
| FW/Lib         | Description                                        |
| -------------- | -------------------------------------------------- |
| :large_orange_diamond: **NodeJs**       | [download NodeJs](https://nodejs.org/en/download/) |
| :large_orange_diamond: Node Express | Restful API                                        |
| :large_orange_diamond: MySQL      | relational DB                |
| :large_orange_diamond: Sequalize     | ORM for MySQL                                    |
| :large_orange_diamond: MySQL Workbench       | APMongo visual [for developer use]I                |
| :large_orange_diamond: JWT          | (JSON Web Token) - local Auth                      |
| :large_orange_diamond: BCrypt       | hashing encryption for password                    |


## :beetle: INSTALLATIONS
#### Install MySQL server: on ubuntu 16.04 LTS
```sh
cmd> sudo apt-get update //updates the list of available packages and their versions
cmd> sudo apt-get upgrade //installs newer versions of the packages in the system
cmd> sudo apt-get install mysql-server //install mysql DB server
cmd> sudo apt-get install mysql-client //install mysql DB client shell
cmd> sudo apt-get install mysql-workbench //install mysql DB visual client
cmd> mysql_secure_installation //install secured configuration
cmd> systemctl status mysql.service //check if running successfully
//user: root, password: _any_

// START MSYQL CLIENT:
cmd> mysql -u root -p

// SHOW ALL DBs:
mysql> show databases;

// SELECT DB:
mysql> use myDBname;

// CREATE TABLE:
mysql> CREATE TABLE userTable(
   -> _id INT NOT NULL AUTO_INCREMENT,
   -> firstName VARCHAR(50) NOT NULL,
   -> lastName VARCHAR(50) NOT NULL,
   -> emailAddress VARCHAR(50) NOT NULL ,
   -> status VARCHAR(50) NOT NULL ,
   -> password VARCHAR(100) NOT NULL ,
   -> role VARCHAR(100) NOT NULL ,
   -> createdAt DATE,
   -> updatedAt DATE,
   -> PRIMARY KEY (_id),
   -> UNIQUE (emailAddress)
   -> );
   
// POPULATE TABLE:
INSERT INTO userTable ( firstName, lastName,emailAddress,status,password,role,createdAt,updatedAt)
VALUES   ( "Hatsuni","Miku","hm@gmail.com", "Active","123456","Administrator","2018-01-01","2018-01-02" );    
```

## :beetle: How to clone this project?
#### Goto empty project folder and run the following commands:
```sh
cmd> git clone https://github.com/navidmostafiz/SQLIZE-LIFE-API.git
cmd> npm install
```
#### To start the server and launch app, run the following commands:
```sh
cmd> npm run start
```

## :beetle: Useful Commands
```sh
cmd> npm install --save express
cmd> npm install --save sequelize
cmd> npm install --save mysql2
```

## :beetle: Other Information:
* Unique identifier generations:  UUID1 vs UUID4 [128 bit]
- V1 : guaranteed 2 step uniqueness
- V4 : faster randomness, (2^128) combinations, practically duplication wont happen.

## :beetle: Authors
**Navid Mostafiz**
