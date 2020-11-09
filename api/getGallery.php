<?php
include 'config.php';
    // $con=mysqli_connect('localhost','root','','cbn');
    $r="select * from gallery order by created_at desc";
    $q=mysqli_query($conn,$r);
    if(mysqli_num_rows($q) > 0){
      header("Content-Type: application/json");  
      while($row=mysqli_fetch_array($q))
      $data[]=$row;
      echo json_encode($data);
    }else{
      echo "empty";
    }
   
?>