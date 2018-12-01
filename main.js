$(document).ready(function() {

    startGame();
    
    // main array for board game oreder in 
    var arrGame = ['oneF', 'twoF', 'threeF', 'oneS', 'twoS', 'threeS', 'oneTh', 'twoTh', 'threeTh'];
    
    var playerOneScoreCount = 0;
    var playerTwoScoreCount = 0;
    
    // save input of users in these variable
    var player1Choises = ['','','','','','','','',''];
    var player2Choises = ['','','','','','','','',''];

    // set player turn. 0 for player1, 1 for player2
    var playerTurn= 0;
    
    var playerOneName = window.localStorage.getItem('playerOnename');
    var playerTwoName = window.localStorage.getItem('playerTwoname');

    $('#playerOneName').text(playerOneName);
    $('#playerTwoName').text(playerTwoName);

    // save the users name in localStorage
    $('button').on('click', function(){
        var getPlayerOneName = $('#playerOne').val();
        var getPlayerTwoName = $('#playerTwo').val();

        window.localStorage.setItem('playerOnename',getPlayerOneName);
        window.localStorage.setItem('playerTwoname',getPlayerTwoName);

        window.location.href = "game.html";
    })

    $('.back').on('click', function(){
        window.location.href = "index.html";
    });

    // reset the game and set all score to 0
    $('.refresh').on('click', refreshPage);

    function refreshPage(){
        playerOneScoreCount=0;
        $('#playerOneScore').text(playerOneScoreCount);
        playerTwoScoreCount=0;
        $('#playerTwoScore').text(playerTwoScoreCount);
        resetGame();
    }

    // the main function for the game that takes users choices
    function startGame(){
        $('.square').one('click',function(){
            var $newImg = $('<div/>');
            $(this).removeClass('empty');
            $(this).append($newImg);
            var attrIndex= arrGame.indexOf($(this).attr('id'));
                if (playerTurn === 0){ 
                    $newImg.addClass('player1');
                    player1Choises[attrIndex] = $(this).attr('id');
                    playerTurn++;
                    cheackWin(player1Choises);
                } else if (playerTurn === 1){ 
                    $newImg.addClass('player2');
                    player2Choises[attrIndex] = $(this).attr('id');
                    playerTurn--;
                    cheackWin(player2Choises);
                }

        });
    }

    // add animate to winner object 
    function addAnimateToWinner(arr,indexOne, indexTwo, indexThree){
        console.log(`.${arr[indexOne]}`);
        $(`#${arr[indexOne]} > div`).addClass('animated flip');
        $(`#${arr[indexTwo]} > div`).addClass('animated flip');
        $(`#${arr[indexThree]} > div`).addClass('animated flip');
    }

    // alert function by name of the winner
    function alertWinner(state,whichPlayer){
        setTimeout(function (){
            if (whichPlayer === 0){
                swal({
                    title: "Congratulations!",
                    text: `${playerOneName} Win 😎!!!`,
                    icon: state,
                  });
                  playerOneScore();
            } else {
                swal({
                    title: "Congratulations!",
                    text: `${playerTwoName} Win 😎!!!`,
                    icon: state,
                });
                playerTwoScore();
            }
            resetGame();
        },1000) 
    }

    // this function if for check the winner or no winner(tie)
    function cheackWin(arr){
        var countPlayerOne = 0;
        var countPlayerTwo = 0;

        var whichPlayer = (arr === player1Choises) ? 0 : 1;

        for (var i = 0 ; i<9; i++){
            if (player1Choises[i] === ''){
                countPlayerOne++;
            }
            if (player2Choises[i] === '') {
                countPlayerTwo++;
            }
        }

        if (arr[0] && arr[1] && arr[2]){
            addAnimateToWinner(arr,0,1,2);
            alertWinner("success", whichPlayer);
        } else if (arr[0] && arr[4] && arr[8]){
            addAnimateToWinner(arr,0,4,8);
            alertWinner("success", whichPlayer);
        } else if (arr[2] && arr[4] && arr[6]){
            addAnimateToWinner(arr,2,4,6);
            alertWinner("success", whichPlayer);
        } else if (arr[3] && arr[4] && arr[5]){
            addAnimateToWinner(arr,3,4,5);
            alertWinner("success", whichPlayer);
        } else if (arr[6] && arr[7] && arr[8]){
            addAnimateToWinner(arr,6,7,8);
            alertWinner("success", whichPlayer);
        } else if (arr[2] && arr[5] && arr[8]){
            addAnimateToWinner(arr,2,5,8);
            alertWinner("success", whichPlayer);
        } else if (arr[1] && arr[4] && arr[7]){
            addAnimateToWinner(arr,1,4,7);
            alertWinner("success", whichPlayer);
        } else if (arr[0] && arr[3] && arr[6]){
            addAnimateToWinner(arr,0,3,6);
            alertWinner("success", whichPlayer);
        } else if ( (countPlayerTwo === 4 &&  countPlayerOne === 5) || ((countPlayerTwo=== 5 &&  countPlayerOne === 4)) ) {
            swal({
                title: "No Winner!",
                text: `Try Again 🙃`,
                icon: "warning",
              });
            resetGame();
        }
    }

    // these two functions to increase the score for players
    function playerOneScore(){
        playerOneScoreCount++;
        $('#playerOneScore').text(playerOneScoreCount);
    }

    function playerTwoScore(){
        playerTwoScoreCount++;
        $('#playerTwoScore').text(playerTwoScoreCount);
    }

    // this function for reset the board game and users input
    function resetGame(){
        $('.square').children().remove();
        $('.square').addClass('empty');
        player1Choises = ['','','','','','','','',''];
        player2Choises = ['','','','','','','','',''];
        playerTurn=0;
        $('.square').unbind('click');
        startGame();
    }
})