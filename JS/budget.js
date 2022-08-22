
function getElementsValues(elementValue, isItInInputField){
let inputField = document.getElementById(elementValue);
let elementValueInString;

if(isItInInputField == true){
    elementValueInString = inputField.value;
}
else if(isItInInputField == false ){
    elementValueInString = inputField.innerText;
}

const elementValueInFloat = parseFloat(elementValueInString);

return elementValueInFloat;

}

function setElementsvalues(elementsValueHolder, elementsValue){
    const textHolder = document.getElementById(elementsValueHolder);
    textHolder.innerText = elementsValue;
}



document.getElementById('calculate-player-expence-btn').addEventListener('click',function(){
    
    const getPlayerExpence = getElementsValues('per-palyer-cost',true);
    setElementsvalues('player-expence-holder',getPlayerExpence)
    


   
})
document.getElementById('calculate-total-btn').addEventListener('click',function(){
     const managerExpence = getElementsValues('manager-expence',true);
     const coachExpence = getElementsValues('coach-expence',true);
    const playerExpence = getElementsValues('player-expence-holder',false);

     totalExpence = managerExpence+ coachExpence+playerExpence;
     setElementsvalues('total-expences',totalExpence)
    
    
})
function displaySelectedPlayers(playername){

    const listContainer = document.getElementById('ul-list-container');

    const li = document.createElement('li');
    li.innerText = playername;
    li.classList.add('player');
    listContainer.appendChild(li);
    
}

const SelectBtns = document.getElementsByClassName('Select-btn');
    for (const selectBtn of SelectBtns){
        selectBtn.addEventListener('click',function(event){

            const playerListLength = document.querySelectorAll( '.player').length;
            console.log(playerListLength);

            if(playerListLength < 5){
                const playername = event.target.value;
                event.target.disabled = true;
                event.target.style.backgroundColor='gray';  
                
                displaySelectedPlayers(playername);
            }
            else{
                alert("done")
            }
            
        })
    }