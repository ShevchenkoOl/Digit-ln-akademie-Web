// import {predpoved} from './data.js';
 
// const days = ['pondeli', 'utery', 'streda', 'ctvrtek', 'patek', 'sobota', 'nedele'];
// const week = document.querySelector('#week');

// for (let i=0; i<days.length; i++){
// const day = days[i];
// const data = predpoved[day];
// week.innerHTML = `
// <h2>${data.den}</h2>
// <p>${data.datum}</p>
// <p>${data.denni_teplota}</p>
// <p>${data.popis_pocasi}</p>`;
// return 
// }

import { predpoved } from './data.js';

const days = ['pondeli', 'utery', 'streda', 'ctvrtek', 'patek'];

const weatherCards = document.getElementById('week');
const weatherCardElements = days.map(day => {
    const data = predpoved[day];
    const card = document.createElement('div');
    card.classList.add('weather-card');
    card.innerHTML = `
        <h2>${data.den}</h2>
        <p>Denní teplota: ${data.denni_teplota}°C</p>
        <p>Stav počasí: ${data.stav_pocasi}</p>
        <a href="detail.html#${day}">Zobrazit detail</a>
    `;
    return card;
});

weatherCardElements.forEach(card => {
    weatherCards.appendChild(card);
});
