// Example 1:
// training_window: 10 days
// employee: {start_day: 100}
// check_day: 104
// result: {name: "pending", days_overdue: 0}

//              |<-----------------------training window------------------->|
// Time:  |-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
// Days: 99    100   101   102   103   104   105   106   107   108   109   110   111
//              |                       |
//          start_day                check_day


// Example 2:
// training_window: 10 days
// employee: {start_day: 100, trained_day: 105}
// check_day: 110
// result: {name: "completed", days_overdue: 0}

//              |<-----------------------training window------------------->|
// Time:  |-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
// Days: 99    100   101   102   103   104   105   106   107   108   109   110   111
//              |                             |                             |
//          start_day                    trained_day                    check_day

// Example 3:
// training_window: 5 days
// employee: {start_day: 100, trained_day: 107}
// check_day: 110
// result: {name: "completed", days_overdue: 0}

//              |<------training window------>|
// Time:  |-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
// Days: 99    100   101   102   103   104   105   106   107   108   109   110   111
//              |                                         |                 |
//          start_day                                trained_day         check_day

// Example 4:
// training_window: 5 days
// employee: {start_day: 100, trained_day: 109}
// check_day: 106
// result: {name: "overdue", days_overdue: 1}

//              |<------training window------>|
// Time:  |-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
// Days: 99    100   101   102   103   104   105   106   107   108   109   110   111
//              |                                   |                 |
//          start_day                           check_day         trained_day

// (employee, training_window, check_day)           -> (status)

// {"start_day": 100                    }, 10,  99  -> {"name": "not_required", "days_overdue": 0}
// {"start_day": 100                    }, 10, 104  -> {"name": "pending",      "days_overdue": 0}
// {"start_day": 100, "trained_day": 105}, 10, 110  -> {"name": "completed",    "days_overdue": 0}
// {"start_day": 100, "trained_day": 107},  5, 110  -> {"name": "completed",    "days_overdue": 0}
// {"start_day": 100, "trained_day": 109},  5, 106  -> {"name": "overdue",      "days_overdue": 1}


// // {"start_day": 100                    }, 10, 104, 108  -> {"name": "pending",      "days_overdue": 0}
// // {"start_day": 100                    }, 10, 108  -> {"name": "pending",      "days_overdue": 0}

/*
check_day before start day

no "trained day"
  calculate "end day"
  compare check_day with end_day and return either "pending" or "overdue"

yes trained
  compare check_day to trained_day and return "completed" if within the window 
      or "overdue" if outside the window
*/


function checkEmployeeTraining(employee, training_window, check_day) {
  if (check_day < employee["start_day"]) return {"name": "not_required", "days_overdue": 0}

  const end_day = employee["start_day"] + training_window

  // Employee has not completed their training
  if (employee["trained_day"] === undefined || check_day < employee["trained_day"]) {
    if (check_day < end_day) return {"name": "pending", "days_overdue": 0}
    else return {"name": "overdue",      "days_overdue": (check_day - end_day)}
  }

  // Employee has completed their training
  if (employee["trained_day"] < check_day) return {"name": "completed",    "days_overdue": 0}
}

// -> {"name": "not_required", "days_overdue": 0}
// -> {"name": "pending",      "days_overdue": 0}
// -> {"name": "completed",    "days_overdue": 0}
// -> {"name": "completed",    "days_overdue": 0}
// -> {"name": "overdue",      "days_overdue": 1}

console.log(checkEmployeeTraining({"start_day": 100                    }, 10,  99))
console.log(checkEmployeeTraining({"start_day": 100                    }, 10, 104))
console.log(checkEmployeeTraining({"start_day": 100, "trained_day": 105}, 10, 110))
console.log(checkEmployeeTraining({"start_day": 100, "trained_day": 107},  5, 110))
console.log(checkEmployeeTraining({"start_day": 100, "trained_day": 109},  5, 106))





/*
Employee:
{
  ...
  group_id: string, // Indicates the group to which the employee belongs
}

Group:
{
  id: string, // Unique identifier for the group
  parent_id: string (optional), // ID of the parent group, if any
  child_ids: Array<string>, // IDs of the child groups
}

Datapoint:
{
  group_id: string,
  num_employees: number,
  total_days_overdue: number,
}
*/

/**
 * This function returns the total days overdue for training completion for each
 * group, considering both direct and indirect (i.e., through sub-groups)
 * employee memberships.
 *
 * @param {Array<Employee>} employees
 * @param {Object<string, Group>} groupsById - A dictionary mapping a group id to the corresponding Group.
 * @param {number} trainingWindow - Duration (number of days) employees have to complete their training.
 * @param {number} checkDay - The day for which we are checking the training statuses.
 *
 * @return {Array<Datapoint>} - A list of Datapoints, one for each Group.
 */
 function getTotalDaysOverdueByGroups(
  employees,
  groupsById,
  trainingWindow,
  checkDay
) {  
/*
Calculate what employees are overdue and add the results to a group hash

Compute which groups belong to which other and aggregate the overdues

*/

  const groupsTable = {}
  employees.forEach(employee => {
    const overdueDays = checkEmployeeTraining(employee, trainingWindow, checkDay).days_overdue

    if (!groupsTable[employee["group_id"]]) {
      groupsTable[employee["group_id"]] = { num_employees: 1, total_days_overdue: overdueDays }
    }
    else groupsTable[employee["group_id"]] = {
      num_employees: groupsTable[employee["group_id"]]["num_employees"] + 1,
      total_days_overdue: groupsTable[employee["group_id"]]["total_days_overdue"] + overdueDays,
    }
  })

  console.log(`Groups Table: ${JSON.stringify(groupsTable)}`)

  const groupRelations = {}

  Object.entries(groupsById).forEach(([groupId, group]) => {
    groupRelations[groupId] = [groupId]
    let currentChildren = group.child_ids

    while (currentChildren.length) {
        const currentGroup = currentChildren.shift()
        groupRelations[groupId].push(currentGroup)

        // There IS A POSSIBILITY for a circular dependency. We would have to account that by either checking the children already passed
        //OR by using a hash instead of a simple array. I'll consider we are not dealing with circular references now.
        groupsById[currentGroup].child_ids.forEach(childGroup => {
            currentChildren.push(childGroup)
        })
    }
  })

  console.log("groupRelations: " + JSON.stringify(groupRelations))

  // Last step
  // Now we have list of all the overudes by group and all groups and their children included.
  // Iterate through the list of groups and children, and format the return with tha aggregation of all the overdues in each group.

    const result = []
    Object.keys(groupRelations).forEach(group => {
        const childGroupsToAggregate = groupRelations[group]
        const groupResult = {
            group_id: group,
            num_employees: 0,
            total_days_overdue: 0,
        }
        childGroupsToAggregate.forEach(childGroup => {
            groupResult.num_employees += groupsTable[childGroup].num_employees
            groupResult.total_days_overdue += groupsTable[childGroup].total_days_overdue
        })

        // console.log(`banana - ${JSON.stringify(groupResult)}`)
        result.push(groupResult)
    })

  return result;
}



// Example:
const trainingWindow = 10;
const checkDay = 120;

// Note: In this example, no one did training!
const employees = [
  { start_day: 100, group_id: "a" }, // days_overdue: 10
  { start_day: 105, group_id: "b" }, // days_overdue: 5
  { start_day: 110, group_id: "b" }, // days_overdue: 0
  { start_day: 105, group_id: "c" }, // days_overdue: 5
];

const groupsById = {
  a: { id: "a", child_ids: ["b"] },
  b: { id: "b", parent_id: "a", child_ids: ["c"] },
  c: { id: "c", parent_id: "b", child_ids: [] },
};

const result = getTotalDaysOverdueByGroups(
  employees,
  groupsById,
  trainingWindow,
  checkDay
);
console.log(result);

/*
Expected Output:
[
  { group_id: "a", num_employees: 4, total_days_overdue: 20 },
  { group_id: "b", num_employees: 3, total_days_overdue: 10 },
  { group_id: "c", num_employees: 1, total_days_overdue: 5 }
]
*/

// 1) Given a list of employees, a starting date and a day where the training assigned to them is checked. Return a list of status for their training.
// If they are overdue, indicate by how many days.
// 2) Given a list of training overdue employees, and what group they belong to, calculate how many employees are in each group and a sum of all their overdue dates.
// Note - Groups can have "child groups", those should be accounted as well.