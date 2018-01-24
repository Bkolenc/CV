function initialisation()
{
            $.ajax({   url:"cvAPI.php",
                type:"POST",
                data: "action=initialisation",
                dataType:'json',
                success: function (data) {
                    $.each(data.resultat, function(key, value){
                        console.log(key);
                        console.log(value);
                       $("<option value='"+value.idlieu+"'>"+value.entreprise+", "+value.commune+"</option>").appendTo("#selectLieu");
                    });
                        },
                error: function(data){
                    console.log("prout");
                }
            }); 
}

/////////////////////////
// Les selects
/////////////////////////

function selectLieu(selectLieu) // Actions quand on sélectionne un lieu
{
    var dataToPost="action=selectLieu&selectLieu="+selectLieu;
    $.ajax({   url:"cvAPI.php",
                type:"POST",
                data: dataToPost,
                dataType:'json',
                success: function (data) {
                    console.log(data);
                    $.each(data.lieu, function(key, value){
                        
                        $("#coord").removeAttr("value").attr("value",value.geoloc);
                        $("#coord:text").val(value.geoloc);
                        $("#commune").removeAttr("value").attr("value",value.commune);
                        $("#commune:text").val(value.commune);
                        $("#entreprise").removeAttr("value").attr("value",value.entreprise);
                        $("#entreprise:text").val(value.entreprise);
                        $("#logo").removeAttr("value").attr("value",value.logo);
                        $("#logo:text").val(value.logo);
                        
                        $(".XP").removeAttr("disabled");
                        $("#delLieu").removeAttr("disabled");
                        
                    });
                    
                    $.each(data.XPs, function(key, value){
                        
                        $("<option value='"+value.idexp+"'>"+value.intitule+"</option>").appendTo("#selectXP");
                    });
                        },
                error: function(data){
                    console.log("prout");
                    console.log(data);
                }
            }); 
}

function selectXP(selectXP) // Actions quand on sélectionne une expérience
{
    var dataToPost="action=selectXP&selectXP="+selectXP;
    $.ajax({   url:"cvAPI.php",
                type:"POST",
                data: dataToPost,
                dataType:'json',
                success: function (data) {
                    console.log(data);
                    $.each(data.XP, function(key, value){
                        console.log(value);
                        
                        var debut=value.debut.split("-");
                        var fin = value.fin.split("-");
                        $("#intitule").removeAttr("value");
                        $("#intitule:text").val(value.intitule);
                        $("#moisDebut>option").each(function(){
                            $(this).removeAttr("selected");
                            if($(this).val()==debut[1])
                            {
                                
                                $(this).attr('selected','selected').prop('selected','selected');  
                            }
                        });
                        $("#anneeDebut>option").each(function(){
                            $(this).removeAttr("selected");
                            if($(this).val()==debut[0])
                            {
                                
                                $(this).attr('selected','selected').prop('selected','selected');  
                            }    
                        });
                        $("#moisFin>option").each(function(){
                            $(this).removeAttr("selected");
                            if($(this).val()==fin[1])
                            {
                                
                                $(this).attr('selected','selected').prop('selected','selected');
                            }
                        });
                        $("#anneeFin>option").each(function(){
                            $(this).removeAttr("selected");
                            if($(this).val()==fin[0])
                            {
                                
                                $(this).attr('selected','selected').prop('selected','selected');  
                            }    
                        });
                        
                        $(".mission").removeAttr("disabled");
                        $(".lien").removeAttr("disabled");
                        $("#delXP").removeAttr("disabled");
                    });
                    var i=0;
                    $.each(data.missions, function(key, value){
                        i++;
                        $("<option value='"+value.idmission+"'>"+i+"</option>").appendTo("#selectMission");
                    });
                    var j=0
                    $.each(data.liens, function(key, value){
                        j++;
                        $("<option value='"+value.idlien+"'>"+j+"</option>").appendTo("#selectLien");
                    });
                        },
                error: function(data){
                    console.log("prout");
                    console.log(data);
                }
            }); 
}

function selectMission(selectMission)
{
    var dataToPost="action=selectMission&selectMission="+selectMission;
    $.ajax({   url:"cvAPI.php",
                type:"POST",
                data: dataToPost,
                dataType:'json',
                success: function (data) {
                    console.log(data);
                    $.each(data.mission, function(key, value){
                        console.log(value);
                        $("#texteMission").val(value.textemission);
                        $("#delMission").removeAttr("disabled");
                    });
                   
                        },
                error: function(data){
                    console.log("prout");
                    console.log(data);
                }
            }); 
}

function selectLien(selectLien)
{
    var dataToPost="action=selectLien&selectLien="+selectLien;
    $.ajax({   url:"cvAPI.php",
                type:"POST",
                data: dataToPost,
                dataType:'json',
                success: function (data) {
                    console.log(data.lien);
                    $.each(data.lien, function(key, value){
                        $("#intituleLien").removeAttr("value").attr("value",value.intituleLien);
                        $("#intituleLien:text").val(value.intituleLien);
                        $("#urlLien").removeAttr("value").attr("value", value.urlLien);
                        $("#urlLien:text").val(value.urlLien);
                        $("#delLien").removeAttr("disabled");
                    });
                   
                        },
                error: function(data){
                    console.log("prout");
                    console.log(data);
                }
            }); 
}

/////////////////////////
// Insertions/updates
/////////////////////////

function goLieu(selectLieu, coord, entreprise, commune, logo)
{
    var dataToPost="action=goLieu&selectLieu="+selectLieu+"&coord="+coord+"&entreprise="+entreprise+"&commune="+commune+"&logo="+logo;
    
    $.ajax({   url:"cvAPI.php",
                    type:"POST",
                    data: dataToPost,
                    dataType:'json',
                    success: function (data) {
                        console.log(data);
                        swal("Lieu inséré !");
                        resetLieu();
                        initialisation();
                            },
                    error: function(data){
                        console.log("prout");
                        console.log(data);
                    }
                }); 
}

function goXP(selectXP, selectLieu1, intitule, moisDebut, anneeDebut, moisFin, anneeFin)
{
    var dataToPost = "action=goXP&selectXP=" + selectXP + "&selectLieu=" + selectLieu1 + "&intitule=" + intitule + "&moisDebut=" + moisDebut + "&anneeDebut=" + anneeDebut + "&moisFin=" + moisFin + "&anneeFin=" + anneeFin;
    
    $.ajax({   url:"cvAPI.php",
                    type:"POST",
                    data: dataToPost,
                    dataType:'json',
                    success: function (data) {
                        console.log(data);
                        swal("Expérience insérée !");
                        resetXP();
                        selectLieu($("select#selectLieu").val());
                        

                            },
                    error: function(data){
                        console.log("prout");
                        console.log(data);
                    }
                }); 
}

function goMission(selectMission, selectXP1, texteMission)
{
    var dataToPost = "action=goMission&selectMission=" + selectMission + "&selectXP=" + selectXP1 + "&texteMission=" + texteMission;
    
    $.ajax({   url:"cvAPI.php",
                    type:"POST",
                    data: dataToPost,
                    dataType:'json',
                    success: function (data) {
                        console.log(data);
                        swal("Mission insérée !");
                        resetMission();
                        resetLien();
                        selectXP($("select#selectXP").val());

                            },
                    error: function(data){
                        console.log("prout");
                        console.log(data);
                    }
                }); 
}

function goLien(selectLien, selectXP1, intituleLien, urlLien)
{
    var dataToPost = "action=goLien&selectLien=" + selectLien + "&selectXP=" + selectXP1 + "&intituleLien=" + intituleLien + "&urlLien=" + urlLien;
    
    $.ajax({   url:"cvAPI.php",
                    type:"POST",
                    data: dataToPost,
                    dataType:'json',
                    success: function (data) {
                        console.log(data);
                        swal("Lien inséré !");
                        resetMission();
                        resetLien();
                        selectXP($("select#selectXP").val());
                        
                            },
                    error: function(data){
                        console.log("prout");
                        console.log(data);
                    }
                }); 
}