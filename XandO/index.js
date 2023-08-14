let music = new Audio("./elements/music.mp3")
let gameover = new Audio("./elements/gameover.mp3")
let ting = new Audio("./elements/ting.mp3")
let mo = document.getElementById("reset")
let Turn = "X"
let game = false;

// This function is to change the turn
const changeTurn = ()=>{
    return Turn === "X"?"O" : "X"
}

// This function is to reset the game
const reset = ()=>{
    let boxt = Array.from(document.querySelectorAll(".boxText"));
    mo.addEventListener("click", ()=>{
    boxt.forEach(e =>{
            e.innerText = " "
        
     })
     document.getElementById("Gif").style.display = "none";
    })
}

// This function is to check for a win
const checkWin = ()=>{
    // let boxt = document.getElementsByClassName("boxText");
    let boxt = Array.from(document.querySelectorAll(".boxText"));
    win =[
        [0, 1, 2],
        [3,4 ,5 ],
        [6,7 ,8 ],
        [0,3 ,6 ],
        [1,4 ,7 ],
        [2,5 ,8 ],
        [0,4 ,8 ],
        [2, 4, 6]
    ]
    
    win.forEach(e =>{
       if((boxt[e[0]].innerText === boxt[e[1]].innerText) && (boxt[e[2]].innerText === boxt[e[1]].innerText) && (boxt[e[0]].innerText !== "")){
            document.querySelector(".Info").innerText = boxt[e[0]].innerText + " won";
            game = true;
            boxt.forEach(e =>{
                e.innerText = " "
            
            })
            
            document.getElementById("Gif").style.display = "block";
            setInterval(() => {
                document.getElementById("Gif").style.display = "none";
                document.querySelector(".Info").innerText = "Turn of " + Turn;
            }, 5000);
                
            gameover.play();
       }
    })
}


// Game function
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".boxText");
    element.addEventListener("click", ()=>{
        if(boxtext.innerText === ""){
            boxtext.innerText = Turn;
            Turn = changeTurn();
            ting.play();
            checkWin();
            reset();
            if(!game){
                document.getElementsByClassName("Info")[0].innerHTML = "Turn of " + Turn;
            }
        }
    });
})