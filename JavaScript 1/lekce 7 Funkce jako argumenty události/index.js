//--------------------------------TimeOUT
// const timeIsUp = () => {
//     document.body.innerHTML += '<p>Čas vypršel</p>';
//   };
  
//   setTimeout(timeIsUp, 5000);



//----------------------------INTERVAL----------------
// const once = () => {
//     document.body.innerHTML +=
//       '<p>Tento text se přidal do stránky po pěti sekundách od načtení stránky.</p>';
//   };
  
//   setTimeout(once, 5000);
  
//   const everyThreeSeconds = () => {
//     document.body.innerHTML +=
//       '<p>Tento text se přidává opakovaně každé tři sekundy.</p>';
//   };
  
//   setInterval(everyThreeSeconds, 3000);



// const sayHello = () => {
//     document.body.innerHTML += '<p>ahoj</p>';
//   };
  
//   const timerId = setInterval(sayHello, 5000);





const justFood = (people) => {
       document.body.innerHTML = `Catering od Just Food pro ${people} lidí za `+ people*10 + ' kc';
}

const yourMama = (people) => {
    document.body.innerHTML = `Catering od Just Food pro ${people} lidí za `+ people*50 + ' kc';
}

const flavourHaven = (people) => {
    document.body.innerHTML = `Catering od Just Food pro ${people} lidí za `+ people*100 + ' kc';
}

const createEvent = (even, people) => {
    if (even === "Your Mama") {
        return yourMama(people);
    } if (even === "Flavour Haven"){
        return flavourHaven(people);
    } if (even === "Just Food") {
        return justFood(people);
    }
};
createEvent('Your Mama', 7);