function isEven(num){
	// method 1-->
	// if (num % 2 === 0){
	// 	return true;
	// }
	// else 
	// 	return false;

	// method 2-->
	return num % 2 === 0
}

function factorial(num){
	if (num === 0)
		return 1;
	else 
		return num = num * factorial(num-1);
}

function kebabToSnakes(str){
	if (str.indexOf("-") !== -1){
		return str.replace("-", "_");
	}
	else
		return str;
}