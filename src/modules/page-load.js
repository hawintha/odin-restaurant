function createElement(element, parentSelector, classesToAdd, innerText, attributesToAdd) {
    const parent = document.querySelector(parentSelector);
    const newElement = document.createElement(element);
    if (classesToAdd) {
        let classes = classesToAdd.split(",");
        newElement.classList.add(...classes);
    }
    if (innerText) {
        newElement.innerText = innerText;
    }
    if (attributesToAdd) {
        let attributes = attributesToAdd.split("|");
        for (let i = 0; i < attributes.length; i++) {
            if (i % 2 === 0) {
                newElement.setAttribute(attributes[i], attributes[i + 1]);
            }
        }
    }
    parent.appendChild(newElement);
}

function createNav() {
    createElement('nav', '#content');
    createElement('div', 'nav', "logo,link,toHomePage");
    createElement('span', '.logo', "icon,material-symbols-outlined", "ac_unit ");
    createElement('span', '.logo', "bingsuText", "Bingsu");
    createElement('span', '.logo', "cafeText", "cafe");
    createElement('a', 'nav', "tab,toMenuPage,link", "Menu");
    createElement('a', 'nav', "tab,toContactPage,link", "Contact");
    createElement('a', 'nav', "tab,toAboutPage,link", "About");
    createElement('img', 'nav', "snowflake,orderBtn", "", 'src|images/snowflake-button-order.svg|alt|Order Online Button');
}

function loadPage() {
    createNav();
}

export { createElement, loadPage };