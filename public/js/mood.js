const happyMoodHandler = async (event) => {
  event.preventDefault();

  const happyCount = document.querySelector('.happy').dataset.count;
  const id = document.querySelector('.happy').dataset.id;
  const count = parseInt(happyCount) + 1;

  const response = await fetch(`/api/moods/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      mood_id: id,
      count }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace(`/findyourvibe/question/${id}`);
  } else {
    alert('Please Select Another Mood');
  }
};

const sadMoodHandler = async (event) => {
  event.preventDefault();

  const sadCount = document.querySelector('.sad').dataset.count;
  const id = document.querySelector('.sad').dataset.id;
  const count = parseInt(sadCount) + 1;

  const response = await fetch(`/api/moods/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      mood_id: id,
      count }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace(`/findyourvibe/question/${id}`);
  } else {
    alert('Please Select Another Mood');
  }
};

const angryMoodHandler = async (event) => {
  event.preventDefault();

  const angryCount = document.querySelector('.angry').dataset.count;
  const id = document.querySelector('.angry').dataset.id;
  const count = parseInt(angryCount) + 1;

  const response = await fetch(`/api/moods/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      mood_id: id,
      count }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace(`/findyourvibe/question/${id}`);
  } else {
    alert('Please Select Another Mood');
  }
};

document
  .querySelector('.happy')
  .addEventListener('click', happyMoodHandler);

document
  .querySelector('.sad')
  .addEventListener('click', sadMoodHandler);

document
  .querySelector('.angry')
  .addEventListener('click', angryMoodHandler);