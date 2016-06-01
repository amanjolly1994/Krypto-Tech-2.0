<html>
<head>
	<title>Krypto Tech contact message</title>

	<style>
		table{
			border: 1px #111 solid;
		}

		table tr{
			/*border: 1px #111 solid;*/
		}


		table tr td{
			border: 1px #111 solid;
			width: 300px;
		}

		table tr td:first-child{
			width: 80px;
		}
	</style>
</head>

<body>

<?php
	$con = mysql_connect("localhost","bookside","navita.2508");

	if(!mysql_select_db("bookside_kryptoDB",$con))
		echo "Unable to connect to database";
	?>
		<table>
			<tr>
				<td>S. No</td>
				<td>Name</td>
				<td>Email</td>
				<td>Message</td>
			</tr>
			<?php

	$sel = mysql_query("select * from contact", $con);
	while($row = mysql_fetch_array($sel))
	{
		?>
		

			<tr>
				<td><?php echo $row['sno']; ?></td>
				<td><?php echo $row['name']; ?></td>
				<td><?php echo $row['email']; ?></td>
				<td><?php echo $row['message']; ?></td>
			</tr>
		
		<?php
	}
?>

</table>
</body>
</html>