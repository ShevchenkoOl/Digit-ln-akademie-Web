// const zobraz = (data) => {
//     const url = `https://czechitas-podklady.cz/vizualizace-sachovnice/?s=${JSON.stringify(
//       data
//     )}`;
//     document.body.innerHTML += `
//       <div>
//         <pre>${JSON.stringify(data)
//           .replace('[[', '[<br/>\t[')
//           .replace(']]', ']<br/>]')
//           .replaceAll(',[', ',<br/>\t[')
//           .replaceAll(',', ',\t')}</pre>
//         <iframe src="${url}" width="550" height="420" frameBorder="0"></iframe>
//         <hr/>
//       </div>
//     `;
//   };
  
//   const sachovnice = [
//     [' ', ' ', ' ', ' ', ' ', '-4', '-6', ' '],
//     [' ', ' ', ' ', ' ', ' ', '-1', '-1', '-1'],
//     [' ', ' ', '-1', ' ', ' ', ' ', ' ', ' '],
//     [' ', '-1', '1', ' ', '-1', ' ', ' ', ' '],
//     [' ', '1', ' ', ' ', '1', ' ', ' ', ' '],
//     [' ', ' ', ' ', ' ', ' ', '3', ' ', '1'],
//     [' ', ' ', ' ', ' ', '2', '1', '1', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', '6', ' ']
//   ];
 
//   // Zobrazíme počáteční pozici šachovnice
//   zobraz(sachovnice);
  
//   // Provádíme tah koněm z pozice f3 na pozici e5
//   sachovnice[5][5] = '3'; // Postavit bílého koně na nové místo
//   sachovnice[3][4] = ' '; // Odebrat černého pěšce
  
//   // Zobrazíme pozici po provedeném tahu
//   zobraz(sachovnice);
  







//-------------------------------forEach
// const pole = ['jana', 'petra', 'karel', 'josef'];
// pole.forEach((prvek, index) => {
//   // provedení akce s prvkem
//   document.body.innerHTML += `<div>${prvek}</div>`;
//   document.body.innerHTML += `<div>${index}: ${prvek}</div>`;
// });


//----------------------------------map

// const jmena = ['jana', 'petra', 'karel', 'josef'];
// const maily = jmena.map((jmeno) => {
//   return `${jmeno}@seznam.cz`;
// });

// const uzivatele = [
//     { jmeno: 'jana', vek: 23 },
//     { jmeno: 'petra', vek: 28 },
//     { jmeno: 'karel', vek: 19 },
//     { jmeno: 'josef', vek: 21 },
//   ];
  
//   const jmena = uzivatele.map((uzivatel) => {
//     //return uzivatel.jmeno;
//     console.log(uzivatel.jmeno);
//   });




// import { cisla, zvirata, napoje, shoppingList } from "./data.js";

// const multiplay = cisla.map((cislo) => {
//   console.log(`${cislo*2}`);
// });

// const delka = zvirata.map((zvir) => {
//   console.log(zvir.length);
// });

// const drinks = napoje.map((napoji) => {
//   if(napoji.skladem == true){
//     console.log(napoji.nazev + " skladem");
//   } else {
//     console.log(napoji.nazev + " nemi skladem");
//   }
// })


// const shoping = shoppingList.map((item) => {
//   console.log(item.toUpperCase());
// })

// let shopingTogether = '';
// shoppingList.forEach((item) => {
//   shopingTogether+=item
//   console.log(shopingTogether);
// }) 







const numbers = [
  -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
];
let countNegative = 0;
let total = 0;
let countTotal = 0;
let positiv = 0;

numbers.forEach((number)=> {
  //console.log(number);

  //console.log(number*number);

  // if(number < 0) {
  //   console.log(number);
  // }

  //console.log(Math.abs(number));

  // if (number % 2 == 0) {
  //   console.log(number);
  // }

//   if (Math.abs(number) % 3 === 0) {
// console.log(number);
//   }

//console.log(Math.abs(number-5));

// const squera = Math.abs(number-5);
// console.log(squera*squera);


// if(number < 0) {
//   countNegative++;
//   }

// total += number;
// countTotal++;
// const srNumber= total/countTotal;

// console.log(srNumber);

if(number > 0) {
  positiv += number;
}

 });

// console.log(countNegative);
// console.log(total);
console.log(positiv);