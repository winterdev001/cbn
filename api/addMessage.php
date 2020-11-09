<?php
include 'config.php';
$getdata=file_get_contents("php://input");
$data=json_decode($getdata);
$name=$data->name;
$email=$data->email;
$message=$data->message;

// $con=mysqli_connect('localhost','root','','cbn');

$q="insert into message(name,email,message) values('".$name."','".$email."','".$message."')";
$res = mysqli_query($conn,$q);

if($res){
  echo 'done';
}else {
  echo 'failed'. $conn ->error;
}

?>