
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

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join("")
})
