function promedio(nota_uno,nota_dos,nota_tres){


let resultado=(nota_uno+nota_dos+nota_tres)/3;
console.log(resultado);

};
promedio(2,3,4);

// funciones flecha
let promedio2=(nota_uno,nota_dos,nota_tres)=>{


    let resultado=(nota_uno+nota_dos+nota_tres)/3;
    console.log(resultado);
    
    };
    promedio2(2,3,4);
// call backs cuando una se demora en responder y al node js ser asincronoco muchas veces no es contraremos con el problema de que debemos esperar
// una respuesta de una funcion 
let promedio3=(nota_uno,nota_dos,nota_tres, callback)=>{ // declaramos el callback
setTimeout(function() {
    let resultado=(nota_uno+nota_dos+nota_tres)/3;
    callback(resultado); // retornamos el callback
    }, 2000);

};

promedio3(5,4,5,function(resultado){// mediante la funcion le decimos que espere el callback

    console.log(resultado);// imprimimos resultado
})

// require importar librerias, scripts