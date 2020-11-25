<?php
$destino= "a.rivera@akairos.co";
$nombre = $_POST["nombre"];
$telefono = $_POST["telefono"];
$correo = $_POST["correo"];
$asunto = $_POST["asunto"];
$mensaje = $_POST["mensaje"];
$contenido = "Nombre: " . $nombre . "\nTelefono: " . $telefono . "\nCorreo: " . $correo . "\nAsunto: " .$asunto . "\nMensaje: " .$mensaje;
mail($destino, "asunto", $contenido);
header("Location:mostrarmensaje()")
