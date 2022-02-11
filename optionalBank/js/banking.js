//input value pass deposite and withdraw
function InputValue(inputId) {
    // get deposite input
    const inputFiled = document.getElementById(inputId);
    // get depositeAmount value
    const inputAmountText = inputFiled.value;
    const inputAmount = parseFloat(inputAmountText);

    inputFiled.value = '';
    return inputAmount;

}


//input value  add calculate deposite and withdraw

function updateTotalField(totalFieldId, newDepositeAmount) {

    const totalField = document.getElementById(totalFieldId);

    const previousDepositeText = totalField.innerText
    const previousDepositeAmount = parseFloat(previousDepositeText);
    const newOfTotalField = previousDepositeAmount + newDepositeAmount;

    totalField.innerText = newOfTotalField;

}

// balence
function updateBalence(newDepositeAmount, isAdd) {

    //update account balance 
    const balenceTotal = document.getElementById('balence-total')
    const balenceTotalText = balenceTotal.innerText;
    const previousBalenceTotal = parseFloat(balenceTotalText);


    if (isAdd == true) {

        balenceTotal.innerText = previousBalenceTotal + newDepositeAmount;


    } else {

        balenceTotal.innerText = previousBalenceTotal - newDepositeAmount;

    }




}


// click button add deposite
document.getElementById('deposite-submit').addEventListener('click', function() {

    const newDepositeAmount = InputValue('deposite-input');


    if (newDepositeAmount > 0) {
        updateTotalField('deposite-total', newDepositeAmount);

        updateBalence(newDepositeAmount, true);

    } else {
        alert('Please Positive number 😈👹👹👿😈');
    }
});



// withdraw

document.getElementById('withdraw-submit').addEventListener('click', function() {

    const newWithdrawAmount = InputValue('withdraw-input');
    if (newWithdrawAmount > 0) {
        updateTotalField('withdraw-total', newWithdrawAmount);
        updateBalence(newWithdrawAmount, false);

    } else {
        alert('Please positive number 👹👹👿😈😈')
    }
});