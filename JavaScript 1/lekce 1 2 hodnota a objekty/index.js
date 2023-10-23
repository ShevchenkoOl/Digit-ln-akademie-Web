//Úvod do JavaScriptu lekce 1

// document.body.innerHTML += 'Vítejte na našem webu';

// document.body.innerHTML += 12 * 5;
// document.body.innerHTML += '<h1 class="title">Digitální akademie Web</h1>';
// //document.body.innerHTML += Math.round(3.14);
// //document.body.innerHTML += 70 % Math.round(100 / 3);
// //document.body.innerHTML += Math.ceil(3.9);
// document.body.innerHTML +=(Math.random()*1000000000);

// document.body.innerHTML += 'Měsíční příjem je: ' +(320*7*21)+ ' cze';
// document.body.innerHTML += '<br>';
// document.body.innerHTML += 'dan je: ' + Math.floor(((320*7*21)*0.4)*0.15) + ' cze';
// document.body.innerHTML += '<br>';
// document.body.innerHTML += 'Film Pán prstenů trva: ' + Math.floor(223 / 60) + ' hod. a ' + 223 % 60 + ' min';
// document.body.innerHTML += '<br>';
// document.body.innerHTML += 'Franta' + '.' + 'Dobrota' + '@mujmail.com';
// let sazba = 500;
// let vyplata = 8 * 21 * sazba;
// sazba = 600;
// document.body.innerHTML += vyplata;

// const wageInEur = 20;
// const rate = 24.55;
// const wageInCzk = Math.round(wageInEur*rate);
// document.body.innerHTML += '<h1>Mzda v korunách: ' + wageInCzk + ' Kč</h1>';


// const start = 15;
// const delka = 15;
// const konec = (start + delka)%24;
// document.body.innerHTML += '<h1>Závod pro našeho běžce skončí ve: ' + konec + ' h.</h1>';


// const total = 12*174*15;
// document.body.innerHTML += '<h1>Měsíční příjem divadla je: ' + total + ' Kč </h1>';
// document.body.innerHTML += '<br>';
// const student = 12*0.65;
// const totalStudent = Math.round(174*0.4)*student;
// console.log(totalStudent);
// const zmena = (totalStudent+((174-Math.round(174*0.4))*12))*15;
// console.log(zmena);
// const finish = total-zmena;
// document.body.innerHTML += '<h1>Zmena příjemu divadla bude: ' + finish + ' Kč </h1>';

// console.log(1 + Math.floor(Math.random() * 6)); //generuje náhodné celé číslo v rozsahu od 1 do 6 včetně


// const start = 15;
// const delka = prompt('Zadej délku závodu:');
// const konec = (start + delka) % 24;
// document.body.innerHTML += konec;

// document.body.innerHTML += '12' * '5';

// document.body.innerHTML += '12' % 5;

// document.body.innerHTML += 12 % '5';

//document.body.innerHTML += '1' + 2 + 3 + 4;

// const jmeno = String(prompt('Zadejte Vaše přijmene a jmeno:'));
// const vek = Number(prompt('Zadejte Vaš věk:'));
// document.body.innerHTML += jmeno + ', věk:' + vek;

// const sazba = Number(prompt('Prosim Vas uvedit vasu hodinovou sazbu v korunách:'));
// const hodin = Number(prompt('Prosim Vas uvedit kolik hodin pracujete denne:'));
// const days = Number(prompt('Prosim Vas uvedit kolik dni pracujete mesicne:'));
// const total = sazba*hodin*days;
// document.body.innerHTML += '<p>Hruba mzda za mesec je: ' + total + ' Kč </p>';

// OBJECTS

// const apartment = {
//     type: 'rent',
//     disposition: '3+1',
//     area: {
//       floorage: 100,
//       balcony: 2,
//       units: 'sqm',
//     },
//     city: 'Prague',
//     district: 'Old Town',
//     price: {
//       rent: 28000,
//       fees: {
//         water: 1000,
//         energy: 2500,
//         services: 560,
//       },
//       currency: 'czk',
//     },
//     ownership: 'personal',
//     condition: 'renovated',
//     status: 'free',
//     floor: 3,
//   };

// document.body.innerHTML += '<p>Dispozice bytu je: ' + apartment.disposition + ' </p>';
// document.body.innerHTML += '<br>';
// document.body.innerHTML += '<p>Cena cisteho majmu je: ' + apartment.price.rent + apartment.price.currency + ' </p>';
// document.body.innerHTML += '<br>';
// document.body.innerHTML += '<p>Vemer bytu je: ' + apartment.area.floorage + apartment.area.units + apartment.area.balcony + apartment.area.units +' </p>';
// document.body.innerHTML += '<br>';
// const city = apartment.city;
// const district = apartment.district;
// document.body.innerHTML += '<p>Mesto je: ' + city + ' lokalita je ' + district + ' </p>';
// document.body.innerHTML += '<br>';
// apartment.status='taken';
// document.body.innerHTML += '<p>' + apartment.status + ' </p>';
// document.body.innerHTML += '<br>';


// const date ={
//     day: 1,
//     mounth: 1,
//     year: 2000
// }
// date.day = Number(prompt('Prosim Vas uvedit den:'));
// date.mounth = Number(prompt('Prosim Vas uvedit mesic:'));
// date.year = Number(prompt('Prosim vas uvedit rok:'));
// document.body.innerHTML += '<p class="date" <span class="day">' + date.day + '. </span>' + ' <span class="month">' + date.mounth + '. </span>' + ' <span class="year">' + date.year + '</span> </p>';


// const fahrnheit = prompt('Zadej teplotu ve stupních Fahrenheita:');
// document.body.innerHTML ='<h1>' + fahrnheit + ' stupňů Fahrenheita = ' + Math.round((5 * (fahrnheit - 32)) / 9) + ' stupňů Celsia';

// const flight = {
//     id: '145c01af48dd00002715248e_0',
//     dTimeUTC: '01/26/2021 @ 1:25pm (UTC)',
//     aTimeUTC: '01/26/2021 @ 3:45pm (UTC)',
//     duration: {
//       departure: 8400,
//       return: 0,
//       total: 8400,
//     },
//     fly_duration: '2h 20m',
//     flyFrom: 'PRG',
//     cityFrom: 'Prague',
//     cityCodeFrom: 'PRG',
//     countryFrom: {
//       code: 'CZ',
//       name: 'Czechia',
//     },
//     flyTo: 'BCN',
//     cityTo: 'Barcelona',
//     cityCodeTo: 'BCN',
//     countryTo: {
//       code: 'ES',
//       name: 'Spain',
//     },
//     distance: 1359.54,
//     airline: 'FR',
//     pnr_count: 1,
//     technical_stops: 0,
//     price: 36,
//     bags_price: {
//       1: 34.95,
//       2: 69.91,
//     },
//     baglimit: {
//       hand_width: 20,
//       hand_height: 40,
//       hand_length: 55,
//       hand_weight: 10,
//       hold_width: 81,
//       hold_height: 119,
//       hold_length: 119,
//       hold_dimensions_sum: 319,
//       hold_weight: 20,
//     },
//     availability: {
//       seats: 2,
//     },
//     conversion: {
//       EUR: 36,
//     },
//     quality: 66.66659,
//   };
  
//   document.body.innerHTML = '<p><strong>Startovní země:</strong> ' + flight.countryFrom.name + '</p>';
//   document.body.innerHTML += '<p><strong>Startovní země:</strong> ' + flight.countryTo.name + '</p>';
//   const baglimit = flight.baglimit;
//   document.body.innerHTML += '<p><strong>Maximální šířka příručního zavazadla:</strong> ' + baglimit.hand_width + ' cm</p>';
//   document.body.innerHTML += '<p><strong>Maximální výška příručního zavazadla:</strong> ' + baglimit.hand_height + ' cm</p>';
//   document.body.innerHTML += '<p><strong>Maximální délka příručního zavazadla:</strong> ' + baglimit.hand_length + ' cm</p>';
//   document.body.innerHTML += '<p><strong>Cena druhého zavazadla:</strong> ' + Math.ceil(flight.bags_price[2] * flight.conversion.EUR) + ' Kč</p>';


// const siteWidth = window.innerWidth;
// console.log(siteWidth);
// const siteHigth = window.innerHeight;
// console.log(siteHigth);
// document.body.innerHTML += '<p>Sirka okna je: ' + siteWidth + ' px' + ' Vyska okna je: ' + siteHigth + ' px' + '</p>';