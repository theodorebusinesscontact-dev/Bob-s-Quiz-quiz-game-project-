//VARIABLES
const params = new URLSearchParams(window.location.search);
const theme = params.get("theme");
document.getElementById("title").textContent = theme;
const questionLabel = document.getElementById("questionlabel");
const ballq = document.getElementById("ballq");
const score = document.getElementById("nscore");
const best = document.getElementById("nbest");
const backbutton = document.getElementById("back");
let points = 0;
let current = 0;
let locked = false;
const boxes = [
    document.querySelector(".answer1"),
    document.querySelector(".answer2"),
    document.querySelector(".answer3"),
    document.querySelector(".answer4")
];
score.textContent = points;
const answerss = {
    A:0,
    B:1,
    C:2,
    D:3
}
const key = "best" + theme;
const saved = localStorage.getItem(key);
let bestscore = 0;
const a1Text = document.getElementById("answer1label");
const a2Text = document.getElementById("answer2label");
const a3Text = document.getElementById("answer3label");
const a4Text = document.getElementById("answer4label");
const balls = document.querySelectorAll(".ball button");
//START
if (saved === null) {
    best.textContent = "-";
}
else {
    bestscore = Number(saved);
    best.textContent = bestscore;
}

function nextQuestion(){
    if (current >= questions[theme].length) {
        return;
    }
    questionLabel.textContent = questions[theme][current].question;
    ballq.textContent = questions[theme][current].number;
    
    a1Text.textContent = questions[theme][current].answers[0];
    a2Text.textContent = questions[theme][current].answers[1];
    a3Text.textContent = questions[theme][current].answers[2];
    a4Text.textContent = questions[theme][current].answers[3];
}

backbutton.addEventListener("click", function(){
    history.back();
})
//FUNCTION THAT STARTS THE ENGINE
function start(){
    nextQuestion();
    balls.forEach(function(btn){
        btn.addEventListener("click",function(){

            if (locked === true) {return;}
            else {locked = true;}

            const picked = answerss[btn.textContent];
            const correct = questions[theme][current].correct;
            boxes[correct].classList.add("correct");
            if (picked !== correct) {
                boxes[picked].classList.add("wrong");
            }
            else{
                points += 1
                score.textContent = points;
            }
            setTimeout(function(){
                boxes.forEach(function(box){
                    box.classList.remove("correct");
                    box.classList.remove("wrong");
                });
                current+=1
                nextQuestion();
                if (points > bestscore) {
                    bestscore = points;
                    best.textContent = points;
                    localStorage.setItem(key, bestscore)
                }
                if (current === 10 && points >= 8) {
                    document.querySelector(".secret").style.display = "flex";
                }
                locked = false;
                },1000)
            })

        });
    };    
start();