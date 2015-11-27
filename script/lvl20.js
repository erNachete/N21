function clicar(){
	$("#aceptar").click(confirmar);
}

function confirmar(){
	var comida=$("#respuesta").val();
	comida=comida.toLowerCase();
	if(comida=="mad mansion"){
		var confirmar=confirm("yujuuu, vamos a pasarlo genial! la proxima contraseña es el numero del episodio que vamos a jugar.\n Dale a aceptar para continuar.");
		if(confirmar){
			window.open("index.html",'_system');
		}
	}else{
		alert("en serio?");
	}
}

window.onload = function(){
	clicar();
}
