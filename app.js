import { renderChick } from './render-utils.js';

/* Get DOM Elements */
const chickListEl = document.querySelector('.chicks');
const formEl = document.querySelector('form');
const farmerHPEl = document.querySelector('#farmer-hp');
const hatchedNumberEl = document.querySelector('#hatched-number');
const farmerImgEl = document.querySelector('#farmer-img');

/* State */
const chicks = [
    { id: 1, name: 'Walker', hp: 0 },
    { id: 2, name: 'Fester', hp: 1 },
];

let currentId = 4;
let farmerHp = 10;
let hatchedCount = 0;

/* Events */
formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(formEl);
    const newChick = {
        id: currentId,
        name: data.get('chick-name'),
        hp: 0,
    };
    currentId++;
    chicks.push(newChick);

    displayChicks();
});

function chickClickHandler(chick) {
    if (chick.hp <= -1) return;
    if (Math.random() < 0.27) {
        farmerHp--;
        alert(
            'You could have sworn you just heard ' +
                chick.name +
                ' say something... it almost sounded like they said the word rains?'
        );
    } else if (Math.random() > 0.27 && Math.random() < 0.33) {
        alert(
            'You just heard ' +
                chick.name +
                ' chirp so beautifully! Their voice kind of sounds like a zombie though. Ha!'
        );
    }

    if (Math.random() < 0.33) {
        chick.hp++;
        alert('You warmed ' + chick.name + 'now the chick is toasty warm! They look so cuddly!');
    } else if (Math.random() > 0.33 && Math.random() > 0.5) {
        alert(
            'You tried to warm ' +
                chick.name +
                ' but the heat lamp broke. Strange... you just replaced the bulb.'
        );
    }

    // farmer HP decrement with chick trying to eat brains
    if (Math.random() < 0.5) {
        farmerHp--;
        alert(
            chick.name +
                " pecked at your face while you were holding them. They just broke a little skin... but the chick's eyes seemed different than usual."
        );
    } else {
        alert(
            chick.name +
                ' tried to nip at your face while you were holding them. There was a little seed on your nose! Silly chick. So cute!'
        );
    }

    if (chick.hp === 5) {
        hatchedCount++;
    }

    if (farmerHp === 0) {
        farmerImgEl.classList.add('game-over');
        alert('GAME OVER');
    }

    // updating the DOM
    farmerHPEl.textContent = farmerHp;
    hatchedNumberEl.textContent = hatchedCount;

    const hpEl = document.getElementById(`chick-hp-${chick.id}`);
    hpEl.textContent = chick.hp < 0 ? 0 : chick.hp;

    const eggEl = document.getElementById(`chick-${chick.id}`);
    eggEl.textContent = chick.hp > 0 ? '🐣' : '🥚';

    const zombieEl = document.getElementById(`chick-${chick.id}`);
    zombieEl.textContent = chick.hp > 5 ? '🧟‍♂️' : '🐣';

    const srEl = document.getElementById(`chick-sr-${chick.id}`);
    srEl.textContent = chick.hp > 0 ? 'hatched chick emoji' : 'egg emoji';
}
/* Display Functions */
function displayChicks() {
    chickListEl.textContent = '';

    for (let chick of chicks) {
        const chickEl = renderChick(chick);
        chickEl.addEventListener('click', () => {
            chickClickHandler(chick);
        });
        chickListEl.append(chickEl);
    }
}
hatchedCount++;
displayChicks();
