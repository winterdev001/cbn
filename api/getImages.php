<?php  
include 'config.php';
//  $conn = mysqli_connect("localhost", "root", "", "cbn");    
$path = 'gallery/' . $_FILES['img']['name'];  
if(move_uploaded_file($_FILES['img']['tmp_name'], $path))  
{  
    $title = $_POST['title'];
    $caption = $_POST['caption'];
    $insertQuery = "insert into gallery(image,title,caption) values( '".$_FILES['img']['name']."','".$title."','".$caption."')";  
    $res = mysqli_query($conn, $insertQuery);
    
}  
if($res)  
{  
    header("Refresh: .1; url=../admn_gal.html");
    echo '<script type="text/JavaScript">
    // alert("Done!");
    localStorage.setItem("imageUpload","done");
    </script>';
}  
else  
{  
echo 'failed';  
} 
   
?>  