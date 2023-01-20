import './assets/style.css';

import { addHomePage } from './modules/home';
import addContactPage from './modules/contact';
import initPage from './modules/init';

initPage();

const menuBar = document.querySelectorAll('li');

menuBar.forEach((link) => {
    link.addEventListener('click', () => {
        if (link.classList.contains('home')) {
            addHomePage();
        } /*else if (link.classList.contains('menu')) {
            createMenuPage();
        } */ else if (link.classList.contains('contact')) {
            addContactPage();
        }
    });
});
