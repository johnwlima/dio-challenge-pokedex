const offset = 0;
const limit = 10;
const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10";

function convertPokemonToLi (pokemon) {
    return `
    
    <li class="pokemon">
        <span class="number">#001</span>
        <span class="name">${pokemon.name}</span>

        <div class="details">

            <ol class="types">
                <li class="type">glass</li>
                <li class="type">poison</li>
            </ol>

            <img src="assets/img/Bubassaur.webp" alt="${pokemon.name}">
        </div>
    </li>

    `
}

const pokemonList = document.getElementById('pokemonList')

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => {

        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonToLi (pokemon)
        }

        console.log(pokemons);
    })
    .catch((error) => console.log(error))
    .finally(() =>  console.log("Requisição concluida!"))



