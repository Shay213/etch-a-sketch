const gridContainer = document.querySelector('.grid-container');

createGrid(16);

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