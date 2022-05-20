/*
    TRABAJO SERVICE
    Aquí se encuentra la lógica relacionada con la base de datos y los trabajos
*/

//CREAR TABLA DE TRABAJOS Y ESTADOS
export const crearTTrabajos = async (db) => {
    
    await db.transaction( (tx) => {

        tx.executeSql(`CREATE TABLE IF NOT EXISTS estados (
            estado_id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre VARCHAR(255),
            icono VARCHAR(255)
            )`, [],
        () => {  console.log("tabla estado creada"); },
        (error) => {   console.log(error.message); });

        tx.executeSql(`CREATE TABLE IF NOT EXISTS trabajo (
            trabajo_id INTEGER PRIMARY KEY AUTOINCREMENT,
            estado_id INTEGER NOT NULL,
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
            )`, [],
        () => {  console.log("tabla trabajo creada"); },
        (error) => {   console.log(error.message); });

    }, error => {  console.log(error.message); });
}

//GET - TRABAJOS
export const getTrabajos = async (db) => {

}

export const getTrabajoID = async (db, id) => {

}

//POST - TRABAJOS
export const postTrabajos = async (db) => {

}

//PUT - TRABAJOS
export const putTrabajos = async (db) => {

}

export const putEstado = async (db, estado) =>{

}

//DELETE - TRABAJOS
export const deleteTrabajos = async (db) => {

}
