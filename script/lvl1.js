function clicar(){
	$("#aceptar").click(confirmar);
}

function confirmar(){
	var comida=$("#respuesta").val();
	comida=comida.toLowerCase();
	if(comida=="chocolate"){
		var confirmar=confirm("perfecto! Asi me gusta! La contraseña para el proximo nivel es el nombre de tu mejor amiga.\n Dale a aceptar para continuar.");
		if(confirmar){
			window.open("index.html",'_system');
		}
	}else{
		alert("uoooooo, vuelve a intentarlo");
	}
}

window.onload = function(){
	clicar();
}