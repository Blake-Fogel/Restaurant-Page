import './styles.css';
import loadHome from './tabs/Home';
import loadMenu from './tabs/Menu';
import loadContact from './tabs/Contact';
const contentContainer = document.getElementById('content');
const homeButton = document.getElementById('home-button');
const menuButton = document.getElementById('menu-button');
const contactButton = document.getElementById('contact-button');

homeButton.addEventListener('click', (event) => {
    contentContainer.innerHTML = '';
    loadHome.call(contentContainer);
});
menuButton.addEventListener('click',(event) => {
    contentContainer.innerHTML = '';
    loadMenu.call(contentContainer);
});
contactButton.addEventListener('click',(event) => {
    contentContainer.innerHTML = '';
    loadContact.call(contentContainer);
})
//loadHome.call(contentContainer);
//loadMenu.call(contentContainer);
loadContact.call(contentContainer);