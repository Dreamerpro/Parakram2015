<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Test</title>
</head>

<body>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"])?>">
<input type="tel" placeholder="phone" name="phone">
<input type="submit" value="Submit">
</form>

<?php 
if($_SERVER["REQUEST_METHOD"]=="POST"){
echo $_POST['phone']." is typed";
}
?>
</body>
</html>