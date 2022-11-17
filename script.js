const container = document.querySelector(".container");

const btnPlay = document.getElementById("play");

const difficulty = document.getElementById("select");

btnPlay.addEventListener('click',

    function() {
        container.innerHTML = "";

        let array = [];

        let maxBox = checkDifficulty();

        let arrBomb = genRandomNumbers(16, 1, maxBox);

        console.log(arrBomb);

        let i = 1;
        
        while (i <= maxBox) {
            let newBox = createBox(difficulty.value);

            if (arrBomb.includes(i)) {
                newBox.innerHTML = "Boom!";
                newBox.classList.add("boom");
            }

            array.push(newBox);

            i++;
        }

        btnPlay.innerHTML = "Rigioca";

        for (let n = 0; n < array.length; n++) {
            let divListener = array[n];

            divListener.addEventListener('click',
                function() {
                    divListener.classList.add("clicked");
                    
                    for (let x = 0; x < 16; x++) {
                        if (array.indexOf("divListener"))
                    }
                }, {once: true}
            )
        }

    }

)


function checkDifficulty() {
    let selection = difficulty.value;

    let boxNumber;

    if (selection === "easy") {
        boxNumber = 100;
    } else if (selection === "medium") {
        boxNumber = 81;
    } else {
        boxNumber = 49;
    }

    return boxNumber

}

function createBox (classDifficult) {
    let div = document.createElement("div");

    div.classList.add("box", classDifficult);

    container.appendChild(div);

    return div
}

function randomInteger(min, max) {
    return ( Math.floor(Math.random() * ((max + 1) - min) + min));
}

function genRandomNumbers(quantity, minNum, maxNum) {

    const newArr = [];

    while (newArr.length < quantity) {
        let newNumber = randomInteger(minNum, maxNum);

        if(!newArr.includes(newNumber)) {
            newArr.push(newNumber);
        }
    }

    return newArr
}
