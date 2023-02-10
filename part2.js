console.log("Hello World");
var Tasks = [];
function addTask(task) {
    Tasks.push(task);
    console.log("Task " + task + " has been added to the list.");
    return Tasks.length;
}
function listAllTasks() {
    for (var i = 0; i < Tasks.length; i++) {
        console.log(Tasks[i]);
    }
}
function deleteTasks(task) {
    var index = Tasks.indexOf(task);
    if (index > -1) {
        Tasks.splice(index, 1);
        console.log("Task " + task + " deleted from list.");
    }
    else {
        console.log("Task " + task + " not found in list.");
    }
    return Tasks.length;
}
addTask("Eat lunch");
addTask("Eat dinner");
listAllTasks();
deleteTasks("Eat lunch");
listAllTasks();
