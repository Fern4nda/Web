<?php
include('conectar.php');

$register = filter_input(INPUT_POST, 'register', FILTER_SANITIZE_STRING);

    if ($register) {  
       // Se sim (retornou conteúdo em $bt), recebe os dados e tenta cadastrar... 
       $username = filter_input(INPUT_POST, 'username', FILTER_SANITIZE_STRING);
       $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_STRING);
       $senha = filter_input(INPUT_POST, 'senha', FILTER_SANITIZE_STRING);
       $birthday = filter_input(INPUT_POST, 'birthday', FILTER_SANITIZE_STRING);

    try {
        $ins = $conx->prepare("INSERT INTO $banco.$tabela (username, email, senha, birthday) 
                   VALUES (:username, :email, :senha, :birthday)");
        $ins->bindParam(':username', $username);  
        $ins->bindParam(':email', $email); 
        $ins->bindParam(':senha', $senha); 
        $ins->bindParam(':birthday', $birthday); 
        $ins->execute(); 
        
        header("Location: sucesso.html");
         
   }
   catch(PDOException $e) {
        echo  "Erro na inclusão: " . $e->getMessage();
   } 
}
 else {// ...se o botão não foi clicado, volta para o formulário com msg erro...
         header("Location: sucesso.html");
         
}
?>