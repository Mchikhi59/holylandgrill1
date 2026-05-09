<?php
$host = "localhost";
$db_name = "u763122920_costumer"; // Your DB Name
$username = "u763122920_milo";     // Your DB Username
$password = "Berkana1959@"; // Your DB Password

$conn = new mysqli($host, $username, $password, $db_name);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
