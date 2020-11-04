<?php  
 $connect = mysqli_connect("localhost", "root", "", "cbn");  
 if(!empty($_FILES))  
 {  
    $path = 'uploads/' . $_FILES['file']['name'];  
    if(move_uploaded_file($_FILES['file']['tmp_name'], $path))  
    {  
      $insertQuery = "UPDATE  admin SET image = '".$_FILES['file']['name']."' WHERE id = 1";  
      $res = mysqli_query($connect, $insertQuery);
      if($res)  
      {  
        echo 'File Uploaded Successfully';  
      }  
      else  
      {  
        echo 'File Uploaded But Not Saved';  
      }  
   }  
 }  
 else  
 {  
      echo 'Error';  
 }  
?>  