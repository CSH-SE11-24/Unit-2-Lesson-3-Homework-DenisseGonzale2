// In this homework, you will be building a "hangman" game. 
// Create a new variable and put a random word in
 let word= "cat "

// Create a new variable called attempts and set it to 0
let attempts= 0

// Prompt the user to guess a letter
 let guesses= prompt("Guess a letter")

// Write an if statement that uses the includes() method to check if the letter is in the word -- Google the syntax!
// Tell the user if their letter is in the word
 if (word.includes(guesses)){
	 console.log("Yes! you got one letter")
 }else{
 console.log("wrong! guess again.")
 }

// Prompt the user to guess the word 
 let wordGuess = prompt("Guess the word!")


// Write an if/else statement that checks if the user guess is equal to your word and tells the user

if(wordGuess == word){
	console.log("you're correct")
}else{
	console.log("wrong! guess again.")
    attempts++
}


while(wordGuess !== word){
	guesses = prompt("Guess another letter")
	if(word.includes(guesses)){
		console.log("Congrats the letter" + guesses + " is in the word")
	}else{
	console.log("Incorrect! that letter isn't in the word")
	}

   wordGuess = prompt("Guess another word!!")
 if(wordGuess === word){
	 console.log("You got it!")
}else{
	console.log("Incorrect! that isn't the word")
 }
	 attempts++
}

// After the while loop, print "It took (attempts) attempts" 
console.log("It took"+ attempts + "attempts")
