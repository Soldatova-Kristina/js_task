// Заглушка prompt для среды где prompt не реализован
const prompt = (msg) => {
    console.log(msg);
    return "some default value";
};

// Модуль пользователей
const userManager = (() => {
    const users = [];

    const registerUser = (name, email, isAdmin = false) => {
        const user = {name, email, isAdmin, tasks: [] };
        users.push(user);
        return users[users.length - 1];
    };

    const assignTask = (user, task) => {
        function notifyAssignment(task) {
            user.tasks.push(task);
            console.log(`Task "${task.title}" has been assigned to ${user.name} (${user.email})`);
        }
        notifyAssignment.call(user, task);
    };
    const getUsers = () => users;
    return {
        getUsers,
        registerUser,
        assignTask
    };
})();

// Модуль задач
const taskManager = (() => {
    let tasks = [];

    let completedTasks = [];

    let completedTaskCount = 0;

    let idCounter = 0;

    const getTasks = () => tasks;

    const addTask = (title, description, createdDateStr, deadlineDateStr) => {
        const createdDate = new Date(Date.parse(createdDateStr));
        const deadlineDate = new Date(Date.parse(deadlineDateStr));
        const task = {
            id: ++idCounter,
            title,
            description,
            isCompleted: false,
            createdDate,
            completedDate: null,
            deadlineDate
        };
        tasks.push(task);
        return task;
    };

    const completeTask = (id) => {
        try {
            const taskId = tasks.findIndex(task => task.id === id);
            if (taskId === -1) {
                console.error(`Task with ID ${id} not found.`);
            }

            const task = tasks[taskId];
            task.isCompleted = true;
            task.completedDate = new Date();

            completedTasks.push(task);
            tasks.splice(taskId, 1);
            completedTaskCount++;
            console.log(`Task "${task.title}" completed successfully.`);
            console.log("Completed tasks:", completedTasks);
        } catch (err) {
            console.error("Error completing task:", err.message);
        }
    };

    const showTask = () => {
        if (tasks.length === 0) {
            console.log("No tasks found.");
            return;
        }

        tasks.forEach(({title, description, isCompleted, createdDate, completedDate, deadlineDate, id}) => {
            console.log(`ID: ${id}`);
            console.log(`Title: ${title}`);
            console.log(`Description: ${description}`);
            console.log("Status:", isCompleted ? "Completed" : "Not completed");
            console.log(`Creation date: ${createdDate}`);
            console.log(`Completed date: ${completedDate}`);
            console.log(`Deadline date: ${deadlineDate}`);
        });
    };

    const deleteTask = (id) => {
        const taskIndex = tasks.findIndex(task => task.id === id);
        const task = tasks[taskIndex];
        if (!task) {
            console.log("No such task exists.");
            return;
        }

        if (!task.isCompleted) {
            const answer = (prompt("Task not completed yet, delete? (Yes/No)") ?? "").toUpperCase();
            if (answer.trim().toLowerCase() === "yes") {
                tasks.splice(taskIndex, 1);
                console.log("Task deleted");
            } else {
                console.log("Task not deleted");
            }
        }
    };

    const remindAboutTask = (id, seconds) => {
        const intervalId = setInterval(() => {
            const task = tasks.find(task => task.id === id);
            if (!task) {
                console.log(`task with ${id} not found`);
                clearInterval(intervalId);
                return;
            }
            if (!task.isCompleted) {
                console.log(`Reminder: the task ${task.title} is still not completed.`);
            } else {
                clearInterval(intervalId);
            }
        }, seconds * 1000);
    };

    const countdownToDeadline = (id) => {
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
    };

    const clearTasks = () => {
        tasks.length = 0;
        console.log("All tasks deleted");
    };

    const exportTasksToJSON = () => JSON.stringify(tasks);

    const importTasksFromJSON = (json) => {
        try {
            const parsed = JSON.parse(json);
            if (!Array.isArray(parsed))
                console.error("Invalid format");
            tasks = parsed.map(task => ({
                ...task,
                createdDate: new Date(task.createdDate),
                completedDate: task.completedDate ? new Date(task.completedDate) : null,
                deadlineDate: new Date(task.deadlineDate)
            }));
            console.log("Imported");
        } catch (err) {
            console.log("Error:", err.message);
        }
    };

    return {
        getTasks,
        addTask,
        completeTask,
        showTask,
        deleteTask,
        remindAboutTask,
        countdownToDeadline,
        clearTasks,
        exportTasksToJSON,
        importTasksFromJSON
    };
})();

const kristy = userManager.registerUser("Kristy", "krissty@example.com");
const artem = userManager.registerUser("Artem", "artem@example.com");

const task1 = taskManager.addTask("Учить JavaScript", "Выучить основы за месяц", "2025-05-01", "2025-06-01");
const task2 = taskManager.addTask("Стать программистом", "Найти работу", "2025-01-28", "2025-10-01");

userManager.assignTask(kristy, task1);
userManager.assignTask(artem, task2);

console.log("All users:", userManager.getUsers());
console.log("Kristy's tasks:", kristy.tasks);
console.log("Artem's tasks:", artem.tasks);

taskManager.remindAboutTask(task1.id, 10)
taskManager.remindAboutTask(task2.id, 10)

taskManager.countdownToDeadline(task1.id, 10)
taskManager.countdownToDeadline(task2.id, 10);

// Уникальные описания задач
const setDescription = new Set(taskManager.getTasks().map(({description}) => description));

console.log("Unique descriptions:", [...setDescription]);

// Привязка задач к e-mail юзеров
// const map = new Map([
//     [userManager.users[0].email, [taskManager.getTasks()[0]]],
// ]);
// console.log("Tasks for user:", map.get(userManager.users[0].email));


