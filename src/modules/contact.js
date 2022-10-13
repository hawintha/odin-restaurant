import { createElement } from './page-load.js';

function createContactForm() {
    createElement('form', '#contact');
    createElement('p', 'form', "", "We'd Love to Hear From You!");
    createElement('label', 'form', "", "Your Name", 'for|customerName');
    createElement('label', 'form', "", "Your Email", 'for|customerEmail');
    createElement('input', 'form', "", "", 'type|text|name|customerName|id|customerName');
    createElement('input', 'form', "", "", 'type|email|name|customerEmail|id|customerEmail');
    createElement('label', 'form', "", "Subject", 'for|subject');
    createElement('label', 'form', "", "Inquiry Type", 'for|inquiry');
    createElement('input', 'form', "", "", 'type|text|name|subject|id|subject');
    createElement('select', 'form', "", "", 'name|inquiry|id|inquiry');
    createElement('option', 'select', "", "Feedback", 'value|inquiry');
    createElement('option', 'select', "", "Franchise", 'value|inquiry');
    createElement('option', 'select', "", "General", 'value|inquiry');
    createElement('option', 'select', "", "Info", 'value|inquiry');
    createElement('option', 'select', "", "Orders", 'value|inquiry');
    createElement('label', 'form', "messageLabel", "Message", 'for|message');
    createElement('textarea', 'form', "", "", 'name|message|id|message|rows|6');
    createElement('button', 'form', "", "Send");
}

function createGallery() {
    createElement('section', '#contact', "gallery");
    createElement('div', '.gallery', "spinner");
    createElement('span', '.spinner', "seattle", "", 'style|--i:1;');
    createElement('img', '.seattle', "", "", 'src|images/seattle.avif|alt|Seattle night view of the Space Needle');
    createElement('h3', '.seattle', "", "Seattle, WA");
    createElement('span', '.spinner', "washingtonDC", "", 'style|--i:2;');
    createElement('img', '.washingtonDC', "", "", 'src|images/washington-dc.avif|alt|Blooming cherry blossom trees around the Tidal Basin in Washington, DC');
    createElement('h3', '.washingtonDC', "", "Washington, D.C.");
    createElement('span', '.spinner', "sanFrancisco", "", 'style|--i:3;');
    createElement('img', '.sanFrancisco', "", "", 'src|images/san-francisco.avif|alt|Golden Gate Bridge');
    createElement('h3', '.sanFrancisco', "", "San Francisco, CA");
    createElement('span', '.spinner', "honolulu", "", 'style|--i:4;');
    createElement('img', '.honolulu', "", "", 'src|images/honolulu.avif|alt|Aerial shot of Honolulu during June');
    createElement('h3', '.honolulu', "", "Honolulu, HI");
    createElement('span', '.spinner', "lasVegas", "", 'style|--i:5;');
    createElement('img', '.lasVegas', "", "", 'src|images/las-vegas.avif|alt|City lights at night of the Las Vegas Strip');
    createElement('h3', '.lasVegas', "", "Las Vegas, NV");
    createElement('span', '.spinner', "philadelphia", "", 'style|--i:6;');
    createElement('img', '.philadelphia', "", "", 'src|images/philadelphia.avif|alt|Philadelphia City Hall');
    createElement('h3', '.philadelphia', "", "Philadelphia, PA");
    createElement('span', '.spinner', "newOrleans", "", 'style|--i:7;');
    createElement('img', '.newOrleans', "", "", 'src|images/new-orleans.avif|alt|The LaBranche House in the French Quarter of New Orleans');
    createElement('h3', '.newOrleans', "", "New Orleans, LA");
    createElement('span', '.spinner', "chicago", "", 'style|--i:8;');
    createElement('img', '.chicago', "", "", 'src|images/chicago.avif|alt|Daytime view of the Cloud Gate in Chicago');
    createElement('h3', '.chicago', "", "Chicago, IL");
}

function createLocations() {
    createElement('section', '#contact',"locations");
    createElement('div', '.locations', "locationWA");
    createElement('span', '.locationWA', "city", "Seattle");
    createElement('p', '.locationWA', "addressTop", "123 4th Ave N");
    createElement('p', '.locationWA', "addressBottom", "Seattle, WA 98109");
    createElement('p', '.locationWA', "phone", "(206) 222-1900");
    createElement('div', '.locations', "locationDC");
    createElement('span', '.locationDC', "city", "Washington D.C.");
    createElement('p', '.locationDC', "addressTop", "12 Maine Ave SW");
    createElement('p', '.locationDC', "addressBottom", "Washington, DC 20024");
    createElement('p', '.locationDC', "phone", "(202) 222-1910");
    createElement('div', '.locations', "locationCA");
    createElement('span', '.locationCA', "city", "San Francisco");
    createElement('p', '.locationCA', "addressTop", "100 Jefferson St");
    createElement('p', '.locationCA', "addressBottom", "San Francisco, CA 94133");
    createElement('p', '.locationCA', "phone", "(415) 222-1920");
    createElement('div', '.locations', "locationHI");
    createElement('span', '.locationHI', "city", "Honolulu");
    createElement('p', '.locationHI', "addressTop", "2345 Koa Ave");
    createElement('p', '.locationHI', "addressBottom", "Honolulu, HI 96815");
    createElement('p', '.locationHI', "phone", "(808) 222-1930");
    createElement('div', '.locations', "locationNV");
    createElement('span', '.locationNV', "city", "Las Vegas");
    createElement('p', '.locationNV', "addressTop", "4321 Paradise Rd");
    createElement('p', '.locationNV', "addressBottom", "Las Vegas, NV 98169");
    createElement('p', '.locationNV', "phone", "(702) 222-1940");
    createElement('div', '.locations', "locationPA");
    createElement('span', '.locationPA', "city", "Philadelphia");
    createElement('p', '.locationPA', "addressTop", "135 N Broad St");
    createElement('p', '.locationPA', "addressBottom", "Philadelphia, PA 19102");
    createElement('p', '.locationPA', "phone", "(215) 222-1950");
    createElement('div', '.locations', "locationLA");
    createElement('span', '.locationLA', "city", "New Orleans");
    createElement('p', '.locationLA', "addressTop", "777 Royal St");
    createElement('p', '.locationLA', "addressBottom", "New Orleans, LA 70116");
    createElement('p', '.locationLA', "phone", "(504) 222-1960");
    createElement('div', '.locations', "locationIL");
    createElement('span', '.locationIL', "city", "Chicago");
    createElement('p', '.locationIL', "addressTop", "50 E Madison St");
    createElement('p', '.locationIL', "addressBottom", "Chicago, IL 60602");
    createElement('p', '.locationIL', "phone", "(312) 222-1970");
}

function createContactPage() {
    createElement('div', '#content', "page", "", 'id|contact');
    createElement('h2', '#contact', "", "Contact");
    createContactForm();
    createElement('p', '#contact', "", "Visit all 8 of our locations!");
    createGallery();
    createLocations();
}

function loadContact() {
    createContactPage();
}

export { loadContact };