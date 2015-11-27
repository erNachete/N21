function clicar(){
	$("#aceptar").click(confirmar);
}

function confirmar(){
	var confirmar=confirm("perfecto! Asi me gusta! Dale a aceptar para continuar y espera a que iñaki te diga la contraseña por whats.\n Dale a aceptar para continuar.");
	if(confirmar){
		window.open("index.html",'_system');
	}else{
		alert("uoooooo, vuelve a intentarlo");
	}
}

window.onload = function(){
	clicar();
}