// document.addEventListener("DOMContentLoaded", () => {
//   const modal = document.querySelector(".popup-wrapper");
//   const pokemonCards = document.getElementsByClassName("pokemon");

//   for (let i = 0; i < pokemonCards.length; i++) {
//     pokemonCards[i].addEventListener("click", () => {
//       console.log("pokemonCard");
//     });
//   }
// });

const modal = document.querySelector(".popup-wrapper")
const closePopup = document.querySelector(".popup-close")
const h1 = document.querySelector("h1")
const body = document.querySelector("body")

desativaModal = () => { 
    modal.style.display ="none"
}

ativaPeloTitulo = () => {
  h1.addEventListener("click", () => {
    modal.style.display ="flex"
  })
}

desativaModalNoClick = () => {
  closePopup.addEventListener("click", () => {
    modal.style.display ="none"
  })
}

ativaPeloTitulo()
desativaModal()
desativaModalNoClick()
