
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