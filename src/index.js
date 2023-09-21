const abilitiesDisplay = document.querySelector(".ability-selector-content");
const typeDisplay = document.querySelector(".types-content");
const baseStatsDisplay = document.getElementsByClassName("number");
const baseStatsBars = document.getElementsByClassName("stat-bar")
const pokedexList = document.getElementById("pokedex-list");
// const displayEntry = document.querySelector(".display");
const preview = document.getElementById("preview-display");
const movesDisplay = document.querySelector(".moves-selector-content");
const movesList = document.querySelector(".move-selector-list");
// const itemsDisplay = document.querySelector(".item-selector-content");
// const hp = document.querySelector(".HP");

const baseStatsContent = document.querySelector(".base-stats-content");
const baseStatsTable = document.querySelector(".stats-table")
const teamList = document.querySelector(".team-list")

let pokedex = [];
let team = [];
// let moves = [];
const displayTeamList = (team) => {
  clearChildren(teamList);
  team.forEach(member => {
    const img = document.createElement("img");
    img.src = member.sprite;
    const li = document.createElement("li");
    const span = document.createElement("span");
    // span.innerText = member.name;
    img.display = "inline";
    li.appendChild(img);
    li.appendChild(span);
    teamList.append(li);
  });
}


const fetchPokedex = async () => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=1010`; // want to eventually limit this query based on user's limits
  const res = await fetch(url);
  const data = await res.json();
  const pokedex = data.results.map((result, index) => ({
    ...result,
    name: result.name,
    id: index + 1,
    sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
  }));
  return pokedex;
}

const displayPokedex = (pokedex) => {
  clearChildren(pokedexList);
  pokedex.forEach((entry) => {
    const li = document.createElement("li");
    li.classList.add("list-item", "display", `${entry.name}`);
    const div = document.createElement("div");
    div.classList.add("list-content");
    const button = createButton(entry);
    div.appendChild(button);
    li.appendChild(div);
    pokedexList.append(li);
  });
}

const filterPokedex = (input, pokedex) => {
  const searchTerm = input.toUpperCase();
  let result = [];
  let name = "";

  pokedex.forEach(entry => {
    name = entry.name.toUpperCase();
    if (name.includes(searchTerm)) {
      result.push(entry);
    }
  });
  return result;
}

function handleSearchInput (input) {
  const filteredPokedex = filterPokedex(input, pokedex);
  displayPokedex(filteredPokedex);
}

document.getElementById('search-input').addEventListener('input', function (event) {
  handleSearchInput(event.target.value);
});

const createButton = (entry) => {
  const button = document.createElement("button");
  button.classList.add("display-button");
  const img = document.createElement("img");
  img.classList.add("small")
  img.src = entry.sprite;
  const h2 = document.createElement("h2");
  h2.innerText = entry.id + ". " + entry.name;
  h2.classList.add("title")
  button.appendChild(img);
  button.appendChild(h2);
  button.addEventListener("click", handleClickPokedex);
  button.dataset.id = entry.id;
  button.dataset.name = entry.name;
  button.dataset.sprite = entry.sprite;
  return button;
}

const clearPokemonDisplay = () => {
  clearChildren(movesList);
  clearChildren(abilitiesDisplay);
  clearChildren(typeDisplay);
  clearChildren(baseStatsContent)
}

const clearChildren = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
}

const handleClickPokedex = async (event) => {
  const target = event.currentTarget;
  changePreview(target.dataset.sprite);
  const pokemon = await fetchPokemonData(target.dataset.id);
  const moves = await fetchMoves(pokemon.moves);
  displayPokemon(pokemon, moves);
}

const displayPokemon = (pokemon, moves) => {
  clearPokemonDisplay();
  displayMoves(moves);
  displayAbilities(pokemon.abilities);
  displayType(pokemon.types);
  displayBaseStats(pokemon.baseStat);

  const addToTeamButton = document.querySelector("#add-to-team");
  addToTeamButton.dataset.pokemon = JSON.stringify(pokemon);
  addToTeamButton.addEventListener("click", handleAddToTeam);

}

const handleAddToTeam = (event) => {
  const pokemon = JSON.parse(event.currentTarget.dataset.pokemon);
  team.push(pokemon);
  displayTeamList(team);
}

const displayType = (types) => {
  types.forEach(type => {
    const display = document.createElement("p");
    display.innerText = `${type}`;
    display.classList.add(`${type}`)
    typeDisplay.appendChild(display);
  });
}


const changePreview = (src) => {
  preview.src = src;
}

const fetchPokemonData = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
  const res = await fetch(url);
  const data = await res.json();
  const pokemon = {};
  pokemon.name = data.name;
  pokemon.sprite = data.sprites.front_default;
  pokemon.abilities = data.abilities.map((ability) => ability.ability.name);
  pokemon.types = data.types.map((type) => type.type.name);
  pokemon.moves = data.moves.map((move) => move.move.name);
  pokemon.baseStat = [];
  for (let i = 0; i < data.stats.length; i++) {
    pokemon.baseStat.push(data.stats[i].base_stat);
  }
  return pokemon;
}


const fetchMoveInfo = async (move) => {
  const url = `https://pokeapi.co/api/v2/move/${move}`
  const res = await fetch(url);
  const data = await res.json();
 
  return data;
}

const fetchMoves = async (moveNames) => {
  let result = Promise.all(moveNames.map(async (name) => {
    const data = await fetchMoveInfo(name);

    return data;
  }));
  return result;
}



const displayMoves = (moves) => {
  moves.forEach(move => {
    displayMove(move);
  });
}

const displayMove = (move) => {
  const display = document.createElement("li");
  display.innerText = `${move.name.split("-").join(" ").toUpperCase()}` //.split("-").join(" ")
  const url = document.createElement("a");
  display.setAttribute("href", `https://pokemondb.net/move/${move.name}`);
  display.appendChild(url);
  movesList.appendChild(display);
  movesDisplay.appendChild(movesList);
}

const fetchHoldableItems = async () => {
  const url = `https://pokeapi.co/api/v2/item-attribute/holdable`;
  const res = await fetch(url);
  const data = await res.json();

  const items = data.items;
  return items;
}

const displayAbilities = (abilities) => {
  abilities.forEach(ability => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.setAttribute("href", `https://pokemondb.net/ability/${ability}`);
    a.innerText = `${ability.toUpperCase()}`;
    li.appendChild(a);
    abilitiesDisplay.appendChild(li);
  });
}

const createStatsTable = () => {
  const table = document.createElement("table");
  table.classList.add("stats-table");
  table.appendChild(createStatsTableRow("HP"));
  table.appendChild(createStatsTableRow("Attack"));
  table.appendChild(createStatsTableRow("Defense"));
  table.appendChild(createStatsTableRow("Special-Defense"));
  table.appendChild(createStatsTableRow("Special-Attack"));
  table.appendChild(createStatsTableRow("Speed"));
  baseStatsContent.appendChild(table);
}

const createStatsTableRow = (statName) => {
  const row = document.createElement("tr");
  row.classList.add(`${statName}`);
  const header = document.createElement("th");
  header.innerText = `${statName}`.split("-").join(" ");
  row.appendChild(header);
  return row;
}

const barChartColor = (stat) => {
  const percent = stat / 230;
  if (percent <= .25) {
    return "bad-stat"
  } 

  if (percent <= .50) {
    return "decent-stat"
  }

  if (percent <= .75) {
    return "good-stat"
  }
  return "great-stat";
}

const makeBarChart = (stat) => {
  const barchart = document.createElement("td");
  barchart.classList.add("cell-barchart");
  const width = stat * 100 / 230;
  const statBar = document.createElement("div");
  statBar.classList.add(barChartColor(stat));
  statBar.setAttribute("style", `width:${width}%`);
  statBar.classList.add("stat-bar");
  barchart.appendChild(statBar);
  return barchart
}

const displayBaseStats = (baseStats) => {
  createStatsTable();
  const attack = document.querySelector(".Attack");
  const defense = document.querySelector(".Defense");
  const specialAttack = document.querySelector(".Special-Attack");
  const specialDefense = document.querySelector(".Special-Defense");
  const speed = document.querySelector(".Speed");
  const hp = document.querySelector(".HP");

  const tdhp = document.createElement("td");
  tdhp.classList.add("number");
  tdhp.innerText = baseStats[0];
  hp.appendChild(tdhp);  
  const hpbar = makeBarChart(baseStats[0]);
  hp.appendChild(hpbar);

  const tdattack = document.createElement("td");
  tdattack.classList.add("number");
  tdattack.innerText = baseStats[1];
  attack.appendChild(tdattack);
  const attackBar = makeBarChart(baseStats[1]);
  attack.appendChild(attackBar);
  

  const tddefense = document.createElement("td");
  tddefense.classList.add("number");
  tddefense.innerText = baseStats[2];
  defense.appendChild(tddefense);
  const defenseBar = makeBarChart(baseStats[2]);
  defense.appendChild(defenseBar);

  const tdsattack = document.createElement("td");
  tdsattack.classList.add("number");
  tdsattack.innerText = baseStats[3];
  specialAttack.appendChild(tdsattack);
  const sABar = makeBarChart(baseStats[3]);
  specialAttack.appendChild(sABar);

  const tdsdefense = document.createElement("td");
  tdsdefense.classList.add("number");
  tdsdefense.innerText = baseStats[4];
  specialDefense.appendChild(tdsdefense);
  const sDBar = makeBarChart(baseStats[4]);
  specialDefense.appendChild(sDBar);

  const tdspeed = document.createElement("td");
  tdspeed.classList.add("number");
  tdspeed.innerText = baseStats[5];
  speed.appendChild(tdspeed);
  const speedBar = makeBarChart(baseStats[5]);
  speed.appendChild(speedBar);
  
}


const main  = async () => {
    pokedex = await fetchPokedex();
    displayPokedex(pokedex);
    items = await fetchHoldableItems();
}
main();


//item stuff
// const fetchHeldItems = async (holdableItems) => {
//   let result = Promise.all(holdableItems.map(async (item) => {
//     const res = await fetch(item.url);
//     const data = await res.json();

//     return data;
//   }));
//   return result;
// }

// const fetchHeldItemInfo = async (item) => {
//   const url = `https://pokeapi.co/api/v2/item/${item}`;
//   const res = await fetch(url);
//   const data = await res.json();
//   const itemInfo = {};

//   itemInfo.name = data.name;
//   itemInfo.effect = data.effect_entries;
//   return itemInfo;
// }

// const displayHeldItems = async (heldItems) => {
//   const items = await fetchHeldItems(heldItems);
//   items.forEach(item => {
//     const listEl = document.createElement("li")
//     const a = document.createElement("a");
//     const name = item.name;
//     // console.log(item)
//     a.setAttribute("href", `https://pokemondb.net/item/${name}`);
//     a.innerText = `${name}`;
//     listEl.appendChild(a);
//     itemsDisplay.appendChild(listEl);
//     // console.log(fetchHeldItemInfo(item.name))
//   })
//   // console.log(items)
// }