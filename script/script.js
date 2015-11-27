var horaactual;

function hora(){
	var d = new Date();
	horaactual = parseInt(d.getHours());
}

function darclick(){
	for(var i=0;i<=horaactual;i++){
		$("#lvl"+i).css("visibility","visible");
		$("#lvl"+i).click(abrir);
	}
}

function abrir(){
	var contrasena = prompt("Introduzca la contraseña señorita nerea", "");
	var codigo = parseInt((this.id).replace( /^\D+/g, ''));
	var respuesta;
	
	switch(codigo){
		case 0: respuesta="21";break;
		case 1: respuesta="11";break;
	}
	
	for(var i=0;i<$("#lvl"+codigo).length;i++){
		if(contrasena==respuesta){
			window.open(this.id+".html",'_system');
		}else{
			alert("Listillaaaaa, sigue las instruccioens :P");
		}
	}
}

window.onload = function(){
	hora();
	darclick();
}