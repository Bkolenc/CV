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

function 