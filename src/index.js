import { loadPage } from './modules/page-load.js';
import { loadHome } from './modules/home.js';
import { loadMenu } from './modules/menu.js';
import { loadContact } from './modules/contact.js';
import { loadAbout } from './modules/about.js';


loadPage();
loadHome();

function addNavEvents() {
    const content = document.querySelector('#content');
    const links = document.querySelectorAll('.link');
    links.forEach((link) => {
        link.addEventListener('click', () => {
            content.lastElementChild.remove();
            switch (true) {
                case link.classList.contains("toMenuPage"):
                    loadMenu();
                    break;
                case link.classList.contains("toAboutPage"):
                    loadAbout();
                    break;
                case link.classList.contains("toHomePage"):
                    loadHome();
                    break;
                case link.classList.contains("toContactPage"):
                    loadContact();
                    break;
            }
            addNavEvents();
        })
    })
}
addNavEvents();