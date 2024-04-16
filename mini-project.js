let div = document.querySelector("div")
let ul = document.querySelector("ul")
let lis = document.querySelectorAll("li")
let inp = document.querySelector("#task")
let btn = document.querySelector("button")

// div.addEventListener("click" , function() {
//     console.log("div was clicked")
// })

// ul.addEventListener("click" , function(event) {
//     event.stopPropagation()
//     console.log("Ul was Clicked")
// })

// for(li of lis){
//     li.addEventListener("click" , function(event){
//         event.stopPropagation()
//         console.log("li was clicked")
       
//     })
// }

// btn.addEventListener("click" , function(event) {
//     let item = document.createElement("li")
//     item.innerText = inp.value

//      let delBtn = document.createElement("button")
//     delBtn.innerText = "delete"
//     delBtn.classList.add("delete")

//     item.appendChild(delBtn)
//     ul.appendChild(item)
//     inp.value= ""
// })

// ul.addEventListener("click" , function(event) {
//    if(event.target.nodeName== "BUTTON")
//    {
//     let listItem = event.target.parentElement;
//     listItem.remove()
//     console.log("deleted")
//    }
// })

    
// let delBtns = document.querySelectorAll(".delete")
// for(delBtn of delBtns)
// delBtn.addEventListener("click" , function() {
//   let par = this.parentElement;
//   console.log(par)
//   par.remove()
// })

let gameSeq = []
let userSeq = []
let btns = ["yellow" , "red" , "purple" , "green"]
let h2 = document.querySelector("h2");
let maxScore=0;

let started = false;
let level = 0 ; 
let h3 = document.querySelector("h3")

document.addEventListener("keypress" , function() {
    if(started == false) {
        console.log("game is started")
        started= true;

        levelUp();
    }
})

function gameFlash(btn) {
    btn.classList.add("flash")
    setTimeout(function() {
        btn.classList.remove("flash")
    }, 500)
}

function userFlash(btn) {
    btn.classList.add("userflash")
    setTimeout(function() {
        btn.classList.remove("userflash")
    } , 100)
}

function levelUp() {
    userSeq = []
    level++ ; 
    h2.innerText = `Level ${level}`
    h3.innerText = `Highest Score : ${maxScore}`
    
  

    let randIdx = Math.floor(Math.random() * 3) ;
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`)
    // console.log(randBtn)
    // console.log(randColor)
    // console.log(randIdx)
    

    gameSeq.push(randColor);
    console.log(gameSeq)
    gameFlash(randBtn);
    
}

function checkAns(idx) {
    // console.log(`current level : ` , level)

    // let idx = level -1 ; 

    if(userSeq[idx] === gameSeq[idx])
    {
       if(userSeq.length == gameSeq.length){
        setTimeout(levelUp , 1000)

       }
    }
    else
    {
    
        h2.innerHTML = (`Game Over ! Your score was <b>${level}</b> <br> Press any key To start again`)
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout( function() {
            document.querySelector("body").style.backgroundColor = "white"

        }, 150)
        reset()
        
            
    }
    
}

function btnPress() {

    let btn = this;
    userFlash(btn)

    userColor = btn.getAttribute("id")
    console.log(userColor)
    userSeq.push(userColor)

    checkAns(userSeq.length-1)
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click" , btnPress)
}

function reset()
{
    
    if(level>maxScore)
        {
            maxScore = level;
            h3.innerText = `Highest Score : ${level}`
        }
        else{
            h3.innerText = `Highest Score : ${maxScore}`
        }
    started = false
    gameSeq = [];
    userSeq = [];
    level = 0 ; 
    
}