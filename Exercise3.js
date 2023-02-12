var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.userTask = [];
    }
    TaskManager.prototype.addTask = function (addedTask) {
        this.userTask.push(addedTask);
        console.log(addedTask + " has been added!");
        console.log("Number of tasks: " + this.userTask.length);
    };
    TaskManager.prototype.listAllTask = function () {
        for (var i = 0; i < this.userTask.length; i++) {
            console.log((i + 1) + ". " + this.userTask[i]);
        }
    };
    TaskManager.prototype.deleteTask = function (RemovedTask) {
        this.userTask.splice(this.userTask.indexOf(RemovedTask), 1);
        console.log("Removed " + RemovedTask);
        console.log("Number of tasks: " + this.userTask.length);
    };
    return TaskManager;
}());
var tasks = new TaskManager;
tasks.addTask("Wash car");
tasks.addTask("Clean windows");
tasks.addTask("Hoover");
tasks.addTask("Clean clothes");
console.log("\n");
tasks.listAllTask();
console.log("\n");
tasks.deleteTask("Hoover");
