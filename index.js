
const pokemon = [
    { name: "Charmander", type: "fire", maxHp: 100, attack: 15 },
    { name: "Squirtle", type: "water", maxHp: 110, attack: 12 },
    { name: "Pikachu", type: "electric", maxHp: 95, attack: 18 },
    { name: "Bulbasaur", type: "grass", maxHp: 105, attack: 13 }
]

const totalHp = pokemon.reduce((sum, itm) => {
    return sum + itm.maxHp;
}, 0)

const totalAttack = pokemon.reduce((sum, itm) => {
    return sum + itm.attack;
}, 0)

const averageAttack = totalAttack / pokemon.length;

document.getElementById("totalHp").innerHTML = "Total HP: " + totalHp;
document.getElementById("averageAttack").innerHTML = "Average Attack: " + averageAttack;

function filterPokemon(fil) {
    if (fil === "all") {
        return pokemon;
    } else {
        const filteredPokemon = pokemon.filter(itm =>
            itm.type === fil
        )

        return filteredPokemon;
    }
}

function renderPokemon(pokemonList) {
    document.getElementById("wrapper").innerHTML = "";

    const newPokemon = pokemonList.map(itm => {
        return itm.name + " (" + itm.type + ") - " + itm.maxHp + " HP";
    })

    newPokemon.forEach(itm => {
        const ele = document.createElement("div");
        ele.innerHTML = itm;
        document.getElementById("wrapper").appendChild(ele);
    })
}

document.getElementById("select").addEventListener("change", (event) => {
    renderPokemon(filterPokemon(event.target.value));
})

renderPokemon(pokemon);
