let boxs=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let msgcon=document.querySelector(".first");
let newbtn=document.querySelector(".newgame");
let msg=document.querySelector(".winner");

let player=true;


const resetgame = () =>{
    player=true;
    enablebox();
    msgcon.classList.add("hide");
}
const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

];
boxs.forEach((boxs) => {
boxs.addEventListener ("click", () => {
if(player === true){
    boxs.innerText="O";
player=false;}
    else{
        boxs.innerText="X";
        player=true;
    }
    
   boxs.disabled="true";
   checks();
});  
});
const checks =() =>{
for (let pattern of win ){
let pos0=boxs[pattern[0]].innerText;
let pos1=boxs[pattern[1]].innerText;
let pos2=boxs[pattern[2]].innerText;
if(pos0 != "" && pos1 != "" && pos2 != ""){
    if(pos0 === pos1  && pos1=== pos2 ){
        console.log("O is winner",pos0);
        showwinner(pos0);

    }
}

}
}
const disabledbox = () =>{
    for(let box of boxs){
        box.disabled=true;
    }
}
const enablebox = () =>{
    for(let box of boxs){
        box.disabled=false;
        box.innerText="";
    }
}
const showwinner = (winner) =>{
    msg.innerText=`Congratulations. Winner is ${winner}`;
    msgcon.classList.remove("hide");
    disabledbox();
}
newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);