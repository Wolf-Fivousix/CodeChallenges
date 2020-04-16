-- 6. Bill Payment Query
-- A database contains customer billing records stored in two
-- tables, FAMILIES and BILLS. Determine the maximum
-- AMOUNT in the BILLS table, then print the NAMEs of all
-- customers who have a bill of that amount. The names may
-- be in any order.
-- Schema
-- Sample Data Tables
-- FAMILIES
-- NAME BILL_ID
-- Julia 9aa8af3678334f0e8f0ebcb22ca46107
-- Samantha 146434f56e564f0aa9d36333b3f20c70
-- John 17f6bc0447064a899e18635d737ea840
-- BILLS
-- ID AMOUNT
-- 17f6bc0447064a899e18635d737ea840 1000
-- 9aa8af3678334f0e8f0ebcb22ca46107 500
-- 146434f56e564f0aa9d36333b3f20c70 1000
-- SAMPLE OUTPUT
-- Samantha
-- John
SELECT name
FROM families
JOIN bills ON bill_id = bills.id
WHERE bills.amount IN (
    SELECT MAX(amount)
    FROM bills
)