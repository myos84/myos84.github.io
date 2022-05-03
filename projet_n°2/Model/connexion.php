<?php

    
    function auth() {

        if(!empty($_POST['email']) && !empty($_POST['password'])) {

            require_once('bdd.php');

            $email          = htmlspecialchars($_POST['email']);
            $password       = htmlspecialchars($_POST['password']);

            if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {

                header('location: ?page=connexion&error=1&message=Adresse email non valide');
                exit();

            }

            // Chiffrage password

            $password = "aq1".sha1($password."123")."25";

            // Verifier adresse email

            $req = $bdd->prepare('SELECT COUNT(*) as email FROM users WHERE email = ?');
            $req->execute([$email]);

            while($emailVerif = $req->fetch()) {

                if($emailVerif['email'] != 1) {

                    header('location: ?page=connexion&error=1&message=Impossible de vous identifier');
                    exit();

                }

            }

            // CONNEXION

            $req= $bdd->prepare('SELECT * FROM users WHERE email = ?');
            $req->execute([$email]);

            while($user = $req->fetch()){

                if($password == $user['password']) {

                    $_SESSION['connect'] = 1;
                    $_SESSION['email'] = $user['email'];

                    if(isset($_POST['auto'])) {

                        setcookie('auth', $user['secret'], time() + 365*24*3600, '/', null, false, true);

                    }

                    header('location: ?page=accueil&success=1');
                    exit();

                }
                else {

                    header('location: ?page=connexion&error=1&message=Impossible de vous identifier');
                    exit();

                }

            }


        }

    }