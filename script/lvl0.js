var horaactual;

function hora(){
	var d = new Date();
	horaactual = d.getHours();
}

function clicar(){
	$("#aceptar").click(confirmar);
}

function confirmar(){
	var hora=$("#respuesta").val();
	if(hora==horaactual){
		var confirmar=confirm("perfecto! Asi me gusta! La contraseña para el proximo nivel es el mes de tu cumpleaños.\n Dale a aceptar para continuar.");
		if(confirmar){
			window.open("index.html",'_system');
		}
	}else{
		alert("uoooooo, vuelve a intentarlo");
	}
}

window.onload = function(){
	hora();
	clicar();
}