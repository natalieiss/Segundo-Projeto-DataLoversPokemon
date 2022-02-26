import data from './data/pokemon/pokemon.js'
import {
  apearBigCardPokemon
} from './content.js'

import {
  filterByType,
  orderData
} from "./data.js"

const pokemon = data.pokemon
const btnMobile = document.getElementById('btn-mobile')
const selectOrder = document.querySelector('#select-order')
const inputSearch = document.getElementById('input-search')

let filterTypes = document.querySelector('#type')
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
  cardSmall.innerHTML = ""

  arrPokemon.forEach((onePokemon, index) => {
    let saveType = ""
    for (let oneTypePokemon of onePokemon.type) {
      saveType += (" " + oneTypePokemon.toUpperCase())
    }
    cardSmall.insertAdjacentHTML("beforeend",
      `<button class="card-pokemon" data-item="${index}" >
        <div>
          <img data-item="${index}" src="${onePokemon.img}" alt="Imagem Pokemon" class="img-pokemon">
          <p data-item="${index}" class="paragraph-card">${onePokemon.name.toUpperCase()}</p>
          <p data-item="${index}" class="paragraph-card">${onePokemon.num}</p>
          <p data-item="${index}" class="paragraph-card">${saveType}</p>
        </div>
      </button>`)
  })
}

// let typedName = ""
inputSearch.addEventListener("keydown", (e) => {
  var key = e.button || e.code;
  if (key == "Enter") {
    alert('carregou enter o valor digitado foi: ' + e.code + " " + inputSearch.value);
  }
})

smallCardPokemon(pokemon)

let arrPokemon = []
let arrPokemonOrder = []

filterTypes.addEventListener("change", () => {
  if (filterTypes.value !== "") {
    console.log("entrei no filtro")
    if (filterTypes.value === "filtrar") {
      smallCardPokemon(pokemon)
      arrPokemonOrder = []
      arrPokemon = []
      console.log("entrei no filtrar e apaguei o conteudo de arrPokemon idependente de ele estar vazio ou não", arrPokemon)
    } else {
      const pokemonFilterType = (pokemonList, typesSelect) => {
        return filterByType(pokemonList, typesSelect.value)
      }
      arrPokemonOrder = []
      smallCardPokemon(pokemonFilterType(data.pokemon, filterTypes))
      arrPokemon = pokemonFilterType(data.pokemon, filterTypes)
      console.log("filtrei e mudei o arrPokemon que estava vazio", arrPokemon)
    }
  } else {
    smallCardPokemon(pokemon)
  }
})

selectOrder.addEventListener("change", (e) => {
  let changeOrder = e.target.value
  console.log(changeOrder)
  if (arrPokemon.length === 0) {
    arrPokemonOrder = []
    console.log("ArrayPokemon -entrei em ordenar mas não fui filtrado antes", arrPokemon)
    arrPokemonOrder = orderData(data.pokemon, changeOrder)
    console.log("O array ordenado fica assim: ", arrPokemonOrder)
    smallCardPokemon(arrPokemonOrder)
  } else {
    arrPokemonOrder = []
    console.log("ArrayPokemon -entrei em ordenar e fui filtrado antes, então estou menor mas ordenado", arrPokemon)
    arrPokemonOrder = orderData(arrPokemon, changeOrder)
    console.log("se arr for o array filtrado ele fica ordenado assim:", arrPokemonOrder)
    smallCardPokemon(arrPokemonOrder)
  }
})

sectionCardsPokemon.addEventListener("click", (e) => {
  const { target } = e;
  const dataItem = target.dataset.item;
  if (dataItem) {
    apearBigCardPokemon(dataItem, showPokemonBig, arrPokemon, arrPokemonOrder, pokemon)
  }
});
