 // Aquí tu código
const addElementButton = document.getElementById('agregar');
const itemList = document.getElementById('lista');

addElementButton.addEventListener('click',function(){
    const newItem = prompt('agregar elemento');
    
    const listItem = document.createElement('li') 
    listItem.textContent = newItem;
    itemList.appendChild(listItem);

});

