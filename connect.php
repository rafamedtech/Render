<?php
    error_reporting(E_ALL); 
    ini_set('display_errors', 1);



    // header("refresh:3, url=index.html");
    header("Location: thankyou.html", "refresh:3, url=index.html");

    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    if(isset($_POST['submit'])){
        $email_from = 'pending@email.com';
        $email_subject = "Nuevo mensaje desde formulario";
        $email_body = "Tienes un nuevo mensaje de $name.\n".
                                    "Este es el mensaje:\n $message".
        $to = "pending@email.com";
        $headers = "From: $email_from \r\n";
        $headers .= "Reply-To: $email \r\n";
        mail($to, $email_subject, $email_body, $headers);
    }

    // Database connection
    $conn = new mysqli('localhost', 'drmarti2_admin','!1vEiQ&2zK13Mzfj#6lL', 'drmarti2_forms');
    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into submitted(name, email, message, phone) values(?, ?, ?, ?)");
        $stmt->bind_param("sssi", $name, $email, $message, $phone);
        $stmt->execute();
        // echo "<h1>Gracias por su mensaje!</h1>";
        $stmt->close();
        $conn->close();
    }

?>
<!-- 6SF@TEN_w5 -->
