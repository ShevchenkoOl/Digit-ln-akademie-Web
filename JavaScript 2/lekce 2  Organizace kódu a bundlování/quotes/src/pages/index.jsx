import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

document.querySelector('#root').innerHTML = render(
  <div class="container">
    <header>
      <div className="logo"></div>
      <h1>Webová aplikace</h1>
    </header>
    <main>
      <p>Startovací šablona pro webovou aplikaci v JavaScriptu s JSX. Vytvořeno pomocí <a href="https://www.npmjs.com/package/create-kodim-app">create-kodim-app</a>.</p>
    </main>
    <footer>
      <p>Czechitas, Digitální akademie: Web</p>
    </footer>
  </div>
);

// Importování funkce moveToTop z quotes.js
const { moveToTop } = require('./quotes');

// Funkce pro vykreslení citátů na stránce
function renderQuotes() {
  const quotesContainer = document.getElementById('quotes-container');
  quotesContainer.innerHTML = '';

  quotes.forEach((quote, index) => {
    const quoteElement = document.createElement('div');
    quoteElement.textContent = quote;
    quoteElement.classList.add('quote');

    // Přidání posluchače události click
    quoteElement.addEventListener('click', () => {
      moveToTop(index);
      renderQuotes();
    });

    quotesContainer.appendChild(quoteElement);
  });
}

// Volání funkce renderQuotes při načtení stránky
window.addEventListener('DOMContentLoaded', () => {
  renderQuotes();
});
