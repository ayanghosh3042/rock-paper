let mode=document.querySelector("#mode");
let dark=0;

mode.onclick=()=>{
    dark=1-dark;
    if(dark){
        document.body.style.backgroundColor="#0a0e0f";
        mode.innerText="Light";
    }
    else{
        document.body.style.backgroundColor="#b6d5e3";
        mode.innerText="Dark";
    }
};



let choices=document.querySelectorAll(".ele");
let res=document.querySelector(".result");
let userScore=0;
let compScore=0;
let user=document.querySelector("#user_score");
let comp=document.querySelector("#comp_score");


const randChoice=()=>{
    let index=Math.floor(Math.random()*100)%3;
    return choices[index].getAttribute("id");
}

const tie=()=>{
    console.log("tie");
    res.innerText="tie";
}
const win=()=>{
    console.log("win");
    res.innerText="win";
    userScore++;
    user.innerText=userScore;
}
const lose=()=>{
    console.log("lose");
    res.innerText="lose";
    compScore++;
    comp.innerText=compScore;
}

const playGame=(user,comp)=>{
    let isUserWin;
    if(user===comp){
        tie();
        return 0;
    }
    else{
        if(user==="rock"){
            isUserWin=(comp==="paper")?false:true;
        }
        else if(user==="paper"){
            isUserWin=(comp==="rock")?true:false;
        }
        else{
            isUserWin=(comp==="rock")?false:true;
        }

        if(isUserWin){
            win();
            return 1;
        }
        else{
            lose();
            return -1;
        }
    }
}

choices.forEach(Choice => {
    // console.log(Choice); 
    Choice.addEventListener("click",()=>{
        let userChoice=Choice.getAttribute("id");
        let compChoice=randChoice();
        
        console.log("user choice :",userChoice);
        console.log("comp choice :",compChoice);
        console.log(playGame(userChoice,compChoice));
    });   
});