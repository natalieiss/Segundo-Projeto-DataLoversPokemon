
export const orderData = (arrPokemon, orderType) => {
  const order = {
    "max-smaller-cp": function () { return arrPokemon.sort((a, b) => (b['stats']["max-cp"]) - (a['stats']["max-cp"])) },
    "smaller-max-cp": function () { return arrPokemon.sort((a, b) => (a['stats']["max-cp"]) - (b['stats']["max-cp"])) },
    "name-az": function () {
      return arrPokemon.sort((a, b) => {
        if (a['name'] > b['name']) {
          return 1
        }
        if (a['name'] < b['name']) {
          return -1
        }
      })
    },
    "name-za": function () {
      return arrPokemon.sort((a, b) => {
        if (a['name'] > b['name']) {
          return -1
        }
        if (a['name'] < b['name']) {
          return 1
        }
      })
    },
    "num": function () { return arrPokemon.sort((a, b) => (a['num']) - (b['num'])) },
    "spawn-chance": function () { return arrPokemon.sort((a, b) => (b['spawn-chance']) - (a['spawn-chance'])) },
    "weaknesses": function () { return arrPokemon.sort((a, b) => (a['weaknesses'].length) - (b['weaknesses'].length)) }
  }
  return order[orderType]()
}

export const filterByType = (data, selectFilter) =>
  data.filter((pokemon) => pokemon.type.includes(selectFilter))

