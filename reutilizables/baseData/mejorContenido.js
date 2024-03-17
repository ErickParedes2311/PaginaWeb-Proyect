import { contenidoData } from "./datos.js";
import { PeliculasData } from "./datos.js";

class mejorContenido {
        constructor(titulo, actor, precio, enlace,imagen){
                this.titulo = titulo;
                this.actor = actor;
                this.precio = precio;
                this.enlace = enlace;
                this.imagen = imagen;
        }
}

export const recorrerMejorContenido = contenidoData.map(x => new mejorContenido(x.titulo, x.actor, x.precio, x.enlace, x.imagen));

class peliculasContenido {
        constructor(imagen, nombre, descripcion, precio){
                this.imagen = imagen;
                this.nombre = nombre;
                this.descripcion = descripcion;
                this.precio = precio;
        }
}

export const recorrerPeliculasContenido = PeliculasData.map(y => new peliculasContenido(y.imagen, y.nombre, y.descripcion, y.precio));