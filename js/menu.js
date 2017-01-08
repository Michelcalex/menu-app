let items = [];

function showMenu() {
    let menuList = document.querySelector('#menu-list');

    let item = document.createElement('li');
    for (let i = 0; i < items.length; i++) {
        item.innerHTML = Mustache.render (
            document.querySelector('#food-list-template').innerHTML, 
            {
                name: items[i].name, 
                description: items[i].description,
                price: items[i].price,
            }
        );

        menuList.appendChild(item);
    }
}

function addItem(itemToAdd) {
    items.push(itemToAdd);
}

module.exports = {
    items: items,
    addItem: addItem,
    showMenu: showMenu
};
