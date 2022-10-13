import { createElement } from './page-load.js';

function createHeader() {
    createElement('header', '#home');
    createElement('div', 'header', "arrows");
    createElement('div', '.arrows', "arrowShadow,left");
    createElement('img', '.left', "snowflake,arrow", "", 'src|images/snowflake-left.svg|alt|Left navigation arrow');
    createElement('div', '.arrows', "arrowShadow,right");
    createElement('img', '.right', "snowflake,arrow", "", 'src|images/snowflake-right.svg|alt|Right navigation arrow');
    createElement('div', 'header', "images");
    createElement('img', '.images', "", "", 'src|images/bingsu-main.jpg|alt|Mango bingsu');
    createElement('img', '.images', "", "", 'src|images/boba-and-macarons.jpg|alt|Macarons and bubble tea');
    createElement('div', 'header', "parallelogram");
    createElement('div', '.parallelogram', "greeting");
    createElement('div', '.greeting', "premiumLogo");
    createElement('span', '.premiumLogo', "bingsuText", "Bingsu");
    createElement('span', '.premiumLogo', "cafeText", "cafe");
    createElement('span', '.premiumLogo', "premiumText", "PREMIUM");
    createElement('span', '.greeting', "welcome", "WELCOME");
    createElement('span', '.greeting', "slogan", "PREMIUM DESSERT CAFE");
}
function createMenuCards() {
    createElement('section', '#home', "menus,link,toMenuPage");
    createElement('div', '.menus', "menuFace,card");
    createElement('p', '.menuFace', "", "Full Menu");
    createElement('img', '.menuFace', "", "", 'src|images/penguin.svg|alt|Penguin holding a gold spoon');
    createElement('div', '.menus', "bingsuMenu,card");
    createElement('p', '.bingsuMenu', "", "Bingsu");
    createElement('img', '.bingsuMenu', "", "", 'src|images/bingsu-mango.jpg|alt|Mango Bingsu');
    createElement('div', '.menus', "bobaMenu,card");
    createElement('p', '.bobaMenu', "", "Bubble Tea");
    createElement('img', '.bobaMenu', "", "", 'src|images/boba-lychee.svg|alt|Lychee Bubble Tea');
    createElement('div', '.menus', "macaronMenu,card");
    createElement('p', '.macaronMenu', "", "Macarons");
    createElement('img', '.macaronMenu', "", "", 'src|images/macaron-pink.svg|alt|Strawberry Macaron');
}
function createHomePage() {
    createElement('div', '#content', "page", "", 'id|home');
    createHeader();
    createMenuCards();
}

function addHeaderEvents() {
    const header = document.querySelector('header');
    const arrows = document.querySelector('.arrows');
    header.addEventListener('mouseover', () => {
        arrows.setAttribute('style', 'opacity: 1;');
    })
    header.addEventListener('mouseout', () => {
        arrows.setAttribute('style', 'opacity: 0;');
    })
}

function loadHome() {
    createHomePage();
    addHeaderEvents();
}

export { loadHome };