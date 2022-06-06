import React, { useEffect, useState } from 'react';
import { styles } from '../../assets/styles';
import { stlHelp } from '../../assets/stylesHelp';
import Icon  from 'react-native-vector-icons/Ionicons';

import {
  Text,
  View,
  Pressable,
  Modal
} from 'react-native';

const HelpDTarea = ({closeHelp, setCloseHelp, type}) =>{

    const [page, setPage] = useState(1); //la "pagina" en la que esta el tutorial - 9 paginas

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


            <View style={(page==1) ? stlHelp.mFondo : styles.mFondo}>

                <Text style={styles.black}>Este es el detalle completo de una tarea</Text>

                {/* FONDO FONDO */}
                <View style={styles.mContent}>

                    <View style={styles.topModal}>

                        <Pressable style={styles.iconModal}>
                            <Icon name="md-help-circle" size={50} color='#EDAC70' />
                        </Pressable>

                        <Pressable style={styles.iconModal}>
                            <Icon name="create-outline" size={45} color='black'/>
                        </Pressable>

                        <Pressable style={styles.iconModal2}>
                            <Icon name="close" size={50} color='black'/>
                        </Pressable>

                    </View>

                    <View style={styles.contentDetalle}>

                        <Text style={styles.titModal}>Título de la tarea</Text>
    
                        <View style={styles.labelModal}>
                            <Icon name="person-outline" color='#EDAC70' size={40}/>
                            <Text style={styles.textModal}>Andrés García</Text>
                        </View>
                


                        <View style={styles.labelModal}>
                            <Icon name="location-outline" color='#EDAC70' size={40}/>
                            <Text style={styles.textModal}>Av. Jaime I</Text>
                        </View>

                        <View style={styles.labelModal}>
                            <Icon name="call-outline" color='#EDAC70' size={40}/>
                            <Text style={styles.textModal}>673194872</Text>
                        </View>


                            <View style={styles.labelModal}>
                                <Icon name="today-sharp" color='#EDAC70' size={40}/>
                                <Text style={styles.textModal}>15/02/2022</Text>
                            </View>


                            <View style={styles.labelModal}>
                                <Icon name="time-outline" color='#EDAC70' size={40}/>
                                <Text style={styles.textModal}>12:00</Text>
                            </View>


   
                        <View style={styles.labelModal}>
                            <Icon name="document-outline" color='#EDAC70' size={40}/>
                            <Text style={styles.textModal}>La llave del piso la tiene el portero</Text>
                        </View>


                    </View>

                    <Pressable style={styles.crearBtnModal}>
                        <Text style={styles.crearTxt}>Terminar</Text>
                        <Text style={styles.crearIcon}>
                            <Icon name='checkmark-circle-outline' size={30} color='black'/>
                        </Text>
                    </Pressable>

                </View>


                {/* RESALTAR */}

                { (page==2 || page==3) && //resaltar la tarea y resaltar el check
                    <View style={stlHelp.listaTareas}>
                        <Text style={styles.textT}>Titulo de la tarea</Text>
                        <Icon name='checkmark-circle-outline' size={40} color='#EDAC70'/>
                    </View>
                }

                { page==5 && //resaltar el terminar
                    <View style={stlHelp.listaTareas}>
                        <Text style={styles.textT}>Titulo de la tarea</Text>
                        <Icon name='checkmark-circle-outline' size={40} color='#EDAC70'/>
                    </View>
                }

                {/* MODAL */}
                <View style={styles.mContent}>

                    <View style={styles.confTop}>

                        <Text style={styles.titConf}>Cerrar ayuda</Text>

                        <Pressable onPress={ () => {setCloseHelp(false)}} style={styles.iconModal2}>
                            <Icon name="close" size={50} color='black'/>
                        </Pressable>

                    </View>

                    <View style={styles.mHorizontalXl}>

                        { page==2 &&
                            <Text style={styles.black}>Este es el cliente <Icon name='checkmark-circle-outline' size={25} color='black'/></Text>
                        }

                        { page==3 &&
                            <Text style={styles.black}>Esta es la <Icon name='checkmark-circle-outline' size={25} color='black'/>, si la tocas la verás en Google Maps</Text>
                        }

                        { page==4 && 
                            <Text style={styles.black}>Esta es la fecha <Icon name='checkmark-circle-outline' size={25} color='black'/></Text>
                        }

                        { page==5 &&
                            <Text style={styles.black}>Esta es la hora <Icon name='checkmark-circle-outline' size={25} color='black'/></Text>
                        }

                        { page==6 &&
                            <Text style={styles.black}>Esto es el número de teléfono <Icon name='checkmark-circle-outline' size={25} color='black'/>, tocando en el número te lo marcará directo para hacer una llamada</Text>
                        }        

                        { page==7 &&
                            <Text style={styles.black}>Si tocas en terminar <Icon name='checkmark-circle-outline' size={25} color='black'/>, terminarás esta tarea</Text>
                        }    

                        { page==8 &&
                            <Text style={styles.black}>Si tocas en <Icon name='checkmark-circle-outline' size={25} color='black'/>, podrás editar esta tarea</Text>
                        } 

                        { page==9 &&
                            <Text style={styles.black}>Si tocas en <Icon name='checkmark-circle-outline' size={25} color='black'/>, cierras el detalle de la tarea y veras de nuevo tus tareas</Text>
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

export default HelpDTarea;