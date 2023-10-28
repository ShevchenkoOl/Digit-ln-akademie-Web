const karticky = document.querySelectorAll('.karticka')

karticky.forEach((karta) => {
    karta.addEventListener('click', (event) => {
            karta.classList.toggle('otocena');
            console.log(event.target);
    })
});

