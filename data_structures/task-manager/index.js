let tasks = [
    {
    title: "F2 practice",
    description: "Complete final task",
    isCompleted: false,
    createdDate: new Date(2025, 4, 8),
    completedDate: new Date()
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

function showTask() {
    if (tasks.length === 0) {
        return "Задача отсутствует";
    } else {
        console.log("Текущие задачи:");

        tasks.forEach((task, index) => {
            console.log(`Задача № ${index + 1}:`);
            for (let [key, value] of Object.entries(task)) {
                console.log(`${key}: ${value}`);
            }
        });
    }
}

function setTask() {
    const newTask = {
        title: prompt("Заголовок задачи"),
        description: prompt("Описание задачи"),
        isCompleted: false,
        createdDate: +prompt("Дата создания (timestamp)"),
        completedDate: +prompt("Дата завершения (timestamp)")
    };
        tasks.push(newTask);
        console.log(`Задача добавлена ${newTask}`);
}

function completeTask(index) {
    const task = tasks[index];
    if (!task) {
        console.log("Такой задачи не существует.");
        return;
    }

    task.isCompleted = true;
    task.completedDate = new Date();

    completedTasks.push(task);
    tasks.splice(index, 1);
    completedTaskCount++;
    console.log(`Задача ${index + 1}: выполнена`);
}

function deleteTask(index) {
    const task = tasks[index];
    if (!task.isCompleted) {
        const answer = prompt("Таска еще не выполнена, Удалить?")
        if (answer === "Да") {
            tasks.splice(index, 1);
            console.log("Таска удалена")
        } else {
            console.log("Таска не удалена")
        }
    }
}

function clearTasks() {
    tasks.length = 0;
    console.log("Все задачи удалены.");
}

showTask();
setTask();
completeTask();
deleteTask();
clearTasks();