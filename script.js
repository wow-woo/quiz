let questions = [
  {
    question: "一番美味しいお肉の部分は？",
    options: ["タン", "ロース", "スネ", "バラ"],
    answer: "ロース"
  },
  {
    question: "クリスマスに休みに行ったら最高の場所は？",
    options: ["無人島", "福岡", "沖縄", "アフリカ", "ロシア"],
    answer: "沖縄"
  },
  {
    question: "普通のコーラとダイエットコーラどちらを飲みますか？",
    options: ["普通", "ダイエット"],
    answer: "普通"
  },
  {
    question: "一番可愛い動物は？",
    options: ["ペンギン", "カワウソ", "猫", "ゴールデンレトリバー"],
    answer: "ゴールデンレトリバー"
  },
  {
    question: "한국어 시험! 대한민국은 일본 보다 따뜻할까?",
    options: ["네, 따듯합니다", "아니요, 너무 추워요"],
    answer: "아니요, 너무 추워요"
  },
  {
    question: "フランス語が公用語じゃない国は？",
    options: [
      "フランス",
      "チュニジア",
      "ベルギーの",
      "カナダ",
      "香港",
      "スイスの"
    ],
    answer: "香港"
  }
];
// how many questions
const n = questions.length;

document.addEventListener("DOMContentLoaded", function() {
  loadQuestion();
});

// thing to track of
let questionNumber = 0;
let correct = 0;
// store how many questions there
const allQuestions = questions.length;

// dom menuplating
const question_h2 = document.getElementById("question");
const options_div = document.getElementById("options");
const correct_span = document.getElementById("correct");
const notice_span = document.getElementById("notice");
const reset = document.getElementById("reset");

// refresh for resetting
reset.addEventListener("click", () => {
  location.reload();
});

// reload question
function loadQuestion() {
  // initalizing
  // random number for a question
  const randomNumber = Math.floor(Math.random() * questions.length);
  console.log("random number :", randomNumber);

  const thenumberQuestion = questions[randomNumber];

  // emptying thenumberQuestion's content
  question_h2.textContent = "";
  // emptying options_div's content
  options_div.innerHTML = "";

  //  deceding loading or stop
  if (questions.length == 0) {
    alert(`you've done all ${allQuestions} questions!`);
    question_h2.textContent = `reult: ${correct} of ${questionNumber}`;
    options_div.textContent = "congrats !!!";
  } else if (questions.length < 0) {
    return flase;
  } else {
    // counter of question
    questionNumber++;

    // loading
    // question loaded
    question_h2.textContent = thenumberQuestion.question;

    // original questions number
    notice_span.textContent = n;

    // adding options buttons as much as it has
    for (select of thenumberQuestion.options) {
      options_div.innerHTML += `<div> ${select} </div>`;
    }

    // things to track
    let selectCount_div = 0;
    // give functionality to select btns
    const divs = document.querySelectorAll("#options");
    divs.forEach(function(div) {
      div.addEventListener("click", function(e) {
        // click count
        selectCount_div++;

        // operate when it is first time
        if (selectCount_div == 1) {
          // checking if answer matched

          if (e.target.textContent.trim() == thenumberQuestion.answer) {
            correct++;
            correct_span.textContent = `${correct} of ${questionNumber}`;
            setTimeout(loadQuestion, 500);
            e.target.setAttribute("id", "green");
            setTimeout(() => {
              e.target.setAttribute("id", "");
            }, 500);
          } else {
            correct_span.textContent = `${correct} of ${questionNumber}`;
            setTimeout(loadQuestion, 500);
            e.target.setAttribute("id", "red");
            setTimeout(() => {
              e.target.setAttribute("id", "");
            }, 500);
          }
        }
      });
    });

    // preventing same question
    questions.splice(randomNumber, 1);
    console.log(questions);
  }
}
