const container = document.querySelector(".container");

const btnPlay = document.getElementById("play");

const difficulty = document.getElementById("select");

btnPlay.addEventListener('click',

    function() {
        container.innerHTML = "";

        let array = [];

        let maxBox = checkDifficulty();

        let i = 1;
        
        while (i <= maxBox) {
            let newBox = createBox(difficulty.value);

            array.push(newBox);

            i++;
        }

        btnPlay.innerHTML = "Rigioca";

        for (let n = 0; n < array.length; n++) {
            let divListener = array[n];

            divListener.addEventListener('click',
                function() {
                    divListener.classList.add("clicked");
        
                    divListener.innerHTML = n + 1;

                    console.log(divListener.innerHTML);
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
