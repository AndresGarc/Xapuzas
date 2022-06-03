import React, { useEffect, useState } from 'react';
import { styles } from '../assets/styles';
import Icon  from 'react-native-vector-icons/Ionicons';

import {
  Text,
  View,
  Pressable,
  Modal
} from 'react-native';

import {putEstado} from '../database/trabajo-service'
import ModalConfirmacion from '../common/ModalConfirmacion';

const ModalEstado = ({estVisible, setestVisible, dataState, loadLista, setModalVisible}) =>{

    // 1 no visto - 2 visto - 3 aceptado - 4 terminado
    const [state, setstate] = useState(dataState[1]);
    const [confVisible, setconfVisible] = useState(false);
    const [dataterminar, setTerminar] = useState([]);
    const [typeModal, setType] = useState();

    const cambiarEstado = (id) => {
        if(id!=state){
            setstate(id);
        }
    }

    const showConfirm = () => {
        setTerminar([dataState[0], dataState[2]]);
        setType(2);
        setconfVisible(true);
    }

    const confirm = () => {
        putEstado(dataState[0], state).then((data)=>{
            loadLista();
            setestVisible(false);
            if(setModalVisible){
                setModalVisible(false);
            }
        })
    }

    return(    

        <Modal
            visible={estVisible}
            transparent={true}
        >
            <View style={styles.mFondo}>

                <View style={styles.mContent}>

                    <View style={styles.estTop}>

                        <Text style={styles.titConf}>Cambiar el estado del trabajo</Text>
                        <Pressable onPress={ () => {setestVisible(false)}} style={styles.iconModal2}>
                            <Icon name="close" size={50} color='black'/>
                        </Pressable>

                    </View>

                    <View style={styles.mHorizontalS}>
                        <Text style={styles.black}>Ahora mismo el trabajo: <Text style={styles.bold}>{dataState[2]}</Text>, está <Text style={styles.bold}>visto por el cliente</Text>, si quieres cambiar el estado toca en el icono del estado al que quieras cambiar y toca <Text style={styles.bold}>Aceptar</Text></Text>
                    </View>

                    <View style={styles.mHorizontalXl}>

                        <View style={styles.contentEstado}>
                            <Pressable style={state==1 ? styles.btnEstadoFocus : styles.btnEstado} onPress={() => {cambiarEstado(1)}}>
                                <Icon name="eye-off-outline" size={35} color='black'/>
                            </Pressable>
                            <Text style={styles.blackMRight}><Text style={styles.bold}>No visto</Text> por el cliente</Text>
                        </View>
                        
                        <View style={styles.contentEstado}>
                            <Pressable style={state==2 ? styles.btnEstadoFocus : styles.btnEstado} onPress={() => {cambiarEstado(2)}}>
                                <Icon name="eye-outline" size={35} color='black'/>
                            </Pressable>
                            <Text style={styles.blackMRight}><Text style={styles.bold}>Visto</Text> por el cliente</Text>
                        </View>

                        <View style={styles.contentEstado}>
                            <Pressable style={state==3 ? styles.btnEstadoFocus : styles.btnEstado} onPress={() => {cambiarEstado(3)}}>
                                <Icon name="checkmark" size={35} color='black'/>
                            </Pressable>
                            <Text style={styles.blackMRight}>Trabajo <Text style={styles.bold}>aceptado</Text> por el cliente</Text>
                        </View>

                        <View style={styles.contentEstado}>
                            <Pressable style={state==4 ? styles.btnEstadoFocus : styles.btnEstado} onPress={() => {showConfirm()}}>
                                <Icon name="checkmark-circle-outline" size={35} color='black'/>
                            </Pressable>
                            <Text style={styles.blackMRight}>Trabajo <Text style={styles.bold}>terminado</Text></Text>
                        </View>

                    </View>



                    <View style={styles.contentBtnConf}>

                        <Pressable style={styles.btnCancel} onPress={() => setestVisible(false)}>
                            <Text style={styles.btnCancText}>Cancelar</Text>
                        </Pressable>

                        <Pressable style={styles.btnConfirm} onPress={() => confirm()}>
                            <Text style={styles.btnConfText}>Aceptar</Text>
                        </Pressable>

                    </View>

                </View>

            </View>


        { confVisible &&
            <ModalConfirmacion 
              confVisible={confVisible}
              setconfVisible={setconfVisible}
              type={typeModal}
              data={dataterminar}
              loadLista={loadLista}
              setModalVisible={setModalVisible}
              setestVisible={setestVisible}
            />
        }
        
        </Modal>

    )

}

export default ModalEstado;