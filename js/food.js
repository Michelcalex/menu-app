console.log('I am working food');


function getFoods() {
    let submitBtn = document.querySelector('#submit-btn');

    submitBtn.addEventListener('click', function() {

        let menuList = document.querySelector('#menu-list');

        let foodName = document.querySelector('#food-name');
        let foodItem = document.createElement('li');
        foodItem.textContent = 'Name: ' + foodName.value;
        menuList.appendChild(foodItem);

        let foodDescription = document.querySelector('#food-description');
        let descriptionItem = document.createElement('li');
        descriptionItem.textContent = 'Description: ' + foodDescription.value;
        menuList.appendChild(descriptionItem);

        let foodPrice = document.querySelector('#price');
        let priceItem = document.createElement('li');
        priceItem.textContent = 'Price: ' + foodPrice.value;
        menuList.appendChild(priceItem);

        foodName.value= '';
        foodDescription.value= '';
        foodPrice.value= '';
    });
}


module.exports = getFoods;
