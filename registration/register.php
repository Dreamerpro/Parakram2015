<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>PHP REGISTRATION</title>
</head>

<body>
<?php 
$name = $_POST['name'];
$college=$_POST['college'];
$email=$_POST['email'];
$phone=$_POST['phone'];
$participation=$_POST['radio1'];
$sports="";
if(is_array($_POST['sports'])){
	foreach ($_POST['sports'] as $select){
		$sports.= $select."; ";
	}
}



$servername="204.11.58.166:3306";
$username="milton";
$password="msb_@1234";
$dbname="pararegistration";

$conn = new mysqli($servername, $username, $password,$dbname);

if(mysqli_connect_error()){
	die('database connection failed'. mysqli_connect_error());
}
else{
	
//echo 'succesful <br>';
date_default_timezone_set("Asia/Calcutta");
$date=date('Y/m/d H:i:s');
$sql="INSERT INTO REGISTRATION (name,college,email,phone,participatingas,participatingin,reg_date) VALUES('$name','$college','$email','$phone','$participation','$sports','$date')";

$result=mysqli_query($conn, $sql);
echo '<html><body>';
if(!$result){
	echo 'failed'.mysqli_error($conn).'<p>Please contact <b>Technical Head</b></p>';
	}
else{
	echo '<center><h1>Registration successful</h1><br>';
	echo '<a href="index.html">Register another</a><br>';
	echo '<a href="../index.html">Back to main site</a></center>';
	
	}
echo '</body></html>';
mysqli_close($conn);
}

/*
$sql = "CREATE TABLE REGISTRATION (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
name VARCHAR(30) NOT NULL,
college VARCHAR(30) NOT NULL,
email VARCHAR(50),
phone INT(10),
participatingas VARCHAR(20),
participatingin VARCHAR(100),
reg_date TIMESTAMP
)";

if (mysqli_query($conn, $sql)) {
    echo "Table Registrationlist created successfully";
} else {
    echo "Error creating table: " . mysqli_error($conn);
}
*/
?>
</body>
</html>