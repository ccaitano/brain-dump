const responseHandler = async (event) => {
    event.preventDefault();
  
    const response = document.querySelector('#response').value.trim();
  
    if (response) {
      const userResponse = await fetch('/api/response', {
        method: 'POST',
        body: JSON.stringify({ response }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log(userResponse);
        document.location.replace('/dashboard');
      } else {
        alert('Failed to log response.');
      }
    }
  };
  
  // const signupFormHandler = async (event) => {
  //   event.preventDefault();
  
  //   const username = document.querySelector('#username-signup').value.trim();
  //   const email = document.querySelector('#email-signup').value.trim();
  //   const password = document.querySelector('#password-signup').value.trim();
  
  //   if (username && email && password) {
  //     const response = await fetch('/api/users', {
  //       method: 'POST',
  //       body: JSON.stringify({ username, email, password }),
  //       headers: { 'Content-Type': 'application/json' },
  //     });
  
  //     if (response.ok) {
  //       document.location.replace('/');
  //     } else {
  //       alert('Failed to sign up.');
  //     }
  //   }
  // };
  
  document
    .querySelector('.response-form')
    .addEventListener('submit', responseHandler);
  