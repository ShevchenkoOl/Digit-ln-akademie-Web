import { radio } from "./data.js";

const radioList = document.querySelectorAll(".item");
//const item = radio;

// radioList.innerHTML = `<p>name: ${item.name}</p>
// <p>frequency: ${item.frequency}</p>
// <p>description: ${item.description}</p>
// <p><a href="${item.link}">Link</a></p>`;

radioList.forEach((item, index) => {
  const radioInfo = radio[index];
  item.innerHTML = `<p>name: ${radioInfo.name}</p>
<p>frequency: ${radioInfo.frequency}</p>
<p>description: ${radioInfo.description}</p>
<p><a href="${radioInfo.link}">Link</a></p>`;
});

//   name: "Evropa 2",
//   frequency: "88.6 FM",
//   description: "Evropa 2 je nejposlouchanější česká komerční rádio mezi mladými posluchači. Vysílá hudbu z žebříčků, kterou si sami vybírají posluchači a nejnovější hity.",
//   link: "/evropa2.html",

// Import the 'radio' object from './data.js'
// import { radio } from './data.js';

// // Assuming you have multiple '.item' elements, you can select them all using querySelectorAll
// const radioItems = document.querySelectorAll('.item');

// // Loop through each '.item' element and populate it with radio information
// radioItems.forEach((item) => {
//   item.innerHTML = `
//     <p>name: ${radio.name}</p>
//     <p>frequency: ${radio.frequency}</p>
//     <p>description: ${radio.description}</p>
//     <p><a href="${radio.link}">Link</a></p>
//   `;
// });
