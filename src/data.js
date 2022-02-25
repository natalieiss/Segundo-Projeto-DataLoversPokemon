
export const orderData = (arrPokemon, orderType) => {
  if (orderType === "max-smaller-cp") {
    return arrPokemon.sort((a, b) => (b['stats']["max-cp"]) - (a['stats']["max-cp"]))
  } else if (orderType === "smaller-max-cp") {
    return arrPokemon.sort((a, b) => (a['stats']["max-cp"]) - (b['stats']["max-cp"]))
  } else if (orderType === "name-az") {
    return arrPokemon.sort((a, b) => {
      if (a['name'] > b['name']) {
        return 1
      }
      if (a['name'] < b['name']) {
        return -1
      }
    })
  }
}


export const filterByType = (data, selectFilter) =>
  data.filter((pokemon) => pokemon.type.includes(selectFilter))

// export const filterSearchName = ()

