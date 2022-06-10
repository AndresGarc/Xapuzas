/*
    HOJA DE ESTILOS
    Aquí se encuentra toda la definición de los estilos para la aplicación
*/

import { StyleSheet } from "react-native";

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const stlHelp = StyleSheet.create({

    titHelp:{
        fontSize: RFPercentage(3.2),
        fontFamily:'OpenSans-SemiBold',
        color: 'black',
        justifyContent: 'flex-end',
        marginBottom: 20,
        marginLeft: 8,
        marginRight: 5,
        marginTop: 5
    },

    contentPicker:{
        position: 'absolute',
        top: 95,
        width: '72%',
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
        top: 180,
        backgroundColor:'white',
        marginHorizontal: 30,
        borderRadius: 10
    },

    listaTrabajos:{
        position: 'absolute',
        width: '83%',
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
    mContentOsc:{
        backgroundColor: 'white',
        borderRadius:10,
        borderWidth:2,
        borderColor: 'rgba(143,125,108,0.4)',
        marginHorizontal: 30
    },
    center:{
        justifyContent: 'center'
    },
    mFondo:{
        backgroundColor: 'white',
        flex:1,
    },
    mFondoOscuras:{
        backgroundColor: '#C0C0C0',
        flex:1,
    },
    mFondoCenter:{
        backgroundColor: 'white',
        flex:1,
        justifyContent: 'center'
    },
    closeDetail:{
        zIndex:3,
        flexDirection: 'row',
        margin:10,
        marginTop: 10,
        justifyContent:'flex-end'
    },
    explain:{
        fontSize: RFPercentage(2.5),
        fontFamily:'OpenSans-Regular',
        color: 'black',
        marginLeft: 15,
        marginRight: 10,
        marginBottom: 15
    },
    detAcl:{
        fontSize: RFPercentage(3.2),
        color: 'black',
        fontFamily:'OpenSans-Regular',
        borderTopWidth: 1,
        borderColor: '#EDAC70',
        paddingTop: 10,
    },
    focus:{
        elevation: 5,
        zIndex:5,
        borderRadius: 10,
        borderColor: '#EDAC70',
        marginRight:10,
        borderWidth: 4,
        paddingTop: 5,
        backgroundColor: 'white',
        
    },
    botExplain:{
        position:'absolute',
        left: 0,
        right:0,
        alignItems: 'center',
        bottom: '20%'
    },
    topExplain:{
        position:'absolute',
        left: 0,
        right:0,
        alignItems: 'center',
        top: '25%'
    },
    mExplain:{
        elevation: 5,
        width: '70%',
        borderRadius:10,
        borderWidth:4,
        borderColor: '#EDAC70',
        padding: 20,
        backgroundColor: 'white',
    },
    opacidad:{
        backgroundColor: 'rgba(0,0,0,0.4)',
        width:'100%',
        height:'100%',
        position:'absolute',
        borderRadius:10,
        borderColor: 'rgba(0,0,0,0.4)' ,
        borderWidth: 2
    },
    opacidad2:{
        backgroundColor: 'rgba(0,0,0,0.4)',
        width:'100%',
        height:'100%',
        position:'absolute'
    },
    iconModal2:{
        flexDirection:'row',
        marginLeft: 5
    },

    //hacer pequenio el modal de ejemplo de trabajo
    topModal:{
        flexDirection: 'row',
        justifyContent:'flex-end',
        marginHorizontal: 10,
        marginTop:10,
    },
    labelModal:{
        flexDirection:'row',
        alignItems: 'center',
        marginBottom:5
    },
    textTfl:{
        fontSize:RFPercentage(2.5),
        color: 'black',
        fontFamily:'OpenSans-Regular',
        marginBottom:5,
        marginLeft: 15
    },
    btnCancel:{
        elevation: 5,
        zIndex:5,
        backgroundColor: 'white',
        alignItems:'center',
        width:'50%',
        borderTopColor: '#F6D6B8',
        borderTopWidth: 2,
        borderBottomLeftRadius:10
    },
    btnConfirm:{
        elevation: 5,
        zIndex:5,
        backgroundColor:'#EDAC70',
        alignItems:'center',
        width:'50%',
        borderBottomRightRadius:10,
    },
    copia:{
        position:'absolute',
        left: 0,
        right:0,
        alignItems: 'center',
        top: 170
    },
    recuperar:{
        position:'absolute',
        left: 0,
        right:0,
        alignItems: 'center',
        top: 260
    },
    delete:{
        position:'absolute',
        left: 0,
        right:0,
        alignItems: 'center',
        top: 350
    },
    inputTxt:{
        position:'absolute',
        top:140,
        backgroundColor: '#FFF',
        borderRadius: 10,
        fontSize: RFPercentage(2.3),
        width: '80%',
        paddingVertical: 18,
        marginLeft: 25,
        paddingLeft: 15,
        marginRight: 20
    },
    posVoz:{
        position:'absolute',
        top:192,
        marginLeft:25,
        width: '90%'
    },
    posCheck:{
        position:'absolute',
        top:320,
        marginLeft:25,
        width: '90%',
        backgroundColor: 'white',
        borderRadius:10
    },
    inputDate:{
        backgroundColor: '#FFF',
        borderWidth:1,
        width: '75%',
        borderRadius: 10
    },
    gif:{
        alignItems: 'center',
        paddingBottom:0
    },
    resize:{
        resizeMode: 'stretch',
        width: '80%',
        height: 350
    },
    resizeH:{
        resizeMode: 'stretch',
        width: '80%',
        height: 290
    },
    inputTlf:{
        backgroundColor: '#FFF',
        borderRadius: 10,
        paddingLeft: 15,
        fontSize: RFPercentage(2.3),
        width: '40%',
        borderWidth: 1,
        borderRadius:10,
        justifyContent: "center",
        marginLeft: 5
    },
    inputTlf2:{
        backgroundColor: '#FFF',
        borderRadius: 10,
        paddingLeft: 15,
        paddingVertical: 10,
        fontSize: RFPercentage(2.3),
        width: '40%',
        borderWidth: 1,
        borderRadius:10,
        justifyContent: "center",
        marginLeft: 5
    },
    contentTlf:{
        flexDirection: 'row',
        marginBottom: 10,
    },
    focusremoveTlf:{
        marginTop: 13,
        borderWidth:3,
        borderColor: '#EDAC70',
        borderRadius: 10
    }

})