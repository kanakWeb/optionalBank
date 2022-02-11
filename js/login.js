document.getElementById('login-submit').addEventListener('click', function() {

    // get email value
    const userEmail = document.getElementById('user-email');
    const userEmaialValue = userEmail.value;

    //get password value
    const userPassword = document.getElementById('user-password');
    const userpasswordValue = userPassword.value;

    //check password and email value compare

    if (userEmaialValue == 'kanak@gmail.com' && userpasswordValue == 'kanak') {
        //  other website
        window.location.href = 'banking.html'
    } else {
        console.log("Invalid information")
    }
})