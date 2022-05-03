<?php
    
    require('controller/controller.php');
    

        try{
            if(isset($_GET['page'])) {

                if($_GET['page'] == 'accueil'){
                    require('./view/accueil.php');
                }
                if($_GET['page'] == 'connexion'){
                    connexion();
                }
                if($_GET['page'] == 'inscription'){
                    inscription();
                }
                
            }
            else {
                require('./view/accueil.php');
            }
        }
        catch(Exception $e){
            $error = $e->getMessage();
            require('./view/error.php');
        }