var typed = new Typed('.typed', {

        // strings: [
        //     '<i class="escritura">Gato</i>',
        //     '<i class="escritura">Perro</i>',
        //     '<i class="escritura">Conejo</i>'
        // ],

        stringsElement: '#escribir',    // Id del element que contiene las cadenas de texto
        typeSpeed: 75,                  // Velocidad en ms para colocar una letra 
        startDelay: 300,                // Tiempo de retraso en iniciar la animacion
        backSpeed: 75,                  // Velocidad en ms para borrar una letra
        smartBackspace: true,           // Eliminar solamente las palabras que sean nuevas en la cadena de texto
        shuffle: false,                 // Alterar el orden en que se escriben las palabras
        backDelay: 1500,                // Tiempo de espera deespues de que termina de escribir una palabra
        loop: true,                     // Repetir el array de strings
        loopCount: false,               // Cantidad de veces a repetir el array => false = infinito loop
        showCursor: true,               // mostrar cursor palpitante " | "
        cursorChar: '|',                // Caracter para el cursor
        contentType: 'html'             // para mostrar solo el contenido y no las etiquetas html
    }

);