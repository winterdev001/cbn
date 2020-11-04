<?php
$getdata=file_get_contents("php://input");
$data=json_decode($getdata);
$name=$data->name;
$email=$data->email;
$phone=$data->phone;
$date=$data->date;
$service=$data->service;

$con=mysqli_connect('localhost','root','','cbn');

$q="insert into appointment(name,email,phone,date,service) values('".$name."','".$email."','".$phone."','".$date."','".$service."')";
$res = mysqli_query($con,$q);

if($res){
  echo 'done';
}else {
  echo 'failed'. $con ->error;
}

?>