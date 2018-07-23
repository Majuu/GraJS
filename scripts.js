const paperRockScissors = {

    yourScore : 0,
    enemyScore : 0,

    shuffle : function () {
        var imgArray = new Array();

        imgArray[0] = new Image();
        imgArray[0].src = 'img/paper.jpg';

        imgArray[1] = new Image();
        imgArray[1].src = 'img/rock.jpg';

        imgArray[2] = new Image();
        imgArray[2].src = 'img/scissors.jpg';

        this.item = imgArray[Math.floor(Math.random()*imgArray.length)];
        document.getElementById("question").src=this.item.src;

        setTimeout(this.changePic, 1000);
    },

   changePic(){
       document.getElementById("question").src='img/question_mark.jpg';
    },

    scoreFunction1 : function () {
        //BUTTON 1 - PAPER
        if (this.item.src.includes("rock")){

            this.playerPointFunction();
        }

        if (this.item.src.includes("scissors")){

           this.enemyPointFunction();
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

             this.playerPointFunction();
         }
         if (this.item.src.includes("paper")){

             this.enemyPointFunction();
         }
    },

    scoreFunction3 : function () {
        //BUTTON 3 - SCISSORS
         if (this.item.src.includes("rock")){
            this.enemyPointFunction();

         }
         if (this.item.src.includes("scissors")){

             alert("Draw! No points!")
         }
         if (this.item.src.includes("paper")){
             this.playerPointFunction();
         }
    },

    playerPointFunction : function(){
        this.yourScore++;
        document.getElementById("myScore").innerHTML = this.yourScore;
    },

    enemyPointFunction  : function(){
        this.enemyScore++;
        document.getElementById("enemyScore").innerHTML = this.enemyScore;
    },

    gameOver : function () {
        if (this.yourScore==10){
            alert("Game over. You win, congrats!")
            this.backToStart();
        }
        if (this.enemyScore==10){
            alert("Game over. You are a loooser!")
            this.backToStart();
        }
    },

    backToStart : function () {
        this.yourScore=0;
        document.getElementById("myScore").innerHTML = '';
        this.enemyScore=0;
        document.getElementById("enemyScore").innerHTML = '';
        document.getElementById("question").src="img/question_mark.jpg";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.game-button1').addEventListener('click', function() {
        paperRockScissors.shuffle();
        paperRockScissors.scoreFunction1();
        paperRockScissors.gameOver();

    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.game-button2').addEventListener('click', function() {
        paperRockScissors.shuffle();
        paperRockScissors.scoreFunction2();
        paperRockScissors.gameOver();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.game-button3').addEventListener('click', function() {
        paperRockScissors.shuffle();
        paperRockScissors.scoreFunction3();
        paperRockScissors.gameOver();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.game-reset').addEventListener('click', function() {
        paperRockScissors.backToStart();
    });
});
