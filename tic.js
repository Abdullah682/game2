
let buttons = document.querySelectorAll(".btn");
let results = document.querySelector("#result");
let winner=false;

let turn = true;

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.innerText === "" && !winner) {
            if(turn) {
                btn.innerText = "X";            
                turn = false;
            } else {
                btn.innerText = "O";
                turn = true;
            }
            checkwinner();
        }
    });
});

const checkwinner=()=>{

     let b1 = document.getElementById("a1").innerText;
     let b2 = document.getElementById("a2").innerText;
     let b3 = document.getElementById("a3").innerText;
     let b4 = document.getElementById("a4").innerText;
     let b5 = document.getElementById("a5").innerText;
     let b6 = document.getElementById("a6").innerText;
     let b7 = document.getElementById("a7").innerText;
     let b8 = document.getElementById("a8").innerText;
     let b9 = document.getElementById("a9").innerText;

     if(b1 === b2 && b2 ===b3 && b1 !== ""){
         winner=true;
         document.getElementById("result").style.display="block";
         document.getElementById("new-game").style.display="block";
         results.innerText=" Congraturation, Winner is  " + b1;
     }
     else if (b4 === b5 && b5 === b6 && b4 !==""){
        winner=true;
        document.getElementById("result").style.display="block";
        document.getElementById("new-game").style.display="block";
        results.innerText=" Congraturation, Winner is  " + b4;
     }
     else if (b7 === b8 && b8 === b9 && b7 !==""){
        winner=true;
        document.getElementById("result").style.display="block";
        document.getElementById("new-game").style.display="block";
        results.innerText=" Congraturation, Winner is  " + b7;
     }
     else if (b1 === b4 && b4 === b7 && b1 !==""){
        winner=true;
        document.getElementById("result").style.display="block";
        document.getElementById("new-game").style.display="block";
        results.innerText="Congraturation, Winner is  " + b1;
     }
     else if (b2 === b5 && b5 === b8 && b2 !==""){
        winner=true;
        document.getElementById("result").style.display="block";
        document.getElementById("new-game").style.display="block";
        results.innerText=" Congraturation, Winner is  " + b2;
     }
     else if (b3 === b6 && b6 === b9 && b3 !==""){
        winner=true;
        document.getElementById("result").style.display="block";
        document.getElementById("new-game").style.display="block";
        results.innerText=" Congraturation, Winner is  " + b3;
     }
     else if (b1 === b5 && b5 === b9 && b1 !==""){
        winner=true;
        document.getElementById("result").style.display="block";
        document.getElementById("new-game").style.display="block";
        results.innerText=" Congraturation, Winner is  " + b1;
     }
     else if (b3 === b5 && b5 === b7 && b3 !==""){
        winner=true;
        document.getElementById("result").style.display="block";
        document.getElementById("new-game").style.display="block";
        results.innerText=" Congraturation, Winner is  " + b3;
     }
     else if (b1 !== "" && b2 !== "" && b3 !== "" && b4 !== "" && b5 !== "" && b6 !== "" && b7 !== "" && b8 !== "" && b9 !== "" && !winner) {
        document.getElementById("result").style.display="block";
        document.getElementById("new-game").style.display="block";
        results.innerText = "It's a draw!";
     }
};

const reset = () => {
    document.getElementById("new-game").style.display = "none";
    document.getElementById("result").style.display = "none";

  
    buttons.forEach((btn) => {
        btn.innerText = "";
        btn.disabled = false; 
    });

    winner = false; 
    turn = true; 
};
