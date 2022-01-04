<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="css/style2.css" />
   <title>Listar</title>
</head>
<body>

<div class="container-lista">
<h2>Usuários Cadastrados</h2>
<?php  
   require('conectar.php');
   try { 
     $sel = "SELECT * from $banco.$tabela order by id desc";

     foreach($conx->query($sel) as $linha_array) {
         echo "<div class='item'>";
         echo "<p><b>ID</b>: ". $linha_array['id'] ."</p>";
         echo "<p><b>Nome</b>: ". $linha_array['username'] ."</p>";
         echo "<p><b>E-mail</b>: ". $linha_array['email'] ."</p>";
         echo "<p><b>Senha</b>: ". $linha_array['senha'] ."</p>";
         echo "<p><b>Data Nasc. </b>: ". $linha_array['birthday'] ."</p>";
         echo "</div>";
         
      }
   
   }
   catch (PDOException $e) {
	echo "Consulta falha...<br />" . $e->getMessage();	
     }

     $conx = null;     // Null encerra a conexão 
 ?>

</div>


</body>
</html>

