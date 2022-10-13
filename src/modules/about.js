import { createElement } from './page-load.js';

function createAboutBingsu() {
    createElement('section', '#about', "aboutSection");
    createElement('div', '.aboutSection', "intro,bingsuIntro");
    createElement('h1', '.bingsuIntro', "", "Shaved Ice");
    createElement('p', '.bingsuIntro', "", "Every bowl of shaved ice is served with sweet toppings using fresh, locally sourced ingredients. Treat yourself to bowls of snowflakes all year long!");
    createElement('img', '.bingsuIntro', "snowflake,menuBtn,link,toMenuPage", "", 'src|images/snowflake-button-menu.svg|alt|Menu Button');
    createElement('div', '.aboutSection', "visual,bingsuVisual");
    createElement('img', '.bingsuVisual', "", "", 'src|images/bingsu-real.jpg|alt|Shaved ice served with mango slices, mango syrup, and condensed milk');
}
function createAboutMacaron() {
    createElement('section', '#about', "aboutSection,aboutMacaron");
    createElement('div', '.aboutMacaron', "visual,macaronVisual");
    createElement('img', '.macaronVisual', "", "", 'src|images/macarons.jpg|alt|Boxes of assorted macarons ready to be gifted');
    createElement('div', '.aboutMacaron', "intro,macaronIntro");
    createElement('h1', '.macaronIntro', "", "Macarons");
    createElement('p', '.macaronIntro', "", "Each macaron is baked with love and care using 100% natural ingredients. Customize your own box of macarons with your favorite flavors!");
    createElement('img', '.macaronIntro', "snowflake,menuBtn,link,toMenuPage", "", 'src|images/snowflake-button-menu.svg|alt|Menu Button');
}
function createAboutBoba() {
    createElement('section', '#about', "aboutSection,aboutBoba");
    createElement('div', '.aboutBoba', "intro,bobaIntro");
    createElement('h1', '.bobaIntro', "", "Bubble Tea");
    createElement('p', '.bobaIntro', "", "Our drinks are made using hand-picked fruits and all natural tapioca pearls. Every flavor is a must-try!");
    createElement('img', '.bobaIntro', "snowflake,menuBtn,link,toMenuPage", "", 'src|images/snowflake-button-menu.svg|alt|Menu Button');
    createElement('div', '.aboutBoba', "visual,bobaVisual");
    createElement('img', '.bobaVisual', "", "", 'src|images/boba.jpg|alt|Assorted bubble tea drinks and fresh fruits');
}

function createAboutPage() {
    createElement('div', '#content', "page", "", 'id|about');
    createAboutBingsu();
    createAboutMacaron();
    createAboutBoba();
}

function loadAbout() {
    createAboutPage();
}

export { loadAbout };