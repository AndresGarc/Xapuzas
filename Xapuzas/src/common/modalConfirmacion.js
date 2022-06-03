import React, { useEffect, useState } from 'react';
import { styles } from '../assets/styles';
import Icon  from 'react-native-vector-icons/Ionicons';

import {
  Text,
  View,
  Pressable,
  Modal
} from 'react-native';

import { deleteTarea } from '../database/tarea-service'
import { borrarTodo } from '../database/db-service';
import { deleteTrabajo } from '../database/trabajo-service';


const ModalConfirmacion = ({confVisible, setconfVisible, type, data, loadLista, setModalVisible, setestVisible}) =>{
//TYPE: 1 terminar tarea / 2 terminar trabajo / 3 borrar trabajo / 4 borrar todos los datos

    const confirm = () => {

        
        switch (type) {
            case 1:

                deleteTarea(data[0]).then((data) =>{
                    loadLista();
                    setconfVisible(false);
                    if(setModalVisible){
                        setModalVisible(false);
                    }
                })
                break;

            case 2:
                deleteTrabajo(data[0]).then((data) => {
                    loadLista();
                    setconfVisible(false);
                    if(setestVisible){
                        setestVisible(false);
                        if(setModalVisible){
                            setModalVisible(false);
                        }
                    }
                    
                     
                })
                break;
            
            case 3:
                deleteTrabajo(data[0]).then((data) => {
                    loadLista();
                    setconfVisible(false);
                    if(setModalVisible){
                        setModalVisible(false);
                    }
                })
                break;


            case 4:
                borrarTodo().then((data) => {
                    setconfVisible(false);
                })
                break;
        
            default:
                break;
        }
        
    }

    return(    

        <Modal
            visible={confVisible}
            transparent={true}
        >
            <View style={styles.mFondo}>

                <View style={styles.mContent}>

                    <View style={styles.confTop}>

                        { type==1 &&
                            <Text style={styles.titConf}>Terminar tarea</Text>
                        }

                        { type==2 &&
                            <Text style={styles.titConf}>Terminar trabajo</Text>
                        }

                        { type==3 &&
                            <Text style={styles.titConf}>Borrar trabajo</Text>
                        }

                        { type==4 &&
                            <Text style={styles.titConf}>Borrar datos</Text>
                        }

                        <Pressable onPress={ () => {setconfVisible(false)}} style={styles.iconModal2}>
                            <Icon name="close" size={50} color='black'/>
                        </Pressable>

                    </View>

                    <View style={styles.mHorizontalXl}>
                        { type==1 &&
                            <View>
                                <Text style={styles.black}>¿Estás seguro/a de que quieres terminar la tarea <Text style={styles.bold}>{data[1]}</Text>?</Text>
                                <Text style={styles.mTopBlack}>Una vez terminada se borrará esta tarea</Text>
                            </View>
                        }

                        { type==2 &&
                            <View>
                                <Text style={styles.black}>¿Estás seguro/a de que quieres terminar el trabajo <Text style={styles.bold}>{data[1]}</Text>?</Text>
                                <Text style={styles.mTopBlack}>Una vez terminado se borrará este trabajo</Text>
                            </View>
                        }

                        { type==3 &&
                            <View>
                                <Text style={styles.black}>¿Estás seguro/a de que quieres borrar el trabajo <Text style={styles.bold}>{data[1]}</Text>?</Text>
                            </View>
                        }

                        { type==4 &&
                            <View>
                                <Text style={styles.black}>Vas a borrar <Text style={styles.bold}>todos los datos</Text> que has creado en esta aplicación.</Text>
                                <Text style={styles.black}>¿Estás seguro/a de borrarlos?</Text>
                            </View>
                        }


                    </View>


                    <View style={styles.contentBtnConf}>

                        <Pressable style={styles.btnCancel} onPress={() => setconfVisible(false)}>
                            <Text style={styles.btnCancText}>Cancelar</Text>
                        </Pressable>

                        <Pressable style={styles.btnConfirm} onPress={() => confirm()}>
                            { (type==1 || type==2) &&
                                <Text style={styles.btnConfText}>Terminar</Text>
                            }

                            { (type==3 || type==4) &&
                                <Text style={styles.btnConfText}>Borrar</Text>
                            }
                        </Pressable>
                        
                    </View>


                </View>

            </View>
        
        </Modal>

    )

}

export default ModalConfirmacion;