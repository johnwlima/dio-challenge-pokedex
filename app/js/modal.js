const modal = document.getElementById('modal');
const pokemonCards = document.getElementsByClassName('pokemon')

pokemonCards.addEventListener('click', (e) => {
  const clickedCard = event.target
  console.log(clickedCard);
})