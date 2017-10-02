<?
	if(isset($_POST["ids"])){

		$id = $_POST['ids'];
		require_once '../require/connectDb.php';

		for($i=0; $i<count($id); $i++){

			$sql = "UPDATE contact SET delYn='Y' WHERE id=".$id[$i]."";
			$result = $mysqli->query($sql);

			if ($mysqli->query($sql) === TRUE) {
			} else {
				break;
			    echo "Error updating record: " . $mysqli->error;
			}
		}
		$mysqli->close();
	}

	header('Location: /admin/contact.php');
?>
