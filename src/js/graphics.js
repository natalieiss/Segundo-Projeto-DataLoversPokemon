import {
  createPropertyArr,
  percentOfProperty,
  createArrWithoutRepeat
} from "./data.js"
import './nav.js'

const btnMobile = document.getElementById('btn-mobile')

function toggleMenu() {
  const nav = document.getElementById('nav-options')
  nav.classList.toggle('active')
}

btnMobile.addEventListener("click", toggleMenu)

let arrResponse
let arrResponse1
async function catchData() {
  arrResponse = await fetch("./data/pokemon/pokemon.json")
  arrResponse1 = await arrResponse.json()
  console.log(arrResponse, arrResponse1, arrResponse1.pokemon)
  return await arrResponse1.pokemon
}

async function graphics() {
  let pokemon = await catchData()
  const propertyArr = createPropertyArr(pokemon, "type")
  const arrWithoutRepeat = createArrWithoutRepeat(propertyArr)
  percentOfProperty(propertyArr, arrWithoutRepeat,)

}
graphics()
