const ligth = document.querySelector('.bulb');
let isOn = false;
const ligthOn = () => {
  if (isOn) {
  ligth.classList.remove('bulb--on');
  }else {
    ligth.classList.add('bulb--on');
  }
  isOn=!isOn; //переключения
};
document.addEventListener('keypress', ligthOn);




