// Abrir paginas
const abrir = (valor) => {
        // Define un objeto que mapea los nombres de las páginas a sus URLs
        let paginas = {
            'Inicio' : 'index.html',
            'Tienda' : '',
            'Juegos' : '',
            'Videos' : '',
            'Libros' : ''
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
    
console.log("hola")