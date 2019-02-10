
var age= Number(prompt("Please Enter your age"));  // Prompt returns string, use Number to change it into number
if(age<0)
	{
		alert("Error! Age cannot be less than zero")
	}
 if (age %2 !==0 && age!==21)
	{
		alert("Age is Odd")
	}	
 if (age===21)
	{
		alert("Happy 21st Birthday! drinks on house")
	}
 if (age % Math.sqrt(age)===0)
 	{
 		alert("Age is perfect square")
 	}