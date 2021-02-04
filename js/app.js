// para que el código se vea limpio se usa comillas sencillas en los strings
console.log("variable de número");

var num = 23;

console.log('================================');
console.log('TIPOS DE DATOS');
console.log('================================');

// 1-DATOS PRIMITIVOS
// comentario de linea ctrl+}]
/* comentario de bloque shift+alt+A */
console.log('==================');
console.log('Datos primitivos');
console.log('==================');

// sintáxis = forma correcta de escribir cóigo
// var = una palabra reservada (palabras propias del lenguaje)
// nombre de la variable = (edad)
// = asignando un valor (=) signo de asignación
// valor (30)
// ; siempre que finalizamos una línea o instrucción

/* NUMÉRICO: el valor va sin comillas */
var edad = 23;

/* STRING, ALFABETICO: el valor va entre comillas (pueden ser dobles o simples; las buenas prácticas
    nos recomiendan simples) */
    // Buena práctca. se ve más bonito
var nombre = 'Michelle'; 

    // Dobles comillas
// var nombre = "Michelle";

/* BOOLEANO: binario (0,1), (no, si), (falso, verdadero), (false, true) */
var quieresSerMiNovia = true;

console.log('==================');
console.log('Datos complejos');
console.log('==================');

// Un objeto es un tipo de dato complejo -> un dato complejo se compone de un conjunto (grupo de cosas )


var persona = {
    // atributo del objeto (persona)
    edad: 23,
    nombre: 'Michelle',
    apPaterno: 'Gonzalez',
    femenino: true,
    // a este último atributo ya no se le ponecoma  (,) ya que es el último
    rango: 120
}

/* EJEMPLO */
var hospital = {
    id: 122345,
    zona: 'norte',
    nombre: 'villa',
    nivel: 2,
    capacidad: 1000,
    camas: 1000,
    medicamento: {
        inyectable: 200,
        intravenoso: 300,
        ingerido: 200
    },
    tipo: 'público',
    personal: {
        planta: {
            medicos: {
                pasantes: 5,
                especialistas: 4
            },
            enfermeras: 200,
            camilleros: 200,
            intendencia: 20,
            limpieza: 20,
            adiministrativos: 30
        }
    },
    dir: {
        calle: 'ggg',
        numero: 67,
        alcaldia: 'GAM'
    }
}
