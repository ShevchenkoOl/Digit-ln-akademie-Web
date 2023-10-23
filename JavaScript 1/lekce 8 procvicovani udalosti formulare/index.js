const firstName = document.querySelector('#firstName');
const title = document.querySelector('#registration h1')
const changeInput = (e) =>{
title.textContent = `Prihlaska pro ${e.target.value}`;
}
firstName.addEventListener('input', changeInput);