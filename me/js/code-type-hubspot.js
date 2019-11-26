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

	.tiType(" I'm a quick learner with a passion for creating elegant web experiences that engage with users.")
	.tiBreak()
	.tiType("* ")
	.tiBreak()
	.tiType("* I believe I could offer the HubSpot engineering team a set of solid fundamental CS skills, and an ability to dive into new projects and get things done.")
	.tiBreak()
	.tiType("* ")
	.tiBreak()
	.tiType("* I'm excited at the prospect of shipping great code that improves the experience of customers and fellow employees.");
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