-- Retrieve ID, and full name for people with a full name lenght lesser than 12.
-- Order by name size, lexicographically and ID.

SELECT id, first_name, last_name
FROM customer
WHERE (LENGTH(first_name) + LENGTH(last_name)) < 12
ORDER BY (LENGTH(first_name) + LENGTH(last_name)),
    last_name ASC,
    first_name ASC,
    id ASC

-- Something is off in this solutions, as it was not passing the tests.