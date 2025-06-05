// Задача 1, 2
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true;
        if (success) {
            resolve("Операция завершена");
        } else {
            reject("Ошибка операции");
        }
    }, 2000)
})

promise.then((result) => {
    console.log(result)
})
.catch((err) => {
    console.log(err);
})
// Задача 3
function step (message, ms) {
    return new Promise((resolve) =>  setTimeout(() => resolve(message), ms))
}
step("Первый шаг", 1000)
.then((result) => {
    console.log(result)
    return step("Второй шаг", 1000);
})
.then ((result) => {
    console.log(result);
    return step("Третий шаг", 1000);
})
.then(result => {
    console.log(result);
});
// Задача 4
function delay (ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve("Hello, World")
        }, 3000)
    })
}
delay( 3000)
    .then ((result) => console.log(result))
// Задача 5
function getError(message) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, 1000);
    });
}

getError("Шаг 1")
    .then((result) => {
        console.log(result);
        return "Шаг 2";
    })
    .then((step2) => {
        throw new Error("Произошла ошибка: сбой на шаге 2");
        console.log(step2);
        return "Шаг 3";
    })
    .then((step3) => {
        console.log(step3);
    })
    .catch((err) => {
        console.error("Ошибка:", err.message);
    })
    .finally(() => {
        console.log("Цепочка завершена");
    });
// Задача 6
let promise1 = new Promise ((resolve) => {
    setTimeout(() => {
        resolve("Промис 1")
    }, 1000)
})

let promise2 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        reject("Промис 2")
    }, 100)
})

let promise3 = new Promise ((resolve) => {
    setTimeout(() => {
        resolve("Промис 3")
    }, 500)
})

Promise.any([promise1, promise2, promise3])
    .then((result) => {
        console.log("Промисы выполнен:", result);
    })
    .catch((err) => {
        console.log("Промисы не выполнены: ", err);
    })
// Задача 7
let promise4 = new Promise ((resolve) => {
    setTimeout(() => {
        resolve("Промис 4")
    }, 1000)
})

let promise5 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        reject("Промис 5")
    }, 100)
})

let promise6 = new Promise ((resolve) => {
    setTimeout(() => {
        resolve("Промис 6")
    }, 500)
})

Promise.all([promise4, promise5, promise6])
    .then((result) => {
        console.log("Промисы выполнен:", result);
    })
    .catch((err) => {
        console.log("Промисы не выполнены: ", err);
    })
// Задача 8
let promise7 = new Promise ((resolve) => {
    setTimeout(() => {
        resolve("Промис 7")
    }, 1000)
})

let promise8 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        reject("Промис 8")
    }, 100)
})

let promise9 = new Promise ((resolve) => {
    setTimeout(() => {
        resolve("Промис 9")
    }, 500)
})

Promise.allSettled([promise7, promise8, promise9])
    .then((result) => {
        result.forEach((res, index) => {
            if(res.status === "fulfilled") {
                console.log(`Промисы ${index + 7} выполнен:`);
            } else {
                console.log(`Промисы ${index + 7} не выполнен:`);
            }
        })
    })
    .catch((err) => {
        console.log("Промисы не выполнены: ", err);
    })
