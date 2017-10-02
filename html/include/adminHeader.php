<?php require '../require/sessionCheck.php'; ?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
	<title>Admin</title>

	<script src="../static/js/jquery-2.1.4.min.js"></script>

	<link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic&amp;subset=latin,cyrillic" rel="stylesheet">
	<link href="http://fonts.googleapis.com/css?family=Montserrat:700" rel="stylesheet">
	<link href="http://fonts.googleapis.com/css?family=Satisfy" rel="stylesheet">
	<link href="../static/css/preloader.css" rel="stylesheet">
	<link href="../static/css/bootstrap.css" rel="stylesheet">
	<link href="../static/css/font-awesome.min.css" rel="stylesheet">
	<link href="../static/css/animate.css" rel="stylesheet">
	<link href="../static/css/revolution.css" rel="stylesheet">
	<link href="../static/css/style.css" rel="stylesheet">
	<link href="../static/css/custom.css" rel="stylesheet">

	<!-- Mexico - Responsive Multipurpose Template - v.1.1-->
</head>
<body>

<!-- Preloader -->
<div class="preloader"></div>

<button class="navbar-toggle toggle-block visible" data-target="#header-vertical" data-toggle="collapse" type="button">
	<i class="fa fa-bars"></i>
</button>

<!-- HEADER -->
<header id="header-vertical" class="header header-vertical header-left  collapse fade in">

	<!-- HEADER VERTICAL TOP -->
	<div class="header-vertical-top clearfix">
		<div class="row">
		<!-- NAVBAR BRAND -->
		<a class="navbar-brand pull-left" href="./adminMain.php">
			<!-- <img src="http://placehold.it/22x22" alt="Mexico"> -->
			BeALook
		</a>
		<div>
			<br />
			<br />
			<? echo $_SESSION["id"]?>님
			<a href="logout.php" class="pull-right" style="color:white"><i class="fa fa-sign-out"></i>Logout</a>
			<br />
		</div>
		<!-- /.navbar-brand -->
			<br />
			<button class="navbar-toggle pull-right" data-target="#header-vertical" data-toggle="collapse" type="button">
				<i class="fa fa-bars"></i>
			</button>
		</div>
	</div>
	<!-- /.header-vertical-top -->

	<!-- HEADER VERTICAL NAVBAR -->
	<div class="header-vertical-navbar">

		<!-- NAVBAR -->
		<nav class="navbar">

		<!-- NAVBAR COLLAPSE -->
		<div id="navbar" class="navbar-collapse collapse ">
			<ul class="nav navbar-nav">
				<li>
					<a href="./contact.php">Contact</a>
				</li>
			</ul>
		</div>
		<!-- /.navbar-collapse -->

</header>
<!-- /.header -->
