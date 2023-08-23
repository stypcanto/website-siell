<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recopila los datos del formulario
    $nombre = $_POST["nombre"];
    $apellidos = $_POST["apellidos"];
    $codigo_pais = $_POST["codigo_pais"];
    $telefono = $_POST["telefono"];
    $correo = $_POST["correo"];
    $mensaje = $_POST["mensaje"];
    
    // Dirección de correo a la que se enviará el formulario
    $destinatario = "scanto@siellsrl.com";

    // Asunto del correo
    $asunto = "Nuevo mensaje de contacto desde https://siellsrl.com";

    // Cuerpo del correo
    $cuerpo = "Nombre: $nombre $apellidos\n";
    $cuerpo .= "Código de País: $codigo_pais\n";
    $cuerpo .= "Teléfono: $telefono\n";
    $cuerpo .= "Correo Electrónico: $correo\n";
    $cuerpo .= "Mensaje:\n$mensaje";

    // Encabezados del correo
    $encabezados = "From: $correo" . "\r\n" .
        "Reply-To: $correo" . "\r\n" .
        "X-Mailer: PHP/" . phpversion();

     // Envía el correo
     if (mail($destinatario, $asunto, $cuerpo, $encabezados)) {
        // Redireccionar a una página de confirmación si el correo se envió correctamente
        header("Location: index.html");
        exit();
    } else {
        echo "<p>Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo más tarde.</p>";
    }
}
?>
