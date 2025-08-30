// PROJECT 2 - Quiz Logic

const questions = [

  {

    question: "Which language is used for web development?",

    options: ["Python", "HTML", "C++", "Java"],

    answer: "HTML"

  },

  {

    question: "Which is a CSS framework?",

    options: ["Bootstrap", "NumPy", "Pandas", "TensorFlow"],

    answer: "Bootstrap"

  },

  {

    question: "Which website is famous for coding tutorials?",

    options: ["W3Schools", "Instagram", "Netflix", "Twitter"],

    answer: "W3Schools"

  }

];

let currentQ = 0;

let score = 0;

const questionEl = document.getElementById("question");

const optionsEl = document.getElementById("options");

const scoreEl = document.getElementById("score");

const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {

  optionsEl.innerHTML = "";

  questionEl.textContent = questions[currentQ].question;

  questions[currentQ].options.forEach(option => {

    const btn = document.createElement("button");

    btn.textContent = option;

    btn.onclick = () => checkAnswer(option);

    optionsEl.appendChild(btn);

  });

}

function checkAnswer(option) {

  if (option === questions[currentQ].answer) {

    score++;

    scoreEl.textContent = "Score: " + score;

    alert("✅ Correct!");

  } else {

    alert("❌ Wrong! Correct answer is: " + questions[currentQ].answer);

  }

}

nextBtn.addEventListener("click", () => {

  currentQ++;

  if (currentQ < questions.length) {

    loadQuestion();

  } else {

    questionEl.textContent = "🎉 Quiz Completed!";

    optionsEl.innerHTML = "";

    nextBtn.style.display = "none";

    scoreEl.textContent = "Final Score: " + score;

  }

});

// Load first question

loadQuestion();