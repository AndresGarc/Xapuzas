import React, { useState } from 'react';
import { styles } from '../assets/styles';
import Icon  from 'react-native-vector-icons/AntDesign';

import {
  SafeAreaView,
  Text,
  View,
  Button,
  Pressable,
  Modal
} from 'react-native';

const Ajustes = () => {




  return (
    <SafeAreaView style={styles.background}>

      <View style={styles.header}>
      
        <Text style={styles.titAjuste}>¿Qué quieres hacer?</Text>

        <View style={styles.contentHelp}>
          <Pressable style={styles.help}>
            <Icon name="questioncircle" size={40} color='#EDAC70' />
          </Pressable>
        </View>

      </View>

      <View style={styles.contentAjustes}>

        <Pressable style={styles.btnAjuste}>
          <Text style={styles.text}>Crear copia de seguridad</Text>
        </Pressable>

        <Pressable style={styles.btnAjuste}>
          <Text style={styles.text}>Recuperar información</Text>
        </Pressable>

        <Pressable style={styles.btnAjuste}>
          <Text style={styles.text}>Borrar todos los datos</Text>
        </Pressable>

      </View>

    </SafeAreaView>
  );
};

export default Ajustes;
