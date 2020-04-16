-- 9. Youngest Employees
-- There are two data tables with employee
-- information: EMPLOYEE and EMPLOYEE_UIN.
-- Query the tables to generate a list of all
-- employees who are less than 25 years old first in
-- order of NAME, then of ID, both ascending. The
-- result should include the UIN followed by
-- the NAME. 
-- Input Format
-- EMPLOYEE
-- Name Type Description
-- ID Integer The ID of the
-- employee. This is a
-- primary key.
-- NAME String The name of the
-- employee having
-- [1, 20] characters.
-- AGE Integer The age of the
-- employee.
-- ADDRESS String The address of the
-- employee having
-- [1, 25] characters.
-- SALARY Integer The salary of the
-- employee.
-- EMPLOYEE_UIN
-- Name Type Description
-- ID Integer The ID of the employee.
-- This is a primary key.
-- UIN String The unique identification
-- number of the employee.

SELECT UIN, employee.name
FROM employee_uin
JOIN employee ON employee_uin.id = employee.id
WHERE employee.age < 25
ORDER BY employee.name ASC, employee.id ASC
;