const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

let score = JSON.parse(localStorage.getItem('score'))
if(!score){
    score = 0
}

const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");

scoreEl.innerText = `score : ${score}`
const correctans = num1 * num2;

questionEl.innerText = `What is ${num1} x ${num2} = ?`;

//adding event listener to form
formEl.addEventListener("submit", () => {
    const userAnswer = +inputEl.value
    if(userAnswer != correctans){
        score--;
        updateLocalStorage()
    }else{
        score++;
        updateLocalStorage()
    }
    console.log(score)
});

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score));
}
