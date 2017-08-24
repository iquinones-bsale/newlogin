//animaciones 
	$(window).load(function(){
		setTimeout(function(){
			$('.publi').removeClass('none').addClass('animated fadeIn').one(
			'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				$(".info").removeClass('none').addClass(' animated fadeInUp');
			});
		},200);
	});
	//detecta ancho de la pag y cambia el mensaje de ayuda
	$(document).ready(function(){
		var mediaquery = window.matchMedia("(max-width: 767px)"); // detecta el tamaño de la pantalla segun media queries
		function msj_xPantalla(){
			if (mediaquery.matches) { // si la pantalla es menor de 767px 
				$(".msj").remove();
				$(".ayuda").append("<div class='msj mobile'><a href='tel: +562 2938 1115'>Si tienes consultas llama al </br><strong>+562 2938 1115</strong></a></div>")
			}else{
				$(".msj").remove(); // si la pantalla es mayor a 767
				$(".ayuda").append("<div class='msj'><small>Estamos para ayudarte, si tienes consultas llama al <strong>+562 2938 1115</strong></small></div>")
			}
		}
		msj_xPantalla();
		$(window).resize(function(){
			msj_xPantalla();
		})
		
	});