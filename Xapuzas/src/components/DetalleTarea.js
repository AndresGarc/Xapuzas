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

                        <Pressable style={styles.iconModal}>
                            <Icon name="create-outline" size={45} color='black'/>
                        </Pressable>

                        <Pressable onPress={ () => closeModal()} style={styles.iconModal2}>
                            <Icon name="close" size={50} color='black'/>
                        </Pressable>

                    </View>

                    <View style={styles.contentDetalle}>

                        <Text>{data.titulo}</Text>
                        { data.cliente!= null &&  <Text>{data.cliente}</Text>}
                        { data.direccion!= null &&  <Text>{data.direccion}</Text>}
                        { data.tlf!= null &&  <Text>{data.tlf}</Text>}
                        { data.fecha!= null &&  <Text>{data.fecha}</Text>}
                        { data.hora!= null &&  <Text>{data.hora}</Text>}

                    </View>

                    <Pressable style={styles.crearBtnModal}>
                        <Text style={styles.crearTxt}>Crear</Text>
                        <Text style={styles.crearIcon}>
                        <Icon name="add-circle" size={30} color='black'/>
                    </Text>

        </Pressable>

                </View>

            </View>
        
        </Modal>
    )

}

export default DetalleTarea;