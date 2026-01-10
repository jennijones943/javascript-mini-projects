let user=0;
let computer=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#winner");
const userscore=document.querySelector("#user");
const compscore=document.querySelector("#computer");
const drawgame=()=>{
    console.log("it was a draw");
    msg.innerText="it was a draw";
    msg.style.backgroundColor="#0b0b36";
}
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        user++;
        userscore.innerText=`${user}`;
        msg.innerText=`you won! your ${userchoice} beats ${compchoice}`;
        console.log("you won!");
        msg.style.backgroundColor="green";
    }
    else{
        computer++;
        compscore.innerText=`${computer}`;
        msg.innerText=`you lost. ${compchoice} beats your ${userchoice}`;
        console.log("you lose.");
        msg.style.backgroundColor="red";
    }
}
const playgame=(userchoice)=>{
    console.log("user choice=",userchoice);
    let compchoice=gencomchoice();
    console.log("computer choice=",compchoice);
    if(userchoice===compchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==='rock'){
            userwin=compchoice==='scissors'?true:false;
        }
        else if(userchoice==='scissors'){
            userwin=compchoice==='paper'?true:false;
        }
        else{
            userwin=compchoice==='rock'?true:false;
        }
        showwinner(userwin,userchoice,compchoice);
    }
}
const gencomchoice=()=>{
    let obj=['rock','paper','scissors'];
    let randidx=Math.floor(Math.random()*3);
    return obj[randidx];
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
})
