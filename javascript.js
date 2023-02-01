const gridContainer = document.querySelector('.grid-container');

createGrid(16);

function createGrid(n){
    for(let i=0; i<n; i++){
        let colItem = createItem('grid-col', gridContainer);
    
        for(let j=0; j<n; j++){
            createItem('grid-items', colItem);
        }
    }
}

function createItem(className, destination){
    let el = document.createElement('div');
    el.classList.add(className);
    destination.appendChild(el);
    return el;
}