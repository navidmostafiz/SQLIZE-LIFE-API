# SQLIZE-LIFE-API
NodeJs Express MySQL Sequalize RESTful API


## :beetle: The Stack
* NodeJs - 
* Node Express - Restful API
:beetle:
* MySQL- relational DB
* Sequalize - ORM for MySQL
* MySQL Workbench [for developer]
:beetle:
* JWT (JSON Web Token) - local Auth
* BCrypt - hashing encryption for password


## :beetle: INSTALLING
### Install MySQL server: on ubuntu 16.04 LTS
* cmd> sudo apt-get update //updates the list of available packages and their versions
* cmd> sudo apt-get upgrade //installs newer versions of the packages in the system
* cmd> sudo apt-get install mysql-server //install mysql DB server
* cmd> sudo apt-get install mysql-client //install mysql DB client shell
* cmd> sudo apt-get install mysql-workbench //install mysql DB visual client
* cmd> mysql_secure_installation //install secured configuration
* cmd> systemctl status mysql.service //check if running successfully
[user: root, password: ******]
:beetle: START MSYQL CLEINT:
* cmd> mysql -u root -p
:beetle: SHOW ALL DBs:
* mysql> show databases;
:beetle: SELECT DB:
* mysql> use myDBname;
:beetle: CREATE TABLE:
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
:beetle: CREATE TABLE:
INSERT INTO userTable ( firstName, lastName,emailAddress,status,password,role,createdAt,updatedAt)
VALUES   ( "Hatsuni","Miku","hm@gmail.com", "Active","123456","Administrator","2018-01-01","2018-01-02" );    


#### Install Sequalize package & MySQL extension:
* cmd> npm install --save sequelize
* cmd> npm install --save mysql2
* cmd> 
* cmd> 


## :beetle: Build & Start the app
* To start the server and launch api: cmd> npm run start


## Vital Information:

* Unique identifier generations:  UUID1 vs UUID4 [128 bit]
- V1 : guaranteed 2 step uniqueness
- V4 : faster randomness, (2^128) combinations, practically duplication wont happen.

## :beetle: Authors
**Navid Mostafiz**