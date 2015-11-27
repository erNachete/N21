var contador=0;

function clicar(){
	$("#aceptar").click(confirmar);
}

function confirmar(){
	var adivinanza=$("#respuesta").val();
	adivinanza=adivinanza.toLowerCase();
	if(contador==0){
		if(adivinanza=="10"){
			$("#pregunta").html("Que nota crees tu que vas a savar?");
			contador++;
		}else{
			alert("uoooooo, sabes que iñaki es mas optimista! vuelve a intentarlo");
		}
	}else if(contador==1){
		if(adivinanza=="0"){
			$("#pregunta").html("Que nota vas a sacar realemte?");
			contador++;
		}else{
			alert("uoooooo, sabes que eres una pesimista ;P! vuelve a intentarlo");
		}
	}else if(contador==2){
		if(adivinanza=="10"){
			var confirmar=confirm("perfecto! Asi me gusta! La contraseña para el proximo nivel es el nombre del 10 doctor en doctor who.\n Dale a aceptar para continuar.");
			if(confirmar){
				window.open("index.html",'_system');
			}
		}else{
			alert("uoooooo, estas segura? ten en cuenta quien ha hecho este juego? ;P vuelve a intentarlo");
		}
	}
}

window.onload = function(){
	clicar();
}
