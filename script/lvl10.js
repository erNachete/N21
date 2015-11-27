function clicar(){
	$("#aceptar").click(confirmar);
}

function confirmar(){
	var comida=$("#respuesta").val();
	comida=comida.toLowerCase();
	if(comida=="daw"){
		var confirmar=confirm("perfecto! Asi me gusta! La contraseña para el proximo nivel es el nombre de uno de los personajes de el internado (principales).\n Dale a aceptar para continuar.");
		if(confirmar){
			window.open("index.html",'_system');
		}
	}else{
		alert("en serio?");
	}
}

window.onload = function(){
	clicar();
}
