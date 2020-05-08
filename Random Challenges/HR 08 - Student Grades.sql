-- A college stores the ID and Score of every
-- student in the STUDENT table. Write a query to
-- print the ID and Grade associated with a
-- student for each record in the STUDENT table.
-- Each row must contain the STUDENT.ID and
-- StudentGrade in the following format:
-- Sort the output by student ID, ascending.
-- The grades are mapped as follows:
-- If Score < 20, StudentGrade = F
-- If 20 ≤ Score < 40, StudentGrade = D
-- If 40 ≤ Score < 60, StudentGrade = C
-- If 60 ≤ Score < 80, StudentGrade = B
-- If Score ≥ 80, StudentGrade = A
-- Schema
-- STUDENT
-- Name Type Description
-- ID Integer A student ID in
-- the inclusive
-- range [1, 1000].
-- This is the primary
-- key.
-- SCORE Integer Score the student
-- has been
-- awarded. It is in
-- the inclusive
-- range [0, 100].
-- Sample Input
-- STUDENT
--        ID      
--      SCORE    
-- 1 20
-- 2 50
-- 3 50
-- 4 68
-- 5 95
-- Sample Output
-- Student 1 has grade: D
-- Student 2 has grade: C
-- Student 3 has grade: C
-- Student 4 has grade: B
-- Student 5 has grade: A
-- Explanation
-- The student with ID 1 has a Score of 20 and
-- is thus awarded the grade D.
-- The student with ID 2 has a Score of 50 and
-- is thus awarded the grade C.
-- The student with ID 3 has a Score of 50 and
-- is thus awarded the grade C.
-- The student with ID 4 has a Score of 68 and
-- is thus awarded the grade B.
-- The student with ID 5 has a Score of 95 and
-- is thus awarded the grade A.
-- Note that, the students' details are printed in
-- ascending order of their IDs.

SELECT "Student ", id, "has grade: ", if(score < 20, "F", if(score < 40, "D", if(score < 60, "C", if(score < 80, "B", "A"))))
FROM student
;