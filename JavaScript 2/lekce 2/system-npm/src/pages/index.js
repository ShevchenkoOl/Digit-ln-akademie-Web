const greet = (name) => {
    return `Hello ${name}`;
  };
  
  const h1Elm = document.querySelector('h1');
  h1Elm.textContent = greet('Martin');
  console.log(greet('Martin'));