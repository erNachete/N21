function clicar(){
	$("#aceptar").click(confirmar);
}

function confirmar(){
	var confirmar=confirm("perfecto! Asi me gusta! Espera a que el ya pesadito iñaki te envie la contraseña, siempre y cuando la foto sea lo suficientemente ñoña.\n Dale a aceptar para continuar.");
	if(confirmar){
		window.open("index.html",'_system');
	}else{
		alert("uoooooo, vuelve a intentarlo");
	}
}

window.onload = function(){
	clicar();
}
