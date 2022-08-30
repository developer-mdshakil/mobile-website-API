document.getElementById('withdraw-btn').addEventListener('click', function(){

    //call to getInputValueById and get new withdraw amount
    const withdrawAmount = getInputValueById('withdraw-field');

    //set condtion isnot number return alert message
    if(isNaN(withdrawAmount)){
        alert('Please!!! input valid number..');
        return;
    }

    //call to getTextElement function and get text element
    const previousTotalWithdraw = getTextElemet('withdraw-total');

    //get balance elment call getTextElement function and calculate balance
    const previousBalance = getTextElemet('total-balance');

    if(previousBalance < withdrawAmount){
        alert('Not pay able!!! please correct amount');
        return;
    }

    //call calculate total withdraw and set new total withdraw
    const newTotalWithdraw = previousTotalWithdraw + withdrawAmount;

    //set new total withdraw call to a function setTextElement
    setTextElement('withdraw-total', newTotalWithdraw);

    const newRemainingBalance = previousBalance - withdrawAmount;

    // call setTextElement function
    setTextElement('total-balance', newRemainingBalance);
   
})