var todos = [];
window.setTimeout(function() 
{
	var input = prompt("What would you like to do?");
	while(input!=="quit")
	{
		if(input=="new")
		{
			var new_list = prompt("Enter new task");
			todos.push(new_list);
			console.log(new_list + "  added to the list");
		}
		else if(input=="list")
		{	
			console.log("**********")
			todos.forEach(function(list,i){
			console.log(i+": "+list);	
			})
			console.log("**********")
		}
		else if(input=="delete")
		{
			var index =prompt("Enter index of todo to be deleted")
			todo.splice(index,1);
			console.log("Todo deleted");
		}
		input = prompt("What would you like to do?");
	}
	console.log("Quit successful");	
}, 500);