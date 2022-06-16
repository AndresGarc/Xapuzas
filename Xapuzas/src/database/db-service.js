/*
    DATABASE SERVICE
    Aquí se encuentra la lógica general de la base de datos, como su conexión, configuración o borrado completo
*/
import SQLite, { openDatabase, enablePromise } from 'react-native-sqlite-storage';
import { Alert, NativeModules, PermissionsAndroid } from 'react-native';
const RNFetchBlob = NativeModules.RNFetchBlob;


//CONECTAR A LA BASE DE DATOS
export const conectarDB = async () => { return SQLite.openDatabase({name:"xapuzas.db", location:'default'}); }

// FUNCION CALLBACK PARA BACKUP
export const alerta = (data) => {
    if(data != undefined){
        Alert.alert(
            'La copia no se ha podido crear',
            `${data}`,
            [{text: 'Entendido'}]
        );
    } else {
        Alert.alert(
            'La copia se ha creado satisfactoriamente',
            `Recuerda este archivo se encuentra en la carpeta de Descargas de tu teléfono con el nombre de "xapuzas.db"`,
            [{text: 'Entendido'}]
        );
    }

}

// FUNCION CALLBACK PARA RESTORE
export const alertaRestore = (data) => {
    if(data != undefined){
        Alert.alert(
            'No se ha podido restaurar la copia de seguridad',
            `${data}`,
            [{text: 'Entendido'}]
        );
    } else {
        Alert.alert(
            'Has podido restaurar la copia de seguridad',
            `Para que se vean los cambios tienes que cerrar la aplicación y volver a abrirla `,
            [{text: 'Entendido'}]
        );
    }

}

export const backupDB = async () => {
    let PATH_DB = RNFetchBlob.MainBundleDir + '/databases/xapuzas.db';
    let PATH_BACKUP = RNFetchBlob.DownloadDir + '/xapuzas.db';
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );

        if(granted === PermissionsAndroid.RESULTS.GRANTED){
            RNFetchBlob.cp(PATH_DB, PATH_BACKUP, alerta);
        }
    } catch (error) {
        console.warn(error);
    }
}

export const restoreDB = async () => {
    let  PATH_BACKUP = RNFetchBlob.MainBundleDir + '/databases/xapuzas.db';
    let PATH_DB = RNFetchBlob.DownloadDir + '/xapuzas.db';
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );

        if(granted === PermissionsAndroid.RESULTS.GRANTED){
            RNFetchBlob.cp(PATH_DB, PATH_BACKUP, alertaRestore);
        }
    } catch (error) {
        console.warn(error);
    }
}


//BORRAR TABLAS
export const borrarTTarea = async (db) => {
    await db.transaction( tx => {
        tx.executeSql(`DROP TABLE IF EXISTS tarea;`), [],
        (error) => {console.log(error.message);}
    });
}



//BORRAR TODAS LAS TABLAS
export const borrarTodo = async () => {
    const db = await conectarDB();

    return await new Promise((resolve, reject) => {

        db.transaction( tx => {
            tx.executeSql(`DROP TABLE IF EXISTS trabajo;`, [],
            (error) => {console.log(error.message);});
    
            tx.executeSql(`DROP TABLE IF EXISTS estados;`, [],
            (error) => {console.log(error.message);});
    
            tx.executeSql(`DROP TABLE IF EXISTS tarea;`, [],
            (txn, res) => {resolve(res)},
            (error) => {reject(error.message);});

            tx.executeSql(`DROP TABLE IF EXISTS conexion;`, [],
            (txn, res) => {resolve(res)},
            (error) => {reject(error.message);});
        });
    })
    
}