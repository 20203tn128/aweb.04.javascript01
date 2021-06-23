
        var fecha = new Date();
        var horas= fecha.getHours();
        if(horas<12){
            alert("Bienvenid@ buenos dias,ingresa los datos solicitado...");
        }else{
            if(horas<18){
                alert("Bienvenid@, buenas tardes ingresa los datos solicitado...");
            }else{
                if(horas<2359){
                    alert("Bienvenid@,buenas noches ingresa los datos solicitado...");
                }
            }
        }
    var nombre ="";
    var edad = 0;
    var localidad = "";
    var profesion = "";
    nombre = prompt("¿Cual es tu nombre?");
    edad = prompt("¿cual es tu edad ?");
    localidad = prompt("¿Cual es tu localidad?");
    profesion = prompt ("¿Cual es tu profesion?");
    
    var respuesta = confirm("¿Los datos son correctos?"+
                              "\n Nombre: "+nombre+    
                              "\n Edad: "+edad+ 
                              "\n Localidad: "+localidad+
                              "\n Profesion: "+profesion  );
    if (respuesta){
        alert("Dijo que si");
        document.writeln("<center>");

        document.writeln("<table border='1'>");
            //Renglon1
        document.writeln("<tr>");
            //col1
            document.writeln("<td rowspan='4' >");
           document.writeln("Foto");
             document.writeln("</td>");
             //col2
             document.writeln("<td>");
                document.writeln("<b>Nombre:</b> <p id='nombre'>" +nombre+ "</p>");
             document.writeln("</td>");
        document.writeln("</tr>");
        //renglo n2
        document.writeln("<tr>");
            //col2
            document.writeln("<td>");
                document.writeln("<b>Edad: </b> "+edad+" años");
             document.writeln("</td>");
         document.writeln("</tr>");
         //renglon 3
         document.writeln("<tr>");
            //col2
            document.writeln("<td>");
                document.writeln("<b>Localidad: </b>" +localidad);
             document.writeln("</td>");
            document.writeln("</tr>");
            //renglon 4
            document.writeln("<tr>");
            //col2
            document.writeln("<td>");
                document.writeln("<b>Profesion: </b>"+profesion);
             document.writeln("</td>");
            document.writeln("</tr>");
        document.writeln("</table>");
        document.writeln("</center>");
        var btn=document.createElement("button");
        btn.textContent ="Cambiar nombre";
        btn.setAttribute("type","button");
        btn.setAttribute("class","btn btn-success");
        btn.setAttribute("onclick","cambiarNombre()");

        var br = document.createElement("br");
       
        var ctrlNombre = document.createElement("input");
        ctrlNombre.setAttribute("type","text");
        ctrlNombre.setAttribute("id","ctrl-nombre");
      
        document.body.appendChild(ctrlNombre);
        document.body.appendChild(br);
        document.body.appendChild(btn);




    }else {
        alert("Gracias por visitarnos,vuelve pronto");
    }
    function cambiarNombre(){

       var ctNombre= document.getElementById("ctrl-nombre");
       var nombre= document.getElementById("nombre");
       console.log(nombre);
       nombre.innerHTML = ctNombre.value;
    }
