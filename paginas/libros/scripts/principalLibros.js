import { recorrerComicsData } from "./../../../reutilizables/baseData/mejorContenido.js";

let datos = recorrerComicsData;

function recorrerData ()
{
        for(let index = 0; index < datos.length; index++)
        {
                const contenido = datos[index];
                console.log(contenido);
                // contenedor
                const contenedorPeliculas = document.createElement('div');
                contenedorPeliculas.classList.add('contenedor_carta_recorrer');

                //imagenes
                const imagen = document.createElement('img');
                imagen.src = contenido.imagen
                imagen.alt = " "
                imagen.classList.add('imagen_carta_recorrer');

                // nombre
                const nombrePelicula = document.createElement("b");
                nombrePelicula.textContent = contenido.nombre;
                nombrePelicula.classList.add('nombre_carta_recorrer');

                //detalles y precio
                const enlaceDetalles = document.createElement("a");
                enlaceDetalles.href = "#";
                enlaceDetalles.classList.add("detalles_carta_recorrer");

                // span precio
                const precio = document.createElement("span");
                precio.textContent =  `$${contenido.precio}`;

                enlaceDetalles.appendChild(precio);
                contenedorPeliculas.appendChild(imagen);
                contenedorPeliculas.appendChild(nombrePelicula);
                contenedorPeliculas.appendChild(enlaceDetalles);

                let carta = document.querySelector(".content_carta_contenido")
                carta.appendChild(contenedorPeliculas);
        }
};
recorrerData()