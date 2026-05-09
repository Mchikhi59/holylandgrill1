<?php
include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['fullname'];
    $email = $_POST['email'];
    // Securely hash the password
    $pass = password_hash($_POST['password'], PASSWORD_DEFAULT);
    $sub = isset($_POST['subscribe']) ? 1 : 0;

    $sql = "INSERT INTO users (fullname, email, password, subscribed) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssi", $name, $email, $pass, $sub);

    if ($stmt->execute()) {
        echo "<h3>Success! You are signed up for menu updates.</h3>";
    } else {
        echo "Error: " . $conn->error;
    }
}
?>

<form method="POST">
    <input type="text" name="fullname" placeholder="Full Name" required><br>
    <input type="email" name="email" placeholder="Email" required><br>
    <input type="password" name="password" placeholder="Password" required><br>
    <label>
        <input type="checkbox" name="subscribe" checked> Receive menu discounts?
    </label><br>
    <button type="submit">Join Now</button>
</form>
