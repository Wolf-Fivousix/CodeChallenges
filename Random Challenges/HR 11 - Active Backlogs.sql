-- There is a database with two tables
-- relating to students at a school. Each
-- student has a unique ID. There is a
-- backlog table that maintains a record
-- of active backlogs for each student.
-- Write a query to print the names of
-- the students who have at least one
-- active backlog. The names should be
-- printed in ascending order. The
-- result should be in the following
-- format: NAME
-- Note: There may be students with
-- the same name but with different
-- IDs.
-- Schema
-- Sample Data Tables
-- student
-- ID NAME
-- 1 Chris
-- 2 Sam
-- 3 Alex
-- backlog
-- STUDENT_ID SUBJECT_ID
-- 1 abc123
-- 3 def456
-- Sample Output
-- Alex
-- Chris

SELECT name
FROM student
WHERE id IN (
    SELECT DISTINCT student_id
    FROM backlog
)
ORDER BY name ASC
;