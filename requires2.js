// parte requires

// const estudiante1=require('./requires');

// console.log(estudiante1.Estudiante);
// console.log('El promedio del estudiante es:'+ estudiante1.obtenerPromedio(
// estudiante1.Estudiante.nota.ingles,
// estudiante1.Estudiante.nota.matematicas,
// estudiante1.Estudiante.nota.programacion

// ))

//parte destructuracion

// esto es para simplificar codigo destructuracion de objetos

const{Estudiante,obtenerPromedio}=require('./requires');

// console.log('El promedio del estudiante es:'+ obtenerPromedio(
// Estudiante.nota.ingles,
// Estudiante.nota.matematicas,
// Estudiante.nota.programacion

// ));

let {nombre,edad: anos,nota:{matematicas,ingles,programacion}}=Estudiante; 
// cuando ponemos los dos puntos darle un sinonimo  a la variable
// console.log('años ' + anos)
// console.log('El promedio del estudiante es:'+ obtenerPromedio(
//     ingles,
//     matematicas,
//     programacion
    
//     ));

    // librerias nativas de node js en este caso file System
    //siempre que importamos una libreria por lo general se crea una constante

    const fs = require('fs');

    let crearArchivo = (Estudiante)=>{

        texto='El nombre del estudiante es '+ Estudiante.nombre +'\n'+
        'ha obtenido el promedio de '+ obtenerPromedio(matematicas,ingles,programacion);
        fs.writeFile('promedio.txt',texto,(err)=>{
            if(err) throw(err);
            console.log('Se ha creado el archivo');
        });

    }
    //crearArchivo(Estudiante);

    // descargamos desde npm una libreria llamda yargs que nos permite ingresar por consola variable

    //const argv=require('yargs').argv;

    // ahora vamos a crear un comando

    opciones={matematicas:{default:0,alias:'m'},
              ingles:{default:0,alias:'i'},
              programacion:{demand: true,alias:'p'}                
};


    const argv=require('yargs')
    .command('promedio','Caulcular promedio',opciones)
    .argv;

    //console.log(argv.matematicas);
    //console.log('el nombre del usuario es '+argv.nombre);
    console.log(argv);
    console.log((argv.m+argv.i+argv.p)/3);