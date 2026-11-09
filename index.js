
const attackingSelector = document.getElementById("attackingType");
const defendingSelector = document.getElementById("defendingType");
const wrapper = document.getElementById("wrapper");

const typeChart = {
    fire: { strongAgainst: ["grass"], weakAgainst: ["water"] },
    water: { strongAgainst: ["fire"], weakAgainst: ["electric"] },
    electric: { strongAgainst: ["water"], weakAgainst: ["grass"] },
    grass: { strongAgainst: ["electric"], weakAgainst: ["fire"] }
};

function loadTypes() {

    for (const key in typeChart) {
        const ele = document.createElement("option");
        ele.setAttribute("value", key);
        ele.innerHTML = key;
        attackingSelector.appendChild(ele);
    }

    for (const key in typeChart) {
        const ele = document.createElement("option");
        ele.setAttribute("value", key);
        ele.innerHTML = key;
        defendingSelector.appendChild(ele);
    }
}

function calculateDamage(attacking, defending) {

    if (typeChart[attacking].strongAgainst.includes(defending)) {
        return 2;
    }
    else if (typeChart[attacking].weakAgainst.includes(defending)) {
        return 0.5;
    }
    else {
        return 1;
    }
}

function displayResult() {

    wrapper.innerHTML = "";

    const attacking = attackingSelector.value;
    const defending = defendingSelector.value;

    const multiplier = calculateDamage(attacking, defending);

    const ele = document.createElement("div");
    const result = document.createElement("h2");
    const damage = document.createElement("h3");

    if (multiplier === 2) {
        result.innerHTML = "Super effective!";
    }
    else if (multiplier === 0.5) {
        result.innerHTML = "Not very effective...";
    }
    else {
        result.innerHTML = "Effective!";
    }

    damage.innerHTML = multiplier + "x damage";

    ele.appendChild(result);
    ele.appendChild(damage);
    wrapper.appendChild(ele);
}

function testTypes() {

    for (const attacking in typeChart) {
        for (const defending in typeChart) {

            const multiplier = calculateDamage(attacking, defending);

            console.log(attacking + " vs. " + defending + ": " + multiplier + "x");
        }
    }
}

attackingSelector.addEventListener("change", function() {
    displayResult();
});

defendingSelector.addEventListener("change", function() {
    displayResult();
});

loadTypes();

displayResult();

testTypes();

