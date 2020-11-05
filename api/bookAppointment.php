<?php
$getdata=file_get_contents("php://input");
$data=json_decode($getdata);
$name=$data->name;
$email=$data->email;
$phone=$data->phone;
$service=$data->service;
$status = "waiting";

$con=mysqli_connect('localhost','root','','cbn');

$q="insert into appointment(name,email,phone,service,status) values('".$name."','".$email."','".$phone."','".$service."','".$status."')";
$res = mysqli_query($con,$q);

if($res){
  echo 'done';
}else {
  echo 'failed'. $con ->error;
}

?>