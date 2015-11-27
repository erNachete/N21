function darclick(){
	for(var i=0;i<$("div").length;i++){
		$("div").click(abrir);
	}
}

function abrir(){
	window.open(this.id+".html",'_system');
}

window.onload = function(){
	darclick();
}