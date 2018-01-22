initialisation();

$("#selectLieu").on("change",function(){
                        if($("select#selectLieu").val()=="none")
                            {
                                $("#coord").removeAttr("value");
                                $("#commune").removeAttr("value");
                                $("#entreprise").removeAttr("value");
                                $("#logo").removeAttr("value");
                            }
                        else
                            {
                                selectLieu($("select#selectLieu").val());
                            }
                        
                        });