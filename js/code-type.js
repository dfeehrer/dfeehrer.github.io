var doneTyping = false;
var firstString = "*   Alright, let's talk code...";
function type(){

	$('#java').typeIt({
     speed: 30,
     autoStart: false,
	})
	.tiPause(600)
	.tiType(firstString)
	.tiPause(1000)
	.tiDelete(firstString.length - 1)

	.tiType(" I'm a quick learner with a passion for creating software solutions that improve efficiency in every organization I'm a part of.")
	.tiBreak()
	.tiType("* ")
	.tiBreak()
	.tiType("* HubSpot's committment to the personal development of its employees stands out to me, and I believe an internship here would be the perfect opportunity for me to learn and grow as a software engineer.")
	.tiBreak()
	.tiType("* ")
	.tiBreak()
	.tiType("* I'm excited at the prospect of shipping REAL code and taking on REAL projects that improve the experience of customers and fellow employees.")
	.tiBreak()
	.tiType("* ")
	.tiBreak()
	.tiType("* I believe I could offer the HubSpot engineering team a set of solid fundamental CS skills, and an ability to dive into new projects and get things done.");
	doneTyping = true;
}

/*
     strings: [
     "I've have done a fair amount of systems programming..., but",
     "" 
     "My current focus outside the classroom is on full-stack web development. ",
     "I believe a HubSpot internship would be the perfect place for me to gain more experience..."
     ],


	.tiType("* I've done a fair amount of systems programming in C, and hundreds of hours programming microcontrollers and working on Internet of Things projects")
	.tiBreak()

     */