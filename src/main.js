import data from './data/pokemon/pokemon.js'
import {
  apearBigCardPokemon,
  optionTypesHtml,
  smallCardPokemon
} from './content.js'

import {
  filterByType,
  orderData,
  typeName
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

function toggleMenu() {
  const nav = document.getElementById('nav-options')
  nav.classList.toggle('active')
}

btnMobile.addEventListener("click", toggleMenu)

smallCardPokemon(pokemon, cardSmall)

let arrPokemon = []
let arrPokemonOrder = []

inputSearch.addEventListener("change", () => {
  for (let i = 0; i < inputSearch.value.length; i++) {
    const charCode = inputSearch.value.charCodeAt(i)
    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) {
      arrPokemon = typeName(data.pokemon, inputSearch.value)
      if (arrPokemon.length == 0) {
        cardSmall.textContent = "Not found! Verify the name and try again."
      }
      else {
        smallCardPokemon(arrPokemon, cardSmall)
      }
    }
  }
  if (inputSearch.value == "") {
    smallCardPokemon(pokemon, cardSmall)
    arrPokemon = []
  }
})

filterTypes.addEventListener("change", () => {
  if (filterTypes.value !== "") {
    if (filterTypes.value === "filter") {
      smallCardPokemon(pokemon, cardSmall)
      arrPokemonOrder = []
      arrPokemon = []
    } else {
      arrPokemon = []
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
