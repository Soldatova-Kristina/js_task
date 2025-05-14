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
    createdDate: new Date(2025, 4, 8),
    completedDate: new Date(),
},
    {
        title: "Happy husband",
        description: "Make a dinner for husband",
        isCompleted: false,
        createdDate: new Date(2025, 4, 9),
        completedDate: new Date()
    }
];
let completedTaskCount = 0;
let completedTasks = [];

tasks.forEach(({description, completedDate}) => {
    console.log("Description:", description ?? "No description");
    console.log("Competed Date:", completedDate?.toLocaleDateString() ?? "No completed");
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
    if (!task.isCompleted) {
        const answer = prompt("Task not completed yet, delete? (Yes/No)")
        if (answer === "Yes") {
            tasks = [...tasks.slice(0, index), ...tasks.slice(index + 1)];
            console.log("Тask deleted")
        } else {
            console.log("Task not deleted")
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

importTasksFromJSON(exportTasksToJSON())
exportTasksToJSON();
showTask(tasks);
setTask();
completeTask();
deleteTask();
clearTasks();