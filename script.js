const quiz = [
{
question:"Which language is used for web page structure?",
options:["HTML","CSS","Python","Java"],
answer:"HTML"
},
{
question:"Which language is used for styling?",
options:["C","CSS","Java","PHP"],
answer:"CSS"
},
{
question:"Which language adds interactivity?",
options:["HTML","JavaScript","SQL","C++"],
answer:"JavaScript"
}
];

let current=0;
let score=0;

const question=document.getElementById("question");
const answers=document.getElementById("answers");
const next=document.getElementById("next");
const result=document.getElementById("result");

function loadQuestion(){

answers.innerHTML="";

question.innerHTML=quiz[current].question;

quiz[current].options.forEach(option=>{

let btn=document.createElement("button");

btn.innerHTML=option;

btn.classList.add("option");

btn.onclick=function(){

if(option===quiz[current].answer)
score++;

next.disabled=false;

document.querySelectorAll(".option").forEach(b=>b.disabled=true);

};

answers.appendChild(btn);

});

next.disabled=true;

}

loadQuestion();

next.onclick=function(){

current++;

if(current<quiz.length){

loadQuestion();

}
else{

question.innerHTML="Quiz Completed";

answers.innerHTML="";

next.style.display="none";

result.innerHTML="Your Score: "+score+" / "+quiz.length;

}

}
