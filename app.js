console.log('have fun !');

$("button").click(function(){
	var personne = {};
	personne.username = $("#first_name").val();
	personne.last_name = $("#last_name").val();
	personne.city = $("#city").val(); 

	console.log(personne);

	$("#username").html(personne.username + " " + personne.last_name);

});