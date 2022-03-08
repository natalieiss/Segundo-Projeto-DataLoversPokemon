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
  data.filter((pokemon) => pokemon.type.includes(selectFilter)) //includes funciona assim: se selecionei o tipo bug ele entra no include que pesquisa bug dentro do pokemon.type

export const typeName = (data, inputLetterName) => {
  return (data.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(inputLetterName.toLowerCase())
  ))
}

export const mathWithStr = (arrPokemon, statusPokemon) => {
  let arrWithAllStatus = []

  if (typeof (arrPokemon[0][statusPokemon]) == 'object') {
    let arr = arrPokemon.map((pokemon) => pokemon[statusPokemon])
    arr.forEach(element => {
      arrWithAllStatus = arrWithAllStatus.concat(element)
    })
    console.log("if", arrWithAllStatus)
  } else {
    arrWithAllStatus = arrPokemon.map((pokemon) => pokemon[statusPokemon])
    console.log("else", arrWithAllStatus)
  }

  // eslint-disable-next-line no-undef
  const arrWithoutRepeat = [...new Set(arrWithAllStatus)]
  console.log("sem repetição", arrWithoutRepeat)
  const sum = Object.create(null); //estudar muito
  let qtd = 0
  for (let statusPokemon of arrWithoutRepeat) {
    console.log(typeof statusPokemon)
    qtd = 0
    for (var i = 0; i < arrWithAllStatus.length; i++) {
      if (arrWithAllStatus[i] === statusPokemon) qtd++
    }
    sum[statusPokemon] = qtd; //estudar muito
  }
  console.log(sum)
  console.log(sum['grass'])

}
