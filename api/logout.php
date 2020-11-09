<?php
include 'config.php';
// @session_destroy();
// $conn=mysqli_connect('localhost','root','','cbn');
$q = "UPDATE admin SET auth= 0" ;
$res = mysqli_query($conn,$q);
  if($res){
    @session_destroy();
    echo "done";
  }else {
    echo 'failed';
  }

?>