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
                        $("#commune").removeAttr("value").attr("value",value.commune);
                        $("#entreprise").removeAttr("value").attr("value",value.entreprise);
                        $("#logo").removeAttr("value").attr("value",value.logo);
                        
                        $(".XP").removeAttr("disabled");
                        
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
                        $("#intitule").removeAttr("value").attr("value",value.intitule);
                        $("#moisDebut>option").each(function(){
                            if($(this).val()==debut[1])
                            {
                                $(this).removeAttr("selected");
                                $(this).attr('selected','selected');  
                            }
                        });
                        $("#anneeDebut>option").each(function(){
                            if($(this).val()==debut[0])
                            {
                                $(this).removeAttr("selected");
                                $(this).attr('selected','selected');  
                            }    
                        });
                        $("#moisFin>option").each(function(){
                            if($(this).val()==fin[1])
                            {
                                $(this).removeAttr("selected");
                                $(this).attr('selected','selected');
                            }
                        });
                        $("#anneeFin>option").each(function(){
                            if($(this).val()==debut[0])
                            {
                                $(this).removeAttr("selected");
                                $(this).attr('selected','selected');  
                            }    
                        });
                        
                        $(".mission").removeAttr("disabled");
                        $(".lien").removeAttr("disabled");
                    });
                    var i=0;
                    $.each(data.missions, function(key, value){
                        i++;
                        $("<option value='"+value.idmission+"'>"+i+"</option>").appendTo("#selectMission");
                    });
                    var j=0;
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
                        $("#texteMission").text(value.textemission);
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
                        $("#urlLien").removeAttr("value").attr("value", value.urlLien);
                    });
                   
                        },
                error: function(data){
                    console.log("prout");
                    console.log(data);
                }
            }); 
}
