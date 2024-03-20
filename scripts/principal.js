import { recorrerMejorContenido } from "../reutilizables/baseData/mejorContenido.js";
console.log(recorrerMejorContenido);

let A = 0;

let btnBoton = document.getElementById("env_btn_comprar");
let imagen = document.getElementById("imagen");
        function mejorContenidoRecorrer()
        {
                        const contenido =  recorrerMejorContenido[A];
                        document.getElementById("titulo").innerHTML = contenido.titulo;
                        document.getElementById("descripcion").innerHTML = contenido.actor;
                        document.getElementById("precio").innerHTML = `$${contenido.precio}`;
                        btnBoton.href = contenido.enlace; 
                        imagen.src = contenido.imagen;
                        A++;        
                        setTimeout(mejorContenidoRecorrer, 4000);
                        if(A == 4){
                                A = 0;
                        }
        }
        mejorContenidoRecorrer();

