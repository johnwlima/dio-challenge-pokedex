const modal = document.getElementById("myModal");
const pokemonCards = document.getElementsByClassName("pokemon");
const closeModalBtn = document.getElementById("closeModalBtn");
const body = document.body;

for (const pokemonCard of pokemonCards) {
  openModalBtn.addEventListener("click", function () {
    modal.style.display = "block";
    body.style.overflow = "hidden"; // Desativa o scroll da página principal
  });
}

closeModalBtn.addEventListener("click", function () {
  modal.style.display = "none";
  body.style.overflow = "auto"; // Ativa o scroll da página principal
});

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    body.style.overflow = "auto"; // Ativa o scroll da página principal
  }
});
