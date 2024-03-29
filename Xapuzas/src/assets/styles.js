/*
    HOJA DE ESTILOS
    Aquí se encuentra toda la definición de los estilos para la aplicación
*/

import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


export const styles = StyleSheet.create({
  
//HEADER - filtro + ayuda -----------------------------------------------------------------------------------------------------------------------------
    header:{
        flexDirection: 'row',
        marginTop: 5
    },
    headerCrear:{
        flexDirection: 'row',
        marginLeft: 10,
        marginVertical: 10
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
        flex:3,
        marginVertical: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
    },
    btnPickerL:{
        flex:2,
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: 'white'
    },
    btnFocusL:{
        flex:2,
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: '#EDAC70'
    },
    btnPickerR:{
        flex:2,
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: 'white'
    },
    btnFocusR:{
        flex:2,
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: '#EDAC70'
    },
    pickTxtF:{
      fontSize: RFPercentage(2.5)  ,
      color: 'black',
      fontFamily:'OpenSans-SemiBold',
    },
    pickTxt:{
        fontSize: RFPercentage(2.5)  ,
        color: 'black',
        fontFamily:'OpenSans-Regular',
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
        padding:18,
          fontSize: RFPercentage(2.5),
        fontFamily:'OpenSans-Regular',
        color: 'black'
    },
    terminar:{
        justifyContent:'center',
        marginRight:15,
        alignItems: 'flex-end'
    },

//END LISTA DE TAREAS-------------------------------------------------------------------------------------------------------------------------  

//CREAR ---------------------------------------------------------------------------------------------------------------------------------------
    titCrear:{
         fontSize: RFPercentage(3.5),
        fontFamily:'OpenSans-Regular',
        color: 'black',
        textAlign: 'center'
    },
    closeCrear:{
        marginTop:5,
        marginLeft:10,
        paddingRight: 5,
        alignItems:'center'
    },  
    contentTitle:{
        flex:3,
        justifyContent:'center',
    },
    inputTxt:{
        backgroundColor: '#FFF',
        borderRadius: 10,
        fontSize: RFPercentage(2.3),
        paddingLeft: 15,
        marginRight: 20
    },
    label:{
        fontSize: RFPercentage(3.2),
        color: '#000',
        marginBottom:10,
        marginLeft: 5,
        fontFamily:'OpenSans-SemiBold',
    },
    campo:{
        marginHorizontal: 25,
        marginVertical: 10
    },
    btnVoz:{
        flexDirection:'row',
        backgroundColor: '#EDAC70',
        width: '46%',
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
    },
    txtVoz:{
        color: 'black',
        fontFamily:'OpenSans-Regular',
          fontSize: RFPercentage(2.5),
        marginLeft: 7,
        marginTop: 2
    },
    contentUrgente:{
        flexDirection:'row',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#EDAC70'
    },
    txtUrgente:{
        color: 'black',
        fontFamily:'OpenSans-Regular',
        fontSize: 20,
        marginBottom: 15
    },
    checkbox: {
        color: '#EDAC70'
    },
    inputDate:{
        backgroundColor: '#FFF',
        width: '50%',
        borderRadius: 10
    },
    txtDate:{
        color: 'black',
          fontSize: RFPercentage(2.3),
        fontFamily:'OpenSans-Regular',
        padding: 13
    },
    placeholderDate:{
        fontSize: 15,
        padding: 15,
        opacity: 0.7
    },
    borderBot:{
        color: 'black',
        fontFamily:'OpenSans-Regular',
          fontSize: RFPercentage(2.3),
        paddingBottom: 10,
        marginBottom: 10,
        borderBottomColor: '#EDAC70',
        borderBottomWidth: 1
    },  
    contentTlf: {
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'space-between',
    },
    inputTlf:{
        backgroundColor: '#FFF',
        borderRadius: 10,
        paddingLeft: 15,
          fontSize: RFPercentage(2.3),
        width: '48%',
    }, 
    inputNewTlf:{
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginTop: 5,
        paddingLeft: 15,
          fontSize: RFPercentage(2.3),
        width: '42%',
    },
    newTlf:{
          fontSize: RFPercentage(2.5),
        color: 'black',
        fontFamily:'OpenSans-Regular',
        paddingTop: 5,
        marginLeft: 5
    },  
    removeTlf:{
        marginTop: 13,
    },
    labelDateMat:{
          fontSize: RFPercentage(2.5),
        color: 'black',
        fontFamily:'OpenSans-Regular',
        marginVertical: 10,
        marginLeft: 10
    },
//END CREAR ---------------------------------------------------------------------------------------------------------------------------------------

//END TAREAS------------------------------------------------------------------------------------------------------------------------------------------

//TRABAJOS
    tituloTrabs: {
          fontSize: RFPercentage(2.5),
        fontFamily:'OpenSans-Regular',
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
    },
//END TRABAJOS

//AJUSTES
    titAjuste:{
        fontFamily:'OpenSans-Regular',
        textAlignVertical:"center",
          fontSize: RFPercentage(2.5),
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
    radioGroup:{
    },  
//END AJUSTES



//GENERAL ------------------------------------------------------------------------------------------------------------------------------------------
    background: {
        backgroundColor: '#FAE7C4',
        flex: 1
    },
    titulo:{
          fontSize: RFPercentage(2.5)
    },
    text:{
        color: 'black',
        fontFamily:'OpenSans-Regular',
        fontSize: 15
    },
    degradado:{
        flex:1
    },  

    //BOTÓN INFERIOR DE CREAR
    crearTxt: {
        color:'black',
        fontFamily:'OpenSans-SemiBold',
        textAlign: 'center',
          fontSize: RFPercentage(2.5),
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
    },
    content:{
        flexDirection:'row',
    },
    green:{
        backgroundColor: 'green'
    },
    blue:{
        backgroundColor: 'blue'
    },
    
    black:{
          fontSize: RFPercentage(2.5),
        color: 'black',
        fontFamily:'OpenSans-Regular',
    },

    blackMRight:{
        flex: 2,
          fontSize: RFPercentage(2.5),
        color: 'black',
        fontFamily:'OpenSans-Regular',
        marginRight: 30,
        marginLeft: 20
    },

    minBlack:{
          fontSize: RFPercentage(2.3),
        color: 'black',
        fontFamily:'OpenSans-Regular',
    },
    mTopM:{
        marginTop: 20
    },
    mBottomXl:{
        marginBottom: 60
    },
    mBottomS:{
        marginBottom: 10
    },
    mHorizontalXl:{
        marginHorizontal: 20,
        marginBottom:80
    },
    mEstBottom:{
        marginHorizontal: 20,
        marginBottom:50
    },
    mLeftL:{
        marginLeft: 10
    },
    mHorizontalS:{
        marginHorizontal: 20,
        marginBottom:20,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#EDAC70'
    },
    bold:{
        fontFamily:'OpenSans-SemiBold',
    },

    //ESTRUCTURA MODAL
    mFondo:{
        backgroundColor: 'rgba(0,0,0,0.4)',
        flex:1,
        justifyContent:'center'
    },
    mContent:{
        backgroundColor: 'white',
        borderRadius:10,
        borderWidth:2,
        borderColor: '#F6D6B8',
        marginHorizontal: 30
    },
    iconModal:{
        paddingHorizontal:5,
        marginLeft: 5
    },
    iconModal2:{
        marginLeft: 5
    },
    topModal:{
        flexDirection: 'row',
        justifyContent:'flex-end',
        margin: 10
    },
    contentDetalle:{
        marginTop: 10,
        marginBottom: 60,
        marginHorizontal: 30
    },
    titModal:{
         fontSize: RFPercentage(3.5),
        fontFamily:'OpenSans-SemiBold',
        color: 'black',
        marginBottom: 20
    },
    labelModal:{
        flexDirection:'row',
        alignItems: 'center',
        marginBottom:10
    },
    textModal:{
        fontSize:RFPercentage(2.5),
        fontFamily:'OpenSans-Regular',
        color: 'black',
        marginLeft: 10,
        marginRight: 20
    },
    textTfl:{
        fontSize:RFPercentage(2.5),
        color: 'black',
        fontFamily:'OpenSans-Regular',
        marginBottom:20,
        marginLeft: 15
    },
    labTitModal:{
        fontSize:RFPercentage(2.6),
        color: 'black',
        fontFamily:'OpenSans-SemiBold',
        marginLeft: 10,
    },
    contentModTlf:{
        flexDirection: 'row',
        marginBottom: 5
    },
    cliTlfModal:{
        paddingRight: 10,
        borderRightColor: '#EDAC70',
        borderRightWidth: 2,
        paddingTop: 10
    },
    TlfModal:{
        paddingTop:10
    },
    crearBtnModal:{
        flexDirection: 'row',
        flex:1,
        backgroundColor: '#EDAC70',
        position: 'absolute',
        justifyContent:'center',
        bottom:0,
        width: '100%',
        padding: 5,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
    },

    //MODAL DE CONFIRMACIÓN
    confTop:{
        flexDirection: 'row',
        margin:10,
        justifyContent:'space-between'
    },
    titConf:{
         fontSize: RFPercentage(3.5),
        fontFamily:'OpenSans-SemiBold',
        color: 'black',
        marginBottom: 20,
        marginLeft: 8,
        marginRight: 5,
        marginTop: 5
    },
    mTopBlack:{
          fontSize: RFPercentage(2.5),
        color: 'black',
        fontFamily:'OpenSans-Regular',
        marginTop: 15
    },
    contentBtnConf:{
        flexDirection: 'row',
        flex:1,
        position: 'absolute',
        bottom:0,
        width: '100%',
        justifyContent:'space-between'
    },
    btnCancel:{
        backgroundColor: 'white',
        alignItems:'center',
        width:'50%',
        borderTopColor: '#F6D6B8',
        borderTopWidth: 2,
        borderBottomLeftRadius:10
    },
    btnConfirm:{
        backgroundColor:'#EDAC70',
        alignItems:'center',
        width:'50%',
        borderBottomRightRadius:10,
    },
    btnConfText:{
        padding:15,
        color: 'black',
        fontFamily:'OpenSans-SemiBold',
          fontSize: RFPercentage(2.5),
    },
    btnCancText:{
        padding:15,
        color: 'black',
        fontFamily:'OpenSans-Regular',
          fontSize: RFPercentage(2.5),
    },

    //MODAL CAMBIO DE ESTADO
    estTop:{
        flexDirection: 'row',
        margin:10,
        justifyContent:'space-between'
    },
    titEst:{
        flex: 6,
         fontSize: RFPercentage(3.5)  ,
        fontFamily:'OpenSans-SemiBold',
        color: 'black',
        marginLeft: 8,
        marginRight: 5,
    },
    iconModal3:{
        flex: 1,
        marginRight: 5
    },
    contentEstado:{
        flexDirection: 'row',
        marginLeft: 10,
        marginBottom: 20,
        alignItems:'center',
    },
    btnEstado:{
        padding:10,
        borderWidth:2,
        borderRadius: 10,
        borderColor: '#EDAC70'
    },
    btnEstadoFocus:{
        padding:10,
        borderWidth:2,
        borderRadius: 10,
        backgroundColor: '#EDAC70',
        borderColor: '#EDAC70'
    }


//END GENERAL ------------------------------------------------------------------------------------------------------------------------------------------
  
  });