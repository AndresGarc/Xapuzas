import React, { useEffect, useState } from 'react';
import { styles } from '../assets/styles';
import Icon  from 'react-native-vector-icons/Ionicons';

import {
  Text,
  View,
  Pressable,
  Modal
} from 'react-native';

const modalConfirmacion = ({confVisible, setconfVisible, type}) =>{

    return(
        <Modal
            visible={confVisible}
            transparent={true}
        >
            <View style={styles.mFondo}>

                <View style={styles.mContent}>

                    <View style={styles.topModal}>
    
                        <Text>Terminar</Text>

                        <Pressable onPress={ () => {setconfVisible(false)}} style={styles.iconModal2}>
                            <Icon name="close" size={50} color='black'/>
                        </Pressable>

                    </View>

                    <Text>Confirmar</Text>

                </View>

            </View>
        
        </Modal>
    )

}

export default modalConfirmacion;