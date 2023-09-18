# Pokemon Drafter

## Background

Pokemon Drafter is a game that allows players to "draft" a team of 6 pokemon,
export their teams to https://pokemonshowdown.com/, and battle against each other. 
Players can customize the attributes of their pokemon, which items they can hold, 
and which moves they have. Along the way, players can opt to limit the number of 
"draftable" pokemon based on different categories such as type, weight, height, etc.
The teams will be converted to a text file that PokemonShowdown can read and 
convert to a team that will allow players to battle each other.  


## Functionality

With Pokemon Drafter, players should be able to:

- Customize the drafting process via time and available pokemon
- Change their pokemon's attributes (known as IVs)
- Pick their pokemon's moves and held items
- Export their newly-made teams to a format that allows them to battle on https://pokemonshowdown.com/

In addition, this project will include:

- a production README
- an ABOUT modal that will describe the rules of the draft and background of the game

## Technologies, Libraries, APIs

This project will be implemented with the following technologies:

- `Webpack` and `Babel` to bundle and transpile the source JavaScript code
- `npm` to manage project dependencies
- `pokeapi` to fetch data about individual pokemon and items


## Wireframe

<image src="./update-wireframe.png"/>


## Implementation Timeline

NB:

- Friday & Weekend: Setup project, including getting webpack up and running. Starting 
development of the "Pokedex" that will display all pokemon in order. Styling the Pokedex 
to allow for easy drafting process. Starting to display an individual pokemon's show page
after clicking on that pokemon's entry in the Pokedex

- Monday: Add pokemon attributes to their show pages. This will include moves to learn, 
stats to change (IVs), natures to pick, and items to give. Find a way to present this information
in a useful and practical way that makes for easy customization.

- Tuesday: Creating `Team`, `User`, and `Pokemon` classes allowing for a pokemon to belong to
a team and a team to a user. Start implementing the different rules of the game such as the 
timer, a query filter for the `pokeapi` to limit number of draftable pokemon, and a limit to the
number of pokemon that can be on a team. Converting built teams to a text format that is readable 
by PokemonShowdown.

- Wednesday: Finish the tasks above if they still need work. Focus on styling for a better user 
experience.

- Thursday: Deploy to GitHub pages. If time, rewrite this proposal as a production README.

## Bonus Features

Some features that I would like to include eventually:

- Allowing players to customize the time of the draft instead of using a default timer

- Giving players a seamless transition to building a team and battling with it by 
providing a designated link for them to use that sets up their battle for them on 
PokemonShowdown

- Allow players to customize the "look" of their pokemon 