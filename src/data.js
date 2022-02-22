// estas funciones son de ejemplo

export const orderData = (arrPokemon, orderType) => {
  if (orderType === "max-smaller-cp") {
    return arrPokemon.sort((a, b) => (b['stats']["max-cp"]) - (a['stats']["max-cp"]))
  } else if (orderType === "smaller-max-cp") {
    return arrPokemon.sort((a, b) => (a['stats']["max-cp"]) - (b['stats']["max-cp"]))
  }
  // } else if (orderType === "name-za") {
  //   const orderZA = arrPokemon.sort((a, b) => { (b.name) - (a.name) })
  //   return orderZA
  // }
}

export const anotherExample = () => {
  return 'OMG';
};

// export const showPokemons = (pokemonsList) => pokemonsList.slice(0, 251);
// // Filtrar Pokémons por nome através do input text
// export const filterByName = (pokemonsList, pokemonsName) => {
//   const lowerCaseName = pokemonsName.toLowerCase();
//   return pokemonsList
//     .filter((pokemon) => pokemon.name.toLowerCase().startsWith(lowerCaseName))
//     .slice(0, 251);
// };

