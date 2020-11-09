<?php
include 'config.php';
// $conn=mysqli_connect('localhost','root','','cbn');
$getdata=file_get_contents("php://input");
$data=json_decode($getdata);
$id=$data->id;

$q="UPDATE message SET status = 1 where id = '$id'";
$res = mysqli_query($conn,$q);

if($q){
    $q2 = "SELECT * from message where id = $id";
    $res2 = mysqli_query($conn,$q2);     
    if(mysqli_num_rows($res2) > 0)  
    {  
         while($row = mysqli_fetch_array($res2))  
         {  
              $output[] = $row;  
         }  
         echo json_encode($output);  
    } 
    else {
        echo "failed";
    }
}else {
  echo 'failed';
}

?>