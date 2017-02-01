////////Makes input field interactive/////////
$('form').submit(function(event){
  event.preventDefault()
  var user = $('#name').val()
  $('#message').text("Welcome, " + user + " !")
  $('form').html("<h2 class='win-message'></h2>")
  startGame()
});
///////////Game logic to start game & user choice///////////
var userChoice

var rock = $('.rock').css('background-image')
var paper = $('.paper').css('background-image')
var scissors = $('.scissors').css('background-image')

function startGame(){
  $('#rock').click(function(){
    $('#user').css('background-image', rock)
    userChoice = "rock"
    computerChoice = randomChoice()
    getWinner()
  })
  $('#paper').click(function(){
    var paper = $('.paper').css('background-image')
    $('#user').css('background-image', paper)
    userChoice = "paper"
    computerChoice = randomChoice()
    getWinner()
  })
  $('#scissors').click(function(){
    $('#user').css('background-image', scissors)
    userChoice = "scissors"
    computerChoice = randomChoice()
    getWinner()
  })
}
/////////Game logic for computer choice///////////
var computerChoice

function randomChoice() {
  if (Math.random() < .34) {
    $('#comp').css('background-image', rock)
    return "rock"
  } else if (Math.random() < .67) {
    $('#comp').css('background-image', paper)
    return "paper"
  } else {
    $('#comp').css('background-image', scissors)
    return "scissors"
  }
}
///////////Checks for winner & adds point to score board///////////
function getWinner(){
  if(userChoice === computerChoice){
    $('h2').text("It's a tie")
  } else if(userChoice === "rock") {
    computerChoice === "paper" ?  $('h2').text("Paper Wins!") : $('h2').text("Rock Wins!")
  } else if (userChoice === "paper") {
    computerChoice === "rock" ?  $('h2').text("Paper Wins!") : $('h2').text("Scissors Wins!")
  } else if (userChoice === "scissors") {
    computerChoice === "rock" ?  $('h2').text("Rock Wins!") : $('h2').text("Scissors Wins!")
  }
}
