export function renderChick(chick) {
    const chickEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');
    const eggEl = document.createElement('p');
    const srEl = document.createElement('p');

    chickEl.classList.add('chick');

    nameEl.textContent = chick.name;
    hpEl.textContent = chick.hp < 0 ? 0 : chick.hp;
    hpEl.id = `chick-hp-${chick.id}`;

    srEl.classList.add('screen-reader-only');
    srEl.id = `chick-sr-${chick.id}`;
    srEl.textContent = chick.hp > 0 ? 'egg emoji' : 'hatched chick emoji';
    srEl.textContent = chick.hp > 5 ? 'zombie emoji' : 'hatched chick emoji';

    eggEl.id = `chick-${chick.id}`;
    eggEl.textContent = chick.hp > 0 ? '🥚' : '🐣';
    eggEl.textContent = chick.hp > 5 ? '🧟‍♂️' : '🐣';

    if (chick.hp < 0) {
        chickEl.classList.add('hatched');
    }
    chickEl.append(nameEl, eggEl, hpEl, srEl);
    return chickEl;
}
