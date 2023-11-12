const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 5;
let offset = 0



function loadPokemonItems (offset, limit) {

    pokeApi.getPokemons(offset, limit).then((pokemons =[]) =>{
        const newHtml = pokemons.map((pokemon) => `
        
            <li class="pokemon ${pokemon.mainType}">
                <span class="number ${pokemon.mainType}">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
        
                <div class="details">
        
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${pokemon.mainType}">${type}</li>` ).join('')}
                    </ol>
        
                    <img src="${pokemon.image}" 
                        alt="${pokemon.name}">
                </div>
            </li>
        
            `).join("")
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItems(offset, limit)

loadMoreButton.addEventListener("click", () => {
    offset += limit 
    loadPokemonItems(offset, limit)
})
