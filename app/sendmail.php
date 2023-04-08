<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail ->CharSet = 'UTF-8';
$mail ->setLanguage('es', 'phpmailer/language/');
$mail ->IsHTML(true);

$mail ->setFrom('info@info.com', 'UserName');
$mail ->addAddress('diana.ana.ivanova@gmail.com');
$mail ->Subject = 'Hello, World';

$body = 'New registration';

if(trim(!empty($_POST['name']))){
  $body.='<p>Nombre: '.$_POST['name'].'</p>';
}

if(trim(!empty($_POST['email']))){
  $body.='<p>Email: '.$_POST['email'].'</p>';
}

if(trim(!empty($_POST['phone']))){
  $body.='<p>Telefono: '.$_POST['phone'].'</p>';
}

if(trim(!empty($_POST['date']))){
  $body.='<p>Fecha: '.$_POST['date'].'</p>';
}

if(trim(!empty($_POST['time']))){
  $body.='<p>Hora: '.$_POST['time'].'</p>';
}

if(trim(!empty($_POST['qty']))){
  $body.='<p>Cantidad de Personas: '.$_POST['qty'].'</p>';
}

if(trim(!empty($_POST['mensaje']))){
  $body.='<p>Mensaje: '.$_POST['mensaje'].'</p>';
}

if (!$mail->send()) {
  $message = 'Errooooor';
} else {
  $message = 'Sucess!';
}$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>