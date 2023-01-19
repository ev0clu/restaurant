import Background from '../assets/background.jpg';
import PageLogo from '../assets/logo.png';
import Chef1 from '../assets/chef1.jpg';
import Chef2 from '../assets/chef2.jpg';
import Barista from '../assets/barista.jpg';
import GithubLogo from '../assets/github-logo.png';

function createHeader() {
    const header = document.createElement('header');

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('header-title');
    header.appendChild(titleDiv);

    const logo = document.createElement('img');
    logo.classList.add('logo');
    logo.src = PageLogo;
    titleDiv.appendChild(logo);

    const title = document.createElement('h1');
    title.textContent = 'Delicious Dive';
    titleDiv.appendChild(title);

    const menuBar = document.createElement('ul');
    header.appendChild(menuBar);

    const home = document.createElement('li');
    home.classList.add('home');
    home.textContent = 'Home';
    menuBar.appendChild(home);

    const menu = document.createElement('li');
    menu.classList.add('menu');
    menu.textContent = 'Menu';
    menuBar.appendChild(menu);

    const contact = document.createElement('li');
    contact.textContent = 'Contact';
    contact.classList.add('contact');
    menuBar.appendChild(contact);

    return header;
}

function createMain() {
    const main = document.createElement('main');
    const text = document.createElement('p');
    text.textContent = 'Book a table still today!';

    const imageLeftDiv = document.createElement('div');
    const imageLeft = document.createElement('img');
    imageLeftDiv.classList.add('image-left');
    imageLeft.src = Chef1;

    const imageMiddleDiv = document.createElement('div');
    const imageMiddle = document.createElement('img');
    imageMiddleDiv.classList.add('image-middle');
    imageMiddle.src = Barista;

    const imageRightDiv = document.createElement('div');
    const imageRight = document.createElement('img');
    imageRightDiv.classList.add('image-right');
    imageRight.src = Chef2;

    imageLeftDiv.appendChild(imageLeft);
    imageMiddleDiv.appendChild(imageMiddle);
    imageRightDiv.appendChild(imageRight);

    main.appendChild(text);
    main.appendChild(imageLeftDiv);
    main.appendChild(imageMiddleDiv);
    main.appendChild(imageRightDiv);

    return main;
}

function createFooter() {
    const footer = document.createElement('footer');

    const text = document.createElement('p');
    text.classList.add('footer-text');
    const date = new Date().getFullYear();
    text.textContent = `Copyright © Laszlo Kis ${date}`;

    const refLink = document.createElement('a');
    refLink.classList.add('reflink');
    refLink.href = 'https://github.com/ev0clu';
    refLink.target = '_blank';

    const logo = document.createElement('img');
    logo.classList.add('github-img');
    logo.src = GithubLogo;
    logo.alt = 'Github logo';

    footer.appendChild(text);
    footer.appendChild(refLink);

    refLink.appendChild(logo);

    return footer;
}

function createHomePage() {
    const content = document.getElementById('content');
    const body = document.querySelector('body');

    body.style.backgroundImage = `url('${Background}')`;
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
}

export { createHomePage };
