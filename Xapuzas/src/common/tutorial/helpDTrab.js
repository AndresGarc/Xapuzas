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

const HelpDTrab = ({closeHelp, setCloseHelp, type}) =>{

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
       

                    <View style={stlHelp.topModal}>

                        
                        <Pressable style={styles.iconModal}>
                            <Icon name="md-help-circle" size={40} color='#EDAC70' />
                        </Pressable>
                        
                
                        <View style={(page==9) && stlHelp.focus}>
                            <Pressable style={styles.iconModal}>
                                <Icon name="create-outline" size={35} color='black'/>
                            </Pressable>
                        </View>

                        <View style={(page==10) && stlHelp.focus}>
                            <Pressable style={styles.iconModal2}>
                                <Icon name="close" size={40} color='black'/>
                            </Pressable>
                        </View>

                    </View>

                    <View style={styles.contentDetalle}>

                        <Text style={styles.titModal}>Título de la tarea</Text>

                        <View style={(page==2) && stlHelp.focus}>
                            <View style={stlHelp.labelModal}>
                                <Icon name="person-outline" color='#EDAC70' size={35}/>
                                <Text style={styles.textModal}>Andrés García</Text>
                            </View>
                        </View>
    
                        <View style={(page==3) && stlHelp.focus}>
                            <View style={stlHelp.labelModal}>
                                <Icon name="location-outline" color='#EDAC70' size={35}/>
                                <Text style={styles.textModal}>Av. Jaime I</Text>
                            </View>
                        </View>
                        
                        <View style={(page==4) && stlHelp.focus}>
                                <View style={stlHelp.labelModal}>
                                    <Icon name="call-outline" color='#EDAC70' size={35}/>
                                    <Text style={styles.labTitModal}>Teléfonos</Text>
                                </View>

                                <View style={styles.contentModTlf}>

                                    <View style={styles.cliTlfModal}>
                                        <Text style={stlHelp.textTfl}>Andres</Text>
                                        <Text style={stlHelp.textTfl}>Antonio</Text>
                                    </View>

                                    <View style={styles.TlfModal}>
                                        <Text style={stlHelp.textTfl}>648759132</Text>
                                        <Text style={stlHelp.textTfl}>689574123</Text>
                                    </View>
                                </View>

                            </View>

                        <View style={(page==5) && stlHelp.focus}>
                            <View style={styles.mBottomS}>
                                    <View style={styles.labelModal}>
                                        <Icon name="today-sharp" color='#EDAC70' size={40}/>
                                        <Text style={styles.labTitModal}>Materiales pedidos</Text>
                                    </View>

                                    <Text style={styles.textModal}>Pedido el día: 15/02/2022 </Text> 
                                </View>
                        </View>

   
                        <View style={(page==6) && stlHelp.focus}>
                            <View style={stlHelp.labelModal}>
                                <Icon name="document-outline" color='#EDAC70' size={32}/>
                                <Text style={styles.textModal}>La llave del piso la tiene el portero</Text>
                            </View>
                        </View>

                    </View>

                    

                        <View style={styles.contentBtnConf}>

                                <Pressable style={(page==7) ? stlHelp.btnCancel : styles.btnCancel}>
                                    <Text style={styles.btnCancText}>Borrar <Icon name='trash-outline' size={20} color='black'/></Text>
                                </Pressable>
                                <Pressable style={(page==8) ? stlHelp.btnConfirm : styles.btnConfirm}>
                                    <Text style={styles.btnConfText}>Visto <Icon name="eye-outline" size={20} color='black'/></Text>
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

                <View style={((page>=2 && page<5) || (page>=9)) ? stlHelp.botExplain : stlHelp.topExplain}>

                    <View style={stlHelp.mExplain}>

                        {page==2 &&
                            <Text style={styles.black}>Este es el cliente  <Icon name="person-outline" size={25} color='black'/></Text>
                        }

                        { page==3 &&
                            <Text style={styles.black}>Esta es la dirección <Icon name='location-outline' size={25} color='black'/>, si la tocas la verás en Google Maps</Text>
                        }

                        { page==4 && 
                            <Text style={styles.black}>Esto son los números de teléfono <Icon name='call-outline' size={25} color='black'/>, tocando en uno lo marcará directo para hacer una llamada</Text>
                        }

                        { page==5 &&
                            <Text style={styles.black}>Aquí ves el estado de los materiales. Puede estar sin pedir, pedidos en una fecha o recogidos</Text>
                        }

                        { page==6 &&
                            <Text style={styles.black}>Estas son tus anotaciones <Icon name='document-outline' size={25} color='black'/> por si necesitas anotar algo extra</Text>
                        }      

                        { page==7 &&
                            <Text style={styles.black}>Este botón sirve para borrar el trabajo</Text>
                        }  

                        { page==8 &&
                            <Text style={styles.black}>Este es el estado del trabajo. Tocando en ese botón, podrás cambiar el estado</Text>
                        }    

                        { page==9 &&
                            <Text style={styles.black}>Si tocas en <Icon name='create-outline' size={25} color='black'/>, podrás editar este trabajo</Text>
                        } 

                        { page==10 &&
                            <Text style={styles.black}>Si tocas en <Icon name='close' size={25} color='black'/>, cierras el detalle del trabajo y veras de nuevo tus trabajos</Text>
                        }

                    </View>

                </View>
                }


        
        </Modal>

    )

}

export default HelpDTrab;