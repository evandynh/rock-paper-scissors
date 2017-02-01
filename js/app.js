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
    if(computerChoice === "paper") {
      $('h2').text("Computer Win!")
      computerScore++
      $('#computerScore').html(computerScore)
    } else {
      $('h2').text("You Win!")
      userScore++
      $('#userScore').html(userScore)
    }
  } else if (userChoice === "paper") {
    if(computerChoice === "rock"){
      $('h2').text("You Win!")
      userScore++
      $('#userScore').html(userScore)
    } else {
      $('h2').text("Computer Win!")
      computerScore++
      $('#computerScore').html(computerScore)
    }
  } else if (userChoice === "scissors") {
    if(computerChoice === "rock"){
      $('h2').text("Computer Win!")
      computerScore++
      $('#computerScore').html(computerScore)
    } else {
      $('h2').text("You Win!")
      userScore++
      $('#userScore').html(userScore)
    }
  }
}


/////Scoreboard logic/////
var userScore = 0
var computerScore = 0

// $('#userScore').html(userScore)
// $('#computerScore').html(computerScore)


//////////Game logic for reset game///////////////
$('#reset-game').click(function(){
  $('#comp').css('background-image', "url(./assets/compMove.png)")
  $('#user').css('background-image', "url(./assets/userMove.png)")
  $('h2').text("")
})

///////Game logic for scoreboard reset////////
$('#reset-score').click(function(){
  $('#userScore').html(0)
  $('#computerScore').html(0)
})
