<?php

    function newUser() {

        require_once('bdd.php');
            
        if(!empty($_POST['pseudo']) && !empty($_POST['email']) && !empty($_POST['password']) && !empty($_POST['password_two'])) {

            $pseudo         =       htmlspecialchars($_POST['pseudo']);
            $email          =       htmlspecialchars($_POST['email']);
            $password       =       htmlspecialchars($_POST['password']);
            $passwordTwo    =       htmlspecialchars($_POST['password_two']);

            if($password != $passwordTwo) {

                header('location: ?page=inscription&error=1&message=Mot de passe différents');
                exit();

            }

            if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {

                header('location: ?page=inscription&error=1&message=Adresse email non valide');
                exit();

            }

            // L'adresse email est-elle en doublon ?
            $req = $bdd->prepare('SELECT COUNT(*) as numberEmail FROM users WHERE email = ?');
            $req->execute([$email]);

            while($emailVerification = $req->fetch()) {

                if($emailVerification['numberEmail'] != 0) {

                    header('location: ?page=inscription&error=1&message=Votre adresse email est déjà utilisée par un autre utilisateur.');
                    exit();

                }

            }

            // Chiffrement du mot de passe
            $password = "aq1".sha1($password."123")."25";

            // Secret
            $secret = sha1($email).time();
            $secret = sha1($secret).time();

            $requete = $bdd->prepare('INSERT INTO users(pseudo, email, password, secret) VALUES(?, ?, ?, ?)');
            $requete->execute([$pseudo, $email, $password, $secret]);

            header('location: ?page=connexion&success=1&message=Vous pouvez désormais vous connecter Bienvenue');
            exit();

        }

        }

        
    