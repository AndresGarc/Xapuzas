import React, { useEffect, useState } from 'react';
import { styles } from '../../assets/styles';
import { stlHelp } from '../../assets/stylesHelp';
import { media } from '../../assets/mediaQuerys';
import Icon  from 'react-native-vector-icons/Ionicons';

import {
  Text,
  View,
  Pressable,
  Modal
} from 'react-native';

const HelpTareas = ({closeHelp, setCloseHelp, type}) =>{

    const [page, setPage] = useState(1); //la "pagina" en la que esta el tutorial

    const next = () => {
        if(page==5){
            setCloseHelp(false);
        }
        setPage(page+1);
    }

    const prev = () => {
        setPage(page-1);
    }
    

    return(    

        <Modal
            visible={closeHelp}
            transparent={true}
        >
            <View style={styles.mFondo}>


                { page==1 && //resaltar picker
                    <View style={stlHelp.contentPicker}>
                        <Pressable style={styles.btnFocusL}>
                            <Text style={styles.pickTxtF}>Urgentes</Text>
                        </Pressable>

                        <Pressable style={styles.btnPickerR}>
                            <Text style={styles.pickTxt}>Pendientes</Text>
                        </Pressable>
                    </View>
                }

                { (page==2 || page==3) && //resaltar la tarea y resaltar el check
                    <View style={stlHelp.listaTareas}>

                        <Pressable style={styles.last}>
                            <Text style={styles.textT}>Titulo de la tarea</Text>
                            <Pressable style={(page==2) ? styles.terminar : stlHelp.terminar}>
                                <Icon name='checkmark-circle-outline' size={40} color='#EDAC70'/>
                            </Pressable>  
                        </Pressable>

                    </View>
                }

                { page==5 && //resaltar el terminar
                    <Pressable style={styles.crearBtn}>
                        <Text style={styles.crearTxt}>Crear</Text>
                        <Text style={styles.crearIcon}>
                            <Icon name="add-circle" size={30} color='black'/>
                        </Text>
                    </Pressable>
                }

                {/* MODAL */}
                <View style={media.styles.helpModal}>
                

                    <View style={stlHelp.closeDetail}>

                        <Pressable onPress={ () => {setCloseHelp(false)}} style={stlHelp.iconModal2}>   
                            <Text style={stlHelp.titHelp}>Cerrar ayuda</Text>
                            <Icon name="close" size={50} color='black'/>
                        </Pressable>

                    </View>

                    <View style={styles.mHorizontalXl}>
                        { page==1 &&
                            <View>
                                <Text style={styles.black}>Esta es la pantalla de las tareas, aquí podrás <Text style={styles.bold}>ver las tareas urgentes o pendientes</Text> tocando en los botones de <Text style={styles.bold}>Urgentes</Text> o <Text style={styles.bold}>Pendientes</Text>.</Text>
                                <Text style={styles.mTopBlack}>Ahora estas viendo tus tareas urgentes</Text>
                            </View>
                        }

                        { page==2 &&
                            <View>
                                <Text style={styles.black}>Esto es una <Text style={styles.bold}>tarea</Text></Text>
                                <Text style={styles.mTopBlack}>Para ver <Text style={styles.bold}>detalle de la tarea</Text>, toca en el <Text style={styles.bold}>título</Text> de la tarea</Text>
                            </View>
                        }

                        { page==3 &&
                            <Text style={styles.black}>Para terminar una tarea, toca en el <Text style={styles.bold}>icono de</Text> <Icon name='checkmark-circle-outline' size={25} color='black'/> de esa tarea</Text>
                        }

                        { page==4 && //no tengo mu claro que hacer con esto asi a voz de pronto
                            <View>
                                
                                <Text style={styles.black}>Esto es lo que puedes ver de una tarea</Text>

                                <View style={styles.mLeftL}>
                                    <Text style={styles.mTopBlack}><Icon name="person-outline" size={35} color='#EDAC70'/>Cliente</Text>
                                    <Text style={styles.mTopBlack}><Icon name="location-outline" size={35} color='#EDAC70'/>Dirección</Text>
                                    <Text style={styles.mTopBlack}><Icon name="call-outline" size={35} color='#EDAC70'/>Teléfono</Text>
                                    <Text style={styles.mTopBlack}><Icon name="today-sharp" size={35} color='#EDAC70'/>Fecha</Text>
                                    <Text style={styles.mTopBlack}><Icon name="time-outline" size={35} color='#EDAC70'/>Hora</Text>
                                    <Text style={styles.mTopBlack}><Icon name="document-outline" size={35} color='#EDAC70'/>Notas</Text>        
                                </View>

                            </View>
                        }

                        { page==5 &&
                            <Text style={styles.black}>Para <Text style={styles.bold}>crear tareas</Text>, deberás pulsar el <Text style={styles.bold}>botón</Text> <Icon name='add-circle' size={25} color='black'/> estando en la <Text style={styles.bold}>pantalla de Tareas</Text></Text>

                        }



                    </View>

                    {/* BOTONERA SIGUIENTE/ANTERIOR */}
                    <View style={styles.contentBtnConf}>

                        { page != 1 && 
                            <Pressable style={styles.btnCancel} onPress={() =>{prev()}}>
                                <Text style={styles.btnCancText}>Anterior</Text>        
                            </Pressable>
                        }


                        <Pressable style={(page==1) ? stlHelp.btnNext : styles.btnConfirm} onPress={() => {next()}}>
                            { (page==1) &&
                                <Text style={styles.btnConfText}>Siguiente</Text>
                            }
                            { (page>1 && page<5) &&
                                <Text style={styles.btnConfText}>Siguiente</Text>
                            }

                            { (page==5) &&
                                <Text style={styles.btnConfText}>Terminar</Text>
                            }
                        </Pressable>
                        
                    </View>


                </View>

            </View>
        
        </Modal>

    )

}

export default HelpTareas;