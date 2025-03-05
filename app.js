const choices = document.querySelectorAll(".choices");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");
let Userscore = 0;
let Compscore = 0;


//generate computer choice.

const genCompChoice = () => {
    //random from rock paper scissor
    const options = ["rock" , "paper" , "scissor"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];

}


const playGame = (userChoice)=>{
    console.log("User choice is :",userChoice)
    const compChoice = genCompChoice();
    console.log("computer choice is :",compChoice );

    if(userChoice===compChoice){
        msg.innerText = "Game is Draw. Play again."
        msg.style.backgroundColor = "black"
    }else if(userChoice==="rock" && compChoice==="scissor"){
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`
        Userscore++;
        userScorePara.innerText = Userscore;
        msg.style.backgroundColor = "green"
    }else if(userChoice==="paper" && compChoice==="scissor"){
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red"
        Compscore++;
        compScorePara.innerText = Compscore;
    }else if(userChoice==="rock" && compChoice==="paper"){
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red"
        Compscore++;
        compScorePara.innerText = Compscore;
    }else if(userChoice==="scissor" && compChoice==="paper"){
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`
        Userscore++;
        userScorePara.innerText = Userscore;
        msg.style.backgroundColor = "green"
    }else if(userChoice==="scissor" && compChoice==="rock"){
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red"
        Compscore++;
        compScorePara.innerText = Compscore;
    }else if(userChoice==="paper" && compChoice==="rock"){
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
        Userscore++;
        userScorePara.innerText = Userscore;
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});

