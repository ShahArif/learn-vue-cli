<?php
    // DB Config file
    $host ="localhost";
    $dbname= "vueapis";
    $username ="root";
    $password ="logmein@1234";

    $connection = new mysqli ($host , $username ,$password , $dbname );
    if($connection->connect_error){
        echo ('Invalid DB Connection');
    } else{
        echo "Conncted Successfully";
    }
?>