import Map from '../assets/map.png';

function createContactPage() {
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('main-contact');

    const contactMap = document.createElement('div');
    contactMap.classList.add('map');
    const mapConent = document.createElement('img');
    mapConent.classList.add('image-map');
    mapConent.src = Map;

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('info');

    const contactCity = document.createElement('div');
    contactCity.classList.add('city');
    const cityIcon = document.createElement('span');
    cityIcon.classList.add('material-symbols-outlined');
    cityIcon.textContent = 'location_on';
    const city = document.createElement('p');
    city.textContent = 'Los Angeles, CA, USA';

    const contactStreet = document.createElement('div');
    contactStreet.classList.add('street');
    const streetIcon = document.createElement('span');
    streetIcon.classList.add('material-symbols-outlined');
    streetIcon.textContent = 'home';
    const street = document.createElement('p');
    street.textContent = 'Seaside Fwy 42';

    const contactPhone = document.createElement('div');
    contactPhone.classList.add('phone');
    const phoneIcon = document.createElement('span');
    phoneIcon.classList.add('material-symbols-outlined');
    phoneIcon.textContent = 'call';
    const phone = document.createElement('p');
    phone.textContent = '202-555-0157';

    const contactTime = document.createElement('div');
    contactTime.classList.add('time');
    const timeIcon = document.createElement('span');
    phoneIcon.classList.add('material-symbols-outlined');
    phoneIcon.textContent = 'event_available';
    const time = document.createElement('p');
    phone.textContent = 'Mon - Sun, 10:00am - 10:00pm';

    contactMap.appendChild(mapConent);

    contactCity.appendChild(cityIcon);
    contactCity.appendChild(city);
    contactInfo.appendChild(contactCity);

    contactStreet.appendChild(streetIcon);
    contactStreet.appendChild(street);
    contactInfo.appendChild(contactStreet);

    contactPhone.appendChild(phoneIcon);
    contactPhone.appendChild(phone);
    contactInfo.appendChild(contactPhone);

    contactTime.appendChild(timeIcon);
    contactTime.appendChild(time);
    contactInfo.appendChild(contactTime);

    contactDiv.appendChild(contactMap);
    contactDiv.appendChild(contactInfo);

    return contactDiv;
}

function addContactPage() {
    const main = document.querySelector('main');

    main.textContent = '';

    main.appendChild(createContactPage());
}

export default addContactPage;
