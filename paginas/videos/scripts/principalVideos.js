import { recorrerPeliculasContenido } from "../../../reutilizables/baseData/mejorContenido.js";

function peliculas ()
{
        for(let index = 0; index < recorrerPeliculasContenido.length; index++)
        {
                const contenido = recorrerPeliculasContenido[index];
    console.log(contenido);
    // contenedor
        const contenedorPeliculas = document.createElement('div');
        contenedorPeliculas.classList.add('contenedor_peliculas');

        //imagenes
        const imagen = document.createElement('img');
        imagen.src = contenido.imagen
        imagen.alt = " "
        imagen.classList.add('imagen_video');

        // nombre
        const nombrePelicula = document.createElement("b");
        nombrePelicula.id = "nombre";
        nombrePelicula.textContent = contenido.nombre;
        nombrePelicula.classList.add('nombre');

        //detalles y precio
        const enlaceDetalles = document.createElement("a");
        enlaceDetalles.href = "#";
        enlaceDetalles.classList.add("detalles");

        // span precio
        const precio = document.createElement("span");
        precio.textContent = contenido.precio;

        enlaceDetalles.appendChild(precio);
        contenedorPeliculas.appendChild(imagen);
        contenedorPeliculas.appendChild(nombrePelicula);
        contenedorPeliculas.appendChild(enlaceDetalles);

        let videos = document.getElementById("videos_cont")
        videos.appendChild(contenedorPeliculas);
        }
};
peliculas()