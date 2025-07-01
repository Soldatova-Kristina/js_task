const header = document.getElementById('main-header');
const getHeader = document.querySelector('#main-header');
console.log(getHeader);
console.log(header)
// ИЛИ
console.log(document.getElementById('main-header'), document.querySelector('#main-header'));

const navItems = document.getElementsByClassName('nav-item');
const getNavItems = document.querySelectorAll('.nav-item');
console.log(getNavItems);
console.log(navItems);
// ИЛИ
console.log(document.getElementsByClassName('nav-item'), document.querySelectorAll('.nav-item'));

const p = document.getElementsByTagName('p');
const getP = document.querySelectorAll('p');
console.log(p);
console.log(getP);
// ИЛИ
console.log(document.getElementsByTagName('p'), document.querySelectorAll('p'));

const title = document.querySelector('.title')
const getTitle = document.getElementsByClassName('title');
console.log(title);
console.log(getTitle);
// ИЛИ
console.log(document.querySelector('.title'), document.getElementsByClassName('title'));

const a = document.querySelectorAll('a.link');
console.log(a);

const header2 = document.querySelector('#main-header');
const ul = header.querySelector('ul');
console.log(ul);
console.log(header2);
// ИЛИ
console.log(document.querySelector('#main-header ul'));

console.log(document.querySelectorAll('#nav-list li'));

console.log(document.querySelector('.content p'));

console.log(document.querySelectorAll('nav .nav-item'));

console.log(document.querySelector('footer'));

console.log(document.getElementById('link-1'));

console.log(document.querySelectorAll('[href]'));

console.log(document.querySelector('[href="#"]'));

console.log(document.querySelectorAll('.link[id]'));

console.log(document.querySelectorAll('[id^="link-"]'));

console.log(document.querySelectorAll('p:not(.intro)'));

console.log(document.querySelector('h2'));

console.log(document.querySelector('#nav-list li:last-child'));

console.log(document.querySelectorAll('.widget a'));

console.log(document.querySelectorAll('footer *'));