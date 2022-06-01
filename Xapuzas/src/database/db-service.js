/*
    DATABASE SERVICE
    Aquí se encuentra la lógica general de la base de datos, como su conexión, configuración o borrado completo
*/
import SQLite, { openDatabase, enablePromise } from 'react-native-sqlite-storage';


//CONECTAR A LA BASE DE DATOS
export const conectarDB = async () => { return SQLite.openDatabase({name:"xapuzas.db", location:'default'}); }


//BORRAR TABLAS
export const borrarTTarea = async (db) => {
    await db.transaction( tx => {
        tx.executeSql(`DROP TABLE IF EXISTS tarea;`), [],
        () => {console.log("tabla tarea borrada");},
        (error) => {console.log(error.message);}
    });
}



//BORRAR TODAS LAS TABLAS
export const borrarTodo = async () => {
    const db = await conectarDB();

    return await new Promise((resolve, reject) => {

        db.transaction( tx => {
            tx.executeSql(`DROP TABLE IF EXISTS trabajo;`, [],
            () => {console.log("tabla trabajos borrada");},
            (error) => {console.log(error.message);});
    
            tx.executeSql(`DROP TABLE IF EXISTS estados;`, [],
            () => {console.log("tabla estados borrada");},
            (error) => {console.log(error.message);});
    
            tx.executeSql(`DROP TABLE IF EXISTS tarea;`, [],
            (txn, res) => {resolve(res)},
            (error) => {reject(error.message);});
        });
    })
    
}