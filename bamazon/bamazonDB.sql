DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products(
  item_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  productName VARCHAR(100) NOT NULL,
  departmentName VARCHAR(100) NOT NULL,
  price INT default 0,
  stockQuantity INT default 0
);

SHOW TABLE;