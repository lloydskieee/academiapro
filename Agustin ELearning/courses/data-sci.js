// Get the quiz form and submit button
const quizForm = document.getElementById('quiz-form');
const submitButton = document.querySelector('.submit');

// Get the score elements
const correctScore = document.getElementById('correct');
const incorrectScore = document.getElementById('incorrect');
const unansweredScore = document.getElementById('unanswered');

// Set the correct answers
const correctAnswers = ['a', 'a', 'a'];

// Initialize the scores
let correctCount = 0;
let incorrectCount = 0;
let unansweredCount = 3;

// Add an event listener to the submit button
submitButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Check each answer
  const answers = quizForm.elements;
  for (let i = 0; i < answers.length; i++) {
    const answer = answers[i];
    if (answer.checked) {
      if (answer.value === correctAnswers[i]) {
        correctCount++;
      } else {
        incorrectCount++;
      }
      unansweredCount--;
    }
  }

  // Update the score elements
  correctScore.textContent = `Correct: ${correctCount}`;
  incorrectScore.textContent = `Incorrect: ${incorrectCount}`;
  unansweredScore.textContent = `Unanswered: ${unansweredCount}`;
});
