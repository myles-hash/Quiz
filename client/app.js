const form = document.getElementById("quiz-form");

async function getQuiz() {
  const response = await fetch("http://localhost:8080/quiz");
  const qAndAs = await response.json();

  qAndAs.forEach(function (qAndA) {
    const question = document.getElementById("question");
    const answer1 = document.getElementById("label1");
    const answer2 = document.getElementById("label2");
    const answer3 = document.getElementById("label3");
    const answer4 = document.getElementById("label4");

    question.textContent = qAndA.question;
    answer1.textContent = qAndA.answer1;
    answer2.textContent = qAndA.answer2;
    answer3.textContent = qAndA.answer3;
    answer4.textContent = qAndA.answer4;
  })
}

getQuiz();