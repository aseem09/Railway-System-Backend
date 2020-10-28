
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

-- CREATE TABLE destinations (
--     train_number int(10) NOT NULL,
--     station_name varchar(255) NOT NULL,
--     arrival_time TIME(0),
--     departure_time TIME(0),
--     halt_time int(2),
--     PRIMARY KEY (train_number,station_name)
-- )

-- CREATE TABLE tickets(
-- 	id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
--     passenger_id int(11) NOT NULL,
-- 	user_name varchar(255) NOT NULL,
--     age int(3) NOT NULL,
--     gender varchar(10) NOT NULL,
--     pnr_number int(11) NOT NULL,
--     seat_number int(3) NOT NULL,
--     train_number int(10) NOT NULL,
--     fare int(5) NOT NULL,
--     reservation_status varchar(100) NOT NULL,
--     source varchar(255) NOT NULL,
--     destination varchar(255) NOT NULL,
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- CREATE TABLE admin(
-- 	id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
-- 	user_name varchar(255) NOT NULL,
--     user_password varchar(50) NOT NULL,
--     email varchar(100) NOT NULL,
--     age int(3) NOT NULL,
--     gender varchar(10) NOT NULL,
--     address varchar(500) NOT NULL,
--     posting_city varchar(100) NOT NULL,
--     aadhaar_number int(25) NOT NULL,
--     phone_number int(10) NOT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- CREATE TABLE changes_train(
-- 	admin_id int(11) NOT NULL,
-- 	train_number varchar(255) NOT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- CREATE TABLE changes_station(
-- 	admin_id int(11) NOT NULL,
-- 	station_name varchar(255) NOT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;