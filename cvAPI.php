<?php
$servername = "localhost";
$username = "root";
$password = "root";
try {
    $conn = new PDO("mysql:host=$servername;dbname=cv;charset=utf8", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }

// QUELLES ACTIONS ?
// Initialisation -> peuple le select lieu
// selectLieu -> peuple la colonne Lieu , dégrise et peuple les trois selects restants sans les sélectionner,
    // goLieu -> update si cases non null et select précis OU insert
    // delLieu
// selectXP -> peuple la colonne selectXP, peuple les deux selects restants
    // goXP -> update si cases non null et select précis OU insert
    // delXP
// selectMission -> peuple le carré mission
    // goMission update si cases non null et select précis OU insert
    // delMission
// selectLien -> peuple le carré lien
    //goLien -> update si cases non null et select précis OU insert
    //delLien
?>

<?php

if(isset($_POST['action']))
{   
    //INITIALISATION
        if($_POST['action']=="initialisation")
        {
            $lieux=$conn->prepare("SELECT * FROM `lieu`");
            $lieux->execute(array());
            $tableauLieux=$lieux->fetchAll(PDO::FETCH_ASSOC);
            $arr = array("resultat"=>$tableauLieux);
		}
    //LIEUX
        if($_POST['action']=="selectLieu")
        {
            
        // On récupère la variable transmise par la requête ajax
            $idlieu=$_POST['selectLieu'];
            
        // On va chercher les variables pour peupler les texts de lieu    
            $lieu=$conn->prepare("SELECT * FROM `lieu` WHERE idlieu= ?");
            $lieu->execute(array($idlieu));
            $recapLieu=$lieu->fetchAll(PDO::FETCH_ASSOC);
        
        // On va chercher toutes les expériences correspondant au lieu
            $XPs=$conn->prepare("SELECT * FROM `experiences` WHERE idlieu= ?");
            $XPs->execute(array($idlieu));
            $tableauXPs=$XPs->fetchAll(PDO::FETCH_ASSOC);
            $arr = array("lieu"=>$recapLieu, "XPs"=>$tableauXPs);
		}
        if($_POST['action']=="goLieu")
        {
            $idLieu=$_POST["selectLieu"];
            $geoloc=$_POST["coord"];
            $entreprise=$_POST["entreprise"];
            $commune=$_POST["commune"];
            $logo=$_POST["logo"];
            // On vérifie d'abord s'il faut update ou insert un nouveau lieu
            if($idLieu=="none")
            {
                $insert=$conn->prepare("INSERT INTO `lieu` (geoloc, entreprise, commune, logo) VALUES (?, ?, ?, ?)");
                $insert->execute(array($geoloc, $entreprise, $commune, $logo));
                $arr = array("resultat"=>array($geoloc, $entreprise, $commune, $logo));
            }
            else
            {
                $update=$conn->prepare("UPDATE `lieu` SET geoloc= ? , entreprise = ? , commune = ? , logo = ? WHERE idlieu = ?");
                $update->execute(array($geoloc, $entreprise, $commune, $logo, $idlieu));
                $arr = array("resultat"=>array($idlieu, $geoloc, $entreprise, $commune, $logo));
            }
		}
        if($_POST['action']=="delLieu")
        {
            $idLieu=$_POST["selectLieu"];
            
            if($idLieu=!"none")
            {
                $delete=$conn->prepare("DELETE FROM `lieu` WHERE idlieu= ?");
                $delete=execute(array($idlieu));
                
                $arr = array("resultat"=>$idlieu);                
            }
            $arr = array("resultat"=>"ERREUR");
		}
    
    //EXPERIENCES
        if($_POST['action']=="selectXP")
        {
            $idXP=$_POST['selectXP'];
            
            $XP=$conn->prepare("SELECT * FROM `experiences` WHERE idexp = ?");
            $XP->execute(array($idXP));
            $recapXP=$XP->fetchAll(PDO::FETCH_ASSOC);
        
            $missions=$conn->prepare("SELECT * FROM `missions` WHERE idexp= ?");
            $missions->execute(array($idXP));
            $tableauMissions=$missions->fetchAll(PDO::FETCH_ASSOC);
            
            $liens=$conn->prepare("SELECT * FROM `liens` WHERE idexp= ?");
            $liens->execute(array($idXP));
            $tableauLiens=$liens->fetchAll(PDO::FETCH_ASSOC);
            
            $arr = array("XP"=>$recapXP, "missions"=>$tableauMissions, "liens"=>$tableauLiens);
		}
        if($_POST['action']=="goXP")
        {
            $idXP=$_POST["selectXP"];
            $idlieu=$_POST["selectLieu"];
            $intitule=$_POST["intitule"];
            $debut=$_POST["anneeDebut"]."-".$_POST["moisDebut"]."-01";
            $fin=$_POST["anneeFin"]."-".$_POST["moisFin"]."-01";
            
            if($idXP=="none")
            {
                
                $insert=$conn->prepare("INSERT INTO `experiences` (idlieu, intitule, debut, fin) VALUES (?, ?, ?, ?)");
                $insert->execute(array($idlieu, $intitule, $debut, $fin));
                $arr = array("resultat"=>array($idlieu, $intitule, $debut, $fin));
            }
            else
            {
                $update=$conn->prepare("UPDATE `experiences` SET idlieu= ? , intitule = ? , debut = ? , fin = ? WHERE idexp = ?");
                $update->execute(array($idlieu, $intitule, $debut, $fin, $idXP));
                $arr = array("resultat"=>array($idlieu, $intitule, $debut, $fin, $idXP));
            }
		}
        if($_POST['action']=="delXP")
        {
            $idXP=$_POST["selectXP"];
            
            if($idXP=!"none")
            {
                $delete=$conn->prepare("DELETE FROM `experiences` WHERE idexp= ?");
                $delete=execute(array($idXP));
                
                $arr = array("resultat"=>$idXP);                
            }
		}
    
    //MISSIONS
        if($_POST['action']=="selectMission")
        {
            $idMission=$_POST['selectMission'];
            
            $mission=$conn->prepare("SELECT * FROM `missions` WHERE idmission = ?");
            $mission->execute(array($idMission));
            $recapMission=$mission->fetchAll(PDO::FETCH_ASSOC);
            
            $arr = array("mission"=>$recapMission);
		}
        if($_POST['action']=="goMission")
        {
            $idMission=$_POST["selectMission"];
            $idExp=$_POST["selectXP"];
            $texteMission=$_POST["texteMission"];
            
            if($idMission=="none")
            {
                $insert=$conn->prepare("INSERT INTO `missions` (idexp, textemission) VALUES (?, ?)");
                $insert->execute(array($idExp, $texteMission));
                $arr = array("resultat"=>array($idExp, $texteMission));
            }
            else
            {
                $update=$conn->prepare("UPDATE `missions` SET idexp= ? , textemission = ? WHERE idmission = ?");
                $update->execute(array($idExp, $texteMission, $idMission));
                $arr = array("resultat"=>array($idExp, $texteMission, $idMission));
            }
		}
        if($_POST['action']=="delMission")
        {
            $idMission=$_POST["selectMission"];
            if($idMission=!"none")
            {
                $delete=$conn->prepare("DELETE FROM `missions` WHERE idmission= ?");
                $delete=execute(array($idMission));
                
                $arr = array("resultat"=>$idMission);                
            }
		}
    
    //LIENS
        if($_POST['action']=="selectLien")
        {
            $idLien=$_POST['selectLien'];
            
            $lien=$conn->prepare("SELECT * FROM `liens` WHERE idlien = ?");
            $lien->execute(array($idLien));
            $recapLien=$lien->fetchAll(PDO::FETCH_ASSOC);
            $arr = array("lien"=>$recapLien);
		}
        if($_POST['action']=="goLien")
        {
            $idLien=$_POST["selectLien"];
            $idExp=$_POST["selectXP"];
            $intituleLien=$_POST["intituleLien"];
            $urlLien=$_POST["urlLien"];
            
            if($idLien=="none")
            {
                $insert=$conn->prepare("INSERT INTO `liens` (idexp, intituleLien, urlLien) VALUES (?, ?, ?)");
                $insert->execute(array($idExp, $intituleLien, $urlLien));
                $arr = array("resultat"=>array($idExp, $intituleLien, $urlLien));
            }
            else
            {
                $update=$conn->prepare("UPDATE `liens` SET idexp= ? , intituleLien = ? , urlLien = ? WHERE idlien = ?");
                $update->execute(array($idExp, $intituleLien, $urlLien, $idLien));
                $arr = array("resultat"=>array($idExp, $intituleLien, $urlLien, $idLien));
            }
		}
        if($_POST['action']=="delLien")
        {
            $idLien=$_POST["selectLien"];
            if($idLien=!"none")
            {
                $delete=$conn->prepare("DELETE FROM `liens` WHERE idlien= ?");
                $delete=execute(array($idLien));
                
                $arr = array("resultat"=>$idLien);                
            }
		}

        echo json_encode($arr);
}
?>