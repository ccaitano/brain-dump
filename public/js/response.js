const responseHandler = async (event) => {
  event.preventDefault();

  const response = document.querySelector('#response').value.trim();
  const question_id = document.querySelector('#question').dataset.question;

  console.log(question_id);
  if (response) {
    const userResponse = await fetch('/api/response', {
      method: 'POST',
      body: JSON.stringify({ response, question_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (userResponse.ok) {
      console.log(userResponse);
      document.location.replace('/dashboard');
    } else {
      alert('Failed to log response.');
    }
  }
};

document
  .querySelector('#response-form')
  .addEventListener('submit', responseHandler);