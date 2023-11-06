// Definice pole citátů
const quotes = [
    "Citát 1",
    "Citát 2",
    "Citát 3",
    // další citáty
  ];
  
  // Funkce pro přesunutí citátu na první místo
  function moveToTop(index) {
    if (index >= 0 && index < quotes.length) {
      const quoteToMove = quotes.splice(index, 1)[0];
      quotes.unshift(quoteToMove);
    }
  }
  
  // Exportování funkce moveToTop
  module.exports = {
    moveToTop,
  };
  