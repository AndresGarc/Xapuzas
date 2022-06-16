/*
    TRABAJO SERVICE
    Aquí se encuentra la lógica relacionada con la base de datos y los trabajos
*/

import { conectarDB } from "./db-service";

//CREAR TABLA DE TRABAJOS Y ESTADOS
export const crearTTrabajos = async () => {
    const db = await conectarDB();

    return await new Promise((resolve,reject) => {
        db.transaction( (tx) => {

            tx.executeSql(`CREATE TABLE IF NOT EXISTS estados (
                estado_id INTEGER PRIMARY KEY AUTOINCREMENT,
                nombre VARCHAR(255),
                icono VARCHAR(255)
                )`, 
                [],
                () => { },
                (error) => {   console.log(error.message); });
    
            tx.executeSql(`CREATE TABLE IF NOT EXISTS trabajo (
                trabajo_id INTEGER PRIMARY KEY AUTOINCREMENT,
                estado_id INTEGER NOT null,
                titulo VARCHAR(255),
                cliente VARCHAR(255),
                direccion VARCHAR(255),
                cliente_tlf1 VARCHAR(255),
                tlf1 INTEGER,
                cliente_tlf2 VARCHAR(255),
                tlf2 INTEGER,
                cliente_tlf3 VARCHAR(255),
                tlf3 INTEGER,
                pedido_mat INTEGER,
                dia_pedido DATETIME,
                fecha_creada DATETIME,
                notas VARCHAR(255),
                FOREIGN KEY (estado_id)
                    REFERENCES estados (estado_id)
                )`, 
                [],
                (txn,res) => {resolve(res)},
                (error) => {   console.log(error.message); });
    
        }, error => {  console.log(error.message); });
    })
    
    
}

//GET - TRABAJOS
export const getTrabajos = async () => {
    const db = await conectarDB();

    return await new Promise((resolve, reject) => {
        db.transaction( async (tx) => {
            tx.executeSql(`SELECT trabajo_id, titulo, trabajo.estado_id, icono
                FROM trabajo
                INNER JOIN estados ON trabajo.estado_id = estados.estado_id;`, 
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

export const getTrabajosFiltros = async (filtro) => {
    const db = await conectarDB();

    return await new Promise((resolve, reject) => {
        db.transaction( async (tx) => {
            tx.executeSql(`SELECT trabajo_id, titulo, trabajo.estado_id, icono
                FROM trabajo
                INNER JOIN estados ON trabajo.estado_id = estados.estado_id
                WHERE trabajo.estado_id = ?;`, 
                [filtro],
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

export const getTrabajoID = async (id) => {
    const db = await conectarDB();

    return await new Promise( (resolve, reject) => {
            db.transaction( async (tx) => {
            tx.executeSql(`SELECT trabajo.*, estados.*
                FROM trabajo
                INNER JOIN estados ON trabajo.estado_id = estados.estado_id
                WHERE trabajo_id = ?;`, 
                [id],
                (txn, res) => {
                     resolve(res.rows.item(0)); 
                    },
                (error) => { reject(error.message); }
            );
        });
    })
}

export const getMaterialAtrasado = async () => {
    const db = await conectarDB();

    return await new Promise((resolve, reject) => {
        db.transaction( (tx) => {
            tx.executeSql(`SELECT titulo, dia_pedido
                FROM trabajo
                WHERE dia_pedido not NULL
                AND pedido_mat = 1`, 
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

//POST - TRABAJOS
export const postTrabajos = async (data) => {
    const db = await conectarDB();
    let date = new Date();

    return await new Promise((resolve, reject) => {
        db.transaction( async (tx) => {
            tx.executeSql(`INSERT INTO trabajo (titulo, estado_id, cliente, direccion, cliente_tlf1 , tlf1,
                cliente_tlf2, tlf2, cliente_tlf3, tlf3, pedido_mat, dia_pedido, fecha_creada, notas)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
                [data[0], 1, data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8], data[9], data[10], date.toDateString(), data[11]],
                (txn, res) =>{ 
                    resolve([res.insertId]);
                },
                (error) => { 
                    reject(error.message);
                }
            );
        }); 
    })


}

//PUT - TRABAJOS
export const putTrabajos = async (id, data) => {

    const db = await conectarDB();
    let date = new Date();

    // cambiar los parámetros por elemetnos del array de datos!!!!!
    return await new Promise((resolve,reject) => {
        db.transaction((tx) => {
            tx.executeSql(`UPDATE trabajo
                SET titulo = ?,
                    cliente = ?,
                    direccion = ?,
                    cliente_tlf1 = ?,
                    tlf1 = ?,
                    cliente_tlf2 = ?,
                    tlf2 = ?,
                    cliente_tlf3 = ?,
                    tlf3 = ?,
                    pedido_mat = ?,
                    dia_pedido = ?,
                    notas = ?
                WHERE trabajo_id = ?;`, 
                [data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8], data[9], data[10], data[11], id],
                (txn, res) =>{ resolve(data[0])},
                (error) => { reject(error)}
            );
        }); 
    });
    
}

export const putEstado = async (id ,estado) =>{

    const db = await conectarDB();
    return await new Promise((resolve, reject) => {
        db.transaction( async (tx) => {
            tx.executeSql(`UPDATE trabajo
                SET estado_id = ?
                WHERE trabajo_id = ?;`, 
                [estado, id],
                (txn, res) => { resolve(res); },
                (error) => { reject(error.message); }
            );
        });
    })
    

}

//DELETE - TRABAJOS
export const deleteTrabajo = async (id) => {
    const db = await conectarDB();

    return await new Promise((resolve, reject) => {
        db.transaction(async (tx) => {
            tx.executeSql(`DELETE FROM trabajo
                WHERE trabajo_id = ?;`, 
                [id],
                (txn,res) => {resolve(res);},
                (error) => {reject(error.message);}
            );
        });
    })

}

// ------------------------- ESTADOS ------------------------------------

export const getEstados = async () => {

    const db = await conectarDB();

    return await new Promise((resolve, reject) => {

        db.transaction((tx) => {
            tx.executeSql(`SELECT estado_id, nombre
                FROM estados;`, 
                [],
                (txn, res) => {resolve(res.rows.item(0));},
                (error) => { reject(error.message); }
            );
        });

    });
    
}

export const postEstados = async () => {
    const db = await conectarDB();

    await db.transaction(async (tx) => {
        tx.executeSql(`INSERT INTO estados (nombre, icono) VALUES ("No visto", "eye-off-outline")`, []);
        tx.executeSql(`INSERT INTO estados (nombre, icono) VALUES ("Visto", "eye-outline")`, []);
        tx.executeSql(`INSERT INTO estados (nombre, icono) VALUES ("Aceptado", "checkmark")`, []);
        tx.executeSql(`INSERT INTO estados (nombre, icono) VALUES ("Terminado", "checkmark-circle-outline")`, []);
    },(error) => {console.log(error.message);});

}

export const putIconoEstado = async (db, id, name) => {
    
    await db.transaction( async (tx) => {
        await tx.executeSql(`UPDATE estados
            SET icono = ?
            WHERE estado_id = ?;`, 
            [name, id],
            (error) => {console.log(error.message);}
        );
    });

}

export const dropEstados = async () => {
    const db = await conectarDB();

    db.transaction(async (tx) => {
        tx.executeSql(`DROP TABLE IF EXISTS estados;`, [],
        (error) => {console.log(error.message);});
    })
    
}