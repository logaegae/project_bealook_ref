<?php
session_start();
if(isset($_SESSION["adminId"])){
	header('Location: /admin/adminMain.php');
}else{

	$message = '';
	if ($_SERVER["REQUEST_METHOD"] == "POST") {

 	   require_once '../require/connectDb.php';
	   $id = $_POST['id'];
	   $pw = $_POST['pw'];

	   $query = sprintf("SELECT id FROM adminMember WHERE id='%s' AND pw='%s'",
            $mysqli->real_escape_string($_POST['id']),
            $mysqli->real_escape_string($_POST['pw']));

		$result = $mysqli->query($query);

		if ($result->num_rows == 1) {
			while($row = $result->fetch_assoc()) {
				$_SESSION["adminId"] = $row["id"];
		    }
		    header('Location: /admin/adminMain.php');
		} else {
		    $message='아이디 혹은 비밀번호가 틀렸습니다';
		}
		$mysqli->close();
	}
}
?>

<!-- header -->
<?php include("./include/adminHeader.php"); ?>
<!-- /.header -->

<!-- WRAPPER -->
<div class="wrapper">

	<!-- PAGE TITLE -->
	<header class="pagetitle pagetitle-sm">
		<div class="container">
			<div class="divtable irow">
				<div class="divcell">
					<i class="fa fa-lock"></i>
					<h1>관리자 로그인</h1>
					<div class="divider"></div>
					<span class="subtitle">관리자 계정을 로그인하기</span>
				</div>
				<div class="divcell text-right">
					<ol class="breadcrumb">
						<li><a href="/">홈</a></li>
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
					<h2>관리자 로그인</h2>
					<hr class="hr-sm hr-stroke"/>
					<form action="<?echo $_SERVER['PHP_SELF']?>" method="post">
						<div class="form-group">
							<label for="username">아이디</label>
							<input type="text" name="id" id="username" value="<?echo $_POST["id"]?>" required="ture">
						</div>
						<div class="form-group">
							<label for="password">비밀번호</label>
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


<!-- footer -->
<?php include("./include/adminFooter.php"); ?>
<!-- /.footer -->
