import React, { useState } from 'react';

import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button,
  Pressable,
  Modal
} from 'react-native';

const Ajustes = () => {


  const [modalVisible, setModalVisible] = useState(false);

  //todo lo de aquí está escrito en js
  const nuevaCitaHnandler = () => {
    //para modficiar esa variable declarada en el state debe ser mediante la función declarada
    setModalVisible(true);
  }

  const closeModal = () => {
    setModalVisible(false);
  }

  return (
    <SafeAreaView style={styles.background}>

      <Text>Ajustes</Text>

{/*
      <Pressable onPress={ () => setModalVisible(true) } style={styles.btn}>
        <Text style={styles.btnTxt}>Crear</Text>
      </Pressable>

  */}
    </SafeAreaView>
  );
};

//ESTILOS
const styles = StyleSheet.create({
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 10
  },
  tituloBold: {
    fontWeight: 'bold',
  },
  background: {
    backgroundColor: '#FAE7C4',
    flex: 1
  },
  btn: {
   backgroundColor: '#EDAC70',
   padding: 15,
   margin: 20,
   borderRadius: 10
  },
  btnTxt: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
    textTransform: 'uppercase'
  }

});


export default Ajustes;
