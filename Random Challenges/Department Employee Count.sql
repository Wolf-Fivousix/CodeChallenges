-- Forgot to write down the problem description. Goes like this:
-- Get a list of all the department names and how many employees they have.
-- ALL departments needs to be shown.
-- Order they by employee count and then department name. If two departments
-- have the same count, order alphabetically.

SELECT department.name, count(employee.id) AS howmany
FROM department
LEFT JOIN employee ON employee.dept_id = department.id
GROUP BY department.name
ORDER BY howmany DESC, department.name ASC
;