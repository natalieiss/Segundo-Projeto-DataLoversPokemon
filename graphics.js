let responseVar

fetch("./data/pokemon/pokemon.json")
  .then(dados => dados.json())
  .then(response => {
    responseVar = response.pokemon
  })

console.log(responseVar)
