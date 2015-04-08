	$(document).ready(function(){
		$('#liInicio').on("click",function(){
			$('#inicio').animatescroll({scrollSpeed:2000,easing:'easeOutBounce'});
		});
		$('#liTrabajos').on("click",function(){
			$('#paginasDesarrolladas').animatescroll({scrollSpeed:2000,easing:'easeOutBounce'});
		});
		$('#liHablemos').on("click",function(){
			$('#hablemos').animatescroll({scrollSpeed:2000,easing:'easeOutBounce'});
		});
		$('#liInicio').mouseover(function(){
			$('#liInicio').css('color','#3CBBFF');
			$('#liInicio').html('▶');
		});
		$('#liInicio').mouseout(function(){
			$('#liInicio').css('color','#666');
			$('#liInicio').html('■');
		});
		$('#liTrabajos').mouseover(function(){
			$('#liTrabajos').css('color','#3CBBFF');
			$('#liTrabajos').html('▶');
		});
		$('#liTrabajos').mouseout(function(){
			$('#liTrabajos').css('color','#666');
			$('#liTrabajos').html('■');
		});

		$('#liHablemos').mouseover(function(){
			$('#liHablemos').css('color','#3CBBFF');
			$('#liHablemos').html('▶');
		});
		$('#liHablemos').mouseout(function(){
			$('#liHablemos').css('color','#666');
			$('#liHablemos').html('■');
		});

		$('#inicio').on("mouseover",function(){
			$('#liInicio').css('color','#3CBBFF');
			$('#liInicio').html('▶');
		});

		$('#inicio').on("mouseout",function(){
			$('#liInicio').css('color','#666');
			$('#liInicio').html('■');
		});
		$('#paginasDesarrolladas').on("mouseover",function(){
			$('#liTrabajos').css('color','#3CBBFF');
			$('#liTrabajos').html('▶');
		});
		$('#paginasDesarrolladas').on("mouseout",function(){
			$('#liTrabajos').css('color','#666');
			$('#liTrabajos').html('■');
		});
		$('#hablemos').on("mouseover",function(){
			$('#liHablemos').css('color','#3CBBFF');
			$('#liHablemos').html('▶');
		});
		$('#hablemos').on("mouseout",function(){
			$('#liHablemos').css('color','#666');
			$('#liHablemos').html('■');
		});
		$('#enviarFormulario').on("click",enviarFormulario);
		$('.icon-facebook').on('click',function(){ window.location.replace("http://www.facebook.com/xstockx"); });
		$('.icon-twitter').on('click',function(){ window.location.replace("http://www.twitter.com/i_stock"); });
		$('.icon-linkedin').on('click',function(){ window.location.replace("https://www.linkedin.com/in/javierrain"); });
	});
function redirigirPagina(web)
{
	if(web==1)
	{
		$('#hablemos').animatescroll({scrollSpeed:2000,easing:'easeOutBounce'});
	}
	else
	{
		window.open(web,'_blank');
		//window.location.replace(web)
	}
}

function enviarFormulario()

{
	var estado = $('#enviarFormulario').val();
	$('#respuesta').removeClass('animated flipInY');
	if(estado == 0){
	var usuarioNombre = $('#nombreUsuario').val();
	var usuarioCorreo = $('#correoUsuario').val();
	var mensajeUsuario = $('#mensajeUsuario').val();
	var ajax_Data = {'nombreUsuario': usuarioNombre ,'correoUsuario' : usuarioCorreo, 'mensajeUsuario' : mensajeUsuario };
	console.log(ajax_Data);
	$.ajax({
		type : "post", 
		url : "enviarCorreo.php",  
		dataType : 'json',
		data : ajax_Data,
		success : function(respuesta){

				$('#respuesta').html(respuesta["Mensaje"]);
				$('#respuesta').addClass('animated flipInY');
				$('#enviarFormulario').val(respuesta["codigo"]);
				

		},
		error : function(){
				$('#respuesta').html('Presentamos un problema en nuestro servidor , prueba en 5 minutos - Por favor');
		}

	});}
	else
	{
		$('#respuesta').html('Tu correo ya fue enviado - Gracias');
		$('#respuesta').addClass('animated wobble');
	}
}