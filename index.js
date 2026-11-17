const wrapper = document.getElementById('wrapper');

if(!localStorage.getItem("counter")){
    localStorage.setItem("counter", JSON.stringify({
        count: 0,
        lastUpdated: null,
        best: 0
    }))
}

const counter = JSON.parse(localStorage.getItem("counter"));

const plus = document.createElement("button");
plus.innerHTML = "+1";
plus.addEventListener("click", () => changeCount(1));

const minus = document.createElement("button");
minus.innerHTML = "-1";
minus.addEventListener("click", () => changeCount(-1));

const reset = document.createElement("button");
reset.innerHTML = "Reset";
reset.addEventListener("click", () => resetCount());

wrapper.appendChild(plus);
wrapper.appendChild(minus);
wrapper.appendChild(reset);


const changeCount = (amount) => {
    const counter = JSON.parse(localStorage.getItem("counter"));

    if(counter.count + amount >= 0){
        counter.count += amount;
        counter.lastUpdated = new Date().toLocaleString();

        if(counter.count > counter.best){
            counter.best = counter.count;
        }

        localStorage.setItem("counter", JSON.stringify(counter));
        writeDisplay();
    }
}


const resetCount = () => {
    const counter = JSON.parse(localStorage.getItem("counter"));

    counter.count = 0;
    counter.lastUpdated = new Date().toLocaleString();

    localStorage.setItem("counter", JSON.stringify(counter));
    writeDisplay();
}


function writeDisplay(){
    const counter = JSON.parse(localStorage.getItem("counter"));

    document.getElementById("display").innerHTML = "Count: " + counter.count;

    document.getElementById("lastUpdated").innerHTML =
        "Last updated: " + (counter.lastUpdated || "Never");

    document.getElementById("best").innerHTML =
        "Best: " + counter.best;
}

writeDisplay();
