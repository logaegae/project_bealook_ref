<?php
$servername = "localhost";
$username = "logaegae";
$password = "123qweasd";
$dbname = "logaegae";

// Create connection
$mysqli = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

?>
