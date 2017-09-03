<?
	if(isset($_POST["ids"])){
		
		$id = $_POST['ids'];
		require_once '../require/connectDb.php';

		for($i=0; $i<count($id); $i++){
					
			$sql = "UPDATE contact SET delYn='Y' WHERE id=".$id[$i]."";
			$result = $conn->query($sql);
			
			if ($conn->query($sql) === TRUE) {
			} else {
				break;
			    echo "Error updating record: " . $conn->error;
			}
		}		
		$conn->close();
	}

	header('Location: /admin/contact.php');
?>