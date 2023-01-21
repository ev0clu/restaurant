class Menu {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

function createMenuList(array, containerName, title, item) {
    const container = document.createElement('div');
    container.classList.add(containerName);
    const heading = document.createElement('h1');
    heading.textContent = title;
    container.appendChild(heading);

    for (let i = 0; i < array.length; i++) {
        const div = document.createElement('div');
        div.classList.add(item);
        const name = document.createElement('p');
        name.textContent = array[i].name;
        const price = document.createElement('p');
        price.textContent = array[i].price;

        div.appendChild(name);
        div.appendChild(price);
        container.appendChild(div);
    }
    return container;
}

function createMenuPage() {
    const dinner = [];
    const dessert = [];
    const drink = [];
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('main-menu');

    dinner.push(new Menu('Grilled Yelowfin Tuna', '$18'));
    dinner.push(new Menu('Grilled Norwegian Salmon Fillet', '$24'));
    dinner.push(new Menu('Salmon Tataki', '$22'));

    dessert.push(new Menu('Chocolate Mousse Cake', '$4.5'));
    dessert.push(new Menu('Tiramisu', '$3.5'));
    dessert.push(new Menu('Cheese Cake', '$4'));

    drink.push(new Menu('Coffee', '$1.5'));
    drink.push(new Menu('Tea', '$1.5'));
    drink.push(new Menu('Wine', '$2'));
    drink.push(new Menu('Beer', '$2'));
    drink.push(new Menu('Bottle of Water', '$1'));

    menuDiv.appendChild(createMenuList(dinner, 'dinner', 'Dinner', 'dinner-item'));
    menuDiv.appendChild(createMenuList(dessert, 'dessert', 'Dessert', 'dessert-item'));
    menuDiv.appendChild(createMenuList(drink, 'drink', 'Drink', 'drink-item'));

    return menuDiv;
}

function addMenuPage() {
    const main = document.querySelector('main');

    main.textContent = '';

    main.appendChild(createMenuPage());
}

export default addMenuPage;
