<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Registration List</title>
<style>

table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
}
th {
    text-align: center;
	color:#FD0004;
}
</style>
</head>

<body>

<?php



//-----------------WHEN POSTED---------------------------------------------
if ($_SERVER["REQUEST_METHOD"] == "POST") {
if($_POST['admin']=="parakram5" && $_POST['fcker']=="2014-2015"){
	
	
$servername="204.11.58.166:3306";
$username="milton";
$password="msb_@1234";
$dbname="pararegistration";

$conn = new mysqli($servername, $username, $password,$dbname);
$sql="SELECT * FROM REGISTRATION";
$result=mysqli_query($conn, $sql);
echo'<center><h1>Registration List</h1><br><table>';
echo '<tr><th>S. No.</th><th>Name</th><th>College</th><th>Email</th><th>Phone</th><th>Participating As</th><th>Participating In</th><th>Date of Registration(Y/m/d H:i:s)</th></tr>';
if(mysqli_num_rows($result)>0){
	while($row = mysqli_fetch_assoc($result)){
		
		echo '<tr><td>'.$row['id'].'</td><td>'.$row['name'].'</td><td>'.$row['college'].'</td><td>'.$row['email'].'</td><td>'.$row['phone'].'</td><td>'.$row['participatingas'].'</td><td>'.$row['participatingin'].'</td><td>'.$row['reg_date'].'</tr>';
	}	
	echo '</table></center>';
}
else{
	echo '0 result';
}

}
else{
	?>
	<form name="login" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"])?>">
	<input type="text" name="admin" placeholder="username" ><input type="text" name="fcker" placeholder="password" ><button type="submit">Login</button></form>
<?php
	echo "<h4 style=\"color:red\">Username or Password is wrong!</h4>";
}

}
else{
	?>
<form name="login" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"])?>">
<input type="text" name="admin" placeholder="username" ><input type="password" name="fcker" placeholder="password" ><button type="submit">Login</button></form>

<?php
}
//-----------------WHEN POSTED---------------------------------------------
?>

</body>
</html>