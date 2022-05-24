/*
    HOJA DE ESTILOS
    Aquí se encuentra toda la definición de los estilos para la aplicación
*/

import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  
//HEADER - filtro + ayuda -----------------------------------------------------------------------------------------------------------------------------
    header:{
      flexDirection: 'row',
      marginTop: 5
    },

    //HELP
    contentHelp:{
        flex: 1,
        alignItems: 'flex-end',
    },
    help: {
        marginVertical: 10,
        marginRight: 20
    },

//TAREAS------------------------------------------------------------------------------------------------------------------------------------------
    //PICKER TAREAS --------------------------------------------------------------------------------------------------------------------------------------
    contentPicker:{
      marginVertical: 10,
      marginHorizontal: 20,
      flexDirection: 'row',
    },
    btnPickerL:{
      paddingVertical: 15,
      paddingHorizontal:30,
      borderBottomLeftRadius: 10,
      borderTopLeftRadius: 10,
      backgroundColor: 'white'
    },
    btnFocusL:{
        paddingVertical: 15,
        paddingHorizontal:30,
        borderBottomLeftRadius: 10,
        fontWeight: 'bold',
        borderTopLeftRadius: 10,
        backgroundColor: '#EDAC70'
    },
    btnPickerR:{
        paddingVertical: 15,
        paddingHorizontal:30,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: 'white'
    },
    btnFocusR:{
        paddingVertical: 15,
        paddingHorizontal:30,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        fontWeight: 'bold',
        backgroundColor: '#EDAC70'
    },
    btnText:{
      fontSize: 18,
      color: 'black',
    },

    //END PICKER TAREAS --------------------------------------------------------------------------------------------------------------------------------
// END HEADER --------------------------------------------------------------------------------------------------------------------------------------

//LISTA DE TAREAS-------------------------------------------------------------------------------------------------------------------------
    noData:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:10
    },
    listaTareas:{
        backgroundColor:'white',
        marginTop: 20,
        marginBottom: 80,
        marginHorizontal: 30,
        borderRadius: 10
    },
    tarea:{
        borderBottomColor:'rgba(251,240,219,1)',
        borderBottomWidth:2, 
        flexDirection: 'row'
    },
    last:{
        flexDirection: 'row'
    },
    textT:{
        flex:1,
        padding:20,
        fontSize: 15,
        color: 'black'
    },
    terminar:{
        justifyContent:'center',
        marginRight:15,
        alignItems: 'flex-end'
    },

//END LISTA DE TAREAS-------------------------------------------------------------------------------------------------------------------------  

//END TAREAS------------------------------------------------------------------------------------------------------------------------------------------

//TRABAJOS
    tituloTrabs: {
        fontSize: 18,
        marginLeft: 20,
        marginTop:10
    },
    pickerBck: {
        flex:2,
        backgroundColor: 'white',
        width: '100%',
        height:50,
        marginTop: 10,
        marginLeft: 20,
        borderRadius: 10
    },
//END TRABAJOS

//AJUSTES
    titAjuste:{
        textAlignVertical:"center",
        fontSize: 18,
        marginLeft: 25
    },
    contentAjustes:{
        alignItems: 'center'
    },
    btnAjuste:{
        margin: 15,
        padding:20,
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#EDAC70',
        backgroundColor: 'white',
    },
//END AJUSTES



//GENERAL ------------------------------------------------------------------------------------------------------------------------------------------
    background: {
        backgroundColor: '#FAE7C4',
        flex: 1
    },
    titulo:{
        fontSize: 18
    },
    text:{
        color: 'black',
        fontSize: 15
    },

    //BOTÓN INFERIOR DE CREAR
    crearTxt: {
        color:'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        textTransform: 'uppercase',
        margin: 10
    },
    crearBtn:{
        flexDirection: 'row',
        flex:1,
        backgroundColor: '#EDAC70',
        position: 'absolute',
        justifyContent:'center',
        bottom:0,
        width: '100%',
        padding: 5
    },
    crearIcon:{
        marginTop: 5
    }
//END GENERAL ------------------------------------------------------------------------------------------------------------------------------------------
  
  });