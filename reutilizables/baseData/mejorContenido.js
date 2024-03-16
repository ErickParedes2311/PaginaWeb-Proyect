//@ts-check
const contenidoData = [
        {
                titulo: 'Joker: Follie a deux',
                actor: 'Joaquin Phoenix',
                precio: '50,00',
                enlace: 'https://es.wikipedia.org/wiki/Joker:_Folie_%C3%A0_Deux',
                imagen: 'img/joker.png'
        },
        {
                titulo: 'Deadpool 3',
                actor: ' Ryan Reynolds',
                precio: '25,00',
                enlace: 'https://www.espinof.com/fecha-de-estreno/deadpool-3-fecha-estreno-trailer-reparto-pelicula-marvel-protagonizada-ryan-reynolds',
                imagen: 'img/deadpool.png'
        },
        {
                titulo: 'Venom 3',
                actor: 'Tom Hardy',
                precio: '100,00',
                enlace: 'https://www.fotogramas.es/noticias-cine/a37978794/venom-3-fecha-estreno-argumento-reparto-trailer/',
                imagen: 'img/venom.png'
        },
        {
                titulo: 'Wonder Woman 3',
                actor: 'Gal Gadot',
                precio: '70,00',
                enlace: 'https://www.fotogramas.es/noticias-cine/a37983052/wonder-woman-3-gal-gadot-sinopsis-fecha-estreno-reparto-trailer/',
                imagen: 'img/wonderwoman.png'
        }
]

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