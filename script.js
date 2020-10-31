
var turn = "X";
var winner = "NULL";
var playerVComputer = false;
var startTime;
var endTime;
var optionHasBeenChosen = false;

isTypeChosen();
playAgainButtonDisplayNone();

function isTypeChosen ()
{
    if (optionHasBeenChosen == true){
        //do nothing
    }
    else {
       alert ("You need to choose the game type first. :)");
    }
}

function start ()
{
    startTime = new Date();
}

function end (){
    endTime = new Date();
    var timeElasped = endTime - startTime;
    timeElasped = Math.round(timeElasped);
    var displayTimeMsg = "Time elasped: "+timeElasped+" ms";
    displayTime (displayTimeMsg)
}

function  displayTime (msg) {
    document.getElementById("displayTime").innerHTML = msg;
}

function reStart ()
{
    for (var i = 1; i<=9; i++){
        startingPosition(i);
    }
    displayTime ("");
    optionHasBeenChosen = false;
    start();
    playAgainButtonDisplayNone();
}

function playAgainGame ()
{
    for (var i=1; i<=9; i++){
        startingPosition(i);
    }
        reStart();
}

function playerPlayer (){
    playerVComputer = false;
    playAgainButtonDisplayNone();
    optionHasBeenChosen = true;
    start();
    for (var i = 1; i<=9; i++){
        startingPosition(i);
    }
    var value = Math.random();
    // alert(value);
    if (value > 0.50){
        turn = "X";
    }
    else {
        turn = "O";
    }

    displayTurnMessage ("It's "+turn+"'s turn");
}

function playerComputer (){
    playAgainButtonDisplayNone();
    optionHasBeenChosen = true;

    start();
    playerVComputer = true;
    for (var i = 1; i<=9; i++){
        startingPosition(i);
    }

    var value = Math.random();
    // alert(value);
    if (value > 0.50){
        turn = "X";
    }
    else {
        turn = "O";
    }

    if (turn == "X"){
        // alert("It's your turn!");
        displayTurnMessage ("It's your turn!");

    }
    else {
        // alert("It's Computer's  turn");
        displayTurnMessage ("It's Computer's  turn");
        nextMoveByComputer(turn);
    }
}

function nextMoveByComputer(turn)
{
    if (checkForWinner(turn)){
 
        if (playerComputer == true && turn == "O"){
            displayTurnMessage("AI won the game");

        }
        else {
        displayTurnMessage("Congrachulation "+ turn+" for wining the game!");
        }
        end();

        playAgainButtonDisplayInline();


    }
    else if (isOver()){
        displayTurnMessage("The game is over!");
        end();
        playAgainButtonDisplayInline();
        
    }

    else {

    if (turn == "O"){
     if (checkForWinner(turn)){
        displayTurnMessage ("AI won the game!");
        end();
        playAgainButtonDisplayInline();
        
     }

     else{
      
      var cell = Math.floor(Math.random() * 9) + 1;
       while (true){
          if (document.getElementById(cell).innerHTML != ""){
            cell = Math.floor(Math.random() * 9) + 1;
          }
          else{
              break;
          }
      }

      document.getElementById(cell).innerHTML = turn;
      if (checkForWinner(turn)){
        displayTurnMessage ("AI won the game!");
        end();
        playAgainButtonDisplayInline();
        
     }
     else{
         turn = "X";
         displayTurnMessage("It's your turn!");
     }
    }
    }
}
}

function isOver ()
{
    for (var i =1; i<=9; i++){
        if (document.getElementById(i).innerHTML == ""){
            return false;
        }
    }
    return true;
}

function startingPosition (cellNumver)
{
    document.getElementById(cellNumver).innerHTML = "";
}

function displayTurnMessage (message){
    document.getElementById("display_turn").innerHTML = message;
}

function playAgainButtonDisplayNone ()
{
    document.getElementById("playAgainButton").style.display = "none";
    document.getElementById("display_turn").style.marginTop = "300px";
}

function playAgainButtonDisplayInline ()
{
    document.getElementById("playAgainButton").style.display = "inline";
    document.getElementById("display_turn").style.marginTop = "100px";
}

function nextMove (cell){

    if (optionHasBeenChosen == false){
        isTypeChosen();
        return;
    }

    if (checkForWinner("O")){

        if (playerComputer == true){
            displayTurnMessage("AI won the game!");

        }
        else {
        displayTurnMessage("Congrachulation "+ "O" +" for wining the game!");
        }
        end();

        playAgainButtonDisplayInline();


    }
    
    else if (checkForWinner("X")){
        displayTurnMessage("Congrachulation "+ "X" +" for wining the game!");
        end();

        playAgainButtonDisplayInline();


    }

    else if (isOver()){
        displayTurnMessage("The game is over!");
        end();
        playAgainButtonDisplayInline();
    }

    else {

    if (playerVComputer == false) {
    if (winner != "NULL"){
        alert (winner +" already won the game!");
        end();
        playAgainButtonDisplayInline();
        
    }
    else if (cell.innerHTML==""){
        cell.innerHTML = turn;
        switchTurn();
    }
    else {
        alert ("This cell is already used!");
    }
    }
    else
    {
       
        if (checkForWinner("O")){
           
            if (playerComputer == true){
                alert("AI already won the game!");

            }
            else {
            alert("O already won the game!");
            }
            end();
            playAgainButtonDisplayInline();
        }

        else {

    //    alert("!!!!!!!!!!!!!!!!!!!!!!!!!");
       turn = "X";
       if (checkForWinner(turn)){
           
           if (turn == "O" && playerComputer == true){
            displayTurnMessage("AI won the game!");
           }
        else {
           displayTurnMessage("Congrachulation "+turn+" for wining the game!");
        }
           end();
           playAgainButtonDisplayInline();
       }

       else if (cell.innerHTML==""){
        cell.innerHTML = turn;

        if (checkForWinner("O")){
            
            if (turn == "O" && playerComputer == true){
                displayTurnMessage("AI won the game!");
               }
            else {
                displayTurnMessage("Congrachulation "+ "O"+" for wining the game!");
            }
            end();
            playAgainButtonDisplayInline();
    
        }

        else if (checkForWinner("X")){
            displayTurnMessage("Congrachulation "+ "X"+" for wining the game!");
            end();
            playAgainButtonDisplayInline();
    
        }

       else if (isOver()){
           displayTurnMessage("Game Over!");
           end();
           playAgainButtonDisplayInline();
       }
       
       else if (checkForWinner(turn)){
         if (turn == "O" && playerComputer == true){
            displayTurnMessage("AI won the game!");
           }
        else {
           displayTurnMessage("Congrachulation "+turn+" for wining the game!");
        }
        end();
        playAgainButtonDisplayInline();
       }
       else{
        turn = "O";
        nextMoveByComputer(turn);
       }
    }
    else {
        alert ("This cell is already used!");
    }
}
    }

}
}

function switchTurn ()
{
    if (checkForWinner("O")){

        if (playerComputer == true){
            displayTurnMessage("AI won the game!!");

        }
        else {
        displayTurnMessage("Congrachulation "+ "O"+" for wining the game!");
        }
        end();
           playAgainButtonDisplayInline();

    }

    else  if (checkForWinner("X")){
        displayTurnMessage("Congrachulation "+ "X"+" for wining the game!");
        end();
           playAgainButtonDisplayInline();

    }

    else if (isOver()){
        displayTurnMessage("The game is Over!");
        end();
        playAgainButtonDisplayInline();
        
    }

    else {
    if (checkForWinner(turn)){
        
        if (turn == "O" && playerComputer == true){
            displayTurnMessage("AI won the game!");

        }
        else {
        displayTurnMessage("Congrachulation "+turn+" for wining the game!");
        }
        end();
        playAgainButtonDisplayInline();
        winner = turn;
    }
    else if (turn == "X"){
        turn = "O";
        displayTurnMessage ("It's "+ turn + "'s turn");
    }
    else {
        turn = "X";
        displayTurnMessage ("It's "+ turn + "'s turn");
    }
}
}

function checkForWinner (player){
    var winOrNot = false;
    if (checkRowColAndDiagonal(1,2,3,player)||
    checkRowColAndDiagonal(4,5,6,player)||
    checkRowColAndDiagonal(7,8,9,player)||
    checkRowColAndDiagonal(1,4,7,player)||
    checkRowColAndDiagonal(2,5,8,player)||
    checkRowColAndDiagonal(3,6,9,player)||
    checkRowColAndDiagonal(1,5,9,player)||
    checkRowColAndDiagonal(3,5,7,player)){
       
        winOrNot = true;
    }
    return winOrNot;
}

function checkRowColAndDiagonal (x, y, z, player){
    return (getBox(x) == player && getBox(y) == player && getBox(z)==player);
}

function getBox (val){
    return document.getElementById(val).innerHTML;
}