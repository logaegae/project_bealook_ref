<!-- HEADER -->
<?php include("./include/header.php"); ?>
<!-- /.header -->

<?
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["submit"])) {

	require_once './require/connectDb.php';

	$sql = "INSERT INTO contact (name, question1, question2, question3, question4) VALUES ('".$_POST["name"]."', '".$_POST["question1"]."', '".$_POST["question2"]."', '".$_POST["question3"]."', '".$_POST["question4"]."')";

	if ($conn->query($sql) === TRUE) {
	    $message = '입력이 완료되었습니다. 소중한 의견 감사합니다<br/>';
	} else {
	    $message = '오류 발생';
	}

	$conn->close();

}else{
	$message = '';
}
?>
<!-- WRAPPER -->
<div class="wrapper">

	<!-- PAGE TITLE -->
	<header class="pagetitle pagetitle-sm">
		<div class="container">
			<div class="divtable irow">
				<div class="divcell">
					<i class="fa fa-pencil"></i>
					<h1>Contact</h1>
					<div class="divider"></div>
					<span class="subtitle">의견을 남겨주세요</span>
				</div>
				<div class="divcell text-right">
					<ol class="breadcrumb">
						<li><a href="#">Home</a></li>
						<li class="active"><span>Contact</span></li>
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
			<div class="row irow-xs">
				<div class="col-sm-12">
					<div class="text-center">
						<?if ($message != ''){?>
						<div class="alert alert-success alert-dismissible fade in"><p><i class="fa fa-thumbs-o-up"></i><?echo $message?></p></div>
						<?}?>
					</div>
					<form class="form-horizontal" method="post" action="<?echo $_SERVER["PHP_SELF"]?>">
						<div class="form-group">
							<label for="textbox9" class="col-sm-5">성함</label>
							<div class="col-sm-7">
								<input type="text" name="name" id="textbox9" required="true">
							</div>
						</div>
						<div class="form-group">
							<label for="form-message9" class="col-sm-5">질문1.</label>
							<div class="col-sm-7">
								<textarea name="question1" id="form-message9" size="1000" required="true"></textarea>
							</div>
						</div>
						<div class="form-group">
							<label for="form-message9" class="col-sm-5">질문2.</label>
							<div class="col-sm-7">
								<textarea name="question2" id="form-message9" size="1000" required="true"></textarea>
							</div>
						</div>
						<div class="form-group">
							<label for="form-message9" class="col-sm-5">질문3.</label>
							<div class="col-sm-7">
								<textarea name="question3" id="form-message9" size="1000" required="true"></textarea>
							</div>
						</div>
						<div class="form-group">
							<label for="form-message9" class="col-sm-5">질문4.</label>
							<div class="col-sm-7">
								<textarea name="question4" id="form-message9" size="1000" required="true"></textarea>
							</div>
						</div>
						<hr />
						<div class="form-group text-center">
							<input class="btn btn-primary btn-xl btn-shadow" type="submit" name="submit" value="보내기" />
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
<?php include("./include/footer.php"); ?>
<!-- /.footer -->
