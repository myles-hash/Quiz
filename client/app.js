const form = document.getElementById("quiz-form");
const quizContainer = document.getElementById("quiz-container");

const cover = document.getElementById("cover")
quizContainer.style.display = "none";
const drop = document.getElementById("drop")
drop.style.display = "none";
document.getElementById("letsGo").onclick = function () {
  drop.style.display = "initial";
  setTimeout(function(){ 
    quizContainer.style.display = "initial";
    cover.style.display = "none";
    },3000);
  }

async function getQuiz() {



  const response = await fetch("http://localhost:8080/quiz");
  const qAndAs = await response.json();

  qAndAs.forEach(function (qAndA, index) {
    const questionContainer = document.createElement("div");
    questionContainer.className = "questionContainerClass";

    const mediaElement = qAndA.image.endsWith(".mp4")
    ? document.createElement("video")
    : document.createElement("img");

    mediaElement.src = `${qAndA.image}`;

    if (qAndA.image.endsWith(".mp4")) {
      mediaElement.controls = true;
    }

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
    questionContainer.appendChild(mediaElement);
    questionContainer.appendChild(answer1);
    questionContainer.appendChild(answer2);
    questionContainer.appendChild(answer3);
    questionContainer.appendChild(answer4);
    questionContainer.appendChild(nextButton);

    quizContainer.appendChild(questionContainer);
  });

}

getQuiz();
