<?php

    $title = "Accueil";

    ob_start();

?>

<h1>  Bienvenue  </h1>

<?php

    $content = ob_get_clean();

    require('base.php');

?>