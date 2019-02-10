var todos=[];
window.setTimeout(function() 
{
	var input =prompt("What would you like to do?");	
	while(input!=="quit")
	{
		if(input=="list")
		{
			console.log(todos);
		}
		else if(input=="new")
		{
			var new_list =prompt("Enter new task");
			todos.push(new_list);
		}
	 	input =prompt("What would you like to do?");
	}
	console.log("Quit successful");	
}, 500);