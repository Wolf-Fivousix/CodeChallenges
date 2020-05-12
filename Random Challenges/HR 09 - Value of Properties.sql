-- Owned
-- There are two tables in a database of
-- real estate owners. One has
-- ownership information and the other
-- has price information, in millions. An
-- owner may own multiple houses, but
-- a house will have only one owner.
-- Write a query to print the IDs of the
-- owners who have at least 100 million
-- worth of houses and own more than
-- 1 house. The order of output does
-- not matter. The result should be in
-- the format: BUYER_ID
-- TOTAL_WORTH
-- Schema
-- Sample Data Tables
-- house
-- BUYER_ID HOUSE_ID
-- 1 abc123
-- 2 def456
-- 3 abc456
-- 1 def123
-- 2 def789
-- price
-- HOUSE_ID PRICE
-- abc123 60
-- def456 20
-- abc456 120

SELECT buyer_id, SUM(price)
FROM house
JOIN price on price.house_id = house.house_id
GROUP BY buyer_id
HAVING SUM(price) >= 100 AND COUNT(buyer_id) > 1
;