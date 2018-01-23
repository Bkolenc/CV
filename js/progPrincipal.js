initialisation();
function resetXP(){
    $("#selectXP > option").remove();
    $('<option value="none">Insérer ou choisir une expérience</option>').appendTo("#selectXP");
    
    $(".XP").attr("disabled","disabled").removeAttr("value");
    
    
};
function resetMission(){
    $("#selectMission > option").remove();
    $('<option value="none">Insérer ou choisir une mission</option>').appendTo("#selectMission");
    $(".mission").attr("disabled","disabled").removeAttr("value");
    $("#texteMission").text("");
};
function resetLien(){
    $("#selectLien > option").remove();
    $('<option value="none">Insérer ou choisir un lien</option>').appendTo("#selectLien");
    $(".lien").attr("disabled","disabled").removeAttr("value");
}


$("#selectLieu").on("change",function(){
                        if($("select#selectLieu").val()=="none") // Si on sélectionne none
                            {
                                // On clear les inputs de lieux
                                $("#coord").removeAttr("value");
                                $("#commune").removeAttr("value");
                                $("#entreprise").removeAttr("value");
                                $("#logo").removeAttr("value");
                                
                                resetXP();
                                resetMission();
                                resetLien();
                            }
                        else
                            {
                                selectLieu($("select#selectLieu").val());
                            }
                        
                        });

$("#selectXP").on("change",function(){
                        if($("select#selectXP").val()=="none")
                            {
                                
                                resetMission();
                                resetLien();
                            }
                        else
                            {
                                selectXP($("select#selectXP").val());
                            }
                        
                        });

$("#selectMission").on("change",function(){
    if($("select#selectMission").val()!="none")
    {
        selectMission($("select#selectMission").val())        
    }
});

$("#selectLien").on("change",function(){
    if($("select#selectLien").val()!="none")
    {
        selectLien($("select#selectLien").val())        
    }
});