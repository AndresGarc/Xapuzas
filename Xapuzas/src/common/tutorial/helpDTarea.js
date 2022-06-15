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
        if(page==10){
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

            <View style={stlHelp.mFondo}>    
                

                <View style={stlHelp.closeDetail}>

                    <Pressable onPress={ () => {setCloseHelp(false)}} style={stlHelp.iconModal2}>
                        
                        <Text style={stlHelp.titHelp}>Cerrar ayuda</Text>
                        <Icon name="close" size={50} color='black'/>
                    </Pressable>

                </View>

                {page==1 &&
                    <Text style={stlHelp.explain}>Este es el detalle completo de una tarea</Text>
                }
                
                
                <View style={(page>1) && stlHelp.opacidad2}></View>

                {/* DETALLE FONDO */}
                <View style={(page>1) ? stlHelp.mContentOsc : styles.mContent}>
       

                    <View style={styles.topModal}>

                        
                        <Pressable style={styles.iconModal}>
                            <Icon name="md-help-circle" size={50} color='#EDAC70' />
                        </Pressable>
                        
                
                        <View style={(page==9) && stlHelp.focus}>
                            <Pressable style={styles.iconModal}>
                                <Icon name="create-outline" size={45} color='black'/>
                            </Pressable>
                        </View>

                        <View style={(page==10) && stlHelp.focus}>
                            <Pressable style={styles.iconModal2}>
                                <Icon name="close" size={50} color='black'/>
                            </Pressable>
                        </View>

                    </View>

                    <View style={styles.contentDetalle}>

                        <Text style={styles.titModal}>Título de la tarea</Text>

                        <View style={(page==2) && stlHelp.focus}>
                            <View style={styles.labelModal}>
                                <Icon name="person-outline" color='#EDAC70' size={40}/>
                                <Text style={styles.textModal}>Andrés García</Text>
                            </View>
                        </View>
    
                        <View style={(page==3) && stlHelp.focus}>
                            <View style={styles.labelModal}>
                                <Icon name="location-outline" color='#EDAC70' size={40}/>
                                <Text style={styles.textModal}>Av. Jaime I</Text>
                            </View>
                        </View>
                        
                        <View style={(page==4) && stlHelp.focus}>
                            <View style={styles.labelModal}>
                                <Icon name="call-outline" color='#EDAC70' size={40}/>
                                <Text style={styles.textModal}>673194872</Text>
                            </View>
                        </View>

                        <View style={(page==5) && stlHelp.focus}>
                            <View style={styles.labelModal}>
                                <Icon name="today-sharp" color='#EDAC70' size={40}/>
                                <Text style={styles.textModal}>15/02/2022</Text>
                            </View>
                        </View>

                        <View style={(page==6) && stlHelp.focus}>
                            <View style={styles.labelModal}>
                                <Icon name="time-outline" color='#EDAC70' size={40}/>
                                <Text style={styles.textModal}>12:00</Text>
                            </View>
                        </View>

   
                        <View style={(page==7) && stlHelp.focus}>
                            <View style={styles.labelModal}>
                                <Icon name="document-outline" color='#EDAC70' size={40}/>
                                <Text style={styles.textModal}>La llave del piso la tiene el portero</Text>
                            </View>
                        </View>

                    </View>

                    <View style={(page==8) && stlHelp.focus}>
                        <Pressable style={styles.crearBtnModal}>
                            <Text style={styles.crearTxt}>Terminar</Text>
                            <Text style={styles.crearIcon}>
                                <Icon name='checkmark-circle-outline' size={30} color='black'/>
                            </Text>
                        </Pressable>
                    </View>

                    <View style={(page>1) && stlHelp.opacidad}></View>

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
                            { (page>1 && page<10) &&
                                <Text style={styles.btnConfText}>Siguiente</Text>
                            }

                            { (page==10) &&
                                <Text style={styles.btnConfText}>Terminar</Text>
                            }
                        </Pressable>
                        
                    </View>    

            </View>

            {/* MODAL ANOTACIONES */}

            { page>=2 &&

                <View style={((page>=2 && page<=5) || (page>=9)) ? stlHelp.botExplain : stlHelp.topExplain}>

                    <View style={stlHelp.mExplain}>

                        {page==2 &&
                            <Text style={styles.black}>Este es el <Text style={styles.bold}>cliente</Text> <Icon name="person-outline" size={25} color='black'/></Text>
                        }

                        { page==3 &&
                            <Text style={styles.black}>Esta es la <Text style={styles.bold}>dirección</Text><Icon name='location-outline' size={25} color='black'/>, si la tocas la verás en Google Maps</Text>
                        }

                        { page==4 && 
                            <Text style={styles.black}>Esto es el número de <Text style={styles.bold}>teléfono</Text><Icon name='call-outline' size={25} color='black'/>, tocando en el número te lo marcará directo para hacer una llamada</Text>
                        }

                        { page==5 &&
                            <Text style={styles.black}>Esta es la <Text style={styles.bold}>fecha</Text><Icon name='today-sharp' size={25} color='black'/></Text>
                        }

                        { page==6 &&
                            <Text style={styles.black}>Esta es la <Text style={styles.bold}>hora</Text><Icon name='time-outline' size={25} color='black'/></Text>
                        }      

                        { page==7 &&
                            <Text style={styles.black}>Estas son tus <Text style={styles.bold}>anotaciones</Text><Icon name='document-outline' size={25} color='black'/> por si necesitas anotar algo extra</Text>
                        }  

                        { page==8 &&
                            <Text style={styles.black}>Si tocas en <Text style={styles.bold}>terminar</Text><Icon name='checkmark-circle-outline' size={25} color='black'/>, terminarás esta tarea</Text>
                        }    

                        { page==9 &&
                            <Text style={styles.black}>Si tocas en <Icon name='create-outline' size={25} color='black'/>, podrás <Text style={styles.bold}>editar</Text> esta tarea</Text>
                        } 

                        { page==10 &&
                            <Text style={styles.black}>Si tocas en <Icon name='close' size={25} color='black'/>, <Text style={styles.bold}>cierras</Text> el detalle de la tarea y veras de nuevo tus tareas</Text>
                        }

                    </View>

                </View>
                }


        
        </Modal>

    )

}

export default HelpDTarea;