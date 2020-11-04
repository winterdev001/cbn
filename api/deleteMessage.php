<?php
$getdata=file_get_contents("php://input");
$data=json_decode($getdata);
$id=$data->id;

$con=mysqli_connect('localhost','root','','cbn');

$q="delete from message where id = $id ";
$res = mysqli_query($con,$q);

if($q){
  echo 'done';
}else {
  echo 'failed';
}

?>