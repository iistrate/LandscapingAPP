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
    $dest_file = $dir . $serviceName . '_' . '_' . $type . '_' . $id  . '_'. basename($filename);    
    
    if (move_uploaded_file($_FILES[$type]['tmp_name'], $dest_file)) {
        echo("Success");        
        $id++;
    }
    else {
        echo ("Error");
    }

?>