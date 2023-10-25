const btnUp = document.querySelector('.counter__up');
const btnDown = document.querySelector('.counter__down');
const valueElm = document.querySelector('.counter__value');
let number = parseInt(valueElm.textContent); // Преобразуем текст в число

btnUp.addEventListener('click', () => {
   number += 1;
   valueElm.textContent = number; 
});

btnDown.addEventListener('click', () => {
  number -= 1;
  valueElm.textContent = number;
});
