<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $cantidad = $_POST['cantidad'];
    $file = fopen("reservas.txt", "a");

    for ($i = 1; $i <= $cantidad; $i++) {
        $nombre = $_POST["nombre" . $i];
        $cedula = $_POST["cedula" . $i];
        $telefono = $_POST["telefono" . $i];
        $reserva = $_POST["reserva" . $i];
        
        $txt = "Cupo $i:\nNombre: $nombre\nCédula: $cedula\nTeléfono: $telefono\nReserva: $reserva\n\n";
        fwrite($file, $txt);
    }

    fclose($file);
    echo "<script>alert('La información se ha guardado correctamente para el seguro de transporte.'); window.location.href='index.html';</script>";
}
?>
