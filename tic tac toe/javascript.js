let boxs=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgame=document.querySelector("#newgame");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;

const winpatterns=
[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
boxs.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if(turn0)
        {
            box.innerText="0";
            turn0=false;
        }
        else
        {
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
    });

    const resetgame =() =>
    {
        turn0=true;
        enableboxs();
        msgcontainer.classList.add("hide");

    };

    const disableboxs =() =>
    {
        for(let box of boxs)
        {
            box.disabled=true;
        }

    };
    const enableboxs =() =>
    {
        for(let box of boxs)
        {
            box.disabled=false;
            box.innerText="";
        }

    }
    const showWinner =(winner) =>
    {
        msg.innerText=`Congratulation ,winner is ${winner}`;
        msgcontainer.classList.remove("hide");
        disableboxs();

    }
    const checkWinner =() =>
    {
        for ( let pattern of winpatterns ) 
        {
            let pos1val=boxs[pattern[0]].innerText;
            let pos2val=boxs[pattern[1]].innerText;
            let pos3val=boxs[pattern[2]].innerText;

            if(pos1val != "" && pos2val != "" && pos3val!= "")
            {
                if(pos1val === pos2val && pos2val === pos3val)
                {
                    console.log("winner ",pos1val);
                    showWinner(pos1val);
                }
            }
            
            
            
        }

    };

    newgame.addEventListener("click",resetgame);
    reset.addEventListener("click",resetgame);

