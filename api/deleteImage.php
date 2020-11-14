<?php
include 'config.php';
$getdata=file_get_contents("php://input");
$data=json_decode($getdata);
$id=$data->id;

$q = "SELECT * from gallery where id ='$id' ";
$q_res = mysqli_query($conn,$q);
if($q_res){
    $img = mysqli_fetch_assoc($q_res);
    unlink('gallery/'.$img['image']);
    
    $q="delete from gallery where id = $id ";
    $res = mysqli_query($conn,$q);

    if($q){
    echo 'done';
    }else {
    echo 'failed';
    }
}else {
    echo 'failed'. $conn->error;
}

?>