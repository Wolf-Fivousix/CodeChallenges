-- A travel and tour company has two
-- tables relating to customers: FAMILIES
-- and COUNTRIES. Each tour offers a
-- discount if a minimum number of
-- people book at the same time.
-- Write a query to print the maximum
-- number of discounted tours any one
-- family can choose from.
-- Schema
-- Sample Data Tables
-- FAMILI ID
-- c00dac11bde74750b4d207b9c182a85
-- eb6f2d3426694667ae3e79d6274114a
-- COUNTRIE ID
-- 023fd23615bd4ff4b2ae0a13ed7efec9
-- be247f73de0f4b2d810367cb26941fb9
-- 3e85ab80a6f84ef3b9068b21dbcc54b
-- Sample Output
-- 3
-- Explanation
-- The Thomas family can choose from
-- any of the 3 tours and qualify for the
-- discount. The Gray family only
-- qualifies for 1.

SELECT COUNT(*)
FROM families
JOIN countries ON family_size >= countries.min_size
GROUP BY families.name
ORDER BY COUNT(*) DESC
LIMIT 1