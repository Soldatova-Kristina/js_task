let task = "jnj"; // переменная с описанием задачи
let completedTaskCount = 4; // переменная для счёта завершённых задач

function showTask() {
    task === ""
        ? console.log("Задача отсутствует")
        : console.log(`Текущая задача: ${task}`);
}

function setTask() {
    if (task !== "") {
        console.log('Не могу добавить задачу, завершите или удалите предыдущую');
    } else {
        task = prompt("Введите новую задачу: ");
        showTask();
    }
}

function completeTask() {
    if (task !== "") {
        console.log(`Задача "${task}" завершена`);
        task = "";
        completedTaskCount++;
    } else {
        console.log("Нет  задач для завершения");
    }
}

function deleteTask() {
    if (task !== "") {
        console.log(`Задача "${task}" удалена`);
        task = "";
    } else {
        console.log("Нет задач для удаления");
    }
}

showTask();       // Вывод текущей задачи
setTask();        // Устанавливаем новую задачу
completeTask();   // Завершаем задачу
deleteTask();     // Удаляем задачу