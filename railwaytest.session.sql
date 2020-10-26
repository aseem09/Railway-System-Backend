
-- CREATE DATABASE railwaydb;
USE railwaydb;
-- CREATE TABLE trains (
--     train_number int(10) NOT NULL,
--     train_name varchar(255) NOT NULL,
--     seats int(3) NOT NULL,
--     PRIMARY KEY (train_number)
-- );

-- CREATE TABLE bookings(
-- 	user_id int(11) NOT NULL,
-- 	passenger_id int(11) NOT NULL,
--     PRIMARY KEY (user_id)
-- );   

-- CREATE TABLE passengers(
-- 	id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
-- 	user_name varchar(255) NOT NULL,
--     age int(3) NOT NULL,
--     gender varchar(10) NOT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- CREATE TABLE users(
-- 	id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
-- 	user_name varchar(255) NOT NULL,
--     user_password varchar(50) NOT NULL,
--     email varchar(100) NOT NULL,
--     age int(3) NOT NULL,
--     gender varchar(10) NOT NULL,
--     address varchar(500) NOT NULL,
--     city varchar(100) NOT NULL,
--     aadhaar_number int(25) NOT NULL,
--     phone_number int(10) NOT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- CREATE TABLE stations (
--     station_name varchar(255) NOT NULL,
--     city varchar(255) NOT NULL,
--     PRIMARY KEY (station_name)
-- );
-- CREATE TABLE trainStartPoints (
--     train_number int(10) NOT NULL,
--     station_name varchar(255) NOT NULL,
--     PRIMARY KEY (train_number)
-- );

-- CREATE TABLE trainDestinationPoints (
--     train_number int(10) NOT NULL,
--     station_name varchar(255) NOT NULL,
--     PRIMARY KEY (train_number,station_name)
-- );