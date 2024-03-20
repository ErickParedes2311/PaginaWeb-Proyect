import { contenidoData } from "./datos.js";
import { PeliculasData } from "./datos.js";
import { juegosData } from "./datos.js";
import { comicsData } from "./datos.js";

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

class nomString {
        constructor(imagen, nombre, descripcion, precio,genero){
                this.imagen = imagen;
                this.nombre = nombre;
                this.descripcion = descripcion;
                this.precio = precio;
                this.genero = genero;
        }
}

export const recorrerPeliculasContenido = PeliculasData.map(y => new nomString(y.imagen, y.nombre, y.descripcion, y.precio));
export const recorrerJuegosData = juegosData.map(z => new nomString(z.imagen, z.nombre, z.descripcion, z.genero, z.precio));
export const recorrerComicsData = comicsData.map(a => new nomString(a.imagen, a.genero, a.nombre, a.precio, a.descripcion));