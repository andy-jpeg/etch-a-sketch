const container = document.querySelector("#container");
const input = document.querySelector("input");
const submit = document.querySelector("#submit");
let previousAmount = 30;

function createGrid(amount) {
    

    for (i = 0; i < amount; i++) {
        const square = document.createElement("div");
        square.className = "square";
        
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "black";
        });
    
        container.appendChild(square);
    };
};

function removeGrid(amount) {
    let squares = document.querySelectorAll(".square");

    if (squares.length > 0) {
        for (i = 0; i < squares.length; i++) {
            container.removeChild(document.querySelector(".square"));
        };
    };

    createGrid(amount);
}

submit.addEventListener("click", () => {
    const amount = Number(input.value);
    console.log(amount);

    if ((amount <= 50) && (amount > 0)) {
        removeGrid(amount ** 2);
    };
});

createGrid(30);