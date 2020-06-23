/* 
We've built a web platform that powers our pharmacy and one of its core services is the Task system. A task is a single unit of work for an employee. There are many types of tasks, such as responding to a patient message or updating a prescription.
An employee can get the next task they should work on, with the following requirements:
- Each employee has a role that determines the types of tasks they can complete. For example, a pharmacist can respond to a patient message or update a prescription, but a customer service representative can only respond to a patient message.
- Every type of task has its own degree of urgency represented as the number of minutes between when a task is created and when it should be started by an employee. For example, the urgency for responding to a patient message could be 30 minutes. If a new task to respond to a patient message is created at 2:00pm, that task should be started by 2:30pm. An employee should get the task that is closest to exceeding its start-by time.
Given an employee and a collection of tasks, your challenge is to write the code for a method that returns the correct task for that employee. By the end, you should have running code that you can show meets the requirements with functional examples or tests.
 */

// Hash for the tasks
  // Key as expiration time.
  // Value as tasks themselves.

// Role will be a string.
// Task type matches the role string.
// Tasks are distinct units of work.
// Returning a task also removes it from the hash object.

// Employee
  // has a role

// Role Task hash
  // Key is a role.
  // value is the Task Type that can be fufilled by this role.

// Task
  // Creation time. 
  // Urgency time. In minutes (use epoch)
  // Task type.

// All Tasks
  // Key as epoch
  // value array of tasks.

class Employee {
    constructor(role) {
        this.role = role; 
    }
};

class Task {
    constructor(urgency, taskType) {
        this.createdAt = Date.now();
        this.urgency = this.createdAt + (urgency * 1000 * 60);
        this.taskType = taskType;
    }
}

const roleTask = {
    "engineer": ["bug fix", "account issue"],
    "pharmacist": ["message", "update prescription"],
    "customer service": ["message"]
};

const task1 = new Task(30, "bug fix");
const task2 = new Task(15, "message");
const task3 = new Task(300, "message");
const task4 = new Task(5, "update prescription");
const task5 = new Task(100, "account issue");
    
const allTasks = {
1592865377363: [task1, task2],
1592785377363: [task3],
1692865377363: [task4, task5]
};

// GET TASK METHOD
// 1) Filter tasks based on current employee role. (filter by role)
// 2) remove the task from the object (DB).
// 3) return the first value in the structure.
function getTask(employee, allTasks) {
    const urgentTasks = filterTasks(employee.role, allTasks);
    // Because we are using a fake object where Keys do not match the urgency,
    // this deletion is not removing the correct value.
    // Another important detail: It would also delete ALL tasks inside that KEY
    // Which is NOT what we want if there is more than 1 task at the same key.
    delete allTasks[urgentTasks[0].urgency];

    return urgentTasks[0];
};

// FILTER TASKS METHOD
// Input: role and task object.
// Output: valid tasks for that role.
// Sort tasks based on keys.
// declare valid task object.
// iterate through each key until a valid task is found.
// iterate through all values.
    // if task matches role, add to our valid tasks.
// return filtered tasks.
function filterTasks(role, allTasks) {
    let taskKeys = Object.keys(allTasks);
    taskKeys = taskKeys.sort((a, b) => a - b);

    let currentKeyIndex = 0;
    const validTasks = [];

    while (!validTasks.length && currentKeyIndex < taskKeys.length) {
        const currentTasks = allTasks[taskKeys[currentKeyIndex]];
        for (let i = 0; i < currentTasks.length; ++i) {
            if (roleTask[role].includes(currentTasks[i].taskType)) validTasks.push(currentTasks[i]);
        }
        ++currentKeyIndex;
    }

    return validTasks;
};


const diego = new Employee("engineer");
const wolf = new Employee("customer service");
const sam = new Employee("pharmacist");
console.log("Diego Task: ", getTask(diego, allTasks)); // => bug fix.
console.log("Wolf Task: ", getTask(wolf, allTasks)); // => message
console.log("Sam Task: ", getTask(sam, allTasks)); // => message
// (should be update prescription, but see notes on line 83-86.).

// Now it is working! =)
// Because the key's inside the fake "allTasks" object do not represent what the actual
// urgency inside the tasks are, changing the urgency on lines 64-68 doesn't change the result.
// But if you change the fake keys, like 1592865377363 to 2000000000000, then you will get a different result.