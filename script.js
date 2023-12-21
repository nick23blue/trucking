
new WOW().init();
// Facts counter
$('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000
});

function contact(e){
	var name = document.getElementById("name");
	var email = document.getElementById("email");
	var subject = document.getElementById("subject");
	var message = document.getElementById("message");

	
	if(name.value !="" && email.value !="" && subject.value !="" && message.value!=="" ){
		
	alert("Thank You We will get back with you soon!");
	}else{
		alert("You are missing data");
		e.preventDefault();
	}
}

function quote(e){
	var name = document.getElementById("name");
	var email = document.getElementById("email");
	var pickup = document.getElementById("pickup");
	var dropoff = document.getElementById("dropoff");
	var message = document.getElementById("message");

	
	if(name.value !="" && email.value !="" && pickup.value !="" && dropoff.value !="" && message.value!=="" ){
		
	alert("Thank You We will get back with you soon!");
	}else{
		alert("You are missing data");
		e.preventDefault();
	}
}