import data from './data/pokemon/pokemon.js'

import {
  filterByType,
  orderData
} from "./data.js"


const pokemon = data.pokemon;

const btnMobile = document.getElementById('btn-mobile')
const selectOrder = document.querySelector('#select-order')

let sectionCardsPokemon = document.querySelector("[data-section]") //quando coloca em colchetes ele pega todos os dados da section inclusive tags, elementos, atributos, texto e id
let cardSmall = document.getElementById('card-pokemon')
let showPokemonBig = document.getElementById('card-pokemon-big')

function toggleMenu(event) {
  if (event.type === 'touchstart') {
    event.preventDefault
  } else {
    const nav = document.getElementById('nav-options')
    nav.classList.toggle('active')
  }
}

btnMobile.addEventListener("click", toggleMenu)
btnMobile.addEventListener("touchstart", toggleMenu)

const smallCardPokemon = (arrPokemon) => {
  cardSmall.textContent = ""
  arrPokemon.forEach((onePokemon, index) => {
    let saveType = ""
    for (let oneTypePokemon of onePokemon.type) {
      saveType += (" " + oneTypePokemon.toUpperCase())
    }
    console.log(index)
    cardSmall.insertAdjacentHTML("beforeend", `<button class="card-pokemon" data-item="${index}" > <div>
    <img data-item="${index}" src="${onePokemon.img}" alt="Imagem Pokemon" class="img-pokemon">
    <p data-item="${index}" class="paragraph-card">${onePokemon.name.toUpperCase()}</p>
    <p data-item="${index}" class="paragraph-card">${onePokemon.num}</p> <p data-item="${index}" class="paragraph-card">${saveType}</p> </div> </button>`)
  })
}
let arrPokemon = pokemon
smallCardPokemon(arrPokemon)
const filterTypes = document.querySelector('#type')

selectOrder.addEventListener("change", (e) => {
  let changeOrder = e.target.value
  console.log(changeOrder)
  const arrPokemonOrder = orderData(arrPokemon, changeOrder)
  console.log(arrPokemonOrder)
  return smallCardPokemon(arrPokemonOrder)
})

filterTypes.addEventListener("change", () => {
  if (filterTypes.value !== "") {
    if (filterTypes.value === "filtrar") {
      smallCardPokemon(data.pokemon)
    }
    arrPokemon = filterByType(data.pokemon, filterTypes.value)
  }
  smallCardPokemon(arrPokemon)
})

function apearBigCardPokemon(data) {
  showPokemonBig.textContent = ''
  const onePokemon = arrPokemon[Number(data)]

  let resistantType = ""
  const resistantAtribute = onePokemon.resistant //trocar as const para letras maiúsculas
  for (let resistantValue of resistantAtribute) {
    resistantType += " " + resistantValue + "/"
  }

  let weaknessesType = ""
  const weaknessesAtribute = onePokemon.weaknesses //trocar as const para letras maiúsculas
  for (let weaknessesValue of weaknessesAtribute) {
    weaknessesType += " " + weaknessesValue + "/"
  }

  let pokemonType = ""
  const typeAtribute = onePokemon.type
  for (let eachTypeOfValue of typeAtribute) {
    pokemonType += " " + eachTypeOfValue + "/"
  }

  showPokemonBig.insertAdjacentHTML('beforeend', `<div class="image-"><img src="${onePokemon.img}" alt="Imagem Pokemon" class="image-big"></div> <div class=""><p class="paragraph-big-about"><b>About: </b>${onePokemon.about}</p></div>`)
  showPokemonBig.insertAdjacentHTML('beforeend', `<div class="pattern size-height"> <p class="paragraph-big"><b>Name: </b>${onePokemon.name.toUpperCase()}</p> <p class="paragraph-big"><b>Number: </b>${onePokemon.num}</p> <p class="paragraph-big"><b>Type: </b>${pokemonType}</p> <p class="paragraph-big"><b>Resistant: </b>${resistantType}</p><p class="paragraph-big"><b>Weaknesses: </b>${weaknessesType}</p> <p class="paragraph-big"><b>Eggs: </b>${onePokemon.egg}</p>   <p class="paragraph-big"><b>Pokemon rarity: </b>${onePokemon['pokemon-rarity']}</p> <p class="paragraph-big"><b>Spawn Chance: </b>${onePokemon['spawn-chance']}</p> <p class="paragraph-big"><b>Buddy distance km: </b>${onePokemon['buddy-distance-km']}</p></div>`)

  const sizePokemon = onePokemon.size
  const statsPokemon = onePokemon.stats
  showPokemonBig.insertAdjacentHTML('beforeend', `<div class="pattern"><p class="paragraph-big"><b>Base attack: </b>${statsPokemon['base-attack']}</p> <p class="paragraph-big"><b>Base defense: </b>${statsPokemon['base-defense']}</p> <p class="paragraph-big"><b>Base stamina: </b>${statsPokemon['base-stamina']}</p> <p class="paragraph-big"><b>Max CP: </b>${statsPokemon['max-cp']}</p> <p class="paragraph-big"><b>Max hp: </b>${statsPokemon['max-hp']}</p><p class="paragraph-big"><b>Height: </b>${sizePokemon['height']}</p> <p class="paragraph-big"><b>Weight: </b>${sizePokemon['weight']}</p></div>`)

  const quickMoveAtribute = onePokemon['quick-move']
  for (let eachQuickMoveOfValue of quickMoveAtribute) {
    showPokemonBig.insertAdjacentHTML('beforeend', `<div class="pattern size-height"><p class="paragraph-big"><b>Quick Move Name: </b>${eachQuickMoveOfValue['name']}</p> <p class="paragraph-big"><b>Quick Move Type: </b>${eachQuickMoveOfValue['type']}</p> <p class="paragraph-big"><b>Quick Move Base Damage: </b>${eachQuickMoveOfValue['base-damage']}</p> <p class="paragraph-big"><b>Quick Move Energy: </b>${eachQuickMoveOfValue['energy']}</p> <p class="paragraph-big"><b>Move duration seg: </b>${eachQuickMoveOfValue['move-duration-seg']}</p></div>`)

  }

  const specialAttackAtribute = onePokemon['special-attack']
  for (let eachSpecialAttack of specialAttackAtribute) {
    showPokemonBig.insertAdjacentHTML('beforeend', `<div class="pattern"><p class="paragraph-big"><b>Attack Name: </b>${eachSpecialAttack['name']}</p> <p class="paragraph-big"><b>Attack Type Name: </b>${eachSpecialAttack['type']}</p> <p class="paragraph-big"><b>Attack Base damage: </b>${eachSpecialAttack['base-damage']}</p> <p class="paragraph-big"><b>Attack Energy: </b>${eachSpecialAttack['energy']}</p> <p class="paragraph-big"><b>Move duration: </b>seg${eachSpecialAttack['move-duration-seg']}</p></div>`)
  }

  showPokemonBig.insertAdjacentHTML('beforeend', `<p class="paragraph-big>Evolution: ${onePokemon.evolution.candy}</p>`)

  if (onePokemon.evolution['next-evolution']) {
    const nextEvolutionValue = onePokemon.evolution['next-evolution']
    for (let evolutionValue of nextEvolutionValue) {
      showPokemonBig.insertAdjacentHTML('beforeend', `<div class="pattern"><p class="paragraph-big"><b>Next Evolution Number: </b>${evolutionValue['num']}</p> <p class="paragraph-big"><b>Next Evolution Name: </b>${evolutionValue['name']}</p> <p class="paragraph-big"><b>Next Evolution Candy cost: </b></b>${evolutionValue['candy-cost']}</p></div>`)
      if (evolutionValue["evolution-item"]) {
        showPokemonBig.insertAdjacentHTML('beforeend', `<div class="pattern"><p class="paragraph-big"><b>Evolution item name: </b>${evolutionValue["evolution-item"].name}</p></div>`)
      }

      if (evolutionValue['next-evolution']) {
        let secondNextEvolutionValue = evolutionValue['next-evolution']
        for (let evolutionValueTwo of secondNextEvolutionValue) {
          showPokemonBig.insertAdjacentHTML('beforeend', `<div class="pattern"><p class="paragraph-big"><b>Next Evolution Number: </b>${evolutionValueTwo['num']}</p> <p class="paragraph-big"><b>Net Evolution Name: </b>${evolutionValueTwo['name']}</p> <p class="paragraph-big"><b>Next Evolution Candy Cost: </b>${evolutionValueTwo['candy-cost']}</p></div>`)

          if (evolutionValueTwo["evolution-item"]) {
            showPokemonBig.insertAdjacentHTML('beforeend', `<div class="pattern"><p class="paragraph-big"><b>Evolution item name: </b>${evolutionValueTwo["evolution-item"].name}</p></div>`)
          }
        }

      }
    }

  }
  if (onePokemon.evolution['prev-evolution']) {
    const prevEvolution = onePokemon.evolution['prev-evolution']
    for (let valuePrevEvolution of prevEvolution) {
      showPokemonBig.insertAdjacentHTML('beforeend', `<div class="pattern"><p class="paragraph-big"><b>Number: </b>${valuePrevEvolution['num']}</p> <p class="paragraph-big"><b>Name: </b>${valuePrevEvolution['name']}</p> <p class="paragraph-big"><b>Candy cost: </b>${valuePrevEvolution['candy-cost']}</p></div>`)
      if (valuePrevEvolution["evolution-item"]) {
        showPokemonBig.insertAdjacentHTML('beforeend', `<div class="pattern"><p class="paragraph-big"><b>Evolution item name: </b>${valuePrevEvolution["evolution-item"].name}</p></div>`)
      }
      if (valuePrevEvolution['prev-evolution']) {
        const prevPrevEvolution = valuePrevEvolution['prev-evolution']
        for (let valuePrevEvolutionTwo of prevPrevEvolution) {
          showPokemonBig.insertAdjacentHTML('beforeend', `<div class="pattern"><p class="paragraph-big"><b>Number: </b>${valuePrevEvolutionTwo['num']}</p> <p class="paragraph-big"><b>Name: </b>${valuePrevEvolutionTwo['name']}</p> <p class="paragraph-big"><b>Candy cost: </b>${valuePrevEvolutionTwo['candy-cost']}</p></div>`)
          if (valuePrevEvolutionTwo["evolution-item"]) {
            showPokemonBig.insertAdjacentHTML('beforeend', `<div class="pattern"><p class="paragraph-big"><b>Evolution item: </b>${valuePrevEvolutionTwo["evolution-item"].name}</p></div>`)
          }
        }
      }
    }

  }

  const generationPokemon = onePokemon.generation
  showPokemonBig.insertAdjacentHTML('beforeend', `<div class="pattern"><p class="paragraph-big"><b>Generation Number: </b>${generationPokemon['num']}</p> <p class="paragraph-big"><b>Generation Name: </b>${generationPokemon['name']}</p></div>`)


  const encounterPokemon = onePokemon.encounter
  showPokemonBig.insertAdjacentHTML('beforeend', `<div class="pattern"><p class="paragraph-big"><b>Base flee rate: </b>${encounterPokemon['base-flee-rate']}</p> <p class="paragraph-big"><b>Base capture rate: </b></b>${encounterPokemon['base-capture-rate']}</p></div>`)

}

sectionCardsPokemon.addEventListener("click", (e) => {
  const { target } = e;

  const dataItem = target.dataset.item;
  if (dataItem) {
    apearBigCardPokemon(dataItem)
  }
});

