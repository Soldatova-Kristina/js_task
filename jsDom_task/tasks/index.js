// const header = document.getElementById('main-header');
// const getHeader = document.querySelector('#main-header');
// console.log(getHeader);
// console.log(header)
// // ИЛИ
// console.log(document.getElementById('main-header'), document.querySelector('#main-header'));
//
// const navItems = document.getElementsByClassName('nav-item');
// const getNavItems = document.querySelectorAll('.nav-item');
// console.log(getNavItems);
// console.log(navItems);
// // ИЛИ
// console.log(document.getElementsByClassName('nav-item'), document.querySelectorAll('.nav-item'));
//
// const p = document.getElementsByTagName('p');
// const getP = document.querySelectorAll('p');
// console.log(p);
// console.log(getP);
// // ИЛИ
// console.log(document.getElementsByTagName('p'), document.querySelectorAll('p'));
//
// const title = document.querySelector('.title')
// const getTitle = document.getElementsByClassName('title');
// console.log(title);
// console.log(getTitle);
// // ИЛИ
// console.log(document.querySelector('.title'), document.getElementsByClassName('title'));
//
// const a = document.querySelectorAll('a.link');
// console.log(a);
//
// const header2 = document.querySelector('#main-header');
// const ul = header.querySelector('ul');
// console.log(ul);
// console.log(header2);
// // ИЛИ
// console.log(document.querySelector('#main-header ul'));
//
// console.log(document.querySelectorAll('#nav-list li'));
//
// console.log(document.querySelector('.content p'));
//
// console.log(document.querySelectorAll('nav .nav-item'));
//
// console.log(document.querySelector('footer'));
//
// console.log(document.getElementById('link-1'));
//
// console.log(document.querySelectorAll('[href]'));
//
// console.log(document.querySelector('[href="#"]'));
//
// console.log(document.querySelectorAll('.link[id]'));
//
// console.log(document.querySelectorAll('[id^="link-"]'));
//
// console.log(document.querySelectorAll('p:not(.intro)'));
//
// console.log(document.querySelector('h2'));
//
// console.log(document.querySelector('#nav-list li:last-child'));
//
// console.log(document.querySelectorAll('.widget a'));
//
// console.log(document.querySelectorAll('footer *'));

// Задание 2
// const section2 = document.getElementById('section-2');
// console.log(section2.parentNode);
//
// const sectionTitle = document.querySelector('.section-title');
// console.log(sectionTitle.parentNode);
// console.log(sectionTitle.nextElementSibling);
//
// const footer = document.getElementById('footer');
// console.log(footer.children);
// console.log(footer.parentNode.childNodes)
// if (footer.nextElementSibling) {
//    console.log(footer.nextElementSibling);
// } else {
//     console.log('Нет элемента')
// }
//
// const mainContent = document.getElementById('main-content');
// console.log(mainContent.firstChild);
// console.log(mainContent.lastChild);
// console.log(mainContent.lastChild.previousSibling);
//
// const sectionOne = document.getElementById('section-1');
// console.log(sectionOne.children);
// console.log(sectionOne.nextElementSibling);
//
// const description = document.querySelector('.description');
// console.log(description.nextElementSibling);
// console.log(description.parentNode.lastChild);
//
// const header = document.getElementById('header');
// console.log(header.firstChild.nextSibling);
//
// console.log(document.getElementById('section-2').previousElementSibling)
//
// console.log(document.getElementById('footer').parentNode);
//
// console.log(document.querySelector('.description').parentNode);
//
// console.log(document.getElementById('main-content').parentNode);
//
// console.log(document.getElementById('header').childNodes)
//
// console.log(document.querySelector('#section-2 .section-title').parentNode);

// Задание 3
//
// const text = document.getElementById("text");
// console.log(text.textContent = "Новый текст!");
//
// const container = document.getElementById("container");
// console.log(container.innerHTML = "<p>Новый параграф</p>");
//
// const button = document.getElementById("button");
// console.log(button.outerHTML = "<strong>Кнопка удалена</strong>")
//
// console.log(text.textContent);
// console.log(text.innerHTML = "<b>Жирный текст</b>");
//
// const image = document.getElementById("image");
// image.setAttribute("src", "new-image.jpg");
//
// const link = document.getElementById("link");
// console.log(link.getAttribute("href"));
// link.removeAttribute("target");
// link.setAttribute("title", "Моя ссылка");
//
// console.log(image.hasAttribute("alt"));
// button.classList.add("active");
// button.classList.remove("btn");
//
// text.classList.toggle("highlight")
//
// console.log(text.classList.contains("highlight"));
//
// button.classList.add("primary", "rounded");
//
// text.style.color = "blue";
//
// image.style.width = "300px";
//
// button.style.cssText = "";
//
// console.log(getComputedStyle(text).color);
//
// container.style.backgroundColor = "#f0f0f0";

// Задание 4

const boxOne = document.getElementById("box1");
console.log(boxOne.textContent);
const boxTwo = document.getElementById("box2");
boxTwo.textContent = "Измененный блок 2";

const newDiv = document.createElement("div")
const container = document.getElementById("container");
    newDiv.classList.add("box");
    newDiv.textContent = "Новый блок";
    container.append(newDiv);

const boxThree = document.getElementById("box3");
boxThree.classList.add("highlighted");

const boxFour = document.getElementById("box4");
boxFour.classList.remove("highlighted");

boxOne.setAttribute("data-info", "info1")

boxTwo.removeAttribute("data-info");

container.appendChild(boxThree);

const referenceBox = document.getElementById("referenceBox");
const newEl = document.createElement("div")
newEl.classList.add("box");
newEl.textContent = "Новый блок перед блоком-ссылкой"
referenceBox.parentNode.insertBefore(newEl, referenceBox);

boxFour.remove();

referenceBox.classList.remove("hidden");

const p = document.createElement("p");
p.textContent = "Текстовый элемент";
container.appendChild(p);

const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");

div1.classList.add("box");
div2.classList.add("box");
div3.classList.add("box");

div1.textContent = "Текст 1";
div2.textContent = "Текст 2";
div3.textContent = "Текст 3";

container.appendChild(div1);
container.appendChild(div2);
container.appendChild(div3);

const newBoxEl = document.createElement("div");
newBoxEl.classList.add("box");
newBoxEl.textContent = "Новый блок вместо первого"
boxOne.replaceWith(newBoxEl);

boxThree.before(boxTwo);

const newBoxEl2 = document.createElement("div");
newBoxEl2.classList.add("box");
newBoxEl2.textContent = "Вставленный блок"
container.insertBefore(newBoxEl2, boxTwo);


const clone = boxThree.cloneNode(true);
container.appendChild(clone);

boxOne.classList.add("highlighted", "box");

boxTwo.classList.toggle("highlighted");

boxThree.parentNode.remove();
