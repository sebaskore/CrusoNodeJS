
    let Curso1={
        id:1,
        nombre:"Programacion POO",
        duracion: 12,
        valor:25000

    };
    let Curso2={
        id:1,
        nombre:"ReactJS",
        duracion: 25,
        valor:25000

    };
    let Curso3={
        id:1,
        nombre:"Bases de datos",
        duracion: 80,
        valor:25000

    };
    
    let Cursos=[Curso1,Curso2,Curso3];
 


    function MostrarCurso(Curso) {
        return new Promise(resolve => {// se declara promesa
          setTimeout(() => {
            resolve("Id:"+Curso.id+" Nombre:"+Curso.nombre+" Duracion:"+Curso.duracion+" Valor:"+Curso.valor);
          }, 2000);
        });
      }


    // let MostrarCurso=(Curso,callback)=>{ 
    //     setTimeout(function() {
    //         let resultado="Id:"+Curso.id+" Nombre:"+Curso.nombre+" Duracion:"+Curso.duracion+" Valor:"+Curso.valor;
            
    //         callback(resultado); 
    //         }, 2000);
        
    //     };

    module.exports={
        MostrarCurso,
        Cursos
        
        }