
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
  } else if (orderType === "name-za") {
    return arrPokemon.sort((a, b) => {
      if (a['name'] > b['name']) {
        return -1
      }
      if (a['name'] < b['name']) {
        return 1
      }
    })
  } else if (orderType === "num") {
    return arrPokemon.sort((a, b) => (a['num']) - (b['num']))
  } else if (orderType === "spawn-chance") {
    return arrPokemon.sort((a, b) => (b['spawn-chance']) - (a['spawn-chance']))
  } else if (orderType === "weaknesses") {
    return arrPokemon.sort((a, b) =>
      (a['weaknesses'].length) - (b['weaknesses'].length)
    )
  }
}

export const filterByType = (data, selectFilter) =>
  data.filter((pokemon) => pokemon.type.includes(selectFilter)) //includes funciona assim: se selecionei o tipo bug ele entra no include que pesquisa bug dentro do pokemon.type

export const typeName = (data, inputLetterName) => {
  return (data.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(inputLetterName.toLowerCase())
  ))
}

