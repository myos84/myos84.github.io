<?php

        require('./Model/inscription.php');
        require('./Model/connexion.php');

        function inscription() {

            $requete = newUser();

            require('view/inscriptionView.php');

        }

        function connexion(){

            $requete = auth();

            require('view/connexionView.php');

        }