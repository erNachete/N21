function clicar(){
	$("#aceptar").click(confirmar);
}

function confirmar(){
	var comida=$("#respuesta").val();
	comida=comida.toLowerCase();
	if(comida=="12"){
		var confirmar=confirm("perfecto! La proxima contraseña hace referencia a una serie sobre unos amigos que se pasan la vida en un bar.\n Dale a aceptar para continuar.");
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
