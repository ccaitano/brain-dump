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


const instrospectiveMoodHandler = async (event) => {
  event.preventDefault();

  const introspectiveCount = document.querySelector('.introspective').dataset.count;
  const id = document.querySelector('.introspective').dataset.id;
  const count = parseInt(introspectiveCount) + 1;

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

const sillyMoodHandler = async (event) => {
  event.preventDefault();

  const sillyCount = document.querySelector('.silly').dataset.count;
  const id = document.querySelector('.silly').dataset.id;
  const count = parseInt(sillyCount) + 1;

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

const randomMoodHandler = async (event) => {
  event.preventDefault();

  const randomCount = document.querySelector('.random').dataset.count;
  const id = document.querySelector('.random').dataset.id;
  const count = parseInt(randomCount) + 1;

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

document
  .querySelector('.instrospective')
  .addEventListener('click', instrospectiveMoodHandler);

document
  .querySelector('.silly')
  .addEventListener('click', sillyMoodHandler);

document
  .querySelector('.random')
  .addEventListener('click', randomMoodHandler);