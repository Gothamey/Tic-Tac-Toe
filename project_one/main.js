$(document).ready(function(){
var playerTurn = true;
// selcting the box class
var boxes = $('.box');
var moveCount = 0;
//selceting the players name from main2 value class 
var names = $('.values')
 var players = {
	p1:{
        name: '',
        type: '<i class="fas fa-times"></i>',
        score: '0'
    },
        
	p2:{
        name: '',
        type: '<i class="far fa-circle "></i>',
        score: '0'
    }
	
}

//click and selecting the players input 
$('.player-submit').click(function(){
// a new varibales to select the vlaue of the players names
    var input1 = $('.player-input1').val();
    var input2 = $('.player-input2').val(); 

    //calling the function that stored the names 
    saveInput(input1, input2); 
})

// a function to store the names to the local Storage  
function saveInput (name1, name2){
    window.localStorage.setItem('player1', name1);
    window.localStorage.setItem('player2', name2); 
}

// a function to select the objects to assign and store the local storage values 
function getNames (){
     players.p1.name = window.localStorage.getItem('player1');
     players.p2.name = window.localStorage.getItem('player2');
}
getNames();

// the main function that run the game
function game(){
    // selecting and clicking the box class 
    
    names.html(players.p1.name + "'s turn!");
    $('.box').click(function(){
        // start the conditions statment 
        //var playerTurn = true;
        //var names = $('.values')
    if (playerTurn && $(this).html() == ''){
        //player takes turn 
        names.html(players.p2.name + "'s turn!");
        $(this).html(players.p1.type);
        playerTurn = !playerTurn;
            theWinner ();
            moveCount++;

 } else if  (!playerTurn && $(this).html() == ''){
        names.html(players.p1.name + "'s turn!");
            $(this).html(players.p2.type);
        playerTurn = !playerTurn;
            theWinner();
            moveCount++;
}
    
});

// a loop for restarting the game
$('#button').click(function () {
    for (var i = 0; i < boxes.length; i++){
        $(boxes[i]).html(''); 
        game();
        moveCount = 0;
    }
      });
}


game();

// winning 
var winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
]

function theWinner (){
    // a loop for the arrays to check all boxes for winner options 
    for (var i = 0; i < 8; i++){

        var a = winner[i][0];
        var b = winner[i][1];
        var c = winner[i][2];


    if ($(boxes[a]).html() == $(boxes[b]).html() && $(boxes[b]).html() ==$(boxes[c]).html() && $(boxes[a]).html() !== ''){
        return getWinner($(boxes[a]).html()); //calling the winner function for the winner and exit


    } 
    
}
// outside the loop Draw Case
    if (moveCount == 8){
        alert('No Winner!');
        names.html('No Winner!');
        moveCount =0;

} 
}

// this function will calucates and get the final winner and alert the winner's name
function getWinner (won){
    if (won == players.p1.type){
        //output the X player win case
        alert(players.p1.name + ' is the winner');
        names.html(players.p1.name + " is The Winner");
        //switching the click off 
        $('.box').off('click');

    } else {
        // the O player win case
        alert (players.p2.name + ' is the winner');
        names.html(players.p2.name + " is The Winner");
        //switching the click off 
        $('.box').off('click');

    }
}

});




 










