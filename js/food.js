console.log('I am working food');

let menuItems = [];


function getFoods() {
    let submitBtn = document.querySelector('#submit-btn');

    submitBtn.addEventListener('click', function() {
        let foodName = document.querySelector('#food-name');
        let foodDescription = document.querySelector('#food-description');
        let foodPrice = document.querySelector('#price');

        let newItem = {
            name: 'Name: ' + foodName.value,
            description: 'Description: ' + foodDescription.value,
            price: 'Price: $' + foodPrice.value,
        };
        
        menuItems.push(newItem);

        let menuList = document.querySelector('#menu-list');
        let item = document.createElement('li');
        for (let i = 0; i < menuItems.length; i++) {

            item.innerHTML = Mustache.render (
                document.querySelector('#food-list-template').innerHTML, 
                {
                    name: menuItems[i].name, 
                    description: menuItems[i].description,
                    price: menuItems[i].price,
                }
            );

            menuList.appendChild(item);
        }

        foodName.value = '';
        foodDescription.value = '';
        foodPrice.value = '';
    });
}

console.log(menuItems);

module.exports = getFoods;




// ***********Manipulating DOM 
// function getFoods() {
//     let submitBtn = document.querySelector('#submit-btn');

//     submitBtn.addEventListener('click', function() {

//         let menuList = document.querySelector('#menu-list');

//         let foodName = document.querySelector('#food-name');
//         let foodItem = document.createElement('li');
//         foodItem.textContent = 'Name: ' + foodName.value;
//         menuList.appendChild(foodItem);

//         let foodDescription = document.querySelector('#food-description');
//         let descriptionItem = document.createElement('li');
//         descriptionItem.textContent = 'Description: ' + foodDescription.value;
//         menuList.appendChild(descriptionItem);

//         let foodPrice = document.querySelector('#price');
//         let priceItem = document.createElement('li');
//         priceItem.textContent = 'Price: ' + foodPrice.value;
//         menuList.appendChild(priceItem);

//         foodName.value= '';
//         foodDescription.value= '';
//         foodPrice.value= '';
//     });
// }