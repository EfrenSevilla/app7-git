// JavaScript Document

$(document).ready(function(e) {
    document.addEventListemer('deviceready',function(){
	
	$("#izquierda").on('svipeleft',function(){
		navigator.notification.alert("Deslizo a la izquierda",function(){"Aplicacion7","Aceptar"});
		
});

$("#derecha").on('sviperight',function(){
	navigator.notification.confirm("¿Que quiere hacer?",function(opt){
		switch(opt)
		{
			case 1:
			navigator.notification.beep(1);
			break;
			
			case 2:
			navigator.notification.vibrar(1000);
			break;
			
		}
	},"Aplicacion7","Beep,Vibrar,Cancelar");
});
	},false);
});
