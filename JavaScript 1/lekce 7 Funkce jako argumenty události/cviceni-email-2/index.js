const goodbye = (name) => {
  return 'S pozdravem ' + name;
};
const emailClose = document.querySelector('.email__closing')

const fillSubject = (subject) => {
  document.querySelector('.email__subject').textContent = subject;
};

const fillBody = (body, name, goodbye) => {
  const bodyElm = document.querySelector('.email__body');
  bodyElm.innerHTML += body;
  //const closingElm = document.querySelector('.email__closing');
  emailClose.textContent = goodbye(name);
  if (goodbye === formalGoodBay) {
    return formalGoodBay(name); 
  } if (goodbye === rudeGoodBay){
return rudeGoodBay(name);
  }
};

const formalGoodBay = (name) => {
return emailClose.innerHTML = 'S uctivou poklonou ' + name;
};

const rudeGoodBay = (name) => {
return emailClose.innerHTML = 'Mej se ' + name;
};

// fillSubject('Obchodní sdělení');
// fillBody(
//   'Kupte mycí prostředek, který vám vytře zrak, se slevou 50 %.',
//   'Jan Čistý',
//   formalGoodBay
// );

fillSubject('Pozvánka na oslavu narozenin');
fillBody('Zítra oslava. 18:00 ve Starý hospodě.', 'Patrik Veselý', rudeGoodBay);