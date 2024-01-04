const form = document.getElementById("quiz-form");
const quizContainer = document.getElementById("quiz-container");
let score = 0;
let currentQuestionIndex = 0;
let qAndAs;
const cover = document.getElementById("cover")


window.onload=()=>{ if (sessionStorage.getItem("reset")===null){
  quizContainer.style.display = "none";
  cover.style.display= "initial";
}else{quizContainer.style.display="initial";
  cover.style.display="none";}}

const drop = document.getElementById("drop")
drop.style.display = "none";
document.getElementById("letsGo").onclick = async function () {
  drop.style.display = "initial";
  setTimeout(function(){ 
    quizContainer.style.display = "initial";
    cover.style.display = "none";
    },3000);
}

//const countdownVideo = document.querySelector('.countdown-video');//
//document.getElementById("letsGo").onclick = async function () {
//  quizContainer.style.display = "initial";
//  cover.style.display = "none";
//  countdownVideo.style.display = "none"
//};

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

    const answer1 = createRadioButton(qAndA.answer1, `answer_${index}`);
    const answer2 = createRadioButton(qAndA.answer2, `answer_${index}`);
    const answer3 = createRadioButton(qAndA.answer3, `answer_${index}`);
    const answer4 = createRadioButton(qAndA.answer4, `answer_${index}`);

    const nextButton = document.createElement("button");
    nextButton.textContent = index === qAndAs.length - 1 ? "Submit Quiz" : "Next Question";
    nextButton.classList.add('nextAndSubmitBtn');

    nextButton.addEventListener("click", async () => {
      const selectedAnswer = document.querySelector(`input[name="answer_${index}"]:checked`);

    if (selectedAnswer) {
      if (selectedAnswer.value === qAndA.correctAnswer) {
        score++; 
      }
      
      if (index === qAndAs.length - 1) {
        const response = await fetch(`http://localhost:8080/results?score=${score}`);
        const result = await response.json();

        if (result) {
            displayResult(result);
        } else {
            alert(`Your score is ${score} out of ${qAndAs.length}`);
        }
    } else {
        currentQuestionIndex++;
    }
       

    } else {
      alert("Please select an answer before moving to the next question."); 
      return;
    }

    const nextQuestionContainer = document.querySelectorAll(".questionContainerClass")[currentQuestionIndex];
    nextQuestionContainer.scrollIntoView({ behavior: "smooth" });
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

function createRadioButton(answerText, groupName) {
  const label = document.createElement("label");
  label.innerHTML = `<input type="radio" name="${groupName}" value="${answerText}" /> <span>${answerText}</span>`;
  label.classList.add('labelClass');
  return label;
}

getQuiz();

async function displayResult(result) {
  document.body.innerHTML = `
      <div>
          <h1>${result.message}</h1>
          <p>Your score is ${score} out of 7 (${score}/7)</p>
          <p>${result.message2}</p>
          <img src="${result.image_path}" alt="Result Image">
          <button id="resetBtn">Reset</button>
      </div>
  `;
  playResSound(result.audio_path);
  const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", async() =>{
  sessionStorage.setItem("reset","true");
  location.reload();
})
}

async function playResSound(audioPath) {
  const audio = new Audio(audioPath);
  audio.volume = 0.1;
  audio.play();
}

window.onload = function() {
  playOnLoad('./CLIPS/20thTrim.mp3');
};

function playOnLoad(audioPath) {
  const audio = new Audio(audioPath);
  audio.volume = 0.1;
  audio.play()
};








