import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { styles } from '../assets/styles';
import Icon  from 'react-native-vector-icons/Ionicons';

import {
  Text,
  View,
  Pressable,
  Modal
} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

import { conectarDB, borrarTodo } from '../database/db-service'
import { crearTTrabajos, deleteTrabajo, getTrabajoID, getTrabajos, postEstados, postTrabajos, putEstado, putIconoEstado, putTrabajos } from '../database/trabajo-service';


const DetalleTrabajo = ({modalVisible, setModalVisible, data, setDataDetalle}) =>{

    const navegacion = useNavigation();

    const closeModal = () => {
        setModalVisible(false);
        setDataDetalle([]);
    }

    const irEditor = () => {
        let datos = data;
        setModalVisible(false);
        setDataDetalle([]);
        navegacion.navigate("Crear trabajo",{mode:"Editor", data: datos});
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
                                <Text style={styles.textModal}>{data.direccion}</Text>
                            </View>
                        }

                        { data.tlf1!= null &&  
                            <View>
                                <View style={styles.labelModal}>
                                    <Icon name="call-outline" color='#EDAC70' size={40}/>
                                    <Text style={styles.labTitModal}>Teléfonos</Text>
                                </View>

                                <View style={styles.contentModTlf}>

                                    <View style={styles.cliTlfModal}>
                                        <Text style={styles.textTfl}>{data.cliente_tlf1}</Text>
                                        {data.cliente_tlf2 != null && <Text style={styles.textTfl}>{data.cliente_tlf2}</Text>}
                                        {data.cliente_tlf3 != null && <Text style={styles.textTfl}>{data.cliente_tlf3}</Text>}
                                    </View>

                                    <View style={styles.TlfModal}>
                                        <Text style={styles.textTfl}>{data.tlf1}</Text>
                                        {data.tlf2 != null && <Text style={styles.textTfl}>{data.tlf2}</Text>}
                                        {data.tlf3 != null && <Text style={styles.textTfl}>{data.tlf3}</Text>}
                                    </View>
                                </View>

                            </View>

                        }

                        { data.pedido_mat!= null &&  
                            <View style={styles.mBottomS}>
                                <View style={styles.labelModal}>
                                    <Icon name="today-sharp" color='#EDAC70' size={40}/>
                                    <Text style={styles.labTitModal}>Materiales pedidos</Text>
                                </View>
                                
                                {data.pedido_mat==0 && <Text style={styles.textModal}>Sin pedir </Text> }

                                {data.pedido_mat==1 && <Text style={styles.textModal}>Pedido el día: {data.dia_pedido} </Text> }

                                {data.pedido_mat==2 && <Text style={styles.textModal}>Recogido </Text> }

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
                        <Text style={styles.crearTxt}>Borrar/Visto</Text>
                        <Text style={styles.crearIcon}>
                        <Icon name="add-circle" size={30} color='black'/>
                    </Text>

        </Pressable>

                </View>

            </View>
        
        </Modal>
    )

}

export default DetalleTrabajo;