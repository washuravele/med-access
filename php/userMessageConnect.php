<?php
/* Check if the form is submitted */
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    /* Retrieve form data */
    $firstName = $_POST["firstname"] ?? '';
    $email = $_POST["email"] ?? '';
    $userMessage = $_POST["textMessage"] ?? '';

    /* Create connection */
    $conn = new mysqli("localhost", "root", "", "medaccess");
    /* Check connection */
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    /* Prepare and bind */
    $stmt = $conn->prepare("INSERT INTO  usermessages(first_name,user_email, user_message) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $firstName,  $email,  $userMessage);

     /* Execute the statement */
    if ($stmt->execute()) {
        echo "Success";
    } else {
        echo "Error: " . $stmt->error;
    }

   /* Close the statement and connection */
    $stmt->close();
    $conn->close();
}
?>