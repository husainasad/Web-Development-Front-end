var key=5
var guess= Number(prompt("Guess a Number"));
if(guess===key){
	alert("Woohoo! You guessed it right")
}
else if(guess<key){
	alert("Too Low")
}
else if(guess>key){
	alert("Too High")
}
