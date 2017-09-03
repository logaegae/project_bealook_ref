<? 
session_start();
if (!isset($_SESSION["id"])) {
	header('Location: /admin/index.php');
} else {
	session_destroy();
	header('Location: /admin/index.php');
}
?>