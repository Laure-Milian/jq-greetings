
console.log('have fun !');

$("button").click(function(){

	var personne = {};

	var inputs = $("input");
	console.log(inputs);

	for ( var i = 0; i < inputs.length; i++ ) {
		var name = $(inputs[i]).attr("name");
		personne[name] = $(inputs[i]).val();
	}

	console.log(personne);



});