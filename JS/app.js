/* Imports */
import { renderChick } from './render-utils.js';

/* Get DOM Elements */
const chickListEl = document.querySelector('.chicks');
const formEl = document.querySelector('form');
const farmerHPEl = document.querySelector('#farmer-hp');
const hatchedNumberEl = document.querySelector('#hatched-number');
const farmerImgEl = document.querySelector('#farmer-img');

/* State */
const chicks = [{ id: 1, name: 'Walker', hp: 1 }];

let currentId = 4;
let farmerHp = 5;
let hatchedCount = 0;

/* Events */
formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(formEl);
    const newChick = {
        id: currentId,
        name: data.get('chick-name'),
        hp: Math.ceil(Math.random() * 5),
    };
    currentId++;
    chicks.push(newChick);
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
