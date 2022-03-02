import data from './data/pokemon/pokemon.js'
import {
  apearBigCardPokemon,
  smallCardPokemon,
  optionTypesHtml
} from './content.js'

import {
  filterByType,
  orderData,
  inputSearchName
} from "./data.js"

const pokemon = data.pokemon
const btnMobile = document.getElementById('btn-mobile')
const selectOrder = document.querySelector('#select-order')
const inputSearch = document.getElementById('input-search')

let filterTypes = document.querySelector('#type')
let sectionCardsPokemon = document.querySelector("[data-section]")
let cardSmall = document.getElementById('card-pokemon')
let showPokemonBig = document.getElementById('card-pokemon-big')

optionTypesHtml(pokemon, filterTypes)

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



smallCardPokemon(pokemon, cardSmall)

let arrPokemon = []
let arrPokemonOrder = []

inputSearch.addEventListener("keydown", () => {
  // var key = e.button || e.code;
  smallCardPokemon((inputSearchName(pokemon, inputSearch.value)), cardSmall)
  arrPokemon = inputSearchName(pokemon, inputSearch.value)
})

filterTypes.addEventListener("change", () => {
  if (filterTypes.value !== "") {
    if (filterTypes.value === "filter") {
      smallCardPokemon(pokemon, cardSmall)
      arrPokemonOrder = []
      arrPokemon = []
    } else {
      arrPokemonOrder = []
      smallCardPokemon((filterByType(data.pokemon, filterTypes.value)), cardSmall)
      arrPokemon = filterByType(data.pokemon, filterTypes.value)
    }
  } else {
    smallCardPokemon(pokemon, cardSmall)
  }
})

selectOrder.addEventListener("change", (e) => {
  let changeOrder = e.target.value
  if (arrPokemon.length === 0) {
    arrPokemonOrder = []
    arrPokemonOrder = orderData(data.pokemon, changeOrder)
    smallCardPokemon(arrPokemonOrder, cardSmall)
  } else {
    arrPokemonOrder = []
    arrPokemonOrder = orderData(arrPokemon, changeOrder)
    smallCardPokemon(arrPokemonOrder, cardSmall)
  }
})

sectionCardsPokemon.addEventListener("click", (e) => {
  let extensionW = window.screen.width
  const { target } = e;
  const dataItem = target.dataset.item
  if (dataItem) {
    apearBigCardPokemon(dataItem, showPokemonBig, arrPokemon, arrPokemonOrder, pokemon)
  }
  if (extensionW <= 600) {
    window.scrollTo(0, 1000)
  }
});
