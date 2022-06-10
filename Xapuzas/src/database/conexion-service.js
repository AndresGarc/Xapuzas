/*
    CONEXION SERVICE
    Aquí se encuentra la información que almacena a donde ha entrado el usuario
*/
import { conectarDB } from '../database/db-service'


//CREAR TABLA DE TAREAS
export const crearTConn = async () => {
    const db = await conectarDB();
    
    return await new Promise((resolve, reject) => {
        db.transaction( (tx) => {
            tx.executeSql(`CREATE TABLE IF NOT EXISTS conexion (
                conexion_id INTEGER PRIMARY KEY AUTOINCREMENT,
                conexion INTEGER,
                consTar INTEGER,
                detTar INTEGER,
                crearTar INTEGER,
                consTra INTEGER,
                detTra INTEGER,
                crearTra INTEGER,
                ajustes INTEGER
                )`,
                [],
                (txn, res) => {  resolve(res) },
                (error) => {   reject(error.message); }
            );
        }, error => {  console.log(error.message); });
    });
}


//GET - TAREAS 
export const getConn = async (conn) => {
    const db = await conectarDB();

    return await new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(`SELECT ?
                FROM tarea;`, 
                [conn],
                (txn, res) => {
                    resolve(res.rows.raw());
                },
                (error) => {
                    reject(error.message);
                }
            );
        });

    });
}


//POST - 1 conexion
export const postConn = async () => {
    const db = await conectarDB();
    return await new Promise((resolve, reject) => {
        db.transaction( (tx) => {
            tx.executeSql(`INSERT INTO conexion (conexion, consTar, detTar, crearTar, consTra, detTra, crearTra, ajustes)
                VALUES (0,0,0,0,0,0,0,0)`,
                [],
                (txn, res) =>{ 
                    resolve([res.insertId, data[0]]); 
                },
                (error) => { 
                    reject(error);
                }
            );
        }); 
    }); 

}

//PUT - conexion 
export const putConn = async (conn, data) => {
    
    const db = await conectarDB();
    
    return await new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(`UPDATE conexion
                SET ? = ?,
                WHERE tarea_id = 1;`,
                [conn, data],
                (txn, res) => {resolve(res)},
                (error) => {reject(error)}
            );
        });
    })
    

}


