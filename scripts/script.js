// Abrir paginas
const abrir = (valor) => {
        // Define un objeto que mapea los nombres de las páginas a sus URLs
        let paginas = {
            'Inicio' : 'index.html',
            'Tienda' : 'paginas/tienda/tienda.html',
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
            window.open(paginas[valor], '_self');
        }
    }

const notificacionesContent = document.querySelector('.notificaciones');
const notifi = document.querySelector('.content_emergent_notificaciones');
 // Agregar evento de clic al a notificacions para que venga la hoja
    notificacionesContent.addEventListener('click', () => {
            // Mostrar el contenedor
                notifi.style.cssText = 'right: 0;';
        })


const perfilContent = document.querySelector('.perfilContent');
const perfil = document.querySelector('.content_emergent_perfil');
        perfilContent.addEventListener('click', () => {
            perfil.style.cssText = 'right: 0;';
        });

        // Agregar evento de clic al documento
document.addEventListener('click', (e) => {
    // Verificar si el clic fue fuera del contenedor de notificaciones
    if (!notificacionesContent.contains(e.target)) {
        // Ocultar el contenedor
        notifi.style.display = 'none';
    }
    
    if(!perfilContent.contains(e.target)){
        perfil.style.display = 'none';
    }
});
    
    
