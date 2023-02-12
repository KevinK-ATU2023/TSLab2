var words = ["Wash car"];
function addTask(task) {
    words.push(task);
    console.log(task + " has been added!");
    console.log("Number of tasks: " + words.length);
}
function listAllTasks() {
    for (var i = 0; i < words.length; i++) {
        console.log((i + 1) + ". " + words[i]);
    }
}
function deleteTask(task) {
    words.splice(words.indexOf(task), 1);
    console.log("Removed " + task);
    console.log("Number of tasks: " + words.length);
}
addTask("Clean windows");
addTask("Hoover");
console.log("\n");
listAllTasks();
console.log("\n");
deleteTask("Hoover");
