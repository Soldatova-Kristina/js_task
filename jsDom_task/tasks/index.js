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
//
// const boxOne = document.getElementById("box1");
// console.log(boxOne.textContent);
// const boxTwo = document.getElementById("box2");
// boxTwo.textContent = "Измененный блок 2";
//
// const newDiv = document.createElement("div")
// const container = document.getElementById("container");
//     newDiv.classList.add("box");
//     newDiv.textContent = "Новый блок";
//     container.append(newDiv);
//
// const boxThree = document.getElementById("box3");
// boxThree.classList.add("highlighted");
//
// const boxFour = document.getElementById("box4");
// boxFour.classList.remove("highlighted");
//
// boxOne.setAttribute("data-info", "info1")
//
// boxTwo.removeAttribute("data-info");
//
// container.appendChild(boxThree);
//
// const referenceBox = document.getElementById("referenceBox");
// const newEl = document.createElement("div")
// newEl.classList.add("box");
// newEl.textContent = "Новый блок перед блоком-ссылкой"
// referenceBox.parentNode.insertBefore(newEl, referenceBox);
//
// boxFour.remove();
//
// referenceBox.classList.remove("hidden");
//
// const p = document.createElement("p");
// p.textContent = "Текстовый элемент";
// container.appendChild(p);
//
// const div1 = document.createElement("div");
// const div2 = document.createElement("div");
// const div3 = document.createElement("div");
//
// div1.classList.add("box");
// div2.classList.add("box");
// div3.classList.add("box");
//
// div1.textContent = "Текст 1";
// div2.textContent = "Текст 2";
// div3.textContent = "Текст 3";
//
// container.appendChild(div1);
// container.appendChild(div2);
// container.appendChild(div3);
//
// const newBoxEl = document.createElement("div");
// newBoxEl.classList.add("box");
// newBoxEl.textContent = "Новый блок вместо первого"
// boxOne.replaceWith(newBoxEl);
//
// boxThree.before(boxTwo);
//
// const newBoxEl2 = document.createElement("div");
// newBoxEl2.classList.add("box");
// newBoxEl2.textContent = "Вставленный блок"
// container.insertBefore(newBoxEl2, boxTwo);
//
//
// const clone = boxThree.cloneNode(true);
// container.appendChild(clone);
//
// boxOne.classList.add("highlighted", "box");
//
// boxTwo.classList.toggle("highlighted");
//
// boxThree.parentNode.remove();

// Задание 5

// create header
// const header = document.createElement("header");
// header.classList.add("header");
// document.body.appendChild(header);
//
// // create headerContainer
// const headerContainer = document.createElement("div");
// headerContainer.classList.add("container", "header__container");
// header.appendChild(headerContainer);
//
// // create headerLogo
// const headerImg = document.createElement("img");
// headerImg.classList.add("logo", "header__img");
// headerContainer.appendChild(headerImg);
//
// // headerNavigation
// const headerNavigation = document.createElement("nav");
// headerNavigation.classList.add("header__navigation");
// headerContainer.appendChild(headerNavigation);
//
// const headerNavigationList = document.createElement("ul");
// headerNavigationList.classList.add("header__navigation-list");
// headerNavigation.appendChild(headerNavigationList);
// // ul li a home navigation
// const headerNavigationItemHome = document.createElement("li");
// headerNavigationItemHome.classList.add("header__navigation-item");
// const headerNavigationLinkHome = document.createElement("a");
// headerNavigationLinkHome.classList.add("header__navigation-link");
// headerNavigationLinkHome.textContent = "Home";
// headerNavigationItemHome.appendChild(headerNavigationLinkHome);
// headerNavigationList.appendChild(headerNavigationItemHome);
//
// // ul li a shop navigation
// const headerNavigationItemShop = document.createElement("li");
// headerNavigationItemShop.classList.add("header__navigation-item");
// const headerNavigationLinkShop = document.createElement("a");
// headerNavigationLinkShop.classList.add("header__navigation-link");
// headerNavigationLinkShop.textContent = "Shop";
// headerNavigationItemShop.appendChild(headerNavigationLinkShop);
// headerNavigationList.appendChild(headerNavigationItemShop);
//
// // headerButtons
// const headerButtons = document.createElement("nav");
// headerButtons.classList.add("header__buttons");
// headerContainer.appendChild(headerButtons);
//
// const headerNavigationListButton = document.createElement("ul");
// headerNavigationListButton.classList.add("header__navigation-list");
// headerButtons.appendChild(headerNavigationListButton);
//
// const headerNavigationItemButton = document.createElement("li");
// headerNavigationItemButton.classList.add("header__navigation-item");
// headerNavigationListButton.appendChild(headerNavigationItemButton);
//
// const headerNavigationLinkButton = document.createElement("a");
// headerNavigationLinkButton.classList.add("header__navigation-link");
// headerNavigationItemButton.appendChild(headerNavigationLinkButton);
//
// const buttonImg = document.createElement("img");
// headerNavigationLinkButton.appendChild(buttonImg);
//
// const headerNavigationItemButton2 = document.createElement("li");
// headerNavigationItemButton2.classList.add("header__navigation-item");
// headerNavigationListButton.appendChild(headerNavigationItemButton2);
//
// const headerNavigationLinkButton2 = document.createElement("a");
// headerNavigationLinkButton2.classList.add("header__navigation-link");
// headerNavigationItemButton2.appendChild(headerNavigationLinkButton2);
//
// const buttonImg2 = document.createElement("img");
// headerNavigationLinkButton2.appendChild(buttonImg2);
//
// // Для упрощения
// function headerButtonItemWithImg () {
//     const li = document.createElement("li");
//     li.classList.add("header__navigation-item");
//
//     const a = document.createElement("a");
//     a.classList.add("header__navigation-link");
//
//     const img = document.createElement("img");
//
//     a.appendChild(img);
//     li.appendChild(a);
//
//     return li
// }
// headerNavigationLinkButton.appendChild(headerButtonItemWithImg());
// headerNavigationLinkButton.appendChild(headerButtonItemWithImg());


// Задание 6

// const section = document.createElement("section");
// section.classList.add("products");
// document.body.appendChild(section);
//
// const container = document.createElement("div");
// container.classList.add("container", "products__container");
// section.appendChild(container);
//
// const h2 = document.createElement("h2");
// h2.classList.add("products__title");
// container.appendChild(h2);
//
// const ulProducts = document.createElement('ul');
// ulProducts.classList.add("products__list");
// container.appendChild(ulProducts);
//
//
// function itemProducts () {
// const li = document.createElement("li");
// li.classList.add("products__item");
//
// const article = document.createElement("article");
// article.classList.add("product-card");
//
// const div = document.createElement("div");
// div.classList.add("product-card__info");
//
// const img = document.createElement("img");
// img.classList.add("product-card__image");
//
// const h4 = document.createElement("h4");
// h4.classList.add("product-card__title");
//
// const p = document.createElement("p");
// p.classList.add("product-card-description");
//
// const button = document.createElement("button");
// button.classList.add("product-card__button");
//
// li.appendChild(article);
//
// article.appendChild(div);
// article.appendChild(button);
//
// div.appendChild(img);
// div.appendChild(h4);
// div.appendChild(p);
//
// return li;
// }
//
// ulProducts.appendChild(itemProducts());
// ulProducts.appendChild(itemProducts());
// ulProducts.appendChild(itemProducts());

// ИЛИ

// const products = [
//     {
//         title: 'Product 1',
//         description: 'Description of Product 1',
//         imageUrl: 'https://via.placeholder.com/100',
//         buttonText: 'Buy Now'
//     },
//     {
//         title: 'Product 2',
//         description: 'Description of Product 2',
//         imageUrl: 'https://via.placeholder.com/100',
//         buttonText: 'Buy Now'
//     },
//     {
//         title: 'Product 3',
//         description: 'Description of Product 3',
//         imageUrl: 'https://via.placeholder.com/100',
//         buttonText: 'Buy Now'
//     }
// ];
//
// const productsSection = document.getElementById('products-section');
//
// const productsHTML = `
//   <div class="container products__container">
//     <h2 class="products__title">Our Products</h2>
//     <ul class="products__list">
//       ${products.map(product => `
//         <li class="products__item">
//           <article class="product-card">
//             <div class="product-card__info">
//               <img class="product-card__image" src="${product.imageUrl}" alt="${product.title}" />
//               <h4 class="product-card__title">${product.title}</h4>
//               <p class="product-card__description">${product.description}</p>
//             </div>
//             <button class="product-card__button">${product.buttonText}</button>
//           </article>
//         </li>
//       `).join('')}
//     </ul>
//   </div>
// `;
//
// productsSection.innerHTML = productsHTML;

// Задание 7
// const blockOne = document.getElementById("block1");
// const blockTwo = document.getElementById("block2");
//
// function getEffect (element) {
//     const originalColor = window.getComputedStyle(element).backgroundColor;
//     element.addEventListener("mouseenter", () => {
//         element.style.background = "lightgreen";
//     })
//     element.addEventListener("mouseleave", () => {
//         element.style.background = originalColor
//     })
// }
//
// getEffect(blockOne);
// getEffect(blockTwo);
//
// let timer;
//
// const inputOne = document.getElementById("input1");
// inputOne.addEventListener('input', (e) => {
//     clearInterval(timer);
//     timer = setTimeout(() => {
//         console.log(`${e.target.value}\n`)
//     }, 500)
// })
//
// const inputTwo = document.getElementById("input2");
// inputTwo.addEventListener('input', (e) => {
//     if (!isNaN(e.target.value)) {
//         console.log(`Вы ввели число: ${e.target.value}`);
//     }
// })
//
// const btnOne = document.getElementById("btn1");
// btnOne.addEventListener('click', () => {
//     const h1 = document.querySelector("h1");
//     h1.textContent = "Кнопка 1 нажата"
// })
//
// const btnTwo = document.getElementById("btn2");
// const taskList = document.getElementById("taskList");
//
// function getLastNumber () {
//     const lastLi = document.querySelector("#taskList li:last-child");
//     return parseInt(lastLi.textContent.replace(/\D/g, ''));
// }
//
// taskCount = getLastNumber();
//
// btnTwo.addEventListener('click', () => {
//     taskCount++
// const li = document.createElement("li");
//     li.textContent = `Новая задача ${taskCount}`;
//     taskList.appendChild(li);
// })
//
// taskList.addEventListener('click', (e) => {
//     const li = e.target.closest("li");
//     li.textContent = "Выполнено"
//     li.style.fontWeight = "bold";
// })

// Задание 8

// const changeTextButton = document.getElementById("changeTextButton");
// changeTextButton.addEventListener("click", (e) => {
//     const text = document.getElementById("textToChange");
//     text.textContent = "Текст изменен!";
//     console.log(e.type);
//     console.log(e.target);
// })
//
//     // const inputField = document.getElementById("inputField");
//     // inputField.addEventListener("input", (e) => {
//     //     const logArea = document.getElementById("logArea");
//     //     logArea.textContent = "Введено: " + e.target.value + "\n";
//     // }
//
// const hoverBox = document.getElementById("hoverBox");
//
//
// hoverBox.addEventListener("mouseenter", (e) => {
// hoverBox.style.background = "lightgreen"
//     console.log("Наведение на блок");
// })
//
// hoverBox.addEventListener("mouseleave", (e) => {
//     hoverBox.style.background = "lightblue"
//     console.log("Уход с блока");
// })
//
// const preventLink = document.getElementById("preventLink");
// preventLink.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log("Переход по ссылке отменен")
// })
//
// const body = document.body;
// const logArea = document.getElementById("logArea");
// body.addEventListener("click",  (e) => {
//     const coords = ` Клик: X=${e.clientX}, Y=${e.clientY}`;
//     logArea.textContent = "Введено: " + e.target.value + coords+ "\n";
// })

// Задание 9

const userNameInput = document.getElementById('username');
userNameInput.addEventListener('input', (e) => {
    if (e.target.value.length < 3) {
        e.target.classList.add('input-error');
    }   e.target.classList.remove('input-error');
})


const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    if  (input.id) {
        input.setAttribute('name', input.id);
    }
})

const select = document.querySelectorAll('select');
select.forEach(gender => {
    if (gender.id) {
        gender.setAttribute('name', gender.id);
    }
})

const form = document.getElementById('testForm');
const agreeTerms = document.getElementById('agreeTerms');
form.addEventListener('submit', (e) => {
if (!form.checkValidity() || !agreeTerms.checked) {
    e.preventDefault();
    alert("Заполните все обязательные поля!")
    return
}
    const formData = new FormData(form);
    for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }
})

const logArea = document.getElementById('logArea');
const genderSelect = document.getElementById('gender');
genderSelect.addEventListener('change', (e) => {
    if (e.target.value) {
        logArea.textContent = `Вы выбрали: ${e.target.value}`;
        } else {
        logArea.textContent = '';
    }
})

const formFields = document.querySelectorAll('#testForm input, #testForm select');

formFields.forEach((field) => {
    field.addEventListener('focus', () => {
        logArea.textContent = `Вы редактируете поле: ${field.placeholder || field.id}`;
    });

    field.addEventListener('blur', () => {
        logArea.textContent = '';
    });
});











