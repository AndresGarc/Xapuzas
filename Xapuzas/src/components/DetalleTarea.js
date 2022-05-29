import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { styles } from '../assets/styles';
import Icon  from 'react-native-vector-icons/Ionicons';

import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button,
  Pressable,
  Modal
} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

import { conectarDB, borrarTodo } from '../database/db-service'


const DetalleTarea = ({modalVisible, setModalVisible, data, setDataDetalle}) =>{

    const navegacion = useNavigation();

    const closeModal = () => {
        setModalVisible(false);
        setDataDetalle([]);
    }


    return(
        <Modal
            visible={modalVisible}
            transparent={true}
        >
            <View style={styles.mFondo}>

                <View style={styles.mContent}>

                    <View style={styles.topModal}>
  
                        <Pressable style={styles.iconModal}>
                            <Icon name="md-help-circle" size={50} color='#EDAC70' />
                        </Pressable>

                        <Pressable  style={styles.iconModal}>
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
                                <Text style={styles.textModal}>{data.direccion}</Text>
                            </View>
                        }

                        { data.tlf!= null &&  
                            <View style={styles.labelModal}>
                                <Icon name="call-outline" color='#EDAC70' size={40}/>
                                <Text style={styles.textModal}>{data.tlf}</Text>
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

                    <Pressable style={styles.crearBtnModal}>
                        <Text style={styles.crearTxt}>Terminar</Text>
                        <Text style={styles.crearIcon}>
                        <Icon name='checkmark-circle-outline' size={30} color='black'/>
                        </Text>
                    </Pressable>

                </View>

            </View>
        
        </Modal>
    )

}

export default DetalleTarea;