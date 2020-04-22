CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE Products(
item_id INTEGER NOT NULL AUTO_INCREMENT,
product_name VARCHAR (50),
department_name VARCHAR (50),
price DECIMAL(10,2),
stockQuantity INTEGER (10) NULL,

PRIMARY KEY(item_id)

);


INSERT INTO Products (product_name, department_name, price, stockQuantity)
VALUES
("Logitech G PRO Keyboard", "PC Hardware", 100.00, 100),
("AudioTechnica AT2020", "Musical", 120.00, 150),
("Nintendo Switch", "Video Games", 300.00, 300),
("Nvidia 2080ti", "PC Hardware", 1200.00, 230),
("12 Pack Coke-Zero", "Food and Drinks", 12.00, 1100),
("Fender Thinline Telecaster", "Musical", 650.00, 15),
("Animal Crossing: New Horizons", "Video Games", 60.00, 1200),
("12 Pack Dr.Pepper", "Food and Drinks", 12.00, 230);

SELECT * FROM Products;

