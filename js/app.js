const pokemon = [
  { name: "Charmander", type: "fire", maxHp: 100, attack: 15 },
  { name: "Squirtle", type: "water", maxHp: 110, attack: 12 },
  { name: "Pikachu", type: "electric", maxHp: 95, attack: 18 },
  { name: "Bulbasaur", type: "grass", maxHp: 105, attack: 13 }
];

let pokemonTable = []
let formattedTable = []
let maxHpSum = ""
let avgATKVal = ""
filterAllData("")

document.querySelector("#typeSelect").addEventListener("change", (event) => {
    let filter = event.target.value
    filterAllData(filter)

})

function filterAllData(filterVal){
    pokemonTable = pokemon.filter(itm =>
    itm.type === filterVal || filterVal === ""
    )

    formattedTable = pokemonTable.map(itm => 
        itm.name + " ("+ itm.type +") - " + itm.maxHp + " HP" + " - Attack " + itm.attack
    )

    maxHpSum = pokemonTable.reduce((accumulator, itm) => accumulator + itm.maxHp, 0
    )

    avgATKVal = pokemonTable.reduce((accumulator, itm) => accumulator + itm.attack / pokemonTable.length, 0
    )
    
    removeFromTable()
    addToTable()
}

function addToTable(){
    formattedTable.forEach(element => {
    const pokemonElement = document.createElement("div")
    document.querySelector("#pokemonTable").appendChild(pokemonElement)
    pokemonElement.innerHTML = element
    })
    const maxHpElement = document.createElement("div")
    document.querySelector("#maxHP").appendChild(maxHpElement)
    maxHpElement.innerHTML = maxHpSum + " Max HP in total"

    const avgATKEle = document.createElement("div")
    document.querySelector("#avgATK").appendChild(avgATKEle)
    avgATKEle.innerHTML = avgATKVal + " is average attack"
}

function removeFromTable(){
    document.querySelector("#pokemonTable").innerHTML = " "
    document.querySelector("#maxHP").innerHTML = ""
     document.querySelector("#avgATK").innerHTML = ""
}
