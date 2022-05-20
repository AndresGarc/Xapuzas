import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

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

import { conectarDB, borrarTodo, borrarTTarea } from '../database/db-service'
import { crearTTareas, deleteTarea, getTareaID, getTareas, postTarea, putTarea } from '../database/tarea-service'

const Tareas = () => {


  //Aquí van la declaracion de hooks y el estado / variable que contiene la información y una función que modifica el state
  /*const [ cliente, setCliente ] = useState({}); // lo que hay aquí dentro es el valor inicial de ese objeto, en este caso cliente es un objeto vacío
  const [total, setTotal] = useState(0); // esto es un número
  const [clientes, setClientes] = useState([]); // esto es una colección
  const [modal, setModal] = useState(false); // esto es un booleano
  */

  //Al estar definido aquí solo puedes usar este estado en este componente
  const [modalVisible, setModalVisible] = useState(false);
  const navegacion = useNavigation();

  //todo lo de aquí está escrito en js
  const nuevaCitaHnandler = () => {
    //para modficiar esa variable declarada en el state debe ser mediante la función declarada
    setModalVisible(true);
  }

  const closeModal = () => {
    setModalVisible(false);
  }

  //useCallback para ??
  const loadTareas = async () => {
    try {
      const db = await conectarDB();
      await crearTTareas(db);
      //await deleteTarea(db, 1);
      //await postTarea(db);
      //await getTareas(db);
      await getTareaID(db, 1);
      //await putTarea(db,1);
      //await borrarTTarea(db);
      //await borrarTodo(db);

    } catch(error){
      console.log(`error en el loader ${error}`);
    }
  }

  //no puedes instanciarlo para esperar, pero dentro si puedes
  useEffect(()=>{
    loadTareas();
  });


  //Este return es muy importante, es lo que saldrá en pantalla -> aquí esta la sintaxis de js+html
  // Añadir que no puedes devolver varios elementos, debe ser solo 1
  // {' '} ES UN ESPACIO EN BLANCO
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView>
        



      </ScrollView>
      
      <View style={styles.crearBtn}>
          <Pressable onPress={ () => navegacion.navigate("Crear tarea") } >
            <Text style={styles.crearTxt}>Crear<Icon name="plus-circle" size={30} color='black' style={styles.crearIcon} /></Text>
          </Pressable>
      </View>

{/*
      <Icon name="done" size={20}/>
      <Formulario 
        modalVisible = {modalVisible}
        setModalVisible = {setModalVisible}
      />
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
  crearTxt: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
    textTransform: 'uppercase'
  },
  crearBtn:{
    backgroundColor: '#EDAC70',
    position: 'absolute',
    bottom:0,
    width: '100%',
    padding: 10
  },
  crearIcon:{
    marginTop: 15
  }

});



export default Tareas;
