import { recorrerMejorContenido } from "../reutilizables/baseData/mejorContenido.js";
console.log(recorrerMejorContenido);

let index = 0;
let btnBoton = document.getElementById("env_btn_comprar");
let imagen = document.getElementById("imagen");
        function cambiarTexto()
        {
                        const contenido =  recorrerMejorContenido[index];
                        document.getElementById("titulo").innerHTML = contenido.titulo;
                        document.getElementById("descripcion").innerHTML = contenido.actor;
                        document.getElementById("precio").innerHTML = `$${contenido.precio}`;
                        btnBoton.href = contenido.enlace; 
                        imagen.src = contenido.imagen;
                        index++;        
                        setTimeout(cambiarTexto, 4000);
                        if(index == 4){
                                index = 0;
                        }
        }
        cambiarTexto();