import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { styles } from '../assets/styles';
import Icon  from 'react-native-vector-icons/Ionicons';

import {
  Text,
  View,
  Pressable,
  Modal,
  Linking
} from 'react-native';

import ModalConfirmacion from '../common/ModalConfirmacion';
import HelpDTarea from '../common/tutorial/helpDTarea';

const DetalleTarea = ({modalVisible, setModalVisible, data, setDataDetalle, loadLista}) =>{

    const navegacion = useNavigation();
    
    const [terminarData, setTerminar] = useState([]);
    const [typeModal, setType] = useState();
    const [confVisible, setconfVisible] = useState(false);
    const [closeHelp, setCloseHelp] = useState(false);

    const showConfirm = (type,id, titulo) => {
        setTerminar([id,titulo]);
        setType(type);
        setconfVisible(true);
    }
    

    const closeModal = () => {
        setModalVisible(false);
        setDataDetalle([]);
    }

    const irEditor = () => {
        let datos = data;
        setModalVisible(false);
        setDataDetalle([]);
        navegacion.navigate("Crear tarea",{mode:"Editar", data: datos});
    }

    const llamar = (num) => {
        Linking.openURL(`tel:${num}`);
    }

    const googleMaps = (dir) => {
        let url = 'geo:0,0?q='+dir;
        Linking.openURL(url);
    }

    useEffect(() => {
        return()  => {
        }
    })

    return(
        <Modal
            visible={modalVisible}
            transparent={true}
        >
            <View style={styles.mFondo}>

                <View style={styles.mContent}>

                    <View style={styles.topModal}>
  
                        <Pressable onPress={ () => setCloseHelp(true)} style={styles.iconModal}>
                            <Icon name="md-help-circle" size={50} color='#EDAC70' />
                        </Pressable>

                        <Pressable onPress={ () => irEditor()} style={styles.iconModal}>
                            <Icon name="create-outline" size={45} color='black'/>
                        </Pressable>

                        <Pressable onPress={ () => closeModal()} style={styles.iconModal2}>
                            <Icon name="close" size={50} color='black'/>
                        </Pressable>

                    </View>

                    <View style={styles.contentDetalle}>

                        <Text style={styles.titModal}>{data.titulo}</Text>
                        { data.cliente!= null &&
                            <View style={styles.labelModal}>
                                <Icon name="person-outline" color='#EDAC70' size={40}/>
                                <Text style={styles.textModal}>{data.cliente}</Text>
                            </View>
                        }

                        { data.direccion!= null &&  
                            <View style={styles.labelModal}>
                                <Icon name="location-outline" color='#EDAC70' size={40}/>
                                <Pressable onPress={() => {googleMaps(data.direccion)}}>
                                    <Text style={styles.textModal}>{data.direccion}</Text>
                                </Pressable>
                            </View>
                        }

                        { data.tlf!= null &&  
                            <View style={styles.labelModal}>
                                <Icon name="call-outline" color='#EDAC70' size={40}/>
                                <Pressable onPress={() => {llamar(data.tlf)}}>
                                    <Text style={styles.textModal}>{data.tlf}</Text>
                                </Pressable>
                            </View>
                        }

                        { data.fecha!= null &&  
                            <View style={styles.labelModal}>
                                <Icon name="today-sharp" color='#EDAC70' size={40}/>
                                <Text style={styles.textModal}>{data.fecha}</Text>
                            </View>
                        }

                        { data.hora!= null &&  
                            <View style={styles.labelModal}>
                                <Icon name="time-outline" color='#EDAC70' size={40}/>
                                <Text style={styles.textModal}>{data.hora}</Text>
                            </View>
                        }

                        { data.notas!= null &&  
                        <View style={styles.labelModal}>
                            <Icon name="document-outline" color='#EDAC70' size={40}/>
                            <Text style={styles.textModal}>{data.notas}</Text>
                        </View>
                        }

                    </View>

                    <Pressable style={styles.crearBtnModal} onPress={() => {showConfirm(1, data.tarea_id, data.titulo)}}>
                        <Text style={styles.crearTxt}>Terminar</Text>
                        <Text style={styles.crearIcon}>
                            <Icon name='checkmark-circle-outline' size={30} color='black'/>
                        </Text>
                    </Pressable>

                </View>

            </View>

        { confVisible &&
          <ModalConfirmacion 
            confVisible={confVisible}
            setconfVisible={setconfVisible}
            type={typeModal}
            data={terminarData}
            loadLista={loadLista}
            setModalVisible = {setModalVisible}
          />
        }

        { closeHelp &&
          <HelpDTarea
            closeHelp={closeHelp}
            setCloseHelp={setCloseHelp}
          />
        }
        
        </Modal>
    )

}

export default DetalleTarea;