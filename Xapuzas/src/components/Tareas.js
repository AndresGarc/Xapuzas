import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import Icon  from 'react-native-vector-icons/Ionicons';
import { styles } from '../assets/styles';

import {
  SafeAreaView,
  Text,
  View,
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
  
  const [urgente, setUrgente] = useState(1); // 1 urgente / 0 pendientes
  //const [data, setData] = useState(["Titulo1", "Titulo2","Titulo2","Titulo1", "Titulo2","Titulo1", "Titulo2",]);
  const [data, setData] = useState([]);

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

  const showUrgentes = () => {
    if(urgente == 0){
      setUrgente(1);
    }
  }

  const showPendientes = () => {
    if(urgente == 1){
      setUrgente(0);
    }
  }

  //useCallback para ??
  const loadTareas = async () => {
    try {
      const db = await conectarDB();
      //await crearTTareas(db);
      //await deleteTarea(db, 1);
      //await postTarea(db);
      //await getTareas(db);
      //await getTareaID(db, 1);
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

      <View style={styles.header}>
        
        <View style={styles.contentPicker}>
          <Pressable style={ urgente == 1  ? styles.btnFocusL : styles.btnPickerL} onPress={ () => showUrgentes()}>
            <Text style={styles.btnText}>Urgentes</Text>
          </Pressable>

          <Pressable style={urgente == 0 ? styles.btnFocusR : styles.btnPickerR} onPress={() => showPendientes()}>
            <Text style={styles.btnText}>Pendientes</Text>
          </Pressable>
        </View>


        <View style={styles.contentHelp}>
          <Pressable style={styles.help}>
            <Icon name="md-help-circle" size={50} color='#EDAC70' />
          </Pressable>
        </View>

      </View>

        {
        data.length==0 ? 
          <View style={styles.noData}>
            <Icon name='sad-outline' size={30}></Icon>
            <Text>No hay tareas creadas</Text>
            <Text>Toca el botón Crear para añadir una tarea</Text>
          </View>
        :
          <ScrollView>
            <View style={styles.listaTareas}>
              {data.map( (tarea, i) => {
                  return (
                      <Pressable style={(i === data.length-1) ? styles.last : styles.tarea} onPress={()=>{console.log("Detalle");}}>
                        <Text style={styles.textT}>{tarea}</Text>
                        <Pressable style={styles.terminar} onPress={()=>{console.log("Terminar");}}>
                          <Icon name='checkmark-circle-outline' size={40} color='#EDAC70'/>
                        </Pressable>  
                      </Pressable>
                  );
                }
              )}
            </View>
          </ScrollView>
        }
      

        <Pressable onPress={ () => navegacion.navigate("Crear tarea") } style={styles.crearBtn}>
          <Text style={styles.crearTxt}>Crear</Text>
          <Text style={styles.crearIcon}>
            <Icon name="add-circle" size={30} color='black'/>
          </Text>
        </Pressable>


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



export default Tareas;
