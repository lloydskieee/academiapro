// Quiz questions and answers
const quiz = [
    {
      question: "What does HTML stand for?",
      answers: {
        a: "Hyper Text Markup Language",
        b: "High Temperature Markup Language",
        c: "Hyperlinks and Text Markup Language"
      },
      correctAnswer: "a"
    },
    {
      question: "What does CSS stand for?",
      answers: {
        a: "Creative Style Sheets",
        b: "Computer Style Sheets",
        c: "Cascading Style Sheets"
      },
      correctAnswer: "c"
    },
    {
      question: "What does JS stand for?",
      answers: {
        a: "Java Syntax",
        b: "JavaScript",
        c: "Java Source"
      },
      correctAnswer: "b"
    }
  ];
  
  // Get quiz form and score div
  const quizForm = document.getElementById("quiz-form");
  const scoreDiv = document.getElementById("score");
  
  // Submit quiz form
  quizForm.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form submission
    let score = 0;
    for (let i = 0; i < quiz.length; i++) {
      const question = quiz[i];
      const answer = quizForm.elements["q" + (i+1)].value;
      if (answer === question.correctAnswer) {
        score++;
      }
    }
    scoreDiv.innerHTML = score + "/" + quiz.length; // Display score
  });
  