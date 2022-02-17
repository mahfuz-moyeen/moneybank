/// all funtion ///

// get  input id value
function getInputValue(inputId){
    const inputText = document.getElementById(inputId);
    const inputNumber = parseFloat(inputText.value);
    //error check
    if(inputNumber >= 0){
        return inputNumber;
    }
    else{
        alert('Write a positive number in " '+ inputId +' "');
        return false;
    }
}

// get id innerText value
function getTextValue(textId){
    const text = document.getElementById(textId);
    const textValue = parseFloat(text.innerText);
    return textValue;
}

// check balance
function checkBalance(amount,color,showDisplay,displayType){
    amount.style.color = color;
    document.getElementById(showDisplay).style.display = displayType;
}



//// button event ////


//calculate button
document.getElementById('calculate-button').addEventListener('click',function(){
    // total expenses
    const totalExpenses = document.getElementById('total-expenses');
    const totalExpensesNumber = getInputValue('food-input') + getInputValue('rent-input') + getInputValue('clothes-input');
    
    if(totalExpensesNumber == 'NaN'){
        totalExpenses.innerText = '00';
    }
    else{
        totalExpenses.innerText = totalExpensesNumber;
    }

    //balance 
    const balanceAmount = document.getElementById('balance');
    //error check
    if(getTextValue('total-expenses') <= getInputValue('income-input') ){
        balanceAmount.innerText = getInputValue('income-input') - getTextValue('total-expenses');
        checkBalance(totalExpenses,'black','expenses-error','none');
    }
    else{
        balanceAmount.innerText = '00';
        checkBalance(totalExpenses,'red','expenses-error','block');
    }
});

//save button 
document.getElementById('save-button').addEventListener('click', function(){
    // save amount
    const saveAmount = document.getElementById('save-amount');
    const saveAmountNumbet = getInputValue('income-input') * ( getInputValue('save-input') / 100);

    if(saveAmountNumbet == 'NaN'){
        saveAmount.innerHTML= '00'
    }
    else{
        saveAmount.innerText = saveAmountNumbet;
    }

    // remain amount 
    const remainAmount = document.getElementById('remain-amount');
    
    //error check
    if(getTextValue('save-amount') <= getTextValue('balance') ){
        remainAmount.innerText = getTextValue('balance') - getTextValue('save-amount');
        checkBalance(saveAmount,'black','saving-error','none');
    }
    else{
        remainAmount.innerText = '00';
        checkBalance(saveAmount,'red','saving-error','block');
    }
});