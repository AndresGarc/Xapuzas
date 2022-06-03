import React, { useEffect, useState } from 'react';
import { styles } from '../assets/styles';
import Icon  from 'react-native-vector-icons/Ionicons';

import {
  Text,
  View,
  Pressable,
  Modal
} from 'react-native';


const ModalEstado = ({estVisible, setestVisible}) =>{

    const cambiarEstado = () => {
        console.log("cambiar estado");
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
                        <Text style={styles.black}>Ahora mismo el trabajo está <Text style={styles.bold}>visto por el cliente</Text>, si quieres cambiar el estado toca en el icono del estado al que quieras cambiar y toca <Text style={styles.bold}>Aceptar</Text></Text>
                    </View>

                    <View style={styles.mHorizontalXl}>

                        <View style={styles.contentEstado}>
                            <Pressable style={styles.btnEstado}><Icon name="eye-off-outline" size={35} color='black'/></Pressable>
                            <Text style={styles.blackMRight}><Text style={styles.bold}>No visto</Text> por el cliente</Text>
                        </View>
                        
                        <View style={styles.contentEstado}>
                            <Pressable style={styles.btnEstado}><Icon name="eye-outline" size={35} color='black'/></Pressable>
                            <Text style={styles.blackMRight}><Text style={styles.bold}>Visto</Text> por el cliente</Text>
                        </View>

                        <View style={styles.contentEstado}>
                            <Pressable style={styles.btnEstado}><Icon name="checkmark" size={35} color='black'/></Pressable>
                            <Text style={styles.blackMRight}>Trabajo <Text style={styles.bold}>aceptado</Text> por el cliente</Text>
                        </View>

                        <View style={styles.contentEstado}>
                            <Pressable style={styles.btnEstado}><Icon name="checkmark-circle-outline" size={35} color='black'/></Pressable>
                            <Text style={styles.blackMRight}>Trabajo <Text style={styles.bold}>terminado</Text></Text>
                        </View>

                    </View>



                    <View style={styles.contentBtnConf}>

                        <Pressable style={styles.btnCancel} onPress={() => setestVisible(false)}>
                            <Text style={styles.btnCancText}>Cancelar</Text>
                        </Pressable>

                        <Pressable style={styles.btnConfirm} onPress={() => cambiarEstado()()}>
                            <Text style={styles.btnConfText}>Aceptar</Text>
                        </Pressable>

                    </View>

                </View>

            </View>
        
        </Modal>

    )

}

export default ModalEstado;