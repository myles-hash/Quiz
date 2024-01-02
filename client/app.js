const form = document.getElementById("quiz-form");
const quizContainer = document.getElementById("quiz-container");

async function getQuiz() {



  const response = await fetch("http://localhost:8080/quiz");
  const qAndAs = await response.json();

  qAndAs.forEach(function (qAndA, index) {
    const questionContainer = document.createElement("div");
    questionContainer.className = "questionContainerClass";

    const image = document.createElement("img");
    image.src = `${qAndA.image}`;

    const question = document.createElement("h2");
    question.textContent = qAndA.question;

    const answer1 = document.createElement("label");
    answer1.innerHTML = `<input type="radio" name="answer" value="${qAndA.answer1}" /> <span>${qAndA.answer1}</span>`;

    const answer2 = document.createElement("label");
    answer2.innerHTML = `<input type="radio" name="answer" value="${qAndA.answer2}" /> <span>${qAndA.answer2}</span>`;

    const answer3 = document.createElement("label");
    answer3.innerHTML = `<input type="radio" name="answer" value="${qAndA.answer3}" /> <span>${qAndA.answer3}</span>`;

    const answer4 = document.createElement("label");
    answer4.innerHTML = `<input type="radio" name="answer" value="${qAndA.answer4}" /> <span>${qAndA.answer4}</span>`;

    const nextButton = document.createElement("button");
    nextButton.textContent = "Next Question";
    nextButton.addEventListener("click", () => {
    });


    questionContainer.appendChild(question);
    questionContainer.appendChild(image);
    questionContainer.appendChild(answer1);
    questionContainer.appendChild(answer2);
    questionContainer.appendChild(answer3);
    questionContainer.appendChild(answer4);
    questionContainer.appendChild(nextButton);

    quizContainer.appendChild(questionContainer);
  });

}

getQuiz();
