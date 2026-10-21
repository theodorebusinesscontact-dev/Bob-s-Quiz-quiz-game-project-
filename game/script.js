const params = new URLSearchParams(window.location.search);
const theme = params.get("theme");
document.getElementById("title").textContent = theme;
const questionLabel = document.getElementById("questionlabel");
const ballq = document.getElementById("ballq");
const score = document.getElementById("nscore");
let points = 0;
let current = 0;
const answerss = {
    A:0,
    B:1,
    C:2,
    D:3
}
const a1Text = document.getElementById("answer1label");
const a2Text = document.getElementById("answer2label");
const a3Text = document.getElementById("answer3label");
const a4Text = document.getElementById("answer4label");
const balls = document.querySelectorAll(".ball button");

score.textContent = points;

function nextQuestion(){
    questionLabel.textContent = questions[theme][current].question;
    ballq.textContent = questions[theme][current].number;
    
    a1Text.textContent = questions[theme][current].answers[0]
    a2Text.textContent = questions[theme][current].answers[1]
    a3Text.textContent = questions[theme][current].answers[2]
    a4Text.textContent = questions[theme][current].answers[3]
}

function start(){
    nextQuestion();
    balls.forEach(function(btn){
        btn.addEventListener("click",function(){
            const picked = answerss[btn.textContent];
            const correct = questions[theme][current].correct;
            if (picked === correct){
                current+=1;
                points +=1;
                nextQuestion();
            }

        });
    });
}

start();