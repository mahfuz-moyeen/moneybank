/// all funtion ///

// check error display
function errorDisplay(amount, displayId, border, isError){
    if (isError == true) {
        document.getElementById(amount).style.color = 'red';
        document.getElementById(displayId).style.display = 'block';
        document.getElementById(border).style.border = '2px solid red';
    }
    else {
        document.getElementById(amount).style.color = 'black';
        document.getElementById(displayId).style.display = 'none';
        document.getElementById(border).style.border = 'none';
    }
};

// get  input id value
function getInputValue(inputId){
    const inputText = document.getElementById(inputId);
    const inputNumber = parseFloat(inputText.value);
    if (inputText.value == ''){
        errorDisplay(inputId + '-error', inputId + '-error', inputId, true);
    }
    else {
        //error check
        if (inputText.value >= 0){
            errorDisplay(inputId + '-error', inputId + '-error', inputId, false);
            return inputNumber;
        }
        else {
            errorDisplay(inputId + '-error', inputId + '-error', inputId, true);
        }
    }
};

// get id innerText value
function getTextValue(textId){
    const text = document.getElementById(textId);
    const textValue = parseFloat(text.innerText);
    return textValue;
};

//calculate button
document.getElementById('calculate-button').addEventListener('click', function (){
    // total expenses
    const totalExpenses = document.getElementById('total-expenses');
    const totalExpensesNumber = getInputValue('food-input') + getInputValue('rent-input') + getInputValue('clothes-input');
    //balance 
    const balanceAmount = document.getElementById('balance');
    //income amount
    const incomeAmount = getInputValue('income-input');
    //error check
    if (totalExpensesNumber >= 0 && incomeAmount >= 0) {
        totalExpenses.innerText = totalExpensesNumber;
        //error check
        if (totalExpensesNumber <= incomeAmount) {
            balanceAmount.innerText = incomeAmount - getTextValue('total-expenses');
            errorDisplay('total-expenses', 'expenses-error', 'expenses-error', false);
        }
        else {
            errorDisplay('total-expenses', 'expenses-error', 'expenses-error', true);
        }
    }
    else {
        totalExpenses.innerText = '00';
        balanceAmount.innerText = '00';
    }
});

//save button 
document.getElementById('save-button').addEventListener('click', function () {
    // save amount
    const saveAmount = document.getElementById('save-amount');
    const saveAmountNumbet = getInputValue('income-input') * (getInputValue('save-input') / 100);
    // remain amount 
    const remainAmount = document.getElementById('remain-amount');
    //error check
    if (saveAmountNumbet >= 0) {
        saveAmount.innerText = saveAmountNumbet;
        //error check
        if (getTextValue('save-amount') <= getTextValue('balance')) {
            remainAmount.innerText = getTextValue('balance') - getTextValue('save-amount');
            errorDisplay('save-amount', 'saving-error', 'saving-error', false);
        }
        else {
            remainAmount.innerText = '00';
            errorDisplay('save-amount', 'saving-error', 'saving-error', true);
        }
    }
    else {
        saveAmount.innerHTML = '00'
    }
});