import React, { useEffect, useState } from 'react';
import { styles } from '../../assets/styles';
import { stlHelp } from '../../assets/stylesHelp';
import { media } from '../../assets/mediaQuerys';
import Icon  from 'react-native-vector-icons/Ionicons';


import CheckBox from '@react-native-community/checkbox';

import {
  Text,
  View,
  Image,
  Pressable,
  Modal
} from 'react-native';

const HelpCTrab = ({closeHelp, setCloseHelp, type}) =>{

    const [page, setPage] = useState(1); //la "pagina" en la que esta el tutorial

    const next = () => {
        if(page==8){
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


                { page==2 && //resaltar campo input
                    <View style={stlHelp.inputTxt}>
                        <Text>escribe aquí el titulo...</Text>
                    </View>
                }

                { page == 8 &&
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
                            <Text style={styles.black}>Este es el creador y editor de trabajos, aquí rellenaras o modificarás la información del trabajo</Text>
                        }

                        { page==2 &&
                            <Text style={styles.black}>Para rellenar un campo, toca en su recuadro para poder escribir en el</Text>
                        }

                        { (page==3 || page==4) &&
                            <View>
                                { page==3 &&
                                    <View>
                                        <Text style={styles.black}>En los teléfonos puedes añadir hasta tres números tocando en <Text style={styles.bold}><Icon name='add-circle' size={25} color='black'/> Añadir otro teléfono</Text></Text>
                                        <Text style={styles.mTopBlack}>Así se vería al añadir un número:</Text>
                                    </View>
                                }

                                { page==4 &&
                                    <Text style={styles.black}>Para borrar un teléfono toca en el icono <Icon name='remove-circle-outline' size={25} color='black'/></Text>
                                }
                                
                                <View style={styles.mTopM}>
                                    <View style={stlHelp.contentTlf}>
                                        <View style= {stlHelp.inputTlf2}>
                                            <Text>nombre</Text>
                                        </View>

                                        <View style= {stlHelp.inputTlf2}>
                                            <Text>teléfono</Text>
                                        </View> 
                                    </View>

                                    
                                    <View style={stlHelp.contentTlf}>
                                        <Pressable style={(page==4) ? stlHelp.focusremoveTlf : styles.removeTlf}>
                                            <Icon name="remove-circle-outline" size={25} color='black'/>
                                        </Pressable>

                                        <View style= {stlHelp.inputTlf}>
                                            <Text>nombre</Text>
                                        </View>

                                        <View style= {stlHelp.inputTlf}>
                                            <Text>teléfono</Text>
                                        </View> 
                                    </View>

                                </View>

                            </View>
                        }


                        { page==5 &&
                            <View>
                                <Text style={styles.black}>Si has hecho un pedido de materiales para un trabajo puedes marcar su estado tocando en el <Icon name="radio-button-off-outline" size={20} color='black'/> del estado que está</Text>
                                <Text style={styles.mTopBlack}>Sabes cual está seleccionado por que está marcado así <Icon name="radio-button-on" size={20} color='black'/></Text>                        
                                <Text style={styles.mTopBlack}>Este es el selector de estados de los materiales:</Text>

                                <View style={styles.mTopM}>
                                    <Text style={styles.black}><Icon name="radio-button-on" size={20} color='black'/>Sin pedir</Text>
                                    <Text style={styles.black}><Icon name="radio-button-off-outline" size={20} color='black'/>Material pedido el día</Text>
                                    <Text style={styles.black}><Icon name="radio-button-off-outline" size={20} color='black'/>Materiales recogidos</Text>
                                </View>  
                              
                            </View>

                        }

                        { page==6 &&
                            <View>  
                                <Text style={styles.black}>Cuando seleccionas <Text style={styles.bold}>Material pedido el día</Text> aparece un botón blanco que al pulsar abre el calendario</Text>
                                <View style={styles.mTopM}>
                                    <Text style={styles.black}><Icon name="radio-button-on" size={20} color='black'/>Material pedido el día</Text>
                                    <Pressable style={stlHelp.inputDate}>
                                        <Text style={styles.placeholderDate}>Toca aquí para indicar la fecha</Text>
                                    </Pressable>
                                </View>
                            </View>
                        }

                        { page==7 &&
                            <View>  
                                <View style={stlHelp.gif}>
                                    <Image source={require('./../../assets/pickFecha.gif')} style={stlHelp.resize}/>
                                </View>
                                <Text style={styles.black}>Puedes pasar los meses tocando en las flechas y tocando un día seleccionarás la fecha</Text>
                            </View>
                        }
                        { page==8 &&
                            <Text style={styles.black}>Una vez rellenados los campos que quieras, toca el botón Crear para crear el trabajo</Text>
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
                            { (page>1 && page<8) &&
                                <Text style={styles.btnConfText}>Siguiente</Text>
                            }

                            { (page==8) &&
                                <Text style={styles.btnConfText}>Terminar</Text>
                            }
                        </Pressable>
                        
                    </View>


                </View>

            </View>
        
        </Modal>

    )

}

export default HelpCTrab;