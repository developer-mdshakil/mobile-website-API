// add to event handeler submit-btn .it's first step
document.getElementById('submit-btn').addEventListener('click', function(){
    //step-2:get the value in input email field .if you get value in input field you use to (.value)
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    emailField.value = '';
    // step-3: get passwoed .set a id in password input field
    //step-3.a: get element
    //step-3.b: get the value of password field
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    passwordField.value = '';
    // check email && password.if match email && password
    if(email === 'shakilcmt.1819@gmail.com' && password === 'shakil125409'){
        window.location.href = 'blance.html';
    }else{
        alert('Incorect pasword.Please forget password..')
    }
})
