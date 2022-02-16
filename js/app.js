// get  input id value
function getInputValue(inputId){
    const inputText = document.getElementById(inputId);
    const inputNumber = parseFloat(inputText.value);
    if(inputNumber >= 0){
        return inputNumber;
    }
    else{
        alert('Write a positive number in " '+ inputId +' "');
    }
}
// get id innerText value
function getTextValue(textId){
    const text = document.getElementById(textId);
    const textValue = parseFloat(text.innerText);
    return textValue;
}

//calculate button
document.getElementById('calculate-button').addEventListener('click',function(){
    // total expenses
    const totalExpenses = document.getElementById('total-expenses')
    totalExpenses.innerText = getInputValue('food-input') + getInputValue('rent-input') + getInputValue('clothes-input');

    //balance 
    const balanceAmount = document.getElementById('balance');
    balanceAmount.innerText = getInputValue('income-input') - getTextValue('total-expenses');
});

//save button 
document.getElementById('save-button').addEventListener('click', function(){
    // save amount
    const saveAmount = document.getElementById('save-amount');
    saveAmount.innerText = getInputValue('income-input') * ( getInputValue('save-input') / 100);

    // remain amount 
    const remainAmount = document.getElementById('remain-amount');
    remainAmount.innerText = getTextValue('balance') - getTextValue('save-amount');
});