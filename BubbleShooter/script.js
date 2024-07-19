var timer = 60;
var hitnum = 0;
var score = 0;

function makeBubble(){
var bubbleElement= '';
    for(var i =0; i<102; i++){
        var num = Math.floor(Math.random()*10);
       bubbleElement += `<div class = "bubble">${num} </div>`;
    }
    document.querySelector('.js-bubble-container').innerHTML= bubbleElement;
    
}


//hits
function getNewHit(){
    hitnum = Math.floor(Math.random()*10);
    document.querySelector('.js-hit').textContent = hitnum;
}

// Timer
function runTimer(){
    var timeInt= setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector('.js-timer').textContent=timer;
        }else{
            clearInterval(timeInt);
            document.querySelector('.js-bubble-container').innerHTML=`
            <div class="game-over">
                <h1> Game Over! </h1>
                <h1>Your Score: ${score}</h1>
            </div>`;
        }
    },1000);
}

document.querySelector('.js-bubble-container').addEventListener('click',
function(dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum === hitnum){
        makeBubble();
        getNewHit();
        increaseScore();
    }
})

//score

function increaseScore(){
    score+=10;
    document.querySelector('.js-score').textContent = score;
}
makeBubble();
runTimer();
getNewHit();