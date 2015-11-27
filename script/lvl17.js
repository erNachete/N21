function clicar(){
	$("#aceptar").click(confirmar);
}

function confirmar(){
	var comida=$("#respuesta").val();
	comida=comida.toLowerCase();
	if(comida=="bobis"){
		var confirmar=confirm("jajaja di que si! La proxima contraseña tiene que ver con donde se encuentra iñaki ahora.\n Dale a aceptar para continuar.");
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
