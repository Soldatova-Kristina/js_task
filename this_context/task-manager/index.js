let completedTaskCount = 0;
let completedTasks = [];
let idCounter = 0;
const prompt = (msg) => {
    console.log(msg);
    return "some default value";
};

let users = [
    {
        name: prompt("What is your name?"),
        email: prompt("What is your email address?"),
        isAdmin: (prompt("Are you Admin? Y/N") ?? "").toUpperCase() === "Y",
    },
];

let tasks = [
    {
        title: "F2 practice",
        id: ++idCounter,
        description: "Complete final task",
        isCompleted: true,
        createdDate: new Date(2025, 4, 8).toLocaleDateString(),
        completedDate: new Date(2025, 4, 9).toLocaleDateString(),
        deadlineDate: new Date(2025, 4, 9).toLocaleDateString(),
    },
    {
        title: "Learn JS",
        id: ++idCounter,
        description: "Learn JavaScript using the methodology from Reactify ",
        isCompleted: false,
        createdDate: new Date(2025, 2, 23).toLocaleDateString(),
        completedDate: null,
        deadlineDate: new Date(2025, 5, 23).toLocaleDateString(),
    }
];

tasks.forEach(({description, completedDate}) => {
    console.log("Description:", description ?? "No description");
    console.log("Completed Date:", completedDate ?? "No completed");
})

function showTask(tasks) {
    if (tasks.length === 0) {
        console.log("No tasks found.");
        return;
    }

    tasks.forEach(({title, description, isCompleted, createdDate, completedDate, deadlineDate, id}) => {
        console.log(`Title: ${title}`);
        console.log(`ID: ${id}`);
        console.log(`Description: ${description}`);
        console.log("Status:", isCompleted ? "Completed" : "Not completed");
        console.log(`Creation date: ${createdDate}`);
        console.log(`Completed date: ${completedDate}`);
        console.log(`Deadline date: ${deadlineDate}`);

    })
}

const setTask = (() => {
    return function (...newTasks) {
        if (newTasks.length === 0) {
            const newTask = {
                title: prompt("Task title"),
                id: ++idCounter,
                description: prompt("Task description") ?? "No description",
                isCompleted: false,
                createdDate: new Date(prompt("Enter creation date (YYYY-MM-DD)")),
                completedDate: null,
                deadlineDate: new Date(prompt("Enter deadline date (YYYY-MM-DD)")),
            };
            tasks.push(newTask);
            console.log("Task added from prompt:", newTask);
            return newTask;
        } else {
            const tasksWithIds = newTasks.map(task => ({id: ++idCounter, ...task}));
            tasks.push(...tasksWithIds);
            tasksWithIds.forEach(task => console.log(`ID: ${task.id}`));
            return tasksWithIds;
        }
    };
})();

function completeTask(id) {
    const taskId = tasks.findIndex(task => task.id === id);
    const task = tasks[taskId];
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
    tasks.splice(taskId, 1);
    completedTaskCount++;
    console.log(`Task ${task.title}: completed`);
}

function deleteTask(id) {
    const taskId = tasks.findIndex(task => task.id === id);
    let task = tasks[taskId];
    if (!task) {
        console.log("No such task exists.");
        return;
    }

    if (!task.isCompleted) {
        const answer = (prompt("Task not completed yet, delete? (Yes/No)") ?? "").toUpperCase();
        if (answer.trim().toLowerCase() === "yes") {
            tasks = tasks.filter(task => task.id !== id);
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
        if (!task.isCompleted ) {
            console.log(`Reminder: the task ${task.title} is still not completed.`);
        } else {
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
        const now = new Date();
        const created = new Date(task.createdDate);
        const deadlineDate = new Date(task.deadlineDate);

        const msInDay = 1000 * 60 * 60 * 24;

        const daysPassed = Math.floor((now - created) / msInDay);
        const daysLeft = Math.floor((deadlineDate - now) / msInDay);

        if (daysLeft <= 0) {
            console.log(`Today is the deadline for task "${task.title}"!`);
            clearInterval(intervalId);
        } else {
            console.log(`Task "${task.title}": Days passed since creation: ${daysPassed} and ${daysLeft} day(s) until deadline.`);
        }

    }, 10_000);
}

function assignTaskToUser(user, task) {
    function notifyAssignment(task) {
        console.log(`Task "${task.title}" has been assigned to ${this.name} (${this.email})`);
    }
    notifyAssignment.call(user, task);
}

importTasksFromJSON(exportTasksToJSON());
exportTasksToJSON();
showTask(tasks);
const newTask = setTask({
    title: "Auto-created task",
    description: "Inserted manually",
    isCompleted: false,
    createdDate: new Date().toLocaleDateString(),
    completedDate: null,
    deadlineDate: new Date(Date.now() + 86400000).toLocaleDateString()
});
completeTask(newTask[0].id);
deleteTask(newTask[0].id);
assignTaskToUser(users[0], newTask[0]);
remindAboutTask(1, 5);
countdownToDeadline(2);
showTask(tasks);
clearTasks();

