let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnX = true; 
let count = 0;

const winPatterns =
[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];


boxes.forEach((box) => {
    box.addEventListener("click", ()=> {
        
        if(turnX)
            {
                box.innerText="X";
                turnX=false;
            }
            else
            {
            box.innerText="O";
            turnX= true;
            }
            box.disabled= true;
            count++;
            checkWinner();
    });
});

const resetGame = () => {
    turnX= true;
    enabled();
    msgContainer.classList.add("hide");
}

const disabled = () => {
    for (let box of boxes )
        box.disabled=true;
}

const enabled = () => {
    for ( let box of boxes )
      {  box.disabled= false;
    box.innerText="";
count = 0;
}
}

const showDraw = () => {
msg.innerText="Oops , It's a Draw. Try Again";
    msgContainer.classList.remove("hide");
}


    const showWinner = (winner) => {
msg.innerText=`Congratulations, Winner is ${winner}`;
msgContainer.classList.remove("hide");
disabled();
}

 const checkWinner = () => {
   for(let pattern of winPatterns) 
   {
    let pos1Val= boxes[pattern[0]].innerText;
    let pos2Val= boxes[pattern[1]].innerText;
    let pos3Val= boxes[pattern[2]].innerText;

    if( pos1Val !== "" && pos2Val !== "" && pos3Val !== "" )
    {
        if ( pos1Val === pos2Val && pos2Val === pos3Val)
        {
           console.log("Winner is ",pos1Val);
           showWinner(pos1Val);
           
        }
    }
   }
   if (count === 9)
   {
    showDraw();
   }
 }
  newGameBtn.addEventListener("click", resetGame);
  reset.addEventListener("click", resetGame);
  