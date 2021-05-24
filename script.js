
var database = [
			{
				username: "Anas",
				password: "supersecret",
			},

			{
				username: "Layan",
				password: "123",
			},

			{
				username: "Lareen",
				password: "456",
			},




		];

var  newsfeed = [
	{
		username: "Kareem",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy tough!"
	}

];		

/*WE USE FOR LOOP TO LOOP THROUGH THE DATABASE 
 TO CHECK EACH LOGIN CREDENTIALTO SEE IF IT MATCHES TO
 WHAT THE USER ENTERS!
 SO WE CREATE A FUNCTION AND PASS TWO PARAMETERS USERNAME AND PASSWORD AND WE CHECK IF THE USERNAME AND PASSWORD BOTH MATCH THE USER, 
 WE LET THEM ACCESS THE NEWSFEED AFTER THEY SUCCESSFULLY SIGN IN!*/

function isUserValid(username, password) {
	for(var i = 0; i < database.length; i++) {
		if (database[i].username === username && database[i].password === password) {
			return true;
		}
	}
	return false;
}

function signIn(username, password) {
	if(isUserValid(username, password)) {
		console.log(newsfeed);
	} else {
		alert("Sorry, You entered the wrong credentials")
	}
}


var userNamePrompt = prompt("What is your username?", "");
var passwordPrompt = prompt("What is your password?");


/*Always callllll the function!!!!!!*/
signIn(userNamePrompt, passwordPrompt);