




const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  const CursosReq = require('./Cursos.js');

    index();

  function index(){
  
  readline.question(`Que desea realizar? 1->Listar Cursos   2->Matricular Curso  3->Salir  :  `, (accion) => {
   
    switch (accion){
        case '1':
        
            Listar();
            
        break;
        case '2':
            matricular();
        break;
        case '3':

        break;

        default:

        break;

    };
    //readline.close();
  });
}

async function matricular(){

    let flag=1;
    let id;
    let Nombre;
    let Cedula;
    let aux=0;
    while (flag==1){
        id =  await Preguntar("Ingrese el ID del curso que desea matricular: ")
        
       for(i=0; i< CursosReq.Cursos.length;i++){
           
            if(CursosReq.Cursos[i].id==id){flag=0;
                aux=i;
            }

       }
       if(flag==1){console.log("Error: el Id ingresado no es valido por favor ingreselo nuevamente")}
    }
    
console.log(`El curso seleccionado es: ${CursosReq.Cursos[aux].nombre} con una duracion de: ${CursosReq.Cursos[aux].duracion} y un valor de: ${CursosReq.Cursos[aux].valor}`)

     flag=1;
    while (flag==1){
         Nombre=  await Preguntar("Ingrese su nombre: ");
    
       if(Nombre.trim()!=""){flag=0;}
       if(flag==1){console.log("Error: el nombre ingresado no es valido por favor ingreselo nuevamente")}
    }
    flag=1;
    while (flag==1){
         Cedula=  await Preguntar("Ingrese su Cedula: ");
    
       if(Cedula.trim()!=""){flag=0;}
       if(flag==1){console.log("Error: el documento ingresado no es valido por favor ingreselo nuevamente")}
    }

}



async function Listar() {
    console.log("Bienvenido, a continuacion se listaran los cursos");
    for (let i = 0; i < CursosReq.Cursos.length; i++) {
        
        let resultado = await CursosReq.MostrarCurso(CursosReq.Cursos[i]); // await
        console.log(resultado);
        
    }
    index();
    
   
}


function Preguntar(Pregunta) {
   

    return new Promise(resolve => readline.question(Pregunta, ans => {
        //readline.close();
        
        resolve(ans);
    }))
}

// // requerimos la informacion
// opciones = {
//     Nombre: { default: 0, alias: 'm' },
//     ingles: { default: 0, alias: 'i' },
//     programacion: { demand: true, alias: 'p' }
// };

// opciones1 = {
//     IdCurso: { demand: true, alias: 'id' }

// };



// const argv = require('yargs')
//     .command('promedio', 'Caulcular promedio', opciones1)
//     .argv;

// //console.log(argv.matematicas);
// //console.log('el nombre del usuario es '+argv.nombre);
// console.log(argv);
// console.log((argv.m + argv.i + argv.p) / 3);
