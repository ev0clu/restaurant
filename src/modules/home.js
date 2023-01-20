import Chef1 from '../assets/chef1.jpg';
import Chef2 from '../assets/chef2.jpg';
import Barista from '../assets/barista.jpg';

function createHomePage() {
    const home = document.createElement('div');
    home.classList.add('main-home');

    const text = document.createElement('div');
    text.classList.add('text');
    const textTop = document.createElement('p');
    textTop.textContent = 'Book a table still today!';
    const textBottom = document.createElement('p');
    textBottom.textContent = 'Mon - Sun, 10:00am - 10:00pm';

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

    text.appendChild(textTop);
    text.appendChild(textBottom);
    home.appendChild(text);
    home.appendChild(imageLeftDiv);
    home.appendChild(imageMiddleDiv);
    home.appendChild(imageRightDiv);

    return home;
}

function addHomePage() {
    const main = document.querySelector('main');
    main.textContent = '';
    main.appendChild(createHomePage());
}

export { addHomePage, createHomePage };
