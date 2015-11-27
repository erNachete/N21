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
	
	contrasena=contrasena.toLowerCase();
	
	switch(codigo){
		case 0: respuesta="21";break;
		case 1: respuesta="11";break;
		case 2: respuesta="udane";break;
		case 3: respuesta="22";break;
		case 4: respuesta="martin";break;
		case 5: respuesta="3";break;
		case 6: respuesta="2";break;
		case 7: respuesta="7";break;
		case 8: respuesta="mz";break;
		case 9: respuesta="david tennant";break;
		case 10:respuesta="chococrispi";break;
		case 11:respuesta="marcos";break;
		case 12:respuesta="4";break;
		case 13:respuesta="1";break;
		case 14:respuesta="italia";break;
		case 15:respuesta="friends";break;
		case 16:respuesta="marauri";break;
		case 17:respuesta="gabon";break;
		case 18:respuesta="ilazki";break;
		case 19:respuesta="ñoñis";break;
		case 20:respuesta="curro";$("#lvl15").css("visibility","hidden");break;break;
		case 21:respuesta="mad mansion";break;
		case 22:respuesta="tarta";break;
		case 23:respuesta="sensual";$("#lvl24").css("visibility","visible");break;
		case 24:respuesta="hot";break;
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
