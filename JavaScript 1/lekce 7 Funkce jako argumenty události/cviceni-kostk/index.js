const image = document.querySelector('.dice');
let curentImage = 1;
const changeImage = () => {
    if (curentImage < 6) {
curentImage++
    } else {
        curentImage = 1;
    }
    image.src=`./img/side${curentImage}.svg`
 };

 document.addEventListener('keypress', changeImage);
