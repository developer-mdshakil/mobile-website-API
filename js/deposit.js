// add to event handler with deposit button
document.getElementById('deposit-btn').addEventListener('click', function(){

    //call to getInputValueById and get new deposit amount
    const newDepostiAmount = getInputValueById('deposit-field');

    //set condtion isnot number return alert message
    if(isNaN(newDepostiAmount)){
        alert('Please!!! input valid number..');
        return;
    }

    //call to getTextElement function and get text element
    const preveousTotalDeposit = getTextElemet('deposit-Total');

    //call calculate total deposit and set new total deposit
    const newTotalDeposit = preveousTotalDeposit + newDepostiAmount;

    //set new total deposit call to a function setTextElement
    setTextElement('deposit-Total', newTotalDeposit);

    //get balance elment call getTextElement function and calculate balance
    const previousBalance = getTextElemet('total-balance');
    const newBalance = previousBalance + newDepostiAmount;
    // call setTextElement function 
    setTextElement('total-balance', newBalance)
})