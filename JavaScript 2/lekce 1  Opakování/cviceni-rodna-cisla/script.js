//-----------------------------kontrola rodného čísla--------------------------------

//const rodneCislo = prompt("Prosim zadejte svoje rodne cislo");

// const checkBirthID = (rodneCislo) => {
//   //let platne = true;
//   if (
//     rodneCislo.length === 10 &&
//     Number.isInteger(Number(rodneCislo)) &&
//     parseInt(rodneCislo) % 11 === 0
//   ) {
//     alert("✔️ Zadané rodné číslo je platné.");
//   } else {
//     alert("❌ Zadané rodné číslo neni platné.");
//   }
// };
// checkBirthID(rodneCislo);



//------------------------------Platnost jako funkce-------------------------

const checkBirthID = (rodneCislo) => {
  //let platne = true;
  if (rodneCislo.length !== 10) {
    return 'invalidLength';
  } if (!Number.isInteger(Number(rodneCislo))) {
    return 'notANumber';
  } if (parseInt(rodneCislo) % 11 !== 0){
return 'failedChecksum';
  }
  else {
    return 'ok';
  }
};
// checkBirthID(rodneCislo);

const rodnaCislaKOtestovani = [
  '123',
  'nepovím',
  '7060201236',
  '123456789123456789',
  '9062185440',
  '123č56q8y7',
];

rodnaCislaKOtestovani.forEach((rc) => {
document.body.innerHTML += `Rodné číslo <code>${rc}</code>`;
const result = checkBirthID(rc);
if (result === 'ok') {
  document.body.innerHTML += 'je platné. ✔️<br>';
} else {
document.body.innerHTML += `není neplatné. Důvod: ${result}. ❌<br>`;
}
});


//---------------------------- Pole, cykly, objekty kontrola cifer------------------------------

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const isDigit = (input) => input.length === 1 && digits.includes(input);

  // // let found = false;
  // // digits.forEach((digit) => {
  // //   if (input.length >= 1 && input.includes(digit)){
  // //     found = true;
  //   }
  // })
  // return found;

const logInvalidCharacters = (vstup) => {
  Array.from(vstup).forEach((input) => {
    if(!isDigit(input)){
console.log(input);
    }
  });
}

logInvalidCharacters('3sd14');


//----------------------------------------------------------------

const validateCharacters = (input) => {
  let result = [];
  Array.from(input).forEach((znak) => {
result.push({char: znak, digit: isDigit(znak)});
  })
   console.log(result);
};

validateCharacters('aas147855');


//----------------------------------------Forms kontrolu rodneho cisla-------------

const form = document.querySelector('#formular');
const text = document.querySelector('#vystup');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const vstup = form.querySelector('input').value;
if (checkBirthID(vstup) === 'ok') {
  text.textContent = 'je platné. ✔️';
} else {
text.textContent = `❌ V rodném čísle jsou chyby.`;
}


const overit = validateCharacters(vstup);
const cyfra = document.querySelector('#cyfra');

overit.forEach((vstup) => {
  cyfra.innerHTML += `<span style="background-color: ${znak ? '#00DD00' : '#FF8686'}">
  ${char}
</span>`;
})
});