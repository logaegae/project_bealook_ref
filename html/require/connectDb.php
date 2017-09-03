<?php
$servername = "localhost";
$username = "logaegae";
$password = "123qweasd";
$dbname = "logaegae";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

?>