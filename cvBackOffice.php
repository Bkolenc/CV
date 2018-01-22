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
            <input type="text" id="coord" name="coord" placeholder="Coordonnées" />
            <input type="text" id="commune" name="commune" placeholder="Commune"/>
            <input type="text" id="entreprise" name="entreprise" placeholder="Entreprise" />
            <input type="text" id="logo" name="logo" placeholder="Chemin vers le logo" />
            <button type="button" id="goLieu" >OK</button>
            <button class="del" type="button" id="delLieu" >Del</button> 
        </form>
        
        <div class="blackLineContainer"><div class="blackLine" ></div></div>
        
        <form class="formu" id="formXp">
            <select id="selectXP" name="selectXP">
                <option value="none">Insérer ou choisir une expérience</option>
            </select>
            <input type="text" id="intitule" name="intitule" placeholder="Intitulé de l'expérience" />
            <div id="debut">
                <p> Début de l'expérience :
                <select class="date" id="moisDebut" name="moisDebut">
                    <?php
                    for($i=1; $i<=12; $i++)
                    {
                        echo "<option value='".$i."' >".$i."</option>";
                    }
                    ?>
                </select>
                <select class="date" id="anneeDebut" name="anneeDebut">
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
                <p> Fin de l'expérience :
                <select class="date" id="moisFin" name="moisFin">
                    <?php
                    for($i=1; $i<=12; $i++)
                    {
                        echo "<option value='".$i."' >".$i."</option>";
                    }
                    ?>
                </select>
                <select class="date" id="anneeFin" name="anneeFin">
                    <?php
                    for($i=2007; $i<=2050; $i++)
                    {
                        echo "<option value='".$i."' >".$i."</option>";
                    }
                    ?>
                </select>
                </p>
            </div>
            
            <button type="button" id="goXP" >OK</button>
            <button class="del" type="button" id="delXP" >Del</button> 
        </form>
        
        <div class="blackLineContainer"><div class="blackLine" ></div></div>
        <div id="divMission">
            <form class="formu" id="formMission">
                <select id="selectMission">
                    <option value="none">Insérer ou choisir une mission</option>
                </select>
            </form>
            <textarea cols="40" rows="5" id="texteMission" name="texteMission" placeholder="Description de la mission" ></textarea>
            <button type="button" id="goMission" >OK</button>
            <button class="del" type="button" id="delMission" >Del</button> 
            <div class="horizontalLine"></div>
            
            <select id="selectLien">
                <option value="none" >Sélectionnez ou insérez un nouveau lien</option>
            </select>
            <input type="text" id="intituleLien" name="intituleLien" placeholder="Intitulé du lien" />
            <input type="text" id="urlLien" name="urlLien" placeholder="URL du lien" />
            <button type="button" id="goLien" >OK</button>
            <button class="del" type="button" id="delLien" >Del</button> 
        </div>
    </body>
    <script src="js/progPrincipal.js" ></script>
</html>