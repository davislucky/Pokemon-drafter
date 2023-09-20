
const abilitiesDisplay = document.querySelector(".ability-selector-content");
const typeDisplay = document.querySelector(".types-content");
const baseStatsDisplay = document.querySelector(".base-stats-content");
const pokedexList = document.getElementById("pokedex-list");
const displayEntry = document.querySelector(".display");
const preview = document.getElementById("preview-display");
const movesDisplay = document.querySelector(".moves-selector-content");
const movesList = document.querySelector(".move-selector-list");
const itemsDisplay = document.querySelector(".item-selector-content");


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

// function pokedexSearch() {
//   let input = document.getElementById("search-input");
//   let filter = input.value.toUpperCase();
//   let ul = document.getElementById("pokedex-list");
//   let li = ul.getElementsByTagName("li");
//   let button = li.getElementsByTagName("dbutton")

//   for (let i = 0; i < li.length; i++) {
//     let h2 = li[i].getElementsByTagName("h2")[0];
//     let textValue = h2.textContent || h2.innerText;

//     if (textValue.toUpperCase().indexOf(filter) > -1) {
//       li[i].display = "";
//     } else {
//       li[i].display = "none";
//     }
//   }
// }

document.getElementById('search-input').addEventListener('input', function (event) {
  const searchTerm = event.target.value.toUpperCase();
  const listItems = document.querySelectorAll('.list-item');

    listItems.forEach(function (item) {
      // const text = item.querySelectorAll("button.display-button > a");
      const children = item.childNodes;
      // console.log(children)
      const childtwo = children[0];
      // console.log(childtwo)
      const gkids = childtwo.childNodes[0];
      // console.log("gkids:", gkids)
      const ggkids = gkids.childNodes[1];
      // console.log(ggkids);
      const itemText = ggkids.innerText.toUpperCase();
  
      if (itemText.includes(searchTerm)) {
          item.style.display = 'list-item';
      } else {
          item.style.display = 'none';
      }
    });
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

const clearFields = () => {
  clearChildren(movesDisplay);
  clearChildren(baseStatsDisplay);
  clearChildren(abilitiesDisplay);
  clearChildren(typeDisplay);

}

const clearChildren = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
}

const handleClickPokedex = async (event) => {
  clearFields();
  const target = event.currentTarget;
  changePreview(target.dataset.sprite);
  const pokemon = await fetchPokemonData(target.dataset.id);
  displayPokemon(pokemon);
}
const displayPokemon = (pokemon) => {
  // console.log(pokemon);
  // displayMoves(pokemon.moves);
  displayAbilities(pokemon.abilities);
  displayType(pokemon.types);
  displayEVs(pokemon.baseStatName, pokemon.evs);
  displayIVs(pokemon.baseStatName, pokemon.ivs);
  // displayBaseStats(pokemon.baseStatName, pokemon.baseStat);
  // displayHeldItems();
}

const displayType = (types) => {
  types.forEach(type => {
    const display = document.createElement("p");
    display.innerText = `${type}`;
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
  pokemon.abilities = data.abilities.map((ability) => ability.ability.name);
  pokemon.types = data.types.map((type) => type.type.name);
  pokemon.moves = data.moves.map((move) => move.move.name);
  pokemon.baseStat = data.stats.map((baseStat) => baseStat.base_stat);
  pokemon.baseStatName = data.stats.map((name) => name.stat.name);
  pokemon.evs = data.stats.map((ev) => ev.effort);
  pokemon.ivs = data.stats.map((ev) => ev.effort);
  pokemon.height = data.height; // measured in meters so divide by 10
  pokemon.weight = data.weight; //measured in kgs so divide by 10
  return pokemon;
}



const fetchMoveInfo = async (move) => {
  const url = `https://pokeapi.co/api/v2/move/${move}`
  const res = await fetch(url);
  const data = await res.json();
  const moveInfo = {};
  
  moveInfo.name = data.name;
  moveInfo.type = data.type.name;
  moveInfo.power = data.power;
  moveInfo.accuracy = data.accuracy;
  moveInfo.class = data.damage_class.name;
  moveInfo.url = `https://pokemondb.net/move/${move}`
  return moveInfo;
}

const displayMoves = (moves) => {
  moves.forEach(move => {
    displayMove(move);
  });
}

const displayMove = async (move) => {
  const moveInfo = await fetchMoveInfo(move);
  const display = document.createElement("li");
  // display.setAttribute("value", `${move}`);
  display.innerText = `${moveInfo.type}`.split("-").join(" ")
  movesList.appendChild(display);
  movesDisplay.appendChild(movesList);
}



const fetchHeldItems = async () => {
  const url = `https://pokeapi.co/api/v2/item-attribute/holdable`;
  const res = await fetch(url);
  const data = await res.json();

  const items = data.items;
  return items;
}

const fetchHeldItemInfo = async (item) => {
  const url = `https://pokeapi.co/api/v2/item/${item}`;
  const res = await fetch(url);
  const data = await res.json();
  const itemInfo = {};

  itemInfo.name = data.name;
  itemInfo.effect = data.effect_entries;
  return itemInfo;
}

const displayHeldItems = async () => {
  const items = await fetchHeldItems();
  items.forEach(item => {
    const listEl = document.createElement("li")
    const a = document.createElement("a");
    const name = item.name;
    console.log(name)
    a.setAttribute("href", `https://pokemondb.net/item/${name}`);
    a.innerText = `${item.name} `;
    listEl.appendChild(a);
    itemsDisplay.appendChild(listEl);
    console.log(fetchHeldItemInfo(item.name))
  })
}


const displayAbilities = (abilities) => {
  abilities.forEach(ability => {
    const a = document.createElement("a");
    a.setAttribute("href", `https://pokemondb.net/ability/${ability}`);
    a.innerText = `${ability} `;
    abilitiesDisplay.appendChild(a);
  });
}

const displayBaseStats = (names, baseStats) => {
  const stats = {};

  for (let i = 0; i < names.length; i++) {
    const name = names[i];

    for (let j = 0; j < baseStats.length; j++) {
      const number = baseStats[j];

      stats[name] = number;
    }
  }
  console.log(stats);
  

  // Object.entries(stats).forEach(stat => {
  //   const display = document.createElement("p");
  //   display.innerText = `${stat}`
  //   baseStatsDisplay.appendChild(display); //not working
  // });

}

const displayEVs = (names, evs) => {
  const stats = {};

  for (let i = 0; i < names.length; i++) {
    const name = names[i];

    for (let j = 0; j < evs.length; j++) {
      stats[name] = 0;
    }
  }
  console.log(stats);
  return stats;
}

const displayIVs = (names, ivs) => {
  const stats = {};

  for (let i = 0; i < names.length; i++) {
    const name = names[i];

    for (let j = 0; j < ivs.length; j++) {
      stats[name] = 0;
    }
  }
  console.log(stats);
  return stats;
}

const main  = async () => {
    const pokedex = await fetchPokedex();
    displayPokedex(pokedex);
}
main();

const listItems = document.querySelectorAll('.display-button'); 
console.log(listItems)
