var contador=0;

function clicar(){
	$("#aceptar").click(confirmar);
	$("#cancelar").click(cancelar);
	$("#cancelar2").click(cancelar);
}

function cancelar(){
	alert("En serio? No mientas anda...");
}

function confirmar(){
	var confirmar=confirm("perfecto! Asi me gusta! La contraseña para el proximo nivel es el curso en el que estas en la uni.\n Dale a aceptar para continuar.");
	if(confirmar){
		window.open("index.html",'_system');
	}else{
		alert("uoooooo, vuelve a intentarlo");
	}
}

window.onload = function(){
	clicar();
}
