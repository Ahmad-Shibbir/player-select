
// Function to get all elements value
function getElementsValues(elementValue, isItInInputField){
let inputField = document.getElementById(elementValue);
let elementValueInString;

// check is value in input field or other or inside other html field
if(isItInInputField == true){
    elementValueInString = inputField.value;
}
else if(isItInInputField == false ){
    elementValueInString = inputField.innerText;
}

const elementValueInFloat = parseFloat(elementValueInString);
console.log(elementValueInFloat)

// validation checking
if(elementValueInFloat < 0 || isNaN(elementValueInFloat)){
    alert('Error!!! \n your input field may be empty / it is not a number number / it is a negetive numer \n\n please enter a positive number');
}
else{
    return elementValueInFloat;

}
 }

//  function to set value 
function setElementsvalues(elementsValueHolder, elementsValue){
    const textHolder = document.getElementById(elementsValueHolder);
    textHolder.innerText = elementsValue;
}


// event for player expence calculate btn
document.getElementById('calculate-player-expence-btn').addEventListener('click',function(){
    
    const getPlayerExpence = getElementsValues('per-palyer-cost',true);
    const playerListLength = document.querySelectorAll( '.player').length;

    // calculate player expence and call function to set value
    const playerTotalExpence = getPlayerExpence * playerListLength;
    setElementsvalues('player-expence-holder',playerTotalExpence)
    
   
})


// event for total expence btn
document.getElementById('calculate-total-btn').addEventListener('click',function(){


     const managerExpence = getElementsValues('manager-expence',true);
     const coachExpence = getElementsValues('coach-expence',true);
     const playerExpence = getElementsValues('player-expence-holder',false);

    //  calculate and set total expence
     const totalExpence = managerExpence+ coachExpence+playerExpence;
     setElementsvalues('total-expences',totalExpence)
    
    
})


/*
-----------------
selected player list section
----------------------------
*/

// function to display selected player name
function displaySelectedPlayers(playername){

    const listContainer = document.getElementById('ul-list-container');
    const playerListLength = document.querySelectorAll( '.player').length +1;

    // element created
    const li = document.createElement('li');    
    const p = document.createElement('p');    
    const p2 = document.createElement('p');    
    const div = document.createElement('div');  

    // set text
    li.innerText = playername;
    p.innerText = playerListLength;
    p2.innerText = '. ';

    // calss added 
    li.classList.add('player');
    p2.classList.add('mr-2');
    p2.classList.add('font-extrabold');
    p.classList.add('font-extrabold');
    div.classList.add('mt-3');
    div.classList.add('flex');

    // added elements
    listContainer.appendChild(div)
    div.appendChild(p);
    div.appendChild(p2);
    div.appendChild(li);
    
    
}

// event for player select
const SelectBtns = document.getElementsByClassName('Select-btn');
    for (const selectBtn of SelectBtns){
        selectBtn.addEventListener('click',function(event){

            const playerListLength = document.querySelectorAll( '.player').length;
            console.log(playerListLength);

            // set condition that user can select only 5 players
            if(playerListLength < 5){
                const playername = event.target.value;
                event.target.disabled = true;
                event.target.style.backgroundColor='gray';  
                
                displaySelectedPlayers(playername);
            }
            else{
                alert("You can select maximum 5 player")
            }
            
        })
    }