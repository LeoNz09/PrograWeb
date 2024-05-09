<?php

if ($_SERVER['REQUEST_METHOD'] == "POST") {
	$nombre = $_POST['nombre'];
    $mail = $_POST['email'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];
    
    // Construir el mensaje
    $mensaje_body = "Mensaje enviado por: $nombre.\r\n";
    $mensaje_body .= "Su email es: $mail.\r\n";
    $mensaje_body .= "Asunto: $asunto.\r\n";
    $mensaje_body .= "Mensaje: $mensaje.\r\n";
    $mensaje_body .= "Enviado el: " . date('d/n/Y', time()) . ".\r\n";

    // Dirección de correo electrónico a la que se enviará el mensaje
    $para = 'leonardo.nz079@gmail.com'; // Cambia esto por tu dirección de correo electrónico

    // Asunto del correo electrónico
    $asunto_email = 'Mensaje enviado desde el formulario de contacto';

    // Encabezados del correo electrónico
    $header = "From: $nombre <$mail>\r\n";
    $header .= "Reply-To: $mail\r\n";
    $header .= "MIME-Version: 1.0\r\n";
    $header .= "Content-type: text/plain; charset=utf-8\r\n";

    // Enviar correo electrónico
    if (mail($para, $asunto_email, utf8_decode($mensaje_body), $header)) {
        // Redireccionar después de enviar el formulario
        header('Location: FormularioComentariosEnviado.html');
        exit; // Terminar el script después de la redirección
    } else {
        echo "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.";
    }
}

/*$nombre = $_POST['nombre'];
$mail = $_POST['email'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

$header = ;

$mensaje = "Mensaje enviado por: ". $nombre . ".\r\n";
$mensaje .= "Su email es: " . $mail . ".\r\n";
$mensaje .= "Mensaje: ". $_POST['mensaje'] . ".\r\n";
$mensaje .= "Enviado el : ". date['d/n/Y', time()];

$para = '183782@upslp.edu.mx';
$asunto = 'Este mail fue enviado desde la web';

mail($para, $asunto, utf8_decode($mensaje), $header);

header('FormularioComentariosEnviado.html');*/

/*if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recopilar datos del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];
    
    // Configurar correo electrónico
    $para = "183782@upslp.edu.mx"; // Cambia esto por tu dirección de correo electrónico
    $asunto = "Nuevo comentario de $nombre";
    $contenido = "Nombre: $nombre\n";
    $contenido .= "Email: $email\n";
    $contenido .= "Mensaje:\n$mensaje\n";
    
    // Enviar correo electrónico
    if (mail($para, $asunto, $contenido)) {
        echo "Gracias por tu comentario. Se ha enviado correctamente.";
    } else {
        echo "Hubo un error al enviar el comentario. Por favor, inténtalo de nuevo más tarde.";
    }
}*/

/*if(isset($_POST['submit'])){
	$para = "183782@upslp.edu.mx";
	$asunto = "Enviando Información";
	$nombre = $_POST['nombre'];
	$correo = $_POST['email'];
	$mensaje = $_POST['mensaje'];
	$headers = "MIME-Version: 1.0\r\n";
	$headers = "Content-type: text/html; charset=utf8\r\n";
	$cuerpo = "Enviado por: $nombre\n E-mail: $correo\n Mensaje: $mensaje\n";

	$bool = mail($para,$asunto,$cuerpo,$headers);
} else {
	echo "Ocurrio un error...";
}*/
?>