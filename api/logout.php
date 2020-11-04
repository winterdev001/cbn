<?php
// @session_destroy();
$con=mysqli_connect('localhost','root','','cbn');
$q = "UPDATE admin SET auth= 0" ;
$res = mysqli_query($con,$q);
  if($res){
    @session_destroy();
    echo "done";
  }else {
    echo 'failed';
  }

?>