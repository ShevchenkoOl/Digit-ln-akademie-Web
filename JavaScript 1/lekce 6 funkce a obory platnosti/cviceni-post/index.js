
// const goodbye = (name) =>{
//     const close = document.querySelector('.email__closing');
//     //name = 'Pavel Ovesný';
//     return close.textContent= "Na shledanou, S pozdravem," + name;
//     //close.textContent= `Na shledanou, S pozdravem, ${name}`;
// }

// const fillSubject = (subject) => {
// const subjectElement = document.querySelector(".email__subject");
// subjectElement.textContent = subject;
// }
// fillSubject('Hello it is mistake');

// const fillBody = (body, name) => {
//     const bodyElement = document.querySelector('.email__body');
//     bodyElement.textContent = body;
//     bodyElement.innerHTML = body + goodbye(name);
// }
// const body = "Lorem jkgdjgdjkg hjkkjhdhjhjsd hkjjhkhjk jkhjhk hjkjhk";
// fillBody(body, 'Pavel Ovesný');



//---------------------------------------Exchange

//-----------------------------first option
// const convert = [
//    { currency: 'EUR', rate: '24.47'},
//    { currency: 'GBR', rate: '28.09'},
//    { currency: 'USD', rate: '24.81'},
//    { currency: 'BTC', rate: '478637'},
//   ];

// const value = prompt('zadajte menu').toUpperCase();
// const money = prompt('zadaite castku');
// const result = document.querySelector('.exchange');

// const convertToCZK = (value, money) => {
//     let total = null;
//     for (let i=0; i<convert.length; i++){
//     if (convert[i].currency === value) {
//         total = Math.round(money * convert[i].rate);
//         break; 
//     }
// }
// if(total!==null){
//     return result.innerHTML = total+'CZK';
// }
// else {
//     alert('this currency does not exist');

// }}

// convertToCZK(value, money);



//-----------------------------second option

//  const value = prompt('zadajte menu').toUpperCase();
//  const money = prompt('zadaite castku');
//  const result = document.querySelector('.exchange');

//  const convertToCZK = (value, money) => {
// if (value === 'EUR'){
//             const total = Math.round(money * 24.47);
//     return  result.innerHTML = total+'CZK';
// }
//     else if (value === 'GBR'){
//             const total = Math.round(money * 28.09);
//     return  result.innerHTML = total+'CZK';
//     }
//     else if (value === 'USD'){
//         const total = Math.round(money * 24.81);
//     return  result.innerHTML = total+'CZK';
//     }
//     else if (value === 'BTC'){
//         const total = Math.round(money * 478637);
//     return  result.innerHTML = total+'CZK';}

//     else {
//          alert('this currency does not exist');

// }
// }

//  convertToCZK(value, money);

// const age = Number(prompt('Zadej svůj věk:'));
// const message = 'Utíkej za mamkou';

// if (age < 18) {
//   document.body.innerHTML += `<p>${message}</p>`;
// } else {
//   const message = 'Vítej mezi dospěláky';
//   document.body.innerHTML += `<p>${message}</p>`;
// }



//-------------------------calculate

// const calculate = (number1, operation, number2) => {
//     if (operation === '+') {
//         const total = number1 + number2;
//         document.body.innerHTML = `${number1} ${operation} ${number2} = ${total}<br>`;
//     } else if (operation === '-') {
//         const total = number1 - number2;
//         document.body.innerHTML = `${number1} ${operation} ${number2} = ${total}<br>`;
//     } else if (operation === '*') {
//         const total = number1 * number2;
//         document.body.innerHTML = `${number1} ${operation} ${number2} = ${total}<br>`;
//     } else if (operation === '/') {
//         const total = number1 / number2;
//         document.body.innerHTML = `${number1} ${operation} ${number2} = ${total}<br>`;
//     } else {
//         return document.body.innerHTML = 'null';
//     }
// };

// calculate(3,'&',3);




//----------------------Výplňořez

// const fillcut = (str, len) => {
// let newStr;
// if (str.length > len) {
//     newStr = str.slice(0, len);
// } else if (str.length < len) {
//     newStr = str.padStart(len,'.');
// } else {
//     newStr = str
// }
// document.body.innerHTML = newStr;
// };

// fillcut('petr', 2)



//---------------------------přestupný rok

const isLeapYear = (year) => {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ) {
        return true;
    } else {
        return false;
    }

};
console.log(isLeapYear(2023));