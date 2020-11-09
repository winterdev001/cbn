<?php  
 $connect = mysqli_connect("localhost", "root", "", "cbn");    
$path = 'gallery/' . $_FILES['file']['name'];  
if(move_uploaded_file($_FILES['file']['tmp_name'], $path))  
{  
    $title = $_POST['title'];
    $caption = $_POST['caption'];
    $insertQuery = "insert into gallery(image,title,caption) values( '".$_FILES['file']['name']."','".$title."','".$caption."')";  
    $res = mysqli_query($connect, $insertQuery);
    
}  
if($res)  
{  
echo 'success';  
}  
else  
{  
echo 'failed';  
} 
   
?>  