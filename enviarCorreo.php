<?php 
	$nombreUsuario = $_POST["nombreUsuario"];
	$correoUsuario = $_POST["correoUsuario"];
	$mensaje = $_POST["mensajeUsuario"];
	$nombreUsuario = trim($nombreUsuario);
	$correoUsuario = trim($correoUsuario);
	$correoValido = strstr($correoUsuario,"@");
	$usuarioValido = strstr($nombreUsuario,"@");
	if($nombreUsuario == "" or $correoUsuario == "")
	{
		$a = array('Mensaje'=>'Debes completar ambos campos - Por favor','codigo'=>0);
		echo json_encode($a);
	}
	else if($correoValido == "" or $usuarioValido != "")
	{
		$a = array('Mensaje'=>'Datos invalidos , favor ingresa tus datos correctamente - Por favor','codigo'=>0);
		echo json_encode($a);
	}
	else
	{
		$para  = 'javier@rains.cl'; 
		$titulo = 'Formulario de rains.cl';
		$mensaje = '
				<html>
				<head>
				  <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" />
				  <title></title>
				</head>
				<body>
					<header> <h1> Correo enviado desde Nexo-it.cl</h1></header>
					<div class="row">
						<div class="col-md-6"><strong>Nombre</strong></div>
						<div class="col-md-6">'.$nombreUsuario.'</div>
					</div>
					<div class="row">
						<div class="col-md-6"><strong>Correo usuario</strong></div>
						<div class="col-md-6">'.$correoUsuario.'</div>
					</div>
					<p></p>
					<div class="row">
						<div class="col-md-12">'.$mensaje.'</div>
					</div>
				</body>
				</html>
				';
		$cabeceras  = 'MIME-Version: 1.0' . "\r\n";
		$cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		$cabeceras .= 'From: noreply@nexo-it.cl' . "\r\n";

		if(mail($para, $titulo, $mensaje, $cabeceras))
		{
			$a = array('Mensaje'=>'Mensaje enviado con éxito - Gracias!','codigo'=>1);
			echo json_encode($a);
		}
		else
		{
			$a = array('Mensaje'=>'Nuestro servidor de correo tiene problemas prueba en 5 minutos - Por favor','codigo'=>1);
			echo json_encode($a);	
		}
		
	}


?>