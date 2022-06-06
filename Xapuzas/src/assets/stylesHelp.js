/*
    HOJA DE ESTILOS
    Aquí se encuentra toda la definición de los estilos para la aplicación
*/

import { StyleSheet } from "react-native";

export const stlHelp = StyleSheet.create({


    contentPicker:{
        position: 'absolute',
        top: 95,
        marginVertical: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
    },
    contentSelector:{
        position: 'absolute',
        top: 120,
        marginVertical: 10,
        width: '70%',
        flexDirection: 'row',
    },

    listaTareas:{
        position: 'absolute',
        width: '85%',
        top: 220,
        backgroundColor:'white',
        marginHorizontal: 30,
        borderRadius: 10
    },
    terminar:{
        justifyContent:'center',
        alignItems: 'flex-end',
        paddingHorizontal: 15,
        borderColor: '#EDAC70',
        borderRadius:10,
        borderWidth: 3
    },
    btnNext:{
        marginLeft: '50%',
        backgroundColor:'#EDAC70',
        alignItems:'center',
        width:'50%',
        borderBottomRightRadius:10,
    },
    mContent:{
        marginTop: 60,
        backgroundColor: 'white',
        borderRadius:10,
        borderWidth:2,
        borderColor: '#F6D6B8',
        marginHorizontal: 30
    },
    center:{
        justifyContent: 'center'
    },
    mFondo:{
        backgroundColor: 'white',
        flex:1,
        justifyContent:'center'
    }


})