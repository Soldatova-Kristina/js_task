let users = [
    {
    name: prompt("What is your name?"),
    email:  prompt("What is your email address?"),
    password:  prompt("What is your password?"),
    isAdmin: true
}, {
        name:  prompt("What is your name?"),
        email: prompt("What is your email address?"),
        password:  prompt("What is your password?"),
        isAdmin: true
    }
];

let tasks = [
    {
    title: "F2 practice",
    description: "Complete final task",
    isCompleted: true,
    createdDate: new Date(2025, 4, 8).toLocaleDateString(),
    completedDate: new Date(2025, 4, 9).toLocaleDateString(),
    deadlineDate: new Date(2025, 4, 9).toLocaleDateString(),

},
    {
        title: "Happy husband",
        description: "Make a dinner for husband",
        isCompleted: false,
        createdDate: new Date(2025, 4, 9).toLocaleDateString(),
        completedDate: new Date().toLocaleDateString(),
        deadlineDate: new Date(2025, 5, 23).toLocaleDateString(),
    }
];
let completedTaskCount = 0;
let completedTasks = [];

tasks.forEach(({description, completedDate}) => {
    console.log("Description:", description ?? "No description");
    console.log("Completed Date:", completedDate ?? "No completed");
})

function showTask(tasks) {
    if (tasks.length === 0) {
        console.log("No tasks found.");
        return;
    }

        tasks.forEach(({title, description, isCompleted, createdDate, completedDate}, index) => {
            console.log(`Task № ${index + 1}:`);
            console.log(`Title: ${title}`);
            console.log("Status:", isCompleted ? "Completed" : "Not completed");
            console.log(`Creation date: ${createdDate}`);
            console.log(`Completed date: ${completedDate}`);
        })
    }

function setTask(...newTasks) {
    if (newTasks.length === 0) {
        const newTask = {
            title: prompt("Task title"),
            description: prompt("Task description") ?? "No description",
            isCompleted: false,
            createdDate: new Date(+prompt("Creation date (timestamp)")),
            completedDate: null
        };
        tasks.push(newTask);
        console.log("Task added from prompt:", newTask);
    } else {
        tasks.push(...newTasks);
        console.log(`${newTasks.length} task(s) added from arguments`);
    }
}

function completeTask(index) {
    const task = tasks[index];
    try {
        if (!task) {
            throw new Error("There is no that task");
        }
    } catch (err) {
        console.log(err.message);
        return;
    }
    task.isCompleted = true;
    task.completedDate = new Date();

    completedTasks.push(task);
    tasks.splice(index, 1);
    completedTaskCount++;
    console.log(`Task ${index + 1}: completed`);
}

function deleteTask(index) {
    const task = tasks[index];
    if (!task) {
        console.log("No such task exists.");
        return;
    }

    if (!task.isCompleted) {
        const answer = prompt("Task not completed yet, delete? (Yes/No)");
        if (answer === "Yes") {
            tasks = [...tasks.slice(0, index), ...tasks.slice(index + 1)];
            console.log("Task deleted");
        } else {
            console.log("Task not deleted");
        }
    }
}


function clearTasks() {
    return tasks.length = 0 && "All tasks deleted";
}

const setDescription = new Set(tasks.map(({description}) => description));
const map = new Map([
    [users[0].email, [tasks[0]]],
    [users[1].email, [tasks[1]]]
]);

function exportTasksToJSON() {
return JSON.stringify(tasks);
}

function importTasksFromJSON(jsonStr) {
    try {
        const parse = JSON.parse(jsonStr)
        if (!Array.isArray(parse))
            throw new Error("Incorrect JSON format");
        tasks = parse;
        console.log("Import competed");
    } catch (err) {
        console.log("Import mistake:", err.message);
    }
}

function remindAboutTask(id, seconds) {
    const intervalId = setInterval(() => {
        const task = tasks.find(task => task.id === id);
        if (!task) {
            console.log(`task with ${id} not found`);
            clearInterval(intervalId);
            return;
        }
        if (!task.isCompleted) {
            console.log(`Reminder: the task ${task.title} is still not completed.`);
        }else {
            clearInterval(intervalId);
        }
    }, seconds * 1000)
}

function countdownToDeadline(id) {
    const task = tasks.find(task => task.id === id);

    if (!task) {
        console.log(`Task with id ${id} not found.`);
        return;
    }

    const intervalId = setInterval(() => {
        if (task.isCompleted) {
            console.log(`Task "${task.title}" is already completed.`);
            clearInterval(intervalId);
            return;
        }

        const secondsToDeadline = Math.floor((new Date(task.completedDate) - new Date()) / 1000);

        if (secondsToDeadline <= 0) {
            console.log(`Today is the deadline for task "${task.title}"!`);
            clearInterval(intervalId);
        } else {
            const daysLeft = Math.ceil(secondsToDeadline / (60 * 60 * 24));
            console.log(`Task "${task.title}": ${daysLeft} day(s) until deadline.`);
        }
    }, 1000);
}

function assignTaskToUser () {
   return function notifyAssignment () {

   }
}
importTasksFromJSON(exportTasksToJSON())
exportTasksToJSON();
showTask(tasks);
setTask();
completeTask();
deleteTask();
clearTasks();
remindAboutTask();
countdownToDeadline()