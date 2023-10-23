const user = {
    email: 'bartolomej.rozumbrada@gmail.com',
    password: 'vimzenicnevim',
    name: 'Bartoloměj',
  };
const form = document.querySelector('#form');
const name = document.querySelector("#name");
const password = document.querySelector('#password')
const container = document.querySelector('.container');

const checkPasswrd = (event) => {
    event.preventDefault();
    if (name.value === user.name && password.value === user.password){
container.textContent = `Přihlášený uživatel: ${user.name}`;
    } else {
        password.value='';
        alert ("Neplatné přihlašovací údaje");
    }
}

form.addEventListener('submit', checkPasswrd);