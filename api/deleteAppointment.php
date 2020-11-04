<?php
$getdata=file_get_contents("php://input");
$data=json_decode($getdata);
$id=$data->id;

$con=mysqli_connect('localhost','root','','cbn');

$q="delete from appointment where id = $id ";
$res = mysqli_query($con,$q);

if($res){
  echo 'done';
}else {
  echo 'failed';
}

?>