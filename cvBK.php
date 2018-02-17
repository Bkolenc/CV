<?php
session_start();

?>
<!DOCTYPE html>
<html>
    <head>
        <title>Bienvenue sur le CV de Batiste Kolenc</title>
        <meta charset="utf-8" />
        <link rel="stylesheet" type="text/css" href="css/cvBK.css" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css"
   integrity="sha512-M2wvCLH6DSRazYeZRIm1JnYyh22purTM+FDB5CsyxtQJYeKq83arPe5wgbNmcFXGqiSH2XR8dT/fJISVA1r/zQ=="
   crossorigin=""/>
    </head>
    <header>
        <h1 class="leHeader">Batiste Kolenc, journaliste et développeur</h1><!-- @whitespace
    --> <div class="leHeader" id="leLogin">
            <?php
                if(isset($_SESSION["login"]))
                {
                    if($_SESSION["login"]=='bkolenc')
                    {
                        echo "<p>Bienvenue, moi</p>";
                        echo "<a href='cvLogout.php'>Logout</a>";
                    }
                }
                else
                {
                    echo "<a href='cvLogin.php' title='Login'>&#128274;</a>";
                }
            ?>
        </div>
    </header>
    <body>
        <div id="millepx">
            <h2>Expériences</h2>
            <div id="mapid"></div>
        </div>
            
    </body>
    
</html>
<script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"
   integrity="sha512-lInM/apFSqyy1o6s89K4iQUKg6ppXEgsVxT35HbzUupEVRh2Eu9Wdl4tHj7dZO0s1uvplcYGmt3498TtHq+log=="
   crossorigin=""></script>
    <script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>
<script src="js/progPrincipalCV.js">
        

</script>