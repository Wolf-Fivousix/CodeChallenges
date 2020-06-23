-- Easy

-- The Employee table holds all employees including their managers. Every employee has an Id, and there is also a column for the manager Id.

-- +----+-------+--------+-----------+
-- | Id | Name  | Salary | ManagerId |
-- +----+-------+--------+-----------+
-- | 1  | Joe   | 70000  | 3         |
-- | 2  | Henry | 80000  | 4         |
-- | 3  | Sam   | 60000  | NULL      |
-- | 4  | Max   | 90000  | NULL      |
-- +----+-------+--------+-----------+
-- Given the Employee table, write a SQL query that finds out employees who earn more than their managers. For the above table, Joe is the only employee who earns more than his manager.

-- +----------+
-- | Employee |
-- +----------+
-- | Joe      |
-- +----------+

SELECT employee.name AS Employee
FROM employee
JOIN employee AS boss ON employee.managerId = boss.id
WHERE employee.salary > boss.salary
;

-- Runtime: 683 ms, faster than 37.41% of MySQL online submissions for Employees Earning More Than Their Managers.
-- Memory Usage: 0B, less than 100.00% of MySQL online submissions for Employees Earning More Than Their Managers.