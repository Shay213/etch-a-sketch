const gridContainer = document.querySelector('.grid-container');
const resetBtn = document.querySelector('.input-container button');
const userInput = document.getElementById('grid-size');

createGrid(16);

resetBtn.addEventListener('click', e => {
    if(userInput.valueAsNumber < 16 || userInput.valueAsNumber > 100 || Number.isNaN(userInput.valueAsNumber)){
        userInput.style.backgroundColor = "red";
    } else{
        userInput.style.backgroundColor = "white";
        resetGrid();
    }
});

function resetGrid(){
    let gridCols = document.querySelectorAll('.grid-col');

    gridCols.forEach(el => {
        gridContainer.removeChild(el);
    });

    createGrid(userInput.valueAsNumber);
}

function createGrid(n){
    for(let i=0; i<n; i++){
        let col = createItem('grid-col', gridContainer);
    
        for(let j=0; j<n; j++){
            let colItem = createItem('grid-items', col);
            colItem.addEventListener('mouseover', paintItem);
        }
    }
}

function createItem(className, destination){
    let el = document.createElement('div');
    el.classList.add(className);
    destination.appendChild(el);
    return el;
}

function paintItem(e){
    e.target.style.backgroundColor = "gray";
}