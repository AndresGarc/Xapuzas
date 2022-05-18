import SQLite, { openDatabase, enablePromise } from 'react-native-sqlite-storage';


export const conectarDB = async () => {
    console.log("conectando");
    return SQLite.openDatabase({name:"xapuzas.db", location:'default'});
}

export const crearTEstados = async (db) => {

    await db.transaction( tx => {
        tx.executeSql(`CREATE TABLE IF NOT EXISTS estados (estado_id INTEGER PRIMARY KEY,nombre VARCHAR(16),icono VARCHAR(16))`, [],
        () => {  console.log("tabla creada"); },
        (error) => {   console.log(error.message); });
    }, error => {  console.log(error.message); 
    }, () => {  console.log("transacción finalizada"); });

    
}

export const crearTTareas = async (db) => {
    console.log("Crear tabla de tareas");
}

export const crearTTrabajos = async (db) => {
    console.log("Crear tabla de trabajos");
}