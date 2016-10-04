
console.log('have fun !');

$("button").click(function(){

	var personne = {};

	var inputs = $("input");

	for ( var i = 0; i < inputs.length; i++ ) {
		var name = $(inputs[i]).attr("name");
		personne[name] = $(inputs[i]).val();
	}


	$("#username").html(personne[username] + " " + personne.last_name);



});