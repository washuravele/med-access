<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST["firstname"] ?? '';
    $lastName = $_POST["lastname"] ?? '';
    $email = $_POST["email"] ?? '';
    $phoneNumber = $_POST["phone"] ?? '';
    $plan = $_POST["plan"] ?? '';

    $conn = new mysqli("localhost", "root", "", "medaccess");

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $stmt = $conn->prepare("INSERT INTO medicalaid (firstName, lastName, email, phone, plan) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $firstName, $lastName, $email, $phoneNumber, $plan);

    if ($stmt->execute()) {
        echo "Success";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>