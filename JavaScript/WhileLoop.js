console.log("Print numbers between -10 and 19")
var n = -10;
while(n >= -10 && n <= 19)
	{
		console.log(n);
		n++;
	}

console.log("Print all even numbers between 10 and 40")
var n = 10;
while(n>=10 && n<=40)
	{
		if(n%2===0)
			{
				console.log(n);
			}	
		n++;
	}


console.log("Print all odd numbers between 300 and 333")
var n = 300;
while(n>=300 && n<=333 )
	{
		if(n%2===1)
			{
				console.log(n);
			}
		n++;
	}	

console.log("Print all  numbers divisible by 5 and 3 between 5 and 50")
var n = 5;
while(n>=5 && n<=50)
	{
		if(n%5===0 && n%3===0)
			{
				console.log(n);
			}
			n++;
	}		