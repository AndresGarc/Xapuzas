import React, { useEffect, useState } from 'react';
import { styles } from '../../assets/styles';
import { stlHelp } from '../../assets/stylesHelp';
import { media } from '../../assets/mediaQuerys';
import Icon  from 'react-native-vector-icons/Ionicons';


import CheckBox from '@react-native-community/checkbox';

import {
  Text,
  View,
  Pressable,
  Modal
} from 'react-native';

const HelpCTarea = ({closeHelp, setCloseHelp, type}) =>{

    const [page, setPage] = useState(1); //la "pagina" en la que esta el tutorial

    const next = () => {
        if(page==9){
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

                { (page == 3 || page == 4) &&
                    <View style={stlHelp.posVoz}>
                        <Pressable style={styles.btnVoz}>
                            <Icon name="mic-outline" color='black' size={30}/>
                            <Text style={styles.txtVoz}>Usar voz</Text>
                        </Pressable>
                    </View>
                }

                { page == 5 &&
                    <View style={stlHelp.posCheck}>
                        <View style={styles.campo}>
                            <View style={styles.contentUrgente}>

                                <CheckBox 
                                    tintColors={{true:'#EDAC70', false:'#EDAC70'}}
                                />

                                <Text style={styles.txtUrgente}>¿Es urgente?</Text>

                            </View>
                        </View>      
                    </View>
                }



                {/* MODAL */}
                <View style={(page>=3 && page<=5) ? media.styles.helpCTar : media.styles.helpModal }>
                

                    <View style={stlHelp.closeDetail}>

                        <Pressable onPress={ () => {setCloseHelp(false)}} style={stlHelp.iconModal2}>   
                            <Text style={stlHelp.titHelp}>Cerrar ayuda</Text>
                            <Icon name="close" size={50} color='black'/>
                        </Pressable>

                    </View>

                    <View style={styles.mHorizontalXl}>
                        { page==1 &&
                            <Text style={styles.black}>Este es el creador y editor de tareas, aquí rellenaras o modificarás la información de la tarea</Text>
                        }

                        { page==2 &&
                            <Text style={styles.black}>Para rellenar un campo, toca en su recuadro para poder escribir en el</Text>
                        }

                        { page==3 &&
                            <Text style={styles.black}>Puedes usar tu voz para poner el título tocando en el botón Usar voz <Icon name='mic-outline' size={25} color='black'/></Text>
                        }

                        { page==4 &&
                            <Text style={styles.black}>Para poder grabar, deberás aceptar los permisos cuando te los pida el teléfono</Text>
                        }

                        { page==5 && 
                            <View>
                                <Text style={styles.black}>Tocando en el cuadrado podrás cambiar entre tarea urgente o tarea normal</Text>
                                <View style={styles.content}>
                                    <CheckBox 
                                        value={true}
                                        tintColors={{true:'#EDAC70', false:'#EDAC70'}}
                                    />
                                    <Text style={styles.black}>Tarea urgente</Text>
                                </View>
                               
                            </View>
                        }

                        { page==6 &&
                            <Text style={styles.black}>Para crear tareas, deberás pulsar el botón <Icon name='add-circle' size={25} color='black'/> estando en la pantalla de Tareas </Text>

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
                            { (page>1 && page<9) &&
                                <Text style={styles.btnConfText}>Siguiente</Text>
                            }

                            { (page==9) &&
                                <Text style={styles.btnConfText}>Terminar</Text>
                            }
                        </Pressable>
                        
                    </View>


                </View>

            </View>
        
        </Modal>

    )

}

export default HelpCTarea;