console.log("Hello World");

let Tasks:string[] = [];

function addTask(task:string):number{
    Tasks.push(task);
    console.log("Task " + task + " has been added to the list.");
    return Tasks.length;
}

function listAllTasks():void{
    for(let i = 0; i < Tasks.length; i++){
        console.log(Tasks[i]);
    }
}

function deleteTasks(task:string):number{
    let index:number = Tasks.indexOf(task);
    if(index > -1){
        Tasks.splice(index,1);
        console.log("Task " + task + " deleted from list.")
    } else {
        console.log("Task " + task + " not found in list.");
    }
    return Tasks.length;
}

addTask("Eat lunch");
addTask("Eat dinner");
listAllTasks();
deleteTasks("Eat lunch");
listAllTasks();