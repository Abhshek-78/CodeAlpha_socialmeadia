confirm("would you login with friendly chat")
const loginBtn = document.getElementById('login-btn');
const errorMsg = document.getElementById('error-msg');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        errorMsg.textContent = 'Please fill in all fields';
    } else {


        // TO DO: implement login logic here
        // For now, just alert a success message
        alert('Login successful!');
    }
});