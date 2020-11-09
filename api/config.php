<?php 
$hostname = 'localhost';
$username = 'root';
$password  = '';
$db = 'cbn';

$conn = mysqli_connect($hostname,$username,$password,$db);
 if(!$conn)
        {
            die('connection failed'.mysql_error());
        }

?>