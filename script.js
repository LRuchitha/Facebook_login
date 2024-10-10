document.getElementById('showSignup').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('signupContainer').style.display = 'flex';
});

document.getElementById('showLogin').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('signupContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'flex';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    if (email && password) {
        alert("Logged in successfully!");
    } 
    else {
        alert("Please fill in all fields.");
    }
});

document.getElementById('signup').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    if ([...formData.values()].every(val => val)) {
        alert("Account created successfully!");
    } 
    else {
        alert("Please fill in all fields.");
    }
});
