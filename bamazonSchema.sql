DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE DATABASE bamazon_db;

CREATE TABLE products(
  id INTEGER(10) NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100),
  price INTEGER(10),
  stock_quantity INTEGER(10),
  PRIMARY KEY(id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Nike SB RayGuns", "Sneakers", 220, 3);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Nike SB Momma Bears", "Sneakers", 350, 1);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Nike SB Skunks", "Sneakers", 400, 2);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("A Bathing Ape Busy Works Tee", "Apparel", 90, 5);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Supreme Scarface Tee", "Apparel", 120, 3);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Billionare Boys Club Astronaut Tee", "Apparel", 80, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Supreme Box Logo Beanie", "Accessories", 150, 5);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("A Bathing Ape Bookbag", "Accessories", 180, 2);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Supreme Sled", "Accessories", 300, 1);