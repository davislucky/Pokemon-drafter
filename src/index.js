// @ts-check
const pokedexList = document.getElementById("pokedex-list");
const displayEntry = document.querySelector(".display");
const preview = document.getElementById("preview-display");

const fetchPokedex = async () => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=100`; // want to eventually limit this query based on user's limits
  const res = await fetch(url);
  const data = await res.json();
  const count = data.count;
  const pokedex = data.results.map((result, index) => ({
    ...result,
    id: index + 1,
    sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
  }));
  return pokedex;
}

const displayPokedex = (pokedex) => {
  pokedex.forEach((entry) => {
    const li = document.createElement("li");
    li.classList.add("list-item", "display");
    const div = document.createElement("div");
    div.classList.add("list-content");
    const button = createButton(entry);
    div.appendChild(button);
    li.appendChild(div);
    pokedexList.append(li);
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
  button.appendChild(img);
  button.appendChild(h2);
  button.addEventListener("click", handleClick);
  button.dataset.id = entry.id;
  button.dataset.name = entry.name;
  button.dataset.sprite = entry.sprite;
  return button;
}

const handleClick = async (event) => {
  const target = event.currentTarget;
  changePreview(target.dataset.sprite);
  const pokemon = await fetchPokemonData(target.dataset.id);
  displayPokemon(pokemon);
}

const changePreview = (src) => {
  preview.src = src;
}

const fetchPokemonData = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
  const res = await fetch(url);
  const data = await res.json();
  const pokemon = {};
  pokemon.abilities = data.abilities.map((ability) => ability.ability.name);
  pokemon.types = data.types.map((type) => type.type.name);
  pokemon.moves = data.moves.map((move) => move.move.name);
  pokemon.baseStat = data.stats.map((baseStat) => baseStat.base_stat);
  pokemon.baseStatName = data.stats.map((name) => name.stat.name);
  pokemon.evs = data.stats.map((ev) => ev.effort);
  pokemon.height = data.height; // measured in meters so divide by 10
  pokemon.weight = data.weight; //measured in kgs so divide by 10
  return pokemon;
}

const displayPokemon = (pokemon) => {
  console.log(pokemon);
}
const main  = async () => {
    const pokedex = await fetchPokedex();
    displayPokedex(pokedex);
}
main();
