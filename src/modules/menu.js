function createMenuPage() {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('main-menu');
    menuDiv.textContent = 'test';

    return menuDiv;
}

function addMenuPage() {
    const main = document.querySelector('main');

    main.textContent = '';

    main.appendChild(createMenuPage());
}

export default addMenuPage;
