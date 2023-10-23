// const odstavec = document.querySelector(".msg");
// const email = prompt("Zadajte vasu emeilovu adresu");
// const card = prompt("Zadejte cislo karty");
// if (validator.isEmail(email)) {
//   odstavec.classList.add("msg--valid");
//   //odstavec.innerHTML += `Zadani vami email: ${email} je spravmi`;
//   odstavec.textContent = `Zadani vami email: ${email} je spravmi`;
// } else {
//   odstavec.classList.add('msg--invalid');
//   odstavec.innerHTML += `Zadani vami email: ${email} je chybni, opakujte!`;
// }
// if (validator.isCreditCard(card)) {
//   odstavec.innerHTML += `<p></p>Zadani vami karta: ${card} je spravmi</p>`;
// } else {
//   odstavec.innerHTML += `<p>Zadani vami karta: ${card} je chybni, opakujte!</p>`;
// }

// console.log(validator.isEmail('fdafdd@gmail.com'));
// console.log(validator.isEmail('fdafdd-gmail.com'));

// const day = "Surtarday";
// if (day.toLowerCase() === dayjs().format("dddd").toLowerCase()) {
//   document.body.innerHTML = "YES";
// } else {
//   document.body.innerHTML = "NO";
// }

// console.log(dayjs()); // dnesni data a cas
// const today = dayjs();
// document.body.innerHTML = '<p>Dneska je: '+ today.format('dddd, MMMM D, YYYY h:mm A') +'</p>'; // more formats https://day.js.org/docs/en/display/format






//                           Funkce
// const width = 15;
// const height = 12;

// const square = (width, height) => {     // function square(width, height) = {return (width * height) / 2;}
//   return (width * height) / 2;
// }

// document.body.innerHTML = square(width, height);

// const pi = Math.PI;   //число Пи
// console.log(pi);





//                                    obsah elipsum
// const ellipseArea = (width, heigth) =>{
//   return (width*0.5)*(heigth*0.5)*Math.PI;
// }
// document.body.innerHTML = ellipseArea(1,2);

//Maximum ze dvou čísel
// const max2 = (a, b) => {
//   return Math.max(a, b);
// }
// document.body.innerHTML = max2(5,15);

// const max3 = (a, b) => {
//   if (a > b) {return a;}
//   return b;
// }
// document.body.innerHTML = max2(25,45);




//                     Kontrola DIČ
// //const inputStr = "CZ145";
// const isDIC = (inputStr) => {
//   if (inputStr.length === 11 || inputStr.length === 12) {
//     const prefix = "CZ";
//     if (inputStr.toUpperCase().includes(prefix)) {
//       const digit = inputStr.slice(2);
//       if (validator.isInt(digit)){
//       document.body.innerHTML = `Vase DIC ${inputStr} je spravne`
//     } else {
//       return document.body.innerHTML = `Vase DIC ${inputStr} nemi spravne`;
//     }
//   } else {
//     return document.body.innerHTML = `Vase DIC ${inputStr} nemi spravne`;
//   }
// } else {
//   return document.body.innerHTML = `Vase DIC ${inputStr} nemi spravne`;
// }
// };

// isDIC("CZ145вфввф");




//                    Převeďte datum na objekt.
// //const str = "12.12.2023";
//  const persDate = (str) => {
//   const parcel = str.split(".");
//   //console.log(parcel);
//   document.body.innerHTML += `day: ${parcel[0]}, mounth: ${parcel[1]}, year: ${parcel[2]}`;
//   //return parcel;
//  }
//  persDate("13.11.2015");

// const obj = { day: 12, month: 3, year: 2015 };
// const formateDate = (obj) => {
// const day = obj.day.toString().padStart(2, '0');
// const month = obj.month.toString().padStart(2, '0');
// const year = obj.year.toString().padStart(4, '0');
// //return document.body.innerHTML = `${day}.${month}.${year}`;
// return `${day}.${month}.${year}`;
// }
// formateDate(obj);



// const round = (cislo) => {
//   const celaCast = Math.trunc(cislo);
//   const necelaCast = cislo - celaCast;
//   if (Math.abs(necelaCast) === 0.5) {
//     if (celaCast % 2 === 0) {
//       return celaCast;
//     } else {
//       return console.log(celaCast + 2 * necelaCast)
//     }
//   }
//   return console.log(Math.round(cislo));
// };

// round(45.46);


const max3 = (a, b, c) => {
  if (a > b && a > c) {
    return console.log(a);
  } else if (a < b && b > c) {
    return console.log(b);
  } else {return console.log(c)
  }
}
max3(1,5,12);