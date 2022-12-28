const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const username = document.getElementById('login-username').value;
      const password = document.getElementById('login-password').value;
      if (!username || !password) {
        alert('Please enter a username and password');
      } else {
        loginForm.submit();
      }
    });

    // Validate signup form input
    const signupForm = document.getElementById('signup-form');
    signupForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const username = document.getElementById('signup-username').value;
      const password = document.getElementById('signup-password').value;
      const email = document.getElementById('signup-email').value;
      if (!username || !password || !email) {
        alert('Please enter a username, password, and email');
      } else {
        signupForm.submit();
      }
    });