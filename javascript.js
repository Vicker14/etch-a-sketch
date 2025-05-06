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