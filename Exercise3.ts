interface Task {
    userTask: string[];
    addTask(string): void;
    listAllTask() : void;
    deleteTask(string): void;
}

class TaskManager implements Task {
    userTask = [];
    addTask(addedTask: string) {
        this.userTask.push(addedTask);
        console.log(addedTask+ " has been added!");
        console.log("Number of tasks: "+this.userTask.length);
    }
    listAllTask() {
        for(let i = 0; i < this.userTask.length; i++) {
            console.log((i+1)+". "+this.userTask[i]);
        }
    }
    deleteTask(RemovedTask: string) {
        this.userTask.splice(this.userTask.indexOf(RemovedTask), 1);
        console.log("Removed "+RemovedTask);
        console.log("Number of tasks: "+this.userTask.length);
    }
}

let tasks = new TaskManager;

tasks.addTask("Wash car");
tasks.addTask("Clean windows");
tasks.addTask("Hoover");
tasks.addTask("Clean clothes");
console.log("\n");
tasks.listAllTask();
console.log("\n");
tasks.deleteTask("Hoover");