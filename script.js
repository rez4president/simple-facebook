
var database = [
			{
				username: "Anas",
				password: "supersecret",
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

var userNamePrompt = prompt("What is your username?", "");
var passwordPrompt = prompt("What is your password?");

function signIn(user, pass) {
	if (user === database[0].username && database[0].password) {
		console.log(newsfeed);
	} else {
		alert("Sorry, You entered the wrong credentials")
	}
}

signIn(userNamePrompt, passwordPrompt);