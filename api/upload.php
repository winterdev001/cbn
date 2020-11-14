<?php  
include 'config.php';
 if(!empty($_FILES))  
 {  
    $q = "SELECT * from admin where id = 1 ";
    $q_res = mysqli_query($conn,$q);
    $img = mysqli_fetch_assoc($q_res);
    $file = $_FILES['img']['name'];
    // echo $file;
    // echo $img['image'];
    if(mysqli_num_rows($q_res)!=0){
      unlink('uploads/'.$img['image']);
    } 
      
    $insertQuery = "UPDATE  admin SET image = '".$_FILES['img']['name']."' WHERE id = 1 and auth = 1";  
    $res = mysqli_query($conn, $insertQuery);
    if($res)  
    {  
      // echo 'File Uploaded Successfully';  
      $path = 'uploads/' . $_FILES['img']['name']; 
      move_uploaded_file($_FILES['img']['tmp_name'], $path); 
      header('Location: ../admin.html');
      echo '<script>alert("Done!")</script>'; 
    }  
    else  
    {  
      echo 'File Uploaded But Not Saved';  
    }  
     
 }  
 else  
 {  
    echo 'Error'.mysqli_error($conn);  
 } 
   
?>  