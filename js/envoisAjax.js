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

function selectLieu(selectLieu)
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
                    });
                    
                    $.each(data.XPs, function(key, value){
                        console.log(key);
                        console.log(value);
                        $("<option value='"+value.idexp+"'>"+value.intitule+"</option>").appendTo("#selectXP");
                    });
                        },
                error: function(data){
                    console.log("prout");
                    console.log(data);
                }
            }); 
}
