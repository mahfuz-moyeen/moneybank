



// const incomeInput = document.getElementById('income-input');

// const foodInput = document.getElementById('food-input');

// const rentInput = document.getElementById('rent-input');

// const clothesInput = document.getElementById('clothes-input');

// input id value
function getInputValue(inputId){
    const inputText = document.getElementById(inputId);
    const inputNumber = parseFloat(inputText.value);
    return inputNumber;
}
//Excluding one from the other
function excludAmount(totalAmount,minusAmount){

}

//calculate button
document.getElementById('calculate-button').addEventListener('click',function(){
    const incomeInput = getInputValue('income-input')
    const foodInput = getInputValue('food-input');
    const rentInput = getInputValue('rent-input');
    const clothesInput = getInputValue('clothes-input');
    const totalExpenses = document.getElementById('total-expenses')
    totalExpenses.innerText = foodInput + rentInput + clothesInput;
    console.log(totalExpenses.innerText);

    //balance 
    const balanceAmount = document.getElementById('balance');
    balanceAmount.innerText = incomeInput - parseFloat(totalExpenses.innerText);
});

//save button 
document.getElementById('save-button').addEventListener('click', function(){
    const incomeInput = getInputValue('income-input');
    const balance = document.getElementById('balance');


    // save amount
    const saveInput = getInputValue('save-input');
    const saveAmount = document.getElementById('save-amount');
    saveAmount.innerText = incomeInput * (saveInput / 100);

    // remain amount 
    const remainAmount = document.getElementById('remain-amount');
    remainAmount.innerText =  parseFloat(balance.innerText) - parseFloat(saveAmount.innerText);


});