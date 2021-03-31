<?php
  $errors = array();
  $data = array();

  if (empty($_POST['call-name']))
    $errors['call-name'] = 'Name is required';

  if (empty($_POST['call-tel']))
    $errors['call-tel'] = 'Telephone is required';

  if (!empty($errors)) {
    $data['success'] = false;
    $data['errors'] = $errors;
  } else {
    $to = "info-em@eurometfilms.ru";
    $from = "info-em@eurometfilms.ru";

    $first_name = $_POST['call-name'];
    $subject = "Форма отправки сообщений с сайта Isratek";
    $message = $first_name . " оставил телефон:" . "\n\n" . $_POST['call-tel'];

    $headers = "From:" . $from;

    mail($to,$subject,$message,$headers);

    $data['success'] = true;
    $data['message'] = 'Success!';
  }
echo json_encode($data);
?>
