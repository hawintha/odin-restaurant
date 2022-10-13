import { createElement } from './page-load.js';

function createBingsuSection() {
    createElement('section', '#menu', "bingsuSection");
    createElement('div', '.bingsuSection', "bingsu,strawberry");
    createElement('p', '.strawberry', "", "Strawberry");
    createElement('img', '.strawberry', "bingsuVector", "", 'src|images/bingsu-strawberry.jpg|alt|Strawberry bingsu');
    createElement('div', '.bingsuSection', "bingsu,mango");
    createElement('p', '.mango', "", "Mango");
    createElement('img', '.mango', "bingsuVector", "", 'src|images/bingsu-mango.jpg|alt|Mango bingsu');
    createElement('div', '.bingsuSection', "bingsu,blueberry");
    createElement('p', '.blueberry', "", "Blueberry");
    createElement('img', '.blueberry', "bingsuVector", "", 'src|images/bingsu-blueberry.jpg|alt|Blueberry bingsu');
    createElement('div', '.bingsuSection', "bingsu,greenTea");
    createElement('p', '.greenTea', "", "Green Tea");
    createElement('img', '.greenTea', "bingsuVector", "", 'src|images/bingsu-matcha.jpg|alt|Green tea bingsu');
    createElement('div', '.bingsuSection', "bingsu,macchiato");
    createElement('p', '.macchiato', "", "Caramel Macchiato");
    createElement('img', '.macchiato', "bingsuVector", "", 'src|images/bingsu-macchiato.jpg|alt|Caramel macchiato bingsu');
    createElement('div', '.bingsuSection', "bingsu,berries");
    createElement('p', '.berries', "", "Mixed Berries");
    createElement('img', '.berries', "bingsuVector", "", 'src|images/bingsu-berries.jpg|alt|Mixed berries bingsu');
    createElement('div', '.bingsuSection', "bingsu,chocolateBanana");
    createElement('p', '.chocolateBanana', "", "Chocolate Banana");
    createElement('img', '.chocolateBanana', "bingsuVector", "", 'src|images/bingsu-chocolate-banana.jpg|alt|Chocolate banana bingsu');
    createElement('div', '.bingsuSection', "bingsu,chocolate");
    createElement('p', '.chocolate', "", "Chocolate");
    createElement('img', '.chocolate', "bingsuVector", "", 'src|images/bingsu-chocolate.jpg|alt|Chocolate bingsu');
}

function createMacaronSection() {
    createElement('section', '.sides', "side,macaronSection");
    createElement('div', '.macaronSection', "blueMacaron");
    createElement('img', '.blueMacaron', "", "", 'src|images/macaron-blue.svg|alt|Blue Vanilla Macaron');
    createElement('div', '.macaronSection', "greenMacaron");
    createElement('img', '.greenMacaron', "", "", 'src|images/macaron-green.svg|alt|Matcha Macaron');
    createElement('div', '.macaronSection', "pinkMacaron");
    createElement('img', '.pinkMacaron', "", "", 'src|images/macaron-pink.svg|alt|Strawberry Macaron');
    createElement('div', '.macaronSection', "purpleMacaron");
    createElement('img', '.purpleMacaron', "", "", 'src|images/macaron-purple.svg|alt|Blackberry Macaron');
    createElement('div', '.macaronSection', "redMacaron");
    createElement('img', '.redMacaron', "", "", 'src|images/macaron-red.svg|alt|Red Velvet Macaron');
    createElement('div', '.macaronSection', "yellowMacaron");
    createElement('img', '.yellowMacaron', "", "", 'src|images/macaron-yellow.svg|alt|Lemon Macaron');
}
function createBobaSection() {
    createElement('section', '.sides', "side,bobaSection");
    createElement('div', '.bobaSection', "boba,purpleBoba");
    createElement('img', '.purpleBoba', "", "", 'src|images/boba-purple.svg|alt|Taro Bubble Tea');
    createElement('div', '.bobaSection', "boba,redBoba");
    createElement('img', '.redBoba', "", "", 'src|images/boba-red.svg|alt|Strawberry Bubble Tea');
    createElement('div', '.bobaSection', "boba,brownBoba");
    createElement('img', '.brownBoba', "", "", 'src|images/boba-brown.svg|alt|Brown Sugar Bubble Tea');
    createElement('div', '.bobaSection', "boba,orangeBoba");
    createElement('img', '.orangeBoba', "", "", 'src|images/boba-orange.svg|alt|Mango Bubble Tea');
    createElement('div', '.bobaSection', "boba,yellowBoba");
    createElement('img', '.yellowBoba', "", "", 'src|images/boba-yellow.svg|alt|Pineapple Bubble Tea');
    createElement('div', '.bobaSection', "boba,lycheeBoba");
    createElement('img', '.lycheeBoba', "", "", 'src|images/boba-lychee.svg|alt|Lychee Bubble Tea');
}
function createSides() {
    createElement('div', '#menu', "sides");
    createElement('h2', '.sides', "", "Macaron Menu");
    createElement('h2', '.sides', "", "Bubble Tea Menu");
    createMacaronSection();
    createBobaSection();
}

function createMenuPage() {
    createElement('div', '#content', "page", "", 'id|menu');
    createElement('h2', '#menu', "", "Bingsu Menu");
    createBingsuSection();
    createSides();
}

function loadMenu() {
    createMenuPage();
}

export { loadMenu };