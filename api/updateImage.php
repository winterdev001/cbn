<?php  
 $connect = mysqli_connect("localhost", "root", "", "cbn");  
    $id = $_POST['id'];
    // $title = $_POST['title'];
    // $caption = $_POST['caption'];  
    // $file = $_FILES['file']['name'];
    // echo $id .','.$title.','.$caption . ','.$file;
     
    $q = "SELECT * from gallery where id ='$id' ";
    $q_res = mysqli_query($connect,$q);
    $img = mysqli_fetch_assoc($q_res);
    // echo "old image is ".$img['image'];
    if(mysqli_num_rows($q_res) != 0){        
        $title = $_POST['title'];
        $caption = $_POST['caption'];
        $file = $_FILES['file']['name'];
        $insertQuery = "update gallery set image = '$file' , title = '$title' , caption = '$caption' where id = '$id'";  
        $res = mysqli_query($connect, $insertQuery);
        if($res){  
            unlink('gallery/'.$img['image']);
            $path = 'gallery/' . $_FILES['file']['name']; 
            move_uploaded_file($_FILES['file']['tmp_name'], $path); 
            exit('success');                    
        }  
        else {  
            echo 'Error'. $connect ->error;  
        }
        // $check = "select * from gallery where id = $id";
        // $check_res = mysqli_query($connect,$check);
        // $get_img = mysqli_fetch_assoc($check_res);
        // if($get_img['image'] == $file){
        //     echo 'success'; 
        // }   else {
        //     echo "no match";
        // } 

    }else {
        echo "failed";
    }  
   
?>  