                        // Práce s řetězci, podmínky Vlastnosti a meto

// console.log('martin'.length);
// console.log('martin'.toUpperCase());
// console.log('MARTIN'.toLowerCase());
// document.body.innerHTML += 'martin'.toUpperCase();
// document.body.innerHTML += '<br>';
// document.body.innerHTML += 'checzitas'.length;
// document.body.innerHTML += '<br>';
// document.body.innerHTML += '  Odstraní   bílé znaky ze začátku a konce.    '.trim();
// document.body.innerHTML += '<br>';
// document.body.innerHTML += 'popokatepetl'.slice(4, 7);
// document.body.innerHTML +='<br>';
// document.body.innerHTML += 'popokatepetl'.slice(4);
// document.body.innerHTML += '<br>';
// document.body.innerHTML += 'popokatepetl'.indexOf('kat');
// document.body.innerHTML += '<br>';
// document.body.innerHTML += 'popokatepetl'.indexOf('4'); // no this value
// document.body.innerHTML += '<br>';
// document.body.innerHTML += 'asd'.padStart(5, 'bdr'); //padStart(targetLength, padString), Prodlouží řetězec na zadanou délku tak, že na začátek přidá opakování řetězce padString. Hodí se na zarovnávání nebo na formátování čísel.


// const title = 'Pán prstenů';
// document.body.innerHTML += title.length;
// document.body.innerHTML += '<br>';
// document.body.innerHTML += title.toUpperCase() + '<br>';
// document.body.innerHTML += title.slice(0, 5) + '<br>';
// document.body.innerHTML += title.slice(title.length-5, title.length) + '<br>';


// const email = String(prompt('Enter a valid email address'));
// const atIndex = email.indexOf('@');
// // console.log(atIndex);
// // console.log(email.slice(0, atIndex));
// // console.log(email.slice(atIndex+1, email.length));
// const parsedEmail = {
//     userName: email.slice(0, atIndex),
//     domain: email.slice(atIndex+1, email.length),
//   };

//   document.body.innerHTML += '<p> User name is: ' + parsedEmail.userName + '</p>' + '<p>Domen is: ' + parsedEmail.domain + '</p>';


// const street = String(prompt('Enter your street and number of building'));
// const city = String(prompt('Enter your city name and postcode'));
// document.body.innerHTML += `<address> <p>${street}</p> <p>${city}</address>`;


// const jmeno = String(prompt('Zadejte Vaše přijmene a jmeno:'));
// const vek = Number(prompt('Zadejte Vaš věk:'));

// if(vek > 65) {
//     document.body.innerHTML += '<p>věk v pořádku</p>';
//     const password = String(prompt('Prosim Vas zadejte heslo:'))
//   if(length.heslo<=8) {
//     document.body.innerHTML +='<p>Jste zadal slabe heslo</p>';
//   } 
//     else {
//         document.body.innerHTML += '<p>Heslo je v pořádku</p>.';
//       }
//   }
// else{
//     document.body.innerHTML += '<p>nízký věk</p>';
// }



// const vek = Number(prompt('Zadejte Vaš věk:'));
// const plnaCena = 12;
// let cena;
// if (vek < 6) {
//     cena=0;
// }
// else if (vek > 6 && vek < 26) {
//     cena = Math.round(plnaCena*0.65);
// }
// else if (vek > 27 && vek < 64) {
//     cena=plnaCena;
// }
// else {
//     cena = Math.round(plnaCena/2);
// }
// document.body.innerHTML += `<p> cena na vstupenku bude ${cena} eur.</p>`;



// const fullname = String(prompt('Zadejte Vaše jmeno:'))
//       .toLowerCase()
//       .trim()
//       .slice(0,3);
// const surname = String(prompt('Zadejte Vaše primeni:'))
//       .toLowerCase()
//       .trim()
//       .slice(0,5);
// const email = surname+fullname;
// document.body.innerHTML += `<p>Vase emeilova adresa: ${email}@fit.cvut.cz</p>`;



// const kus = Number(prompt('Zadejte kolik kusu chcete objednat:'));
// let totalPrice;
// if (kus < 50) {
//     totalPrice = kus*300;
// }
// else if (kus >= 50 && kus < 200) {
//     totalPrice = kus*250;
// }
// else if (kus >= 200 && kus < 500) {
//     totalPrice = kus*200;
// }
// else if (kus >= 500 && kus < 1000) {
//     totalPrice = kus*150;
// }
// else {
//     totalPrice = kus*120;
// }
// document.body.innerHTML += `<p> celkova cena za vas nakup bude ${totalPrice} cze.</p>`;




// const number = prompt("Zadejte číslo od 0 do 36 včetně");

// if (number === '0'){
//     document.body.innerHTML = "<p>Vaše číslo je ZERO a je zelené</p>";
//  }    
// else if ((number % 2 === 0 && number>0 && number<=10) || (number % 2 === 0 && number>19 && number<=28)) {
//         document.body.innerHTML = "<p>Zadané číslo je sudé a černe</p>";
//     }
//     else if ((number % 2 === 1 && number>0 && number<=10) || (number % 2 === 1 && number>19 && number<=28)) {
//         document.body.innerHTML = "<p>Zadané číslo je  liché a červene</p>";
//     }
//     else if ((number % 2 === 0 && number>0 && number<=19) || (number>28 && number<=36)) {
//     document.body.innerHTML = "<p>Zadané číslo je sudé a červene</p>";
// }
//     else if ((number % 2 === 1 && number>10 && number<=19) || (number>28 && number<=36)) {
//     document.body.innerHTML = "<p>Zadané číslo je liché a černe</p>";
// }
//  else {
//  alert ("Zadali jste špatné číslo!");
//  }



// const year = prompt("Zadejte rok");
// const num = parseInt(year);

// if (num % 4 === 0 && (num % 100 !== 0 || num % 400 === 0)){
    
//     document.body.innerHTML += `<p>Rok ${num} je přestupný</p>`;
// }
// else {
//     document.body.innerHTML += `<p>Rok ${num} neni přestupný</p>`;
// }

// Другий варіант рішення перевіоки високосного року

// const year = Number(prompt('Zadej kalendářní rok:'));
// if (year % 4 === 0) {
//   if (year % 100 === 0) {
//     if (year % 400 === 0) {
//       document.body.innerHTML = `<p>${year} je přestupný</p>`;
//     } else {
//       document.body.innerHTML = `<p>${year} není přestupný</p>`;
//     }
//   } else {
//     document.body.innerHTML = `<p>${year} je přestupný</p>`;
//   }
// } else {
//   document.body.innerHTML = `<p>${year} není přestupný</p>`;
// }




