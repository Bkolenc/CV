<!DOCTYPE html>
<html>
    <head>
        <title>Backoffice CV Batiste Kolenc</title>
        <meta charset="utf-8" />
        <link rel="stylesheet" type="text/css" href="css/backoffice.css" />
    </head>
    <script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>
    <script src="js/envoisAjax.js" ></script>
    
    <body>
        <h2>Insérez ou modifiez une expérience</h2>
        
        <form class="formu" id="formLieu">
            <select id="selectLieu" name="selectLieu">
                <option value="none">Insérer ou choisir un lieu</option>
            </select>
            <input type="text" class="lieu" id="coord" name="coord" placeholder="Coordonnées" />
            <input type="text" class="lieu" id="commune" name="commune" placeholder="Commune"/>
            <input type="text" class="lieu" id="entreprise" name="entreprise" placeholder="Entreprise" />
            <input type="text" class="lieu" id="logo" name="logo" placeholder="Chemin vers le logo" />
            <button type="button" id="goLieu" class="go" >OK</button>
            <button class="del" type="button" id="delLieu" disabled="disabled" >Del</button> 
        </form>
        
        <div class="blackLineContainer"><div class="blackLine" ></div></div>
        
        <form class="formu" id="formXp">
            <select id="selectXP" class="XP" name="selectXP" disabled="disabled">
                <option value="none">Insérer ou choisir une expérience</option>
            </select>
            <input type="text" id="intitule" class="XP" name="intitule" placeholder="Intitulé de l'expérience" disabled="disabled" />
            <div id="debut">
                <p> Début :
                <select class="date XP" id="moisDebut" name="moisDebut" disabled="disabled">
                    <?php
                    for($i=1; $i<=12; $i++)
                    {
                        if ($i<10)
                        {
                            echo "<option value='0".$i."' >0".$i."</option>";
                        }
                        else
                        {
                            echo "<option value='".$i."' >".$i."</option>";
                        }
                        
                    }
                    ?>
                </select>
                <select class="date XP" id="anneeDebut" name="anneeDebut" disabled="disabled">
                    <?php
                    for($i=2007; $i<=2050; $i++)
                    {
                        echo "<option value='".$i."' >".$i."</option>";
                    }
                    ?>
                </select>
                </p>
            </div>
            <div id="fin">
                <p> Fin :
                <select class="date XP" id="moisFin" name="moisFin" disabled="disabled">
                    <?php
                    for($i=1; $i<=12; $i++)
                    {
                        if($i<10)
                        {
                            echo "<option value='0".$i."' >0".$i."</option>";
                        }
                        else
                        {
                            echo "<option value='".$i."' >".$i."</option>";
                        }
                        
                    }
                    ?>
                </select>
                <select class="date XP" id="anneeFin" name="anneeFin" disabled="disabled">
                    <?php
                    for($i=2007; $i<=2050; $i++)
                    {
                        echo "<option value='".$i."' >".$i."</option>";
                    }
                    ?>
                </select>
                </p>
            </div>
            
            <button type="button" id="goXP" class="XP go" disabled="disabled">OK</button>
            <button class="del" type="button" id="delXP" disabled="disabled">Del</button> 
        </form>
        
        <div class="blackLineContainer"><div class="blackLine" ></div></div>
        <div id="divMission">
            <form class="formu" id="formMission">
                <select id="selectMission" class="mission" disabled="disabled">
                    <option value="none">Insérer ou choisir une mission</option>
                </select>
            </form>
            <textarea cols="40" rows="5" id="texteMission" class="mission" name="texteMission" placeholder="Description de la mission" disabled="disabled" ></textarea>
            <button type="button" id="goMission" class="go mission" disabled="disabled" >OK</button>
            <button class="del" type="button" class="mission" id="delMission" disabled="disabled" >Del</button> 
            <div class="horizontalLine"></div>
            
            <select id="selectLien" class="lien" disabled="disabled">
                <option value="none" >Sélectionnez ou insérez un nouveau lien</option>
            </select>
            <input type="text" id="intituleLien" class="lien" name="intituleLien" placeholder="Intitulé du lien" disabled="disabled" />
            <input type="text" id="urlLien" class="lien" name="urlLien" placeholder="URL du lien" disabled="disabled" />
            <button type="button" id="goLien" class="go lien" disabled="disabled" >OK</button>
            <button class="del" type="button" id="delLien" disabled="disabled">Del</button> 
        </div>
    </body>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script src="js/progPrincipal.js" ></script>
</html>