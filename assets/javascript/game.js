  //re-populated random # between 19-120
  $( document ).ready(function(){

  var random=Math.floor(Math.random()*101+19);
  
  //link to html
  $("#randomNumber").text(random);

  //crystals variable to have a random # between 1-12
  var crystals= Math.floor(Math.random()*11+1);

  //total, wins and losses variables
  var total= 0; 
  var wins= 0;
  var losses = 0;
  var score =0;

  //link to html
  $("#totalWins").text(wins);
  $("#totalLosses").text(losses);
  $("totalScore").text(score);

//resets the game
function reset(){
      random=Math.floor(Math.random()*101+19);
      $("#randomNumber").text(random);
      crystals= Math.floor(Math.random()*11+1);
      totalScore= 0;
      $("#score").text(totalScore);
};

//tally # of wins
  function winner(){
    alert ("You got it!");
    wins++; 
    $("#totalWins").text(wins);
    reset();
  };

//tally # of losses
  function lost(){
    alert ("Try again!"),
    losses++,
    $("#totalLosses").text(losses),
    reset();
  };

  //sets up click for jewels
$("#crystal").on("click", function(){
    totalScore = totalScore + crystals;
$("#score").text(totalScore); 
          //sets win/lose conditions
        if (totalScore == random){
          winner();
        } else if ( totalScore > random){
          lost();
        }  

  });   
}); 