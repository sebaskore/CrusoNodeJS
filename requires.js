let Estudiante ={
    nombre:"Juan",
    edad:25,
    nota:{
        matematicas:3,
        ingles:4,
        programacion:5
    }
   
};

let obtenerPromedio=(nota_uno,nota_dos,nota_tres)=>((nota_uno+nota_dos+nota_tres)/3);
//console.log(obtenerPromedio(Estudiante.nota.ingles,Estudiante.nota.matematicas,Estudiante.nota.programacion));

module.exports={
Estudiante,
obtenerPromedio

}