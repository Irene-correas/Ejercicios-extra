"use strict";
const palettesContainer = document.querySelector(".js-palettes-container");
let palettes = [];

fetch(
  "https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palette.json"
)
  .then(response => {
    response.json();
  })

  .then(function (data) {
    console.log(data);
    palettes = data.palettes;
    console.log(palettes);
  })






// const containerEl = document.querySelector(".container");
// let colorArray = [];

// const paintSquares = () => {
//   for (let i = 0; i < colorArray.length; i++) {
//     const divEl = document.createElement("div");
//     divEl.classList.add("color_item");
//     divEl.style.backgroundColor = `#${colorArray[i]}`;
//     console.log(`${colorArray[i]}`);

//     containerEl.appendChild(divEl);
//   }
// };