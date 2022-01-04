<?php
     
$host = "127.0.0.1";     
$user = "root";             
$pass = "";                   
$banco = "cadastro"; 
$tabela = "usuarios"; 


try {
     $conx = new PDO("mysql:host=$host", $user, $pass);   
     $conx->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); 
     $criadb = "CREATE DATABASE $banco";
     $conx->exec($criadb);
     // echo "Database ok! <br>";
 }
 catch(PDOException $e) {
     // echo $criadb . "Falha na criação do DB:<br />" . 
     $e->getMessage();
 }  
 try {	
     $criatb = "CREATE TABLE $banco.$tabela (
       `id`           INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
       `username`      VARCHAR(50) NOT NULL,
       `email`      VARCHAR(50) NOT NULL,
       `senha`    VARCHAR(50) NOT NULL,
       `birthday` VARCHAR(15) NOT NULL)";
     $conx->exec($criatb);
     echo "Tabela ok!<br>"; 
 } 
 catch(PDOException $e) {
     // echo $criatb ."Falha Tabela:<br>". 
     $e->getMessage(); 
 }  

try {
    $conx = new PDO("mysql:host=$host;dbname=$banco", $user,$pass); 
     $conx->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); 
}
catch(PDOException $e) {
     // echo "Falha de conexão...<br />" . 
     $e->getMessage();
} 
?>
