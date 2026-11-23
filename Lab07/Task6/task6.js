// Task 6: improved To-Do List

const tasks = [];

function addTask(task) {
  if (typeof task !== "string" || task.trim() === "") {
    console.log("Error: cannot add an empty task.");
    return;
  }
  if (tasks.includes(task)) {
    console.log('Error: task "' + task + '" already exists.');
    return;
  }
  tasks.push(task);
  console.log('Added: "' + task + '"');
}

function isValidIndex(index) {
  return Number.isInteger(index) && index >= 0 && index < tasks.length;
}

function markDone(index) {
  if (!isValidIndex(index)) {
    console.log("Error: invalid index " + index + ".");
    return;
  }
  if (tasks[index].startsWith("[Done] ")) {
    console.log("Task " + index + " is already marked done.");
    return;
  }
  tasks[index] = "[Done] " + tasks[index];
  console.log("Marked done: " + tasks[index]);
}

function updateTask(index, newText) {
  if (!isValidIndex(index)) {
    console.log("Error: invalid index " + index + ".");
    return;
  }
  tasks[index] = newText;
  console.log("Updated task " + index + " to: " + newText);
}

// Returns (does not print) the number of tasks not yet done
function countPending() {
  let count = 0;
  for (let i = 0; i < tasks.length; i++) {
    if (!tasks[i].startsWith("[Done] ")) {
      count++;
    }
  }
  return count;
}

function clearTasks() {
  // tasks = [] would throw an error because tasks is const.
  // Setting length to 0 empties the SAME array in place, so the reference
  // does not change and const is not violated.
  tasks.length = 0;
  console.log("All tasks cleared.");
}

// ---------- Testing ----------
addTask("Finish lab report");
addTask("Study for ICT quiz");
addTask("");                      // empty -> refused
addTask("Finish lab report");     // duplicate -> refused
addTask("Buy groceries");
addTask("Call a friend");

markDone(1);
markDone(10);                     // invalid -> error
updateTask(2, "Buy vegetables");
updateTask(-1, "Nothing");        // invalid -> error

console.log("Current tasks:", tasks);
console.log("Pending tasks:", countPending());

clearTasks();
console.log("After clearing:", tasks, "| Pending:", countPending());
