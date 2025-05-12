let tasks = [
    {
    title: "F2 practice",
    description: "Complete final task",
    isCompleted: true,
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

function showTask(tasks) {
    if (tasks.length === 0) {
        console.log("Задачи отсутствуют");
        return;
    }

        tasks.forEach(({title, description, isCompleted, createdDate, completedDate}, index) => {
            console.log(`Задача № ${index + 1}:`);
            console.log(`Заголовок: ${title}`);
            console.log('Статус:', isCompleted ? "Выполнена" : "Не выполнена");
            console.log(`Дата создания: ${createdDate}`);
            console.log(`Дата завершения: ${completedDate}`);
        })
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

showTask(tasks);
setTask();
completeTask();
deleteTask();
clearTasks();