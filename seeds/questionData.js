const { Questions } = require('../models');

const questionData = [
  {
    id: 1,
    mood_id: 2,
    question: 'What are three affirmations you can tell yourself this week to improve your mindset?'
  },
  {
    id: 2,
    mood_id: 2,
    question: 'What is the hardest thing to love about yourself?'
  },
  {
    id: 3,
    mood_id: 2,
    question: 'What cognitive distortions do you identify the most with?'
  },
  {
    id: 4,
    mood_id: 3,
    question: 'List 3 boundaries you don have that you should. Why have you not set them?'
  },
  {
    id: 5,
    mood_id: 3,
    question: 'When is it hard for you to enforce your boundaries? When/why do you feel guilty for enforcing limits? '
  },
  {
    id: 6,
    mood_id: 3,
    question: 'What cognitive distortions do you identify the most with?'
  },
  {
    id: 7,
    mood_id: 5,
    question: 'What are three crazy adventures you want to try in your life?'
  },
  {
    id: 8,
    mood_id: 5,
    question: 'If you had all the money in the world, what are three places you want to travel to?'
  },
  {
    id: 9,
    mood_id: 5,
    question: 'If you can still remember, what are your funniest childhood memories?'
  },
  {
    id: 10,
    mood_id: 4,
    question: 'What would surprise your 13-year-old self the most about your current life? What advice would you give yourself?'
  },
  {
    id: 11,
    mood_id: 4,
    question: 'Who am I, really?'
  },
  {
    id: 12,
    mood_id: 4,
    question: 'To what degree have I actually controlled the course of my life?'
  },
  {
    id: 13,
    mood_id: 6,
    question: 'If animals could talk, which would be the rudest?'
  },
  {
    id: 14,
    mood_id: 6,
    question: 'Which TV series/book series would be most suitable for your life?'
  },
  {
    id: 15,
    mood_id: 6,
    question: 'What is worse during a kiss: a sneeze or a cough?'
  },
  {
    id: 16,
    mood_id: 1,
    question: 'How do you define happiness? Is it an achievable definition?'
  },
  {
    id: 17,
    mood_id: 1,
    question: 'What excites you the most about your future and why? What scares you the most about your future and why?'
  },
  {
    id: 18,
    mood_id: 1,
    question: 'What is the number 1 thing on your bucket list? When do you hope to accomplish it?'
  },

];

const seedQuestions = () => Questions.bulkCreate(questionData);
module.exports = seedQuestions;