// let start=document.querySelector("body");
// start.addEventListener("keydown",function(){
//     let h3=document.querySelector("h3");
//     h3.innerText="Level 1";
//     let arr=[b1,b2,b3,b4];
//     // console.log(typeof(arr[0]));
//     let random=Math.floor(Math.random()*4);
//     // console.log(random);
    
//     // console.dir(boxs);
//     arr[random].style.backgroundColor="white";
//     setTimeout(()=>{
//         if(random==0){
//             arr[random].style.backgroundColor="red";
//         }
//         else if(random==1){
//             arr[random].style.backgroundColor="blue";
//         }
//         else if(random==2){
//             arr[random].style.backgroundColor="green";
//         }
//         else{
//             arr[random].style.backgroundColor="yellow";
//         }
//     },100);
//     let result=[arr[random].id];
//     console.log(result[0]);
//     let boxs=document.querySelectorAll(".box");
//     // let x;
//     // for(let box of boxs){
//     //     boxs[box]=this.addEventListener("click",function(event){
//     //         console.log(event.target.id);
//     //         return event.target.id;
//     //     })
//     // }
//     // for(let box of boxs){
//         // box=this.addEventListener("click",function(event){
//         //     console.log(event.target.id);
//         //     return event.target.id;
//         // })
//         let arrclk=[];
//         this.onclick=function(event){
//             console.log(event.target.id);
//             arrclk.push(event.target.id);
//             if(result[0]==arrclk[0]){
//                 console.log("correct");
//             }
//         }
//         console.log(arrclk);
//     // }
//     // for(let box of boxs){
//     //     boxs=function(event){
//     //         console.log(event.target.id);
//     //         return event.target.id;
//     //     }
//     // }
//     // while(arr[]){};
//     // console.log("correct");
    
// });
let gameseq=[];
let userseq=[];
started=false;
let level=0;
let h3=document.querySelector("h3");
// let b
document.addEventListener("keydown",function(){
    if(started==false){
        console.log("game Satrted");
        started=true;
        levelUp();  
        
    }
    
});


function random(){
    let random=Math.floor(Math.random()*4)+1;
    return random;
};


function gameFlash(i){
    let randombox=document.querySelector(`.box${i}`);
    randombox.classList.add("gameflash");
    setTimeout(()=>{
        randombox.classList.remove("gameflash");
    },250);
};
function userFlash(i){
    let randombox=document.querySelector(`.box${i}`);
    randombox.classList.add("userflash");
    setTimeout(()=>{
        randombox.classList.remove("userflash");
    },100);
};

function checkAns(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        // h3.innerText=`Game Over! Press any key to restart.`;
        h3.innerText=`Game Over! Your Score was ${level-1} \n Press any key to Start`;
        // Press any key to;
        reset();
    }
    
}
function btnpressed(){
    if(started==false){
        reset();
        // return;
    }
    else{
        let i=this.id;
    userFlash(i);
    userseq.push(i);
    // console.log(userseq);
    // count++;
    checkAns(userseq.length-1);
    }
    
}
let boxs=document.querySelectorAll(".box");
for(let box of boxs){
    box.addEventListener("click",btnpressed);
};

function levelUp(){
    userseq.length=0;
    level++;
    h3.innerText=`level ${level}`;
    gameseq.push(random());
    // console.log(gameseq);
    gameFlash(gameseq[gameseq.length-1]);
    
    // console.log("hi");
    
}
function reset(){
    started=false;
    gameseq=[];
    level=0;
    // h3.innerText=`Please Press Any Key To Start The Game`;
}