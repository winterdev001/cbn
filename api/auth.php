<?php
// session_start();
$getdata=file_get_contents("php://input");
$data=json_decode($getdata);
$uname=$data->username;
$pass=$data->password;
$con=mysqli_connect('localhost','root','');
if(!$con)
{
  die('connection failed'.mysql_error());
}
if($uname==null || $pass==null){
  echo'fill them all first';
}
mysqli_select_db($con,'cbn');

  $r1="SELECT * FROM admin WHERE  username='$uname' AND password='$pass'";
  $q1=mysqli_query($con,$r1);
  $row1=mysqli_fetch_array($q1);
  if(mysqli_num_rows($q1) >0){
    if($row1['username']==$uname && $row1['password']==$pass){   
      $q = "UPDATE admin SET auth = 1"; 
      $q_res= mysqli_query($con,$q);
      if($q_res){
        if(!isset($_SESSION))
      {
      @session_start();
      }
        $_SESSION['USER_ID']=$row1['id'];
        echo 'done';  
      } else {
        echo "failed";
      }     
    }
    else{
      echo"Email or password is Incorrect";
    }
  }else{
    echo"Email or password is Incorrect";
  }
  

?>