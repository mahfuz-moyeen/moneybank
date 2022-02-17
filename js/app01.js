/// all funtion ///

// get  input id value
function getInputValue(inputId) {
    const inputText = document.getElementById(inputId);
    const inputNumber = parseFloat(inputText.value);
    //error check
    if (inputText.value >= 0) {
        inputText.style.border = 'none';
        document.getElementById(inputId + '-error').style.display = 'none';
        return inputNumber;
    }
    else {
        inputText.style.border = '2px solid red';
        document.getElementById(inputId + '-error').style.display = 'block';
    }
}

// get id innerText value
function getTextValue(textId) {
    const text = document.getElementById(textId);
    const textValue = parseFloat(text.innerText);
    return textValue;
}

// check balance
function checkBalance(amount, color, showDisplay, displayType) {
    amount.style.color = color;
    document.getElementById(showDisplay).style.display = displayType;
}



//calculate button
document.getElementById('calculate-button').addEventListener('click', function () {
    // total expenses
    const totalExpenses = document.getElementById('total-expenses');
    const totalExpensesNumber = getInputValue('food-input') + getInputValue('rent-input') + getInputValue('clothes-input');
    //balance 
    const balanceAmount = document.getElementById('balance');
    const incomeAmount = getInputValue('income-input');

    if (totalExpensesNumber >= 0 && incomeAmount >=0) {
        totalExpenses.innerText = totalExpensesNumber;
        //error check
        if (totalExpensesNumber <= incomeAmount) {
            balanceAmount.innerText = incomeAmount - getTextValue('total-expenses');
            checkBalance(totalExpenses, 'black', 'expenses-error', 'none');
        }
        else {
            balanceAmount.innerText = '00';
            checkBalance(totalExpenses, 'red', 'expenses-error', 'block');
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

    if (saveAmountNumbet >= 0) {
        saveAmount.innerText = saveAmountNumbet;
        //error check
        if (getTextValue('save-amount') <= getTextValue('balance')) {
            remainAmount.innerText = getTextValue('balance') - getTextValue('save-amount');
            checkBalance(saveAmount, 'black', 'saving-error', 'none');
        }
        else {
            remainAmount.innerText = '00';
            checkBalance(saveAmount, 'red', 'saving-error', 'block');
        }

    }
    else {
        saveAmount.innerHTML = '00'
    }
});