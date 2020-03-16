-- Database Challange
-- ========================================
-- 10.1) Write SQL (DDL/DML) to create database tables to store the basic details of eCommerce cart order details such as order number, customer name, address, Ordered product names, Ordered product price, Ordered product image, and Ordered product category,  order total and order tax, for a website.
CREATE TABLE cart (
    order_number int,
    customer_name varchar(255),
    address varchar(255),
    order_tax int
);
CREATE TABLE item (
    product_name varchar(255),
    product_price int,
    product_image varchar(255),
    product_category int,
);
CREATE TABLE orders (
    cart_id int,
    item_id int
);
-- 10.2)How would you populate the above create the order with a large set of random for testing (about 10000+ orders), You can simply enter text explnation of your solution, do not have to write actaul SQL or scripts to achive this
Each cart is an order and each item in the catalog has its own table. Each order can hold multiple items by the joint table.
By creating a new cart and creating multiple entries in the ORDERS table, we automatically have carts with items attached to it.
Therefore we can create multiple sequential items, carts and orders for testing purposes.

-- With tables created at 10.1) with test data added at 10.2) write finish following problem using SQL (DDL/DML)
-- Find the top ten sold product with a total of the amount.
SELECT item.product_name, count(*)
FROM orders
JOIN item ON item.id = orders.item_id
GROUP BY item.id ASC
ORDER BY count(*)
LIMIT 10;

-- Find the top five buyers sorted by their spending on eCommerce
SELECT cart.customer_name, SUM(item.produce_price)
FROM cart
JOIN orders ON cart.id = orders.cart_id
JOIN item ON item.id = orders.item_id
GROUP BY cart.customer_name
ORDER BY SUM(item.product_price)
LIMIT 5