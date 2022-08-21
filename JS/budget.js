
function getElementsValues(elementValue){
const inputField = document.getElementById(elementValue);
const elementValueInString = inputField.value;
const elementValueInFloat = parseFloat(elementValueInString);
return elementValueInFloat;

}



document.getElementById('calculate-total-btn').addEventListener('click',function(){
    
    const TotalCOst = getElementsValues('per-palyer-cost');
    console.log(TotalCOst)
})