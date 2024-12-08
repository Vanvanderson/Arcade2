let playerName = '';
let pickAnother;
let matchesPlayed = 0;
let wins = 0;
let winPercentage;
    //get player name
    playerName = prompt('Welcome to the Arcade! Please enter your name to get started: ');
        if(playerName == '' || playerName == null){
            while(playerName == '' || playerName == null){
                playerName = prompt('Please enter a valid name: ');
            }
        }
    //display player name
    alert(`Hi ${playerName}! Let's play!!`);
bearNinjaHunter = () =>{
    let rounds = 1;
    let playing = true;
    while(playing == true){
        matchesPlayed++;
        //define match variables
        let countDown = 3;
        let matchCondition = 2;
        let matchOutcomes = ['Win','Lose','Tied'];
        let choices = ['bear','ninja','hunter'];
        //get computer choice
        let computerChoice = Math.floor(Math.random() * 3);
        computerChoice = choices[computerChoice]
        //get player choice
        let playerChoice = prompt('Who are you: Bear, Ninja, or Hunter? ');
        if(playerChoice == null){
            playerChoice = 'nothing'
        }
        if(!choices.includes(playerChoice.toLowerCase())){
            while(!choices.includes(playerChoice.toLowerCase())){
                playerChoice = prompt('Please enter a valid choice (Bear, Ninja or Hunter): ')
                if(playerChoice == null){
                playerChoice = 'nothing'
                } else{
                    playerChoice = playerChoice
                }
            }
        }else{
            playerChoice = playerChoice
        }
        alert(`${playerName} you chose ${playerChoice}!`);
        //game logic
        switch(computerChoice.toLowerCase()){
            case choices[0].toLowerCase():
                switch(playerChoice.toLowerCase()){
                    case 'ninja':
                        matchCondition = 1
                        break;
                    case 'hunter':
                        matchCondition = 0
                        wins++
                        break;
            }
            break;
            case choices[1].toLowerCase():
                switch(playerChoice.toLowerCase()){
                    case 'bear':
                        matchCondition = 0
                        wins++
                        break;
                    case 'hunter':
                        matchCondition = 1
                        break;
            }
            break;
            case choices[2].toLowerCase():
                switch(playerChoice.toLowerCase()){
                case 'bear':
                    matchCondition = 1
                    break;
                case 'ninja':
                    matchCondition = 0
                    wins++
                    break;
            break;
            }
        }
    alert(`The computer chose ${computerChoice}!` + ' ' + `You ${matchOutcomes[matchCondition]}!!`)
    keepPlaying = prompt('Would you like to play again (y/n)?')
    if(keepPlaying == 'n'){
        alert(`You played ${rounds} rounds, and you won ${wins} times.`)
        playing = false;
    } else{
        playing = true;
    }
    rounds++
    }
    checkReloadPage()
}
function guessing(){
    let keepPlaying = true;
    let roundNumber = 1;
    alert('Round: ' + roundNumber);
    while(keepPlaying == true){
        matchesPlayed++;
        let randomNumber = Math.floor(Math.random() * 10) + 1;
        let correct = false;
        let guesses = 0;
        let guess = prompt('Round ' + roundNumber + ': ' + 'Guess a number between 1 and 10');
        while(correct == false){
            if(guess == randomNumber){
                correct = true
            } else{
                if(guess < randomNumber){
                    guess = prompt(`Guess was too low, guess again.`)
                } else{
                    guess = prompt(`Guess was too high, guess again.`)
                }
            }
            guesses ++;        
        }
        let playAgain = prompt(guesses > 1 ? 'You guessed it in ' + guesses + ' guesses! Play again (y/n)?' : 'You guessed it in ' + guesses + ' guess, Amazing! Play again (y/n)?');
        if(playAgain.toLowerCase() == 'n'){
            alert(roundNumber > 1 ? `You played ${roundNumber} rounds. Thanks for playing!` : `You played ${roundNumber} round. Thanks for playing!`)
            keepPlaying = false;
        } else{
            roundNumber ++;
            alert('Round: ' + roundNumber);
            keepPlaying = true;
        }
    }
    checkReloadPage()
}
const magicBall = function(){
    matchesPlayed++
    let asking = true;
    let answers = ["It is certain", "Most likely", "Yes", "Reply hazy, try again", "Ask again later", "My reply is no", "My sources say no", "Very doubtful"];
    while(asking == true){
        prompt('I give wisdom in the form of yes or no. Ask any questions may you posses.');
        let rand = Math.floor(Math.random() * 8);
        alert(`${answers[rand]}`);
        playAgain = prompt('Ask another quesiton (y/n)?');
        playAgain.toLowerCase() == 'n' ? asking = false : asking = true;
        if(asking == false){
            alert('You have done well to seek my wisdom, may your endeavours be blessed.')
        } else{
        }
    }
    checkReloadPage()
}
function checkReloadPage(){
    pickAnother = prompt('Would you like to pick another game to play? y/n')
    if(pickAnother != 'y' && pickAnother != 'n'){
        while(pickAnother != 'y' && pickAnother != 'n'){
            pickAnother = prompt('Please enter a valid answer (y/n): ');
        }
    }else if(pickAnother != 'y' && pickAnother != 'n'){
    }
    if (pickAnother == "n") {
        winPercentage = (100 *wins) / matchesPlayed;
        // Replace the entire HTML with the message
        document.body.innerHTML = `<h1 style='margin: 1rem'>Goodbye!</h1>
        <div class="tab">
        <table style="width:50%">
        <tr>
            <th>Name</th>
            <th>Matches Played</th>
            <th>Win Percentage</th>
        </tr>
        <tr>
            <td>${playerName}</td>
            <td>${matchesPlayed}</td>
            <td>${winPercentage}%</td>
        </tr>
        </table>
        </div>
        <br>
        <p>Thank you for playing some of the games I made! Please come back again soon</p>
        <footer style='text-align: center; font-family: Arial, sans-serif;'>Please press F5 to reload the page</footer>`;
    }
}