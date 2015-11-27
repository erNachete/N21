var contador=0;

function clicar(){
	$("#aceptar").click(confirmar);
}

function confirmar(){
	var adivinanza=$("#respuesta").val();
	adivinanza=adivinanza.toLowerCase();
	if(contador==0){
		if(adivinanza=="pato"){
			$("#pregunta").html("Lleva años en el mar y aún no sabe nadar");
			contador++;
		}else{
			alert("uoooooo, vuelve a intentarlo");
		}
	}else if(contador==1){
		if(adivinanza=="arena"){
			$("#pregunta").html("Me abrigo con paños blancos, luzco blanca cabellera, y por mi causa llora hasta la misma cocinera ¿Qué soy?");
			contador++;
		}else{
			alert("uoooooo, vuelve a intentarlo");
		}
	}else if(contador==2){
		if(adivinanza=="cebolla"){
			var confirmar=confirm("perfecto! Asi me gusta! La contraseña para el proximo nivel es tu segundo apellido.\n Dale a aceptar para continuar.");
			if(confirmar){
				window.open("index.html",'_system');
			}
		}else{
			alert("uoooooo, vuelve a intentarlo");
		}
	}
}

window.onload = function(){
	clicar();
}