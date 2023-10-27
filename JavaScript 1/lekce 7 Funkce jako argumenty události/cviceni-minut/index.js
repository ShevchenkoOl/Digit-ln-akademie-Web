// const alarm = document.querySelector('.alarm');
// const audio = document.querySelector('audio');
// const btn = document.querySelector('button');
// const time = prompt('Zadejte, po kolika sekundách se má časovač spustit');
// const timeInSek = parseInt(time, 10) //// Преобразуйте переменную time в число, так как prompt возвращает строку. 10 - это 10-рычная система вычесления
// const timeIsUp = () => {
//     alarm.classList.add('alarm--ring');
//     audio.play();
// }; 

// setTimeout(timeIsUp, timeInSek*1000);
// btn.addEventListener('click', () => {
//     clearTimeout(timeIsUp);
// });

const budik = document.querySelector('.alarm');
const audio = document.querySelector('audio');
const tlacitko = document.querySelector('button');
const pocetSekund = Number(prompt('Zadejte počet sekund k odpočtu:'));
const zazvon = () => {
  budik.classList.add('alarm--ring');
  audio.play();
};
const odpocet = setTimeout(zazvon, pocetSekund * 1000);
tlacitko.addEventListener('click', () => {
  clearTimeout(odpocet);
});