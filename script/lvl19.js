function clicar(){
	$("#aceptar").click(confirmar);
}

function confirmar(){
	var confirmar=confirm("Hola soy curro! esa es la proxima, curro.\n Dale a aceptar para continuar.");
	if(confirmar){
		window.open("index.html",'_system');
	}else{
		alert("uoooooo, vuelve a intentarlo");
	}
}

window.onload = function(){
	clicar();
}
