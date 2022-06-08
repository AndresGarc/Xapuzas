import React, { useEffect, useState } from 'react';
import { styles } from '../../assets/styles';
import { stlHelp } from '../../assets/stylesHelp';
import Icon  from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';
import { media } from '../../assets/mediaQuerys';

import {
  Text,
  View,
  Pressable,
  Modal
} from 'react-native';

const HelpTrabajos = ({closeHelp, setCloseHelp}) =>{

    const [page, setPage] = useState(1); //la "pagina" en la que esta el tutorial

    const next = () => {
        if(page==7){
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
                    <View style={stlHelp.contentSelector}>
                        <Picker
                        selectedValue={0}
                        onValueChange={(itemValue, itemIndex) => setTrabajos(itemValue)}
                        style={styles.pickerBck}
                        mode='dropdown'
                        >
                            <Picker.Item label="Todos" value={0} style={styles.black}/>
                            <Picker.Item label="Pendientes" value={1} style={styles.black}/>
                            <Picker.Item label="Vistos" value={2} style={styles.black}/>
                            <Picker.Item label="Aceptados" value={3} style={styles.black}/>
                            <Picker.Item label="Terminados" value={4} style={styles.black}/>

                        </Picker>
                    </View>
                }

                { (page==2 || page==4 || page==5) && //resaltar la tarea, estado y basura
                    <View style={stlHelp.listaTrabajos}>

                        <Pressable style={styles.last}>
                            <Text style={styles.textT}>Titulo del trabajo</Text>
                            <Pressable style={(page==4) ? stlHelp.terminar : styles.terminar}>
                                <Icon name='eye-off-outline' size={35} color='#EDAC70'/>
                            </Pressable>  

                            <Pressable style={(page==5) ? stlHelp.terminar : styles.terminar}>
                                <Icon name='trash-outline' size={35} color='#EDAC70'/>
                            </Pressable>
                        </Pressable>

                    </View>
                }

                { page==7 && //resaltar el terminar
                    <Pressable style={styles.crearBtn}>
                        <Text style={styles.crearTxt}>Crear</Text>
                        <Text style={styles.crearIcon}>
                            <Icon name="add-circle" size={30} color='black'/>
                        </Text>
                    </Pressable>
                }

                <View style={(page==2 || page==4 || page==5) ? media.styles.helpTrModal : styles.mContent}>

                <View style={stlHelp.closeDetail}>

                    <Pressable onPress={ () => {setCloseHelp(false)}} style={stlHelp.iconModal2}>   
                        <Text style={stlHelp.titHelp}>Cerrar ayuda</Text>
                        <Icon name="close" size={50} color='black'/>
                    </Pressable>

                </View>

                    <View style={styles.mHorizontalXl}>
                        { page==1 &&
                            <Text style={styles.black}>Esta es la pantalla de los trabajos, aquí podrás ver los trabajos según su estado, tocando en el desplegable y eligiendo qué estado quieres ver</Text>
                        }

                        { page==2 &&
                            <View>
                                <Text style={styles.black}>Esto es un trabajo</Text>
                                <Text style={styles.mTopBlack}>Para ver detalle de un trabajo, toca en el título del trabajo</Text>
                            </View>
                        }

                        { page==3 && //no tengo mu claro que hacer con esto asi a voz de pronto
                            <View>
                                
                                <Text style={styles.black}>Los trabajos tienen cuatro estados, que son los siguientes:</Text>

                                <View style={styles.mLeftL}>
                                    <Text style={styles.mTopBlack}><Icon name="eye-off-outline" size={35} color='#EDAC70'/>No visto por el cliente</Text>
                                    <Text style={styles.mTopBlack}><Icon name="eye-outline" size={35} color='#EDAC70'/>Visto por el cliente</Text>
                                    <Text style={styles.mTopBlack}><Icon name="checkmark" size={35} color='#EDAC70'/>Trabajo aceptado por el cliente</Text>
                                    <Text style={styles.mTopBlack}><Icon name="checkmark-circle-outline" size={35} color='#EDAC70'/>Trabajo terminado</Text>   
                                </View>

                            </View>
                        }       

                        { page==4 &&
                            <View>
                                <Text style={styles.black}>Este icono muestra el estado en el que se encuentra ahora mismo ese trabajo</Text>
                                <Text style={styles.mTopBlack}>Para ver detalle de un trabajo, toca en el título del trabajo</Text>
                            </View>
                        }


                        { page==5 &&
                            <Text style={styles.black}>Para borrar un trabajo, toca el icono de la basura <Icon name='trash-outline' size={25} color='black'/></Text>

                        }

                        { page==6 && 
                            <View>
                                
                                <Text style={styles.black}>Esto es lo que puedes ver de un trabajo</Text>

                                <View style={styles.mLeftL}>
                                    <Text style={styles.mTopBlack}><Icon name="person-outline" size={35} color='#EDAC70'/>Cliente</Text>
                                    <Text style={styles.mTopBlack}><Icon name="location-outline" size={35} color='#EDAC70'/>Dirección</Text>
                                    <Text style={styles.mTopBlack}><Icon name="time-outline" size={35} color='#EDAC70'/>Teléfonos</Text>
                                    <Text style={styles.mTopBlack}><Icon name="call-outline" size={35} color='#EDAC70'/>Materiales pedidos</Text>
                                    <Text style={styles.mTopBlack}><Icon name="document-outline" size={35} color='#EDAC70'/>Notas</Text>        
                                </View>

                            </View>
                        }   

                        { page==7 &&
                            <Text style={styles.black}>Para crear trabajos, deberás pulsar el botón <Icon name='add-circle' size={25} color='black'/> estando en la pantalla de Trabajos </Text>
                        }



                    </View>


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
                            { (page>1 && page<7) &&
                                <Text style={styles.btnConfText}>Siguiente</Text>
                            }

                            { (page==7) &&
                                <Text style={styles.btnConfText}>Terminar</Text>
                            }
                        </Pressable>
                        
                    </View>


                </View>

            </View>
        
        </Modal>

    )

}

export default HelpTrabajos;