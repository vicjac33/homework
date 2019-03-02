DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products(
  item_id PRIMARY KEY NOT NULL AUTO_INCREMENT,
  productName VARCHAR(100) NOT NULL,
  departmentName VARCHAR(100) NOT NULL,
  price INT default 0,
  stockQuantity INT default 0
);
