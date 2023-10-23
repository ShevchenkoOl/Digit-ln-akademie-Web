const conteiner = document.querySelector(".container");
const btn = document.querySelector("#btn");
const card = document.querySelector("#card");
const from = document.querySelector("#form");
const select = document.querySelector("#select");

const changeConteiner = (e) => {
  e.preventDefault();
//   const long = card.value.length;
//   if (long === 16) {
//     conteiner.textContent = "Objednávka odeslána ke zpracování";
//   } else if (long < 16) {
//     const missingDigit = 16-long;
//     alert (`Číslo karty je příliš krátké. Chybí: ${missingDigit}`);
//   }
//   else
//   { const extraDigit = long-16;
//     alert (`Číslo karty je příliš dlouhé. Odeberte: ${extraDigit}`);
//   }

  console.log(card.value);
  console.log(select.value);
};

form.addEventListener("submit", changeConteiner);
