const paperRockScissors = {

    divBoard : null,
    divEnemy : null,
    divScore : null,
    tiles : [],
    yourScore : 0,
    enemyScore : 0,
    item : null,

    shuffle : function () {
    var imgArray = new Array();

    imgArray[0] = new Image();
    imgArray[0].src = 'img/paper.jpg';

    imgArray[1] = new Image();
    imgArray[1].src = 'img/rock.jpg';

    imgArray[2] = new Image();
    imgArray[2].src = 'img/scissors.jpg';

    this.item = imgArray[Math.floor(Math.random()*imgArray.length)];


    console.log("Wybrano: " + this.item.src);

    document.getElementById("question").src=this.item.src;

    },

    scoreFunction1 : function () {
        //BUTTON 1 - PAPER
        if (this.item.src.includes("rock")){

            this.yourScore++;
            document.getElementById("myScore").innerHTML = this.yourScore;
        }

        if (this.item.src.includes("scissors")){

            this.enemyScore++;
            document.getElementById("enemyScore").innerHTML = this.enemyScore;
        }
        if (this.item.src.includes("paper")){
            alert("Draw! No points!")
        }
    },

    scoreFunction2 : function () {
        // BUTTON 2 - ROCK
         if (this.item.src.includes("rock")){
             alert("Draw! No points!")
         }
         if (this.item.src.includes("scissors")){

             this.yourScore++;
             document.getElementById("myScore").innerHTML = this.yourScore;

         }
         if (this.item.src.includes("paper")){
             this.enemyScore++;
             document.getElementById("enemyScore").innerHTML = this.enemyScore;
         }

    },

    scoreFunction3 : function () {
        //BUTTON 3 - SCISSORS
         if (this.item.src.includes("rock")){

             this.enemyScore++;
             document.getElementById("enemyScore").innerHTML = this.enemyScore;
         }
         if (this.item.src.includes("scissors")){

             alert("Draw! No points!")
         }
         if (this.item.src.includes("paper")){

             this.yourScore++;
             document.getElementById("myScore").innerHTML = this.yourScore;
         }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.game-button1').addEventListener('click', function() {
        paperRockScissors.shuffle();
        paperRockScissors.scoreFunction1();

    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.game-button2').addEventListener('click', function() {
        paperRockScissors.shuffle();
        paperRockScissors.scoreFunction2();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.game-button3').addEventListener('click', function() {
        paperRockScissors.shuffle();
        paperRockScissors.scoreFunction3();
    });
});


/*
    future reset button maybe....

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.game-start').addEventListener('click', function() {
        paperRockScissors.startGame();
    });
});

*/