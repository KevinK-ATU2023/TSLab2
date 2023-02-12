var words : string[] = ["Wash car"];

function addTask(task: string) {
    words.push(task);
    console.log(task+ " has been added!");
    console.log("Number of tasks: "+words.length);
}

function listAllTasks() {
    for(let i = 0; i < words.length; i++) {
        console.log((i+1)+". "+words[i]);
    }
}

function deleteTask(task: string) {
    words.splice(words.indexOf(task), 1);
    console.log("Removed "+task);
    console.log("Number of tasks: "+words.length);
}

addTask("Clean windows");
addTask("Hoover");
console.log("\n");
listAllTasks();
console.log("\n");
deleteTask("Hoover");

