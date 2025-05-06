//LOGIC FOR GRID-BOX
const gridBox = document.querySelector("#grid-box");

let size = 16;

for (let i = 1; i <= size; i++){

    const line = document.createElement("div");
    line.classList.add("line-container");

    for (let i = 1; i <= size; i++){
        const square = document.createElement("div");
        square.classList.add("interactiveSquare");
        
        line.appendChild(square);
    }
    
    gridBox.appendChild(line);
}

const squareList = document.querySelectorAll(".interactiveSquare");

squareList.forEach((square) => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "green";
        })
    }
)

// LOGIC FOR CLEANING BUTTON

function clearSquares(squareList){
    squareList.forEach((square) => {
        square.style.backgroundColor = "";
    });
}

//  Cleans the grid
const cleanButton = document.querySelector("#clean-button");

cleanButton.addEventListener("click", () => {
    clearSquares(squareList);
});

// Interactions with the button
const buttonHover = document.querySelectorAll(".button");

buttonHover.forEach(
    (button) => {
        button.addEventListener("mouseover", () => {
            button.style.backgroundColor = "#c1bfbC"
        })
        button.addEventListener("mouseout", () => {
            button.style.backgroundColor = "#d1cfcC"
        })
        button.addEventListener("mouseover", () => {
            button.style.cursor = "pointer";
        });
    }
);
