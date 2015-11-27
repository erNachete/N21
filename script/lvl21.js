function clicar(){
	$("#aceptar").click(confirmar);
}

function confirmar(){
	var comida=$("#respuesta").val();
	comida=comida.toLowerCase();
	if(comida=="casa"){
		var confirmar=confirm("La proxima contraseña es el postre.\n Dale a aceptar para continuar.");
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
