const registerBtn = document.getElementById('register-btn');
const errorMsg = document.getElementById('error-msg');

registerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (username === '' || email === '' || password === '' || confirmPassword === '') {
        errorMsg.textContent = 'Please fill in all fields';
    } else if (password !== confirmPassword) {
        errorMsg.textContent = 'Passwords do not match';
    } else {
        // TO DO: implement register logic here
        // For now, just alert a success message
        alert('Register successful!');
    }
});