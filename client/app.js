async function loadQuiz() {
    const response = await fetch('/quiz');
    const data = await response.json();

    document.getElementById('question').innerText = data.question;
    document.getElementById('label1').innerText = data.answerone;
    document.getElementById('label2').innerText = data.answertwo;
    document.getElementById('label3').innerText = data.answerthree;
    document.getElementById('label4').innerText = data.answerfour;
}
loadQuiz();