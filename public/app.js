(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//display hidden class


let food = require('./food');
let menu = require('./menu');
let search = require('./search');



window.addEventListener('load', function() {
    console.log('I am working');

    let addFoodBtn = document.querySelector('#add-food');
    let viewMenuBtn = document.querySelector('#view-menu');
    let createMenuSection = document.querySelector('#create-menu');
    let showMenuSection = document.querySelector('#show-menu');

    addFoodBtn.addEventListener('click', function() {
        createMenuSection.className = '';
        showMenuSection.classList.add('hidden');
    });

    viewMenuBtn.addEventListener('click', function() {
        showMenuSection.className = '';
        createMenuSection.classList.add('hidden');
    });

    food();
});
},{"./food":2,"./menu":3,"./search":4}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
console.log('I am working menu');
},{}],4:[function(require,module,exports){
console.log('I am working search');
},{}]},{},[1]);
