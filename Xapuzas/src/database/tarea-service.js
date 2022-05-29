/*
    TAREA SERVICE
    Aquí se encuentra la lógica relacionada con la base de datos y las tareas
*/
import { Tarea } from "./models";
import { conectarDB, borrarTodo, borrarTTarea } from '../database/db-service'


//CREAR TABLA DE TAREAS
export const crearTTareas = async (db) => {
    
    await db.transaction( (tx) => {
        tx.executeSql(`CREATE TABLE IF NOT EXISTS tarea (
            tarea_id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo VARCHAR(255),
            urgente INTEGER,
            cliente VARCHAR(255),
            direccion VARCHAR(255),
            tlf INTEGER,
            fecha DATETIME,
            hora DATETIME,
            fecha_creada DATETIME,
            notas VARCHAR(255)
            )`,
            [],
            () => {  console.log("tabla tarea creada"); },
            (error) => {   console.log(error.message); }
        );
    }, error => {  console.log(error.message); });

}


//GET - TAREAS 
export const getTareas = async () => {
    const db = await conectarDB();

    return await new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(`SELECT tarea_id, titulo
                FROM tarea;`, 
                [],
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

export const getTareaID = async (id) => {
    const db = await conectarDB();

    return await new Promise((resolve, reject) => {
        db.transaction( async (tx) => {
            tx.executeSql(`SELECT tarea_id, titulo, cliente, direccion, tlf, fecha, hora, notas FROM tarea
               WHERE tarea_id = ?`, 
               [id],
               (txn, res) => {
                   resolve(res.rows.item(0));
               },
               (error) => { 
                   reject(error.message);
               }
           );
       });
    });

}

//POST - TAREAS -- HAY QUE PASARLE DATA EN UNA SOLA VARIABLE
export const postTarea = async (data) => {
    const db = await conectarDB();
    let date = new Date();
    
    return await new Promise((resolve, reject) => {
        db.transaction( async (tx) => {
            tx.executeSql(`INSERT INTO tarea (titulo, urgente, cliente, direccion, tlf, fecha, hora, fecha_creada, notas)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [data[0], data[1], data[2], data[3], data[4], data[5], data[6], date.toDateString(), data[7]],
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

//PUT - TAREAS
export const putTarea = async (db, id) => {

    let date = new Date();
    let titulo = "Titulaciones de titulos"; let urgente = 0; let cliente = "Paquito el chocolatero"; let dir = "C/ Langreo"; let tlf = 666666666; let notas="ANOTACIONES";

    await db.transaction(async (tx) => {
        await tx.executeSql(`UPDATE tarea
            SET titulo = ?,
                urgente = ?,
                cliente = ?,
                direccion = ?,
                tlf = ?,
                fecha = ?,
                hora = ?,
                notas = ?
            WHERE tarea_id = ?;`,
            [titulo, urgente, cliente, dir, tlf, date.toDateString(), date.toDateString(), notas, id],
            () => {console.log("tarea modificada");},
            (error) => {console.log(error.message);}
        );
    });

}

//DELETE - TAREAS
export const deleteTarea = async (db, id) => {

    await db.transaction(async (tx) => {
        await tx.executeSql(`DELETE FROM tarea
            WHERE tarea_id LIKE ?;`,
            [id],
            () => {console.log("tarea borrada");},
            (error) => {console.log(error.message);}
        );
    });

}
