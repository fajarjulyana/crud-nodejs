create database cruddb;
use cruddb;

CREATE DATABASE IF NOT EXISTS cruddb;

USE cruddb;

CREATE TABLE IF NOT EXISTS data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    alamat VARCHAR(255) NOT NULL
);
