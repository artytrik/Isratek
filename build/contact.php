<?php
if (isset ($_POST['form-name'])) {
  $to = "tema-luch@mail.ru";
  $from = "tema-luch@mail.ru";
  $subject = "Заполнена контактная форма на сайте ".$_SERVER['HTTP_REFERER'];
  $message = "Имя пользователя: ".$_POST['form-name']."\nТелефон пользователя ".$_POST['form-telephone']."\nСообщение: ".$_POST['form-message']."\n\nАдрес сайта: ".$_SERVER['HTTP_REFERER'];

  $boundary = md5(date('r', time()));
  $filesize = '';
  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "From: " . $from . "\r\n";
  $headers .= "Reply-To: " . $from . "\r\n";
  $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";
  $message="
Content-Type: multipart/mixed; boundary=\"$boundary\"

--$boundary
Content-Type: text/plain; charset=\"utf-8\"
Content-Transfer-Encoding: 7bit

$message";
     if(is_uploaded_file($_FILES['form-file']['tmp_name'])) {
         $attachment = chunk_split(base64_encode(file_get_contents($_FILES['form-file']['tmp_name'])));
         $filename = $_FILES['form-file']['name'];
         $filetype = $_FILES['form-file']['type'];
         $filesize = $_FILES['form-file']['size'];
         $message.="

--$boundary
Content-Type: \"$filetype\"; name=\"$filename\"
Content-Transfer-Encoding: base64
Content-Disposition: attachment; filename=\"$filename\"

$attachment";
     }
   $message.="
--$boundary--";

  if ($filesize < 10000000) { // проверка на общий размер всех файлов. Многие почтовые сервисы не принимают вложения больше 10 МБ
    mail($to, $subject, $message, $headers);
    echo $_POST['form-name'].', Ваше сообщение отправлено, спасибо!';
  } else {
    echo 'Извините, письмо не отправлено. Размер всех файлов превышает 10 МБ.';
  }
}
?>
