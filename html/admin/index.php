<?php
session_start();
if(isset($_SESSION["id"])){
	header('Location: /admin/adminMain.php');
}else{

	$message = '';
	if ($_SERVER["REQUEST_METHOD"] == "POST") {

 	   require_once '../require/connectDb.php';
	   $id = $_POST['id'];
	   $pw = $_POST['pw'];

		$UserInput = preg_replace(“/[\r\n\s\t\’\;\”\=\-\-\/\*]+/”,“”, $pw);
    		if(preg_match(‘/(union|select|from|where)/i’, $UserInput)) {
 	    	$this–>Error_popup(‘No SQL-Injection’);
 		}

	   $query = sprintf("SELECT id FROM adminMember WHERE id='%s' AND pw='%s'",
            $mysqli->real_escape_string($_POST['id']),
            $mysqli->real_escape_string($_POST['pw']));

		$result = $mysqli->query($query);

		if ($result->num_rows == 1) {
			while($row = $result->fetch_assoc()) {
				$_SESSION["id"] = $row["id"];
		    }
		    header('Location: /admin/adminMain.php');
		} else {
		    $message='아이디 혹은 비밀번호가 틀렸습니다';
		}
		$mysqli->close();
	}
}
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
	<title>BeALook</title>
	<meta name="author" content="bealook" />
	<meta name="description" content="비어룩 마켓 서비스, 인스타그램, 페이스북, 블로그, 카카오, 기타 SNS 마켓 쇼핑몰 플랫폼. 스토리텔링, 장인, 소상공인을 지원합니다." />
	<meta name="keywords"  content="비어룩, bealook, instagram, facebook. kakao, market, 쇼핑몰, 마켓, 인스타마켓, 블로그마켓, 장인, 소상공인" />
	<link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic&amp;subset=latin,cyrillic" rel="stylesheet">
	<link href="http://fonts.googleapis.com/css?family=Montserrat:700" rel="stylesheet">
	<link href="http://fonts.googleapis.com/css?family=Satisfy" rel="stylesheet">
	<link href="../static/css/preloader.css" rel="stylesheet">
	<link href="../static/css/bootstrap.css" rel="stylesheet">
	<link href="../static/css/font-awesome.min.css" rel="stylesheet">
	<link href="../static/css/animate.css" rel="stylesheet">
	<link href="../static/css/revolution.css" rel="stylesheet">
	<link href="../static/css/style.css" rel="stylesheet">
</head>
<body>

<!-- Preloader -->
<div class="preloader"></div>


<!-- WRAPPER -->
<div class="wrapper">

	<!-- PAGE TITLE -->
	<header class="pagetitle pagetitle-sm">
		<div class="container">
			<div class="divtable irow">
				<div class="divcell">
					<i class="fa fa-lock"></i>
					<h1>Admin Login</h1>
					<div class="divider"></div>
					<span class="subtitle">Login to your account</span>
				</div>
				<div class="divcell text-right">
					<ol class="breadcrumb">
						<li><a href="/">Home</a></li>
					</ol>
				</div>
			</div>
		</div>
	</header>
	<!-- /.pagetitle -->

	<!-- CONTENT -->
	<div class="content">

		<!-- CONTAINER -->
		<div class="container">
			<div class="row">
			<hr class="hr-nobg"/>
				<div class="col-lg-4 col-md-6 col-sm-8 col-lg-offset-4 col-md-offset-3 col-sm-offset-2">
					<h2>Login to account </h2>
					<hr class="hr-sm hr-stroke"/>
					<form action="<?echo $_SERVER['PHP_SELF']?>" method="post">
						<div class="form-group">
							<label for="username">Id</label>
							<input type="text" name="id" id="username" value="<?echo $_POST["id"]?>" required="ture">
						</div>
						<div class="form-group">
							<label for="password">Password</label>
							<input type="password" name="pw" id="password" required="ture">
							<div>
								<?php
								if($message != '') echo $message;
								?>
							</div>
						</div>

						<hr class="hr-sm hr-stroke"/>
						<div class="form-group text-center">
							<br />
							<input type="submit" class="btn btn-primary btn-wide" value="Send">
						</div>

					</form>
				</div>
			</div>
		</div>
		<!-- /.container -->

	</div>
	<!-- /.content -->

</div>
<!-- /.wrapper -->

<script src="../static/js/jquery-2.1.4.min.js"></script>
<script src="../static/js/bootstrap.min.js"></script>
<script src="../static/js/plugins.js"></script>
<script src="../static/js/custom.js"></script>
</body>
</html>
