

$("button").click(function() {
	var obj = {};

	var inputs = $("input");

	var len = inputs.length;
	for (i = 0; i < len; i++) {
		var valeur = (inputs[i]).name;
		console.log(valeur);
		obj[valeur] = $(inputs[i]).val();
	}

	console.log(obj);

	$("#username").html(obj.first_name + " " +obj.last_name);


});

//récupérer attributs name de chaque input et les attribuer à une variable

//attribuer valeur de chaque input à la bonne key dans objet

//imprimer le nom dans titre