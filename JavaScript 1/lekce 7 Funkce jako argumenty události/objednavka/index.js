const ordered = document.querySelector('#button-order');

ordered.addEventListener('click', () => {
    ordered.textContent = 'Objednano'
});

const timeIsUp = () => {
    ordered.textContent = 'Objednat';
    ordered.disabled = false;
    //ordered.removeAttribute('disabled');
  };
  setTimeout(timeIsUp, 5000);