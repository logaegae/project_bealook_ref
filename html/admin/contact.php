<?php include("../include/adminHeader.php");?>
<div class="wrapper">

	<!-- PAGE TITLE -->
	<header class="pagetitle pagetitle-sm">
		<div class="container">
			<div class="divtable irow">
				<div class="divcell">
					<h1>Contact</h1>
				</div>
				<div class="divcell text-right">
					<ol class="breadcrumb">
						<li><a href="#">Admin</a></li>
						<li class="active">Contact</li>
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

			<h3>List</h3>
			<form action="delete.php" method="post">
				<table class="table table-striped">
					<colgroup>
						<col width="5%"/>
						<col width="15%"/>
						<col width="60%"/>
						<col width="20%"/>
					</colgroup>
					<thead>
					<tr>
						<th><button id="deleteBtn" class="btn btn-inverse btn-xs">선택삭제</button></th>
						<th>Name</th>
						<th>Text</th>
						<th>Regist</th>
					</tr>
					</thead>
					<tbody>
					<?php
						require_once '../require/connectDb.php';
						$sql = "SELECT * FROM contact WHERE delYn='N' ORDER BY time DESC";

						$result = $mysqli->query($sql);

						if ($result->num_rows > 0) {
							while($row = $result->fetch_assoc()) {
								?>
								<tr>
									<td><input type="checkbox" name="ids[]" value="<? echo $row["id"]?>" /></td>
									<td><?echo $row["name"]?></td>
									<td>
										질문 1. <br />
										<?echo $row["question1"].'<br />'?>
										<br />질문 2. <br />
										<?echo $row["question2"].'<br />'?>
										<br />질문 3. <br />
										<?echo $row["question3"].'<br />'?>
										<br />질문 4. <br />
										<?echo $row["question4"].'<br />'?>
									</td>
									<td><?echo $row["time"]?></td>
								</tr>
								<?
						    }

						} else {?>
							<tr>
							    <td></td>
								<td></td>
								<td class="text-center"><br />noData <br /><br /></td>
								<td></td>
							</tr>
						<?}

						$mysqli->close();
					?>
					</tbody>
				</table>
			</form>
		</div>
	</div>
</div>
<?php include("../include/adminFooter.php");?>
