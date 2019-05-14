

const CursosReq = require('./Cursos.js');

index();

async function index() {
    console.log("Bienvenido, a continuacion se listaran los cursos");
    for (let i = 0; i < CursosReq.Cursos.length; i++) {
        
        let resultado = await CursosReq.MostrarCurso(CursosReq.Cursos[i]); // await
        console.log(resultado);
        
    }

}