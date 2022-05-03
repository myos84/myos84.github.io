<?php

    $title = "Inscription";

    ob_start();

?>


<section>
<div class="container fw-bold">
    <div class="row">
        <div class="col-md-6 mx-auto">
            <form action="" method="POST" >
                <h1 class="text-center p-5">Inscription</h1>
                    <div class="card p-5">
                        <p>
                            <label for="pseudo" class="form-label">Pseudo :</label>
                            <input type="text" name="pseudo" id="pseudo" class="form-control">
                        </p>
                        <p>
                            <label for="email" class="form-label">Email :</label>
                            <input type="email" name="email" id="email" class="form-control">
                        </p>
                        <p>
                            <label for="password" class="form-label">Mot de passe :</label>
                            <input type="password" name="password" id="password" class="form-control">
                        </p>
                        <p>
                            <label for="password_two" class="form-label">Confirmer mot de passe :</label>
                            <input type="password" name="password_two" id="password_two" class="form-control">
                        </p>
                        <button type="submit" name="submit" class="btn btn-outline-dark w-50 d-block mx-auto m-3" >Envoyer</button>
                        <?php

                            if(isset($_GET['error']) && isset($_GET['message'])){
                                echo '<span class="text-danger rounded text-center">' .$_GET['message']. '</span>';
                            }
                            

                        ?>
                    </div>
            </form>
        </div>    
    </div>   
</div>
</section>


<?php

    $content = ob_get_clean();

    require('base.php');

?>