<?php
include 'config.php';
  // $conn=mysqli_connect('localhost','root','','cbn');
  $getdata=file_get_contents("php://input");
  $data=json_decode($getdata);
  $id=$data->id;
  $r="select * from appointment where id = $id";
  $q=mysqli_query($conn,$r);
  if(mysqli_num_rows($q) > 0){
    header("Content-Type: application/json");  
    while($row=mysqli_fetch_array($q))
    $data[]=$row;
    echo json_encode($data);    
  }else{
    echo "no match";
  }
   
?>