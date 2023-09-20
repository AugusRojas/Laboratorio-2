document.addEventListener("DOMContentLoaded", function()
{


    var selection;

    selection = document.getElementById("selection");
    var rango = document.getElementById("rango");
    
    selection.addEventListener("change", function()
    {
        if(selection.value == "opcion1"){
    
        
        }
        else if(selection.value == "opcion2")
        {
            alert("Carne");
        }

        else if(selection.value == "opcion3"){
            alert("Pescado");
        }

        else if(selection.value == "opcion4"){
            alert("Pollo");
        }
        else if(selection.value == "opcion5"){

        alert("Gaseosa");
        }
        else if(selection.value == "opcion6"){
            alert("Queso");
        }
        

      



    })
    
    rango.addEventListener("input", function(){

        let minimo = parseInt(rango.min);
        let maximo = parseInt(rango.max);
        if(parseInt(rango.value) == minimo)
            {
                alert("Izquierda");
            }
        else if(parseInt(rango.value) == maximo){
            alert("Derecha");
        }

       
        
       })
 
    
  



}

)