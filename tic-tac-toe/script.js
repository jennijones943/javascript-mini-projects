let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let msgcont=document.querySelector(".msgcont");
let newgame=document.querySelector("#newgame");
let msg=document.querySelector("#msg");
let turn0=true;
let count=0;
const winningpatterns=[
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
];
const enable=()=>{
    boxes.forEach((box)=>{
    box.disabled=false;
    box.innerText="";
    })
}
const resetgame=()=>{
    turn0=true;
    enable();
    msgcont.classList.add("hide");
}
const checkdraw=(count)=>{
    if(count==9){
    msg.innerText="Its a draw!";
    msgcont.classList.remove("hide");
    }
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0)
        {
            box.innerText="O";
            turn0=false;
            box.style.color="green";
        }
        else{
            box.innerText="X";
            turn0=true;
            box.style.color="blue";
        }
        box.disabled=true;
        checkwinner();
        count++;
        checkdraw(count);

    })
})
const disable=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}
const showwinner=(winner)=>{
    msg.innerText=`congratulations! winner is ${winner}`;
    msgcont.classList.remove("hide");
    disable();
}
const checkwinner=()=>{
    for(let pattern of winningpatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!="" ){
            if(pos1==pos2 && pos2==pos3){
                showwinner(pos1);
            }
        }
     }   
}
newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);
