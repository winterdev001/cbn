<?php
include 'config.php';
$getdata=file_get_contents("php://input");
$data=json_decode($getdata);
$id=$data->id;
// $con=mysqli_connect('localhost','root','','cbn');

$q="UPDATE appointment SET status = 'approved' where id = '$id'";
$res = mysqli_query($conn,$q);

if($q){
  echo 'done';
}else {
  echo 'failed';
}

?>