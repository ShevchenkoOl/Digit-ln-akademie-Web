

// const summary = {
//     count: 15,
//     sum: 1547
//}
// const showOrderSummary = (summary) => {
//     const summaryElm = document.querySelector('#summary');
//     summaryElm.innerHTML += `
//       <div class="summary__count">Celkem položek: ${summary.count}</div>
//       <div class="summary__sum">Částka: ${summary.sum}</div>
//     `;
//   };
//   //showOrderSummary(summary);
//   showOrderSummary({ count: 5, sum: 5270 });
//   //const result = showOrderSummary({ count: 5, sum: 5270 });



//   const roll = () => {
//     return Math.floor(Math.random() * 6) + 1;

//   };
//   console.log(roll);


// const name = 'Mississippi';

// if (name.length > 5) {
//   const name = 'Missi';
//   document.body.innerHTML += `<p>${name}</p>`;
// }

// document.body.innerHTML += `<p>${name}</p>`;



// const name = 'Franta';

// const greet = (name) => {
//   const name = 'Pepa';
//   document.body.innerHTML += `<p>${name}</p>`;
// };

// greet('Jožin');





// const age = 25;
// let price;
// if (age > 21) {
// price = 100;
// } else if (age > 15) {
// price = 50;
// } else {
// price = 0;
// }

// document.body.innerHTML += `<p>${price}</p>`;


const salary = (wage, hours, days) => {
const hrubaMzda = Math.round(wage * hours * days);
// console.log(hrubaMzda);
taxes(hrubaMzda, 15);
};
 
const taxes = (hrubamzda, percent) => {
  const cistaMzda = Math.round(hrubamzda-(hrubamzda*percent/100));
  //console.log(cistaMzda);
document.body.innerHTML = cistaMzda;
 };

 salary (155, 8, 12);