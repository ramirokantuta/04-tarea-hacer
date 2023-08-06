const { resolve } = require('path');

require('colors');
const mostrarMenu = ()=>{
    return new Promise(resolve=>{
        console.clear();
    console.log("======================".green);
    console.log("Selecciones una Opcion".red);
    console.log("======================".green);

    console.log(`${'1.'.green} Crear Tarea`);
    console.log(`${'2.'.green} Listar Tareas`);
    console.log(`${'3.'.green} Listar Tareas Completadas`);
    console.log(`${'4.'.green} Listar Tareas pendientes`);
    console.log(`${'5.'.green} Completar Tareas`);
    console.log(`${'6.'.green} Borrar Tareas`);
    console.log(`${'0.'.green} Salir`);
    
    /**
 paquete prpio de node
 */
    const readline=require('readline').createInterface({
        input:process.stdin,
        output:process.stdout
    });
    readline.question('Selecciones una opcion: ',(opt)=>{
        readline.close();
        //esto nos permite recibir informacion
        resolve(opt);
    })
    });
    
}




const pausa=()=>{
    return new Promise(resolve=>{
        const readline=require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
        });
        readline.question(`\nPresiones ${'Enter'.green} para continuar\n`, (opt)=>{
            readline.close();
            resolve();
        })
    });
}
//muestra funcion para ser invocada
module.exports = {
    mostrarMenu,
    pausa
}