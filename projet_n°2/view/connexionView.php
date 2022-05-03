<?php

    $title = "Connexion";
    
    ob_start();
    
?>
        <section>
           <div class="container">
               <div class="row">
                   <div class="col-md-6 mx-auto">
                   <form action="" method="POST">
                    <h1 class="text-center p-5">Connexion</h1>
                <div class="card p-5" >
                    <?php
                        if(isset($_GET['success']) && isset($_GET['message'])){
                            echo '<span class="text-success rounded text-center">' .$_GET['message']. '</span>';
                        }
                    ?>
                    <p>
                        <label for="email" class="form-label fw-bold">Email :</label>
                        <input type="text" name="email" id="email" class="form-control">
                    </p>
                    <p>
                        <label for="password" class="form-label fw-bold">Mot de passe :</label>
                        <input type="password" name="password" id="password" class="form-control">
                    </p>
                    <button type="submit" class="btn btn-outline-dark w-50 d-block mx-auto mt-3">Connexion</button>

                    <?php

                        if(isset($_GET['error']) && isset($_GET['message'])) {
                            echo '<span class="text-danger rounded text-center mt-3">' .$_GET['message']. '</span>';
                        }

                    ?>
                </div>
                </form>
                </div>
                </div>
           </div>
        </section>
    <!-- <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
</body>
</html> -->

<?php

    $content = ob_get_clean();

    require('base.php');

?>