<?php
include 'config.php';
$getdata=file_get_contents("php://input");
$data=json_decode($getdata);
$uname=$data->username;
$pass=$data->password;
// $conn=mysqli_connect('localhost','root','','cbn');

$q="UPDATE admin SET username = '$uname' password = '$pass' ";
$res = mysqli_query($conn,$q);

if($q){
  echo 'done';
}else {
  echo 'failed';
}

?>