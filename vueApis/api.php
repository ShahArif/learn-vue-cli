<?php
    include('./config.php');

    echo $method = $_SERVER['REQUEST_METHOD'];

    if($method == 'POST'){
        echo 'bhai post hai';

    }else if($method == 'GET'){
        echo 'nahi bhai get hai';
    }else{
        echo 'Sab galat ye to update hai';
    }
?>