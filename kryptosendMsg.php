<?php
	$name = $_REQUEST["name"];
	$email = $_REQUEST["email"];
	$message = $_REQUEST["message"];

			
		$con = mysql_connect("localhost","bookside","navita.2508");

		if(!mysql_select_db("bookside_kryptoDB",$con))
			echo "Unable to connect to database";

		
		

	$q1="insert into contact(name,email,message) values('".$name."','".$email."','".$message."')";

	if(mysql_query($q1,$con))
	{
		?>
		<script>alert("Your message has been sent. We will reply soon.");
				window.location="http://kryptotech.co.in/index.html";
		</script>
		
		<?php
	}

	else
	{
		?>
		<script>alert("Not Sent");</script>

		<?php
	}

?>