initialisation();

/////////////////////////
// Les selects
/////////////////////////

$("#selectLieu").on("change",function(){
    if($("select#selectLieu").val()=="none") // Si on sélectionne none
    {
        // On clear les inputs de lieux
        $("#coord").removeAttr("value");
        $("#commune").removeAttr("value");
        $("#entreprise").removeAttr("value");
        $("#logo").removeAttr("value");
        $(".lieu:text").val("");
        
        resetXP();
        resetMission();
        resetLien();
        $("#delLieu").attr("disabled","disabled");
        $("#delXP").attr("disabled","disabled");
        $("#delMission").attr("disabled", "disabled");
        $("#delLien").attr("disabled", "disabled"); 
    }
    else
    {
        $("#coord").removeAttr("value");
        $("#commune").removeAttr("value");
        $("#entreprise").removeAttr("value");
        $("#logo").removeAttr("value");
        $(".lieu:text").val("");
        resetXP();
        resetMission();
        resetLien();
        selectLieu($("select#selectLieu").val());
    }
    
});

$("#selectXP").on("change",function(){
    if($("select#selectXP").val()=="none")
    {
        
        resetMission();
        resetLien();
        $(".XP").removeAttr("value");
        $(".XP:text").val("");
        $("#delXP").attr("disabled", "disabled");
        $("#delMission").attr("disabled", "disabled");
        $("#delLien").attr("disabled", "disabled");
        $(".date > option").each(function(){$(this).removeAttr("selected")});
    }
    else
    {
        resetMission();
        resetLien();
        selectXP($("select#selectXP").val());
    }
    
});

$("#selectMission").on("change",function(){
    if($("select#selectMission").val()!="none")
    {
        selectMission($("select#selectMission").val())        
    }
    else
    {
        $("#delMission").attr("disabled", "disabled");
        $("#texteMission").val("");
    }
});

$("#selectLien").on("change",function(){
    if($("select#selectLien").val()!="none")
    {
        
        selectLien($("select#selectLien").val())        
    }
    else
    {
        $(".lien:text").val("");
        $("#delLien").attr("disabled", "disabled");
        
    }
});

/////////////////////////
// Insertions/updates
/////////////////////////

$("#goLieu").on("click", function(){
    
    var selectLieu=$("select#selectLieu").val();
    var coord=$("#coord").val();
    var commune=$("#commune").val();
    var entreprise=$("#entreprise").val();
    var logo=$("#logo").val();
    console.log(entreprise);
    if (coord!="" && commune!="" && entreprise!="" && logo!="")
        {
            goLieu(selectLieu, coord, entreprise, commune, logo);
            initialisation();
        }
    else{
        swal("Tous les champs ne sont pas renseignés");
    }
    
});

$("#goXP").on("click", function(){
    var selectEXP=$("select#selectXP>option:selected").attr("value");
    var selectLieu1=$("select#selectLieu").val();
    var intitule=$("#intitule").val();
    var moisDebut=$("#moisDebut").val();
    var anneeDebut=$("#anneeDebut").val();
    var moisFin=$("#moisFin").val();
    var anneeFin=$("#anneeFin").val();
    if (intitule!="")
        {
            goXP(selectEXP, selectLieu1, intitule, moisDebut, anneeDebut, moisFin, anneeFin);
            console.log($("selectXP:selected").val());
            selectLieu($("select#selectLieu").val());
        }
    else{
        swal("Tous les champs ne sont pas renseignés");
    }
    
});

$("#goMission").on("click", function(){
    var selectMission=$("select#selectMission").val();
    var selectXP1=$("select#selectXP>option:selected").attr("value");
    var texteMission=$("#texteMission").val();
    if (texteMission!="")
    {
        goMission(selectMission, selectXP1, texteMission);
        selectXP($("select#selectXP").val()); 
    }
    else{
        swal("Tous les champs ne sont pas renseignés");
    }
    
});

$("#goLien").on("click", function(){
    var selectLien=$("select#selectLien").val();
    var selectXP1=$("select#selectXP>option:selected").attr("value");
    var intituleLien=$("#intituleLien").val();
    var urlLien=$("#urlLien").val();
    console.log(intituleLien+" "+urlLien);
    if(intituleLien!="" && urlLien!="")
    {
        goLien(selectLien, selectXP1, intituleLien, urlLien);
        selectXP($("select#selectXP").val());  
    }
    
    else{
        swal("Tous les champs ne sont pas renseignés");
    }
});

/////////////////////////
// Delete
/////////////////////////
$("#delLieu").on("click", function(){
    var selectLieu=$("select#selectLieu").val();
    console.log(selectLieu);
    deleteLieu(selectLieu);
});

$("#delXP").on("click", function(){
    var selectXP=$("select#selectXP").val();
    
    deleteXP(selectXP);
});

$("#delMission").on("click", function(){
    var selectMission=$("select#selectMission").val();
    
    deleteMission(selectMission);
});

$("#delLien").on("click", function(){
    var selectLien=$("select#selectLien").val();
    
    deleteLien(selectLien);
});

/////////////////////////
// Fonctions diverses
/////////////////////////

function resetLieu(){
    $("#selectLieu > option").remove();
    $('<option value="none">Insérer ou choisir un Lieu</option>').appendTo("#selectLieu");
    $("#coord").removeAttr("value");
        $("#commune").removeAttr("value");
        $("#entreprise").removeAttr("value");
        $("#logo").removeAttr("value");
        $(".lieu:text").val("");
        
        resetXP();
        resetMission();
        resetLien();
        $("#delLieu").attr("disabled","disabled");
        $("#delXP").attr("disabled","disabled");
        $("#delMission").attr("disabled", "disabled");
        $("#delLien").attr("disabled", "disabled"); 
}

function resetXP(){
    $("#selectXP > option").remove();
    $('<option value="none">Insérer ou choisir une expérience</option>').appendTo("#selectXP");
    
    $(".XP").attr("disabled","disabled").removeAttr("value");
    $("#intitule:text").val("");
    $(".date > option").removeAttr("selected").each(function(){if($(this).val()=="01"||$(this).val()==2007){$(this).attr("selected","selected")}});
};
function resetMission(){
    $("#selectMission > option").remove();
    $('<option value="none">Insérer ou choisir une mission</option>').appendTo("#selectMission");
    $(".mission").attr("disabled","disabled").removeAttr("value");
    $(".mission:text").val("");
    $("#texteMission").val("");
    
};
function resetLien(){
    $("#selectLien > option").remove();
    $('<option value="none">Insérer ou choisir un lien</option>').appendTo("#selectLien");
    $(".lien").attr("disabled","disabled").removeAttr("value");
    $(".lien:text").val("");
}