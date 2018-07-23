const paperRockScissors = {

    divBoard : null,
    divScore : null,
    tiles : [],
    moveCount : 0,

    // pictureChange : function(){
    //
    //     document.getElementById("question").src=;
    // },

playGame : function () {
    var imgArray = new Array();

    imgArray[0] = new Image();
    imgArray[0].src = 'img/paper.jpg';

    imgArray[1] = new Image();
    imgArray[1].src = 'img/rock.jpg';

    imgArray[2] = new Image();
    imgArray[2].src = 'img/scissors.jpg';

    var item = imgArray[Math.floor(Math.random()*imgArray.length)];

    console.log("Wybrano: " + item.src);

    document.getElementById("question").src=item.src;


    }








}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.game-button1').addEventListener('click', function() {
        paperRockScissors.playGame();

    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.game-button2').addEventListener('click', function() {
        paperRockScissors.playGame();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.game-button3').addEventListener('click', function() {
        paperRockScissors.playGame();
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