const pokedexList = document.getElementById("pokedex-list");
const displayEntry = document.querySelector(".display");

const fetchPokedex = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=10`; // want to eventually limit this query based on user's limits
    const res = await fetch(url);
    const data = await res.json();
    const dexEntries = data.results.map((result, index) =>({
        ...result,
        id: index + 1,
        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
    }));
    displayDexEntries(dexEntries);
}

const displayDexEntries = (dexEntries) => {
   dexEntries.forEach((entry) =>{
    const li = document.createElement("li");
    li.classList.add("list-item", "display");
    const div = document.createElement("div");
    div.classList.add("list-content");
    const button = createButton(entry);
    div.appendChild(button);
    li.appendChild(div);
    
    
    pokedexList.append(li)
   });
}

const createButton = (entry) => {
    const button = document.createElement("button");
    button.classList.add("display-button");
    const img = document.createElement("img");
    img.classList.add("small")
    img.src = entry.sprite;
    const h2 = document.createElement("h2");
    h2.innerHTML = entry.id + ". " + entry.name;
    button.appendChild(h2);
    button.appendChild(img);
    return button;
}

const fetchPokemonData = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
    const res = await fetch(url);
    const pokemon = await res.json();
    const abilities = pokemon.abilities.map((ability) => ability.ability.name);
    // pokemon.abilities = abilities;
    const type = pokemon.types.map((type) => type.type.name);
    // pokemon.types = type;
    const moves = pokemon.moves.map((move) => move.move.name);
    // pokemon.moves = moves
    const baseStats = pokemon.stats.map((baseStat) => baseStat.base_stat);
    // pokemon.base_stat = baseStats
    const baseStatName = pokemon.stats.map((name) => name.stat.name);

    const evs = pokemon.stats.map((ev) => ev.effort);
    const height = pokemon.height // measured in meters so divide by 10
    const weight = pokemon.weight //measured in kgs so divide by 10

    displayPokemon(pokemon)
}

const displayPokemon = (pokemon) => {
    console.log(pokemon.name)
}

// displayEntry.addEventListener("click", displayPokemon)



fetchPokedex();


