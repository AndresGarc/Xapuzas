import React, { useEffect, useState } from 'react';
import { styles } from '../../assets/styles';
import { stlHelp } from '../../assets/stylesHelp';
import { media } from '../../assets/mediaQuerys';
import Icon  from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import {
  Text,
  View,
  Image,
  Pressable,
  Modal
} from 'react-native';

import { putConn } from '../../database/conexion-service';

const QuickStart = ({close, setClose}) =>{

    const [page, setPage] = useState(1); //la "pagina" en la que esta el tutorial

    const next = () => {

        if(page==5){
            closeQuick();
        }
        setPage(page+1);
    }

    const prev = () => {
        setPage(page-1);
    }
    
    const closeQuick = () => {
        
        putConn('conexion', 1).then((data) => {
            setClose(false);
        })
    }

    return(    

        <Modal
            animationType='fade'
            visible={close}
            transparent={true}
        >
            { page == 1 ?
                <LinearGradient colors={['#FAE7C4', '#FCF7ED']} style={styles.degradado}>
                   
                    <View style={styles.contentAjustes}>
                        <Image source={require('./../../assets/playstore.png')} style={stlHelp.resizeLogo}/>
                        <Text style={styles.titConf}>¡Bienvenido/a! </Text>
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.mTopBlack}>Esta aplicación va dirigida a todo aquel carpintero/a que busque una nueva forma de organizar sus trabajos que no sea de manera tradicional y de el paso a usar las nuevas tecnologías para vuestro trabajo</Text>
                        <Text style={styles.mTopBlack}>Te recomendamos ver una pequeña ayuda tocando en <Text style={styles.bold}>Ver ayuda</Text>, para aprender a moverte por la aplicación. Si no quieres, puedes tocar en saltar y usar la aplicación directamente.</Text>
                    </View>

                    <View style={styles.contentBtnConf}>

                        <Pressable style={styles.btnCancel} onPress={() =>{closeQuick()}}>
                            <Text style={styles.btnCancText}>Saltar ayuda</Text>        
                        </Pressable>
 
                            <Pressable style={styles.btnConfirm} onPress={() => {next()}}>
                                <Text style={styles.btnConfText}>Ver Ayuda <Icon name="md-help-circle" size={25} color='black' /></Text> 
                            </Pressable>
                            
                        </View>
                  
                </LinearGradient>
                
                :

                <View style={ (page==2 || page==5) ? stlHelp.mFondoTransparente : stlHelp.mFondoQuick}>

                    { page == 5 &&
                        <View style={stlHelp.helpu}>
                            <Icon name='md-help-circle' size={50} color='#EDAC70'/>
                        </View>
                    }

                    {/* MODAL */}
                    <View style={media.styles.helpModal}>
                    

                        <View style={stlHelp.closeDetail}>

                            <Pressable onPress={ () => {closeQuick()}} style={stlHelp.iconModal2}>   
                                <Text style={stlHelp.titHelp}>Cerrar ayuda</Text>
                                <Icon name="close" size={50} color='black'/>
                            </Pressable>

                        </View>

                        <View style={styles.mHorizontalXl}>


                            { page==2 &&
                                <View>
                                    <Text style={styles.black}>¡Esta es la pantalla principal! Para moverte entre pantallas solo debes tocar en el botón de Tareas, Trabajos o Ajustes</Text>
                                    <Text style={styles.mTopBlack}>¡Sabes donde estas por que el botón tiene un color distinto al resto! Ahora mismo estarias viendo tus tareas</Text>
                                </View>
                            }

                            { page==3 &&
                                <Text style={styles.black}>Para crear tareas, deberás pulsar el botón <Icon name='add-circle' size={25} color='black'/>estando en la pantalla de Tareas</Text>
                            }

                            { page==4 && //no tengo mu claro que hacer con esto asi a voz de pronto
                                <Text style={styles.black}>Para crear trabajos, deberás pulsar el botón <Icon name='add-circle' size={25} color='black'/>estando en la pantalla de Trabajos</Text>
                            }

                            { page==5 &&
                                <View>
                                    <Text style={styles.black}>Si necesitas ayuda para entender qué hace la pantalla, toca en el botón <Icon name="md-help-circle" size={25} color='black' /> para conseguir ayuda</Text>
                                    <Text style={styles.mTopBlack}>Todas las pantallas tienen este botón y te recomendamos que sea lo primero que mires antes de usar la aplicación, para que no te pierdas nada de ella</Text>
                                </View>
                            }



                        </View>

                        {/* BOTONERA SIGUIENTE/ANTERIOR */}
                        <View style={styles.contentBtnConf}>

                            { page != 2 && 
                                <Pressable style={styles.btnCancel} onPress={() =>{prev()}}>
                                    <Text style={styles.btnCancText}>Anterior</Text>        
                                </Pressable>
                            }


                            <Pressable style={(page==2) ? stlHelp.btnNext : styles.btnConfirm} onPress={() => {next()}}>
                                { (page>=2 && page<5) &&
                                    <Text style={styles.btnConfText}>Siguiente</Text>
                                }

                                { (page==5) &&
                                    <Text style={styles.btnConfText}>Terminar</Text>
                                }
                            </Pressable>
                            
                        </View>


                    </View>

                </View>

            }

        </Modal>

    )

}

export default QuickStart;