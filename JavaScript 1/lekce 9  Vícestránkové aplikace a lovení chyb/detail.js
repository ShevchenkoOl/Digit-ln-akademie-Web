import {predpoved} from './data.js';

const urlParams = new URLSearchParams(window.location.search);
const day = urlParams.get('den');

if (day && predpoved[day]) {
    const data = predpoved[day];
    const weatherDetail = document.getElementById('weather-detail');
    weatherDetail.innerHTML = `
        <h2>${data.den}</h2>
        <p>Datum: ${data.datum}</p>
        <p>Ranní teplota: ${data.ranni_teplota}°C</p>
        <p>Odpolední teplota: ${data.odpoledni_teplota}°C</p>
        <p>Večerní teplota: ${data.vecerni_teplota}°C</p>
        <p>Stav počasí: ${data.stav_pocasi}</p>
        <p>Tlak: ${data.tlak} hPa</p>
        <p>${data.popis_pocasi}</p>
    `;
} 
// else {
//     // Den nebyl nalezen
//     alert('Neplatný den počasí.');
// }
