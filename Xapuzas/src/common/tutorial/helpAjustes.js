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

const HelpAjustes = ({closeHelp, setCloseHelp, type}) =>{

    const [page, setPage] = useState(1); //la "pagina" en la que esta el tutorial

    const next = () => {
        if(page==6){
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


                { (page==2 || page==3) && //resaltar crear
                    <View style={stlHelp.copia}>
                        <Pressable style={styles.btnAjuste}>
                            <Text style={styles.text}>Crear copia de seguridad</Text>
                        </Pressable>
                    </View>
                }

                { (page==5 || page==4) && //resaltar recuperar
                    <View style={stlHelp.recuperar}>
                        <Pressable style={styles.btnAjuste}>
                            <Text style={styles.text}>Recuperar información</Text>
                        </Pressable>
                    </View>
                }

                { page==6 &&   
                    <View style={stlHelp.delete}>         
                        <Pressable style={styles.btnAjuste} onPress={() => {showConfirm(4);}}>
                            <Text style={styles.text}>Borrar todos los datos</Text>
                        </Pressable>
                    </View>
                }

                {/* MODAL */}
                <View style={(page==5) ? media.styles.helpTAjModal : media.styles.helpAjModal}>
                

                    <View style={stlHelp.closeDetail}>

                        <Pressable onPress={ () => {setCloseHelp(false)}} style={stlHelp.iconModal2}>   
                            <Text style={stlHelp.titHelp}>Cerrar ayuda</Text>
                            <Icon name="close" size={50} color='black'/>
                        </Pressable>

                    </View>

                    <View style={styles.mHorizontalXl}>
                        { page==1 &&
                            <Text style={styles.black}>Esta es la pantalla de ajustes, aquí podrás crear copias de seguridad de tu información, recuperar esa información y borrar todos los datos que has creado en en la aplicación</Text>
                        }

                        { page==2 &&
                            <View>
                                <Text style={styles.black}>Si tocas en <Text style={styles.bold}>Crear copia de seguridad</Text>, se creará el archivo <Text style={styles.bold}>xapuzas.db</Text> en tu carpeta de <Text style={styles.bold}>Descargas</Text></Text>
                                <Text style={styles.mTopBlack}>Este archivo tiene toda la información que has creado para la aplicación</Text>
                            </View>
                        }

                        { page==3 &&
                            <View>
                                <Text style={styles.black}>Esto sirve por si pierdes o te cambias de teléfono y quieres recuperar tus trabajos y tareas anotadas</Text>
                                <Text style={styles.mTopBlack}>Este archivo te lo puedes enviar a WhatsApp o a donde quieras desde el <Text style={styles.bold}>Gestor de archivos</Text>, buscándolo en la carpeta de <Text style={styles.bold}>Descargas</Text></Text>
                            </View>
                        }

                        { page==4 &&
                            <Text style={styles.black}>Si tocas en <Text style={styles.bold}>Recuperar información</Text>, cogerá el archivo <Text style={styles.bold}>xapuzas.db</Text> de la carpeta Descargas y recuperará la información que tenías guardada anteriormente</Text>
                        }

                        { page==5 && //no tengo mu claro que hacer con esto asi a voz de pronto
                            <Text style={styles.black}>Deberás descargarte el archivo de donde lo tengas ya que este debe estar en la carpeta <Text style={styles.bold}>Descargas</Text></Text>
                        }

                        { page==6 &&
                            <Text style={styles.black}>Tocar en Borrar datos eliminará todos los datos creados en la aplicación</Text>
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
                            { (page>1 && page<6) &&
                                <Text style={styles.btnConfText}>Siguiente</Text>
                            }

                            { (page==6) &&
                                <Text style={styles.btnConfText}>Terminar</Text>
                            }
                        </Pressable>
                        
                    </View>


                </View>

            </View>
        
        </Modal>

    )

}

export default HelpAjustes;