const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const form = document.querySelector('.form ');

const getEmail = (event) => {
    event.preventDefault();
   const text =  input.value;
   if (text !==""){
    input.classList.remove("input");
    alert(`<p>Na vas email ${text} uspesne odeslani podminky</p>`);
   }
   
//    form.innerHTML = `<p>Na vas email ${text} uspesne odeslani podminky</p>`;
}

form.addEventListener('submit', getEmail)