// Reutilizamos el nav
/* <div class="contenedor_nav" id="nav"></div> */
let html = `
        <nav class="nav_lateral">
                <img class="logo" src="../../img/logo.svg" alt="logo">
                <section class="nav_iconos">

                        <section class="iconos_v" id="inicio" onclick="abrir('Inicio')">
                                <img class="img_iconos" src="../../img/inicio.svg" alt="icono de inicio/home" title="Inicio">
                                <p class="info">Inicio</p>
                        </section>

                        <section class="iconos_v" id="tienda" onclick="abrir('Tienda')">
                                <img class="img_iconos" src="../../img/Tienda.svg" alt="icono de Tienda" title="Tienda">
                                <p class="info">Tienda</p>
                        </section>

                        <section class="iconos_v" id="juegos"       onclick="abrir('Juegos')">
                                <img class="img_iconos" src="../../img/gamer.svg" alt="icono de juego" title="Juegos">
                                <p class="info">Juegos</p>
                        </section>

                        <section class="iconos_v" id="videos"       onclick="abrir('Videos')">
                                <img class="img_iconos" src="../../img/play.svg" alt="icono de videos" title="Videos">
                                <p class="info">Videos</p>
                        </section>

                        <section class="iconos_v" id="libros"       onclick="abrir('Libros')">
                                <img class="img_iconos" src="../../img/libro.svg" alt="icono de libro" title="Libros">
                                <p class="info">Libros</p>
                        </section>
                        
                </section>
        </nav>
`
let contenedor = document.querySelector('#nav');
contenedor.insertAdjacentHTML('beforeend', html);

// Abrir paginas
const abrir = (valor) => {
        // Define un objeto que mapea los nombres de las páginas a sus URLs
        let paginas = {
            'Inicio' : '../../index.html',
            'Tienda' : 'paginas/tienda.html',
            'Juegos' : 'paginas/juegos/juegos.html',
            'Videos' : 'paginas/videos/videos.html',
            'Libros' : 'paginas/libros/libros.html'
        }
    
        // Verifica si el valor está vacío, es indefinido, o no existe en el objeto paginas
        if(paginas[valor] === '' || !(valor in paginas)){
            // Si es así, muestra una alerta con el mensaje "Error"
            alert('La pagina aun no es agregada');
        }else{
            // Si no, abre la URL correspondiente en una nueva ventana o pestaña
            window.open(paginas[valor], '_blank');
        }
    }


