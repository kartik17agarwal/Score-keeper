let targetScore = document.querySelector("#target");

let scoreP1 = document.querySelector(".scorePlayer1");

let scoreP2 = document.querySelector(".scorePlayer2");

let incone =  document.querySelector(".player1")

let inctwo =  document.querySelector(".player2");

incone.addEventListener("click",(ev) => {
    let temp1 = parseInt(scoreP1.innerText);
    let temp2 = parseInt(scoreP2.innerText);
    if(temp1  < targetScore.value && temp2 < targetScore.value)
        scoreP1.innerText = temp1+1;
    if(scoreP1.innerText == targetScore.value)
        {
            scoreP1.classList.add("winner");
            scoreP2.classList.add("looser");
            incone.classList.add("opacity");
            inctwo.classList.add("opacity");
        }
  
})

inctwo.addEventListener("click",(ev) => {
    let temp1 = parseInt(scoreP1.innerText);
    let temp2 = parseInt(scoreP2.innerText);
    if(temp1  < targetScore.value && temp2 < targetScore.value)
        scoreP2.innerText = temp2+1;
    if(scoreP2.innerText == targetScore.value)
    {
        scoreP2.classList.add("winner");
        scoreP1.classList.add("looser");
        incone.classList.add("opacity");
        inctwo.classList.add("opacity");
    }
  
})

let reset = document.querySelector(".resetAll");

reset.addEventListener("click" , (e) => {
    scoreP2.innerText = "0";
    scoreP1.innerText = "0";
    scoreP1.classList.remove("winner");
    scoreP1.classList.remove("looser");
    scoreP2.classList.remove("winner");
    scoreP2.classList.remove("looser");
    incone.classList.remove("opacity");
    inctwo.classList.remove("opacity");
})

targetScore.addEventListener("change" , (e) => {
    scoreP2.innerText = "0";
    scoreP1.innerText = "0";
    scoreP1.classList.remove("winner");
    scoreP1.classList.remove("looser");
    scoreP2.classList.remove("winner");
    scoreP2.classList.remove("looser");
    incone.classList.remove("opacity");
    inctwo.classList.remove("opacity");
})