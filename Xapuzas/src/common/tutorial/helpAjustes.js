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


                { page==2 && //resaltar crear
                    <View style={stlHelp.copia}>
                        <Pressable style={styles.btnAjuste}>
                            <Text style={styles.text}>Crear copia de seguridad</Text>
                        </Pressable>
                    </View>
                }

                { (page==3 || page==4) && //resaltar recuperar
                    <View style={stlHelp.recuperar}>
                        <Pressable style={styles.btnAjuste}>
                            <Text style={styles.text}>Recuperar información</Text>
                        </Pressable>
                    </View>
                }

                { page==5 &&   
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
                                <Text style={styles.black}>Tocar en Crear copia de seguridad, entrarás a Google Drive, que es una aplicación de tu teléfono para guardar cosas</Text>
                                <Text style={styles.mTopBlack}>Cuando estés allí deberás aceptar el mensaje que aparecerá para guardar los datos allí</Text>
                            </View>
                        }

                        { page==3 &&

                            <View>
                                <Text style={styles.black}>Tocar en Recuperar información, entrarás a Google Drive para recuperar los datos que has guardado allí</Text>
                                <Text style={styles.mTopBlack}>Deberas tocar en el archivo con nombre XXX y la fecha mas reciente</Text>
                            </View>
                        }

                        { page==4 && //no tengo mu claro que hacer con esto asi a voz de pronto
                            <Text style={styles.black}>Esto sirve por si pierdes o te cambias de teléfono y quieres recuperar tus trabajos y tareas anotadas</Text>
                        }

                        { page==5 &&
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

export default HelpAjustes;