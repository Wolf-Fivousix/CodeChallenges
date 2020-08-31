/*
- task list stored in database
- a bunch of clients talking to the server
- no users, no authentication, public API, one todo list.

Supported operations: 
LOAD page of tasks
INSERT a new task to the list in any position
DELETE a task from the list
MOVE a task to a new position in the list (“drag and “drop”)

"
"

"
Task A
Task C
Task D
"


Our goal: design the database schema, and API

SCHEMA
Primary Key -> ID
String -> Task Description
Integer -> Order of Task

auto-incrementing ID
good for adding new tasks
not so good for keeping order

we could have some kind of sub ordering.
start with A, B, C, D
want B, A, C, D
we could give B A’s ‘order value’, but now we have to update everything after.

performance with this solution:
LOAD: good performance, query based on order column.
INSERT: fast. (insert at end of list.)
INSERT at position or MOVE: any tasks after the new one needs to be updated.
DELETE: remove entry, fast.


LOAD=> loadTasks(offset = 0)
   Return value would be JSON object with list of offset + 50 tasks.
INSERT=> insertTask(taskDescription, orderOfTask)
Return value is one task object and all the tasks that were updated based on this insertion.
DELETE=> deleteTask(taskID)
Return a success response on deletion.
MOVE=> similar to DELETE + INSERT


Tasks still have ‘order’ property
when you insert between two tasks, new task gets an order that is halfway between those two tasks
A (1), B(2), C(3)
insert between A, B
A (1), D(1.5), B(2), C(3)
And there’s an index on order (logn operation, B-tree or something)

race conditions ? 
both inserting between 1 and 2
first one is 1.5, but second one can’t do that.
one option: return a failure
probably bad user experience
another option:
have some collision handling mechanism
like add some small random value (1.5 => 1.51)

*/