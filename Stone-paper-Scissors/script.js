let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
let rst = document.querySelector("#rst");
const msg =document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const rstGame = (userScore,compScore)=>{
    console.log("button was clicked");
  userScore = 0;
  userScorepara.innerText = userScore;
    
 compScore = 0;
 compScorepara.innerText = compScore;
 msg.innerText = "Choose your Option";
 msg.style.backgroundColor = "#F2AFEF";
 msg.style.Color = "#081b31";
}


const drawGame = ()=>{
  console.log("game was drawn.");
  msg.innerText = "Game Draw!!";
  msg.style.backgroundColor = "purple";
}
const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        console.log("you win!! ");
        msg.innerText = `You win!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        
    }
    else {
        compScore++;
        compScorepara.innerText = compScore;
        console.log("you lose!!");
        msg.innerText = `You Lose!! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";


    }

}

const genCompChoice = ()=>{
     const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*options.length);
    return options[randIdx];
} 

 const playGame = (userChoice) => {
        console.log("user Choice = ",userChoice);

        const compChoice = genCompChoice();
        console.log("comp Choice = ",compChoice);

       if(userChoice === compChoice){
                drawGame();
       }
       else{
        let userWin = true;
        if(userChoice  === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice  === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin,userChoice,compChoice);
    
    }
 }
 

choices.forEach((choice)=>{
   
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
 rst.addEventListener("click",rstGame);
