var contador=0;

function clicar(){
	$("#aceptar").click(confirmar);
	$("#cancelar").click(cancelar);
}

function confirmar(){
	alert("En serio? No mientas anda...");
}

function cancelar(){
	var confirmar=confirm("perfecto! Asi me gusta! La contraseña para el proximo nivel es la hora a la que te dije egunon el viernes.\n Dale a aceptar para continuar.");
	if(confirmar){
		window.open("index.html",'_system');
	}else{
		alert("uoooooo, vuelve a intentarlo");
	}
}

window.onload = function(){
	clicar();
}
