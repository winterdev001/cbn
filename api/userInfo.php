<?php
include 'config.php';
    // $conn=mysqli_connect('localhost','root','','cbn');
    $r="select * from admin ";
    $q=mysqli_query($conn,$r);
    header("Content-Type: application/json");  
    while($row=mysqli_fetch_array($q))
    $data[]=$row;
    echo json_encode($data);
?>