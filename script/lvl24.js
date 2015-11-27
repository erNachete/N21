function clicar(){
	$("#aceptar").click(confirmar);
}

function confirmar(){
	var confirmar=confirm("Has acertado? Te ha gustado?.\n Dale a aceptar para continuar.");
	if(confirmar){
		window.open("fin.html",'_system');
	}else{
		alert("uoooooo, vuelve a intentarlo");
	}
}

window.onload = function(){
	clicar();
}
