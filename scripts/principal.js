import { recorrerMejorContenido } from "../reutilizables/baseData/mejorContenido.js";
import { recorrerComicsData } from "../reutilizables/baseData/mejorContenido.js";
console.log(recorrerComicsData);

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

let X = 0;
function comicRecorrer()
        {
                        const contenido =  recorrerComicsData[X];
                        document.getElementById("genero_comic").innerHTML = contenido.genero;
                        document.getElementById("nombre_comic").innerHTML = contenido.nombre;
                        // btnBoton.href = contenido.enlace; 
                        // imagen.src = contenido.imagen;
                        X++;        
                        setTimeout(comicRecorrer, 4000);
                        if(X == 4){
                                X = 0;
                        }
        }
        comicRecorrer();