 var second , minute = 0;
 var clearTime = -1;
var time = document.querySelector(".timer");
var interval;
var counter;
 let openedCards = [];
 let matchedCard = [];
 var gameCard = document.querySelector(".deck");
 //counter.innerText = "moves";
 

 
let cards = [... document.querySelectorAll(".card")];
let cardList = document.querySelectorAll('.card');

for (var i = 0; i < cardList.length; i++){
   cardList[i].addEventListener("click", function(){
	   this.classList.toggle("open");
	   this.classList.toggle("show");
	   
	  openedCards.push(this);
      var len = openedCards.length;
	  console.log(len);
      if(len === 2){
		  openedCards=[];
     //   moveCounter();
		console.log(openedCards[0].type);
        if(openedCards[0].type === openedCards[1].type){
            match();
        } else {
            unmatch();
        }
    }
	 
   });
};

 start();


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}




function start () {
	var arr = shuffle(cards);
	while(gameCard.firstChild){
		gameCard.removeChild(gameCard.firstChild);
		}
	arr.forEach(card => gameCard.append(card));
   
    time.innerHTML = "0 mins 0 secs";
    clearInterval(interval);
};


 
function cardOpen() {
    openedCards.push(this);
    var len = openedCards.length;
    if(len === 2){
        moveCounter();
		console.log(openedCards[0].type);
        if(openedCards[0].type === openedCards[1].type){
            match();
        } else {
            unmatch();
        }
    }
};

 
 function match(){
    openedCards[0].classList.add("match");
    openedCards[1].classList.add("match"); 
   
};


function unmatch(){
    openedCards[0].classList.add("unmatch");
    openedCards[1].classList.add("unmatch");
    cancel();	
};


function cancel(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.add("disabled");
    });
};
 
 
function enable(){
    Array.prototype.filter.call(cards, function(cards){
        cards.classList.remove("disabled");
        for(var i = 0; i < matchedCard.length; i++){
            matchedCard[i].classList.add("disabled");
        }
    });
};

function moveCount(){
	moves++; 
	counter.innerHTML = moves;
	
};


function startTime(){
    interval = setInterval(function(){
		 time.innerHTML = minute+"mins"+second+"secs";
        second++;
    
        if(second == 60){
            minute++;
            second = 0;
        }
         else{
            second++;
        }
    });
};
	

function resetTime () {
	 clearInterval(time.clearTime);
    time.seconds = 0;
    time.minutes = 0;
    $(".timer").text("0:00");

    time.clearTime = setInterval(startTime, 1000);
	
};



function congrats () {
	
	if (matchedCard.length == 16){
        clearInterval(interval);
        finalTime = timer.innerHTML;
	
};
 
} 
 