<?php
    header("Content-Type: text/plain");
    static $id = 0;
    $type = '';
    $serviceName = $_POST['service'];
    
    //see what type of file we're dealing with
    if(isset($_FILES['before']['tmp_name'])) {
        $type = 'before';
    }
    elseif (isset($_FILES['after']['tmp_name'])) {
        $type = 'after';
    }
    

       
    //our directory
    $dir = 'data/pics/';
    $filename = strtolower($_FILES[$type]['name']);              
    
    $image = recreateImage($_FILES[$type]['tmp_name']);
    
    //if image creation succesfull
    if ($image) {
        $dest_file = $dir . $serviceName . '_' . '_' . $type . '_' . $id  . '_'. basename($filename);    
        //copy it as a jpeg to the location
        if (imagejpeg ($image, $dest_file)) {
            echo "Success uploading file";        
            $id++;
        }
        else {
            echo "Error uploading file";
        }
    }
    else {
        echo "Invalid image";
    }

    //creates an image from a string; unsecure to secure
    function recreateImage($unsecure) {
        $secure = imagecreatefromstring(file_get_contents($unsecure));
        return $secure;
    }
    
?>