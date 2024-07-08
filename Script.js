document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Placeholder for authentication
    if (username === 'user' && password === 'password') {
        document.getElementById('login').style.display = 'none';
        document.getElementById('vote').style.display = 'block';
    } else {
        alert('Invalid username or password');
    }
});

document.getElementById('voteForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var selectedCandidate = document.querySelector('input[name="candidate"]:checked').value;

    // Placeholder for vote submission
    console.log('Vote submitted for:', selectedCandidate);
    
    document.getElementById('vote').style.display = 'none';
    document.getElementById('result').style.display = 'block';
});
