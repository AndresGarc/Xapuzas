import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import Icon  from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
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
import DetalleTarea from './DetalleTarea';

import { conectarDB, borrarTodo, borrarTTarea } from '../database/db-service'
import { crearTTareas, deleteTarea, getTareaID, getTareas, postTarea, putTarea } from '../database/tarea-service'

const Tareas = ({route}) => {

  const [urgente, setUrgente] = useState(1); // 1 urgente / 0 pendientes
  const [data, setData] = useState([]);
  const [dataDetalle, setDataDetalle] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [load, setLoad] = useState(false);

  const navegacion = useNavigation();


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


  const loadTareas = async () => {
    try {
      const db = await conectarDB();
      //
      //await deleteTarea(db, 1);
      //await postTarea(db);
      //await getTareas();
      //await getTareaID(db, 1);
      //await putTarea(db,1);
      await borrarTTarea(db);
      await crearTTareas(db);
      //await borrarTodo(db);
      

    } catch(error){
      console.log(`error en el loader ${error}`);
    }
  }

  const showDetalle = (id) => {
    //console.log("ello");

    
    getTareaID(id).then((data) => {
      setDataDetalle(data);
      setModalVisible(true);
    }).catch((error) => console.log(error)); 

  }

  //PRIMERA CARGA  
  
  useEffect(()=>{

   
    /*
    getTareas().then((data) => {
      setData(data);
  
    }).catch((error) => console.log(error))*/
  

  }, []); 

  //useFocusEffect - cuando la pantalla este focuseada -- siempre cargara
  useFocusEffect( React.useCallback(() => {


      getTareas().then((data) => {
        setData(data);
    
      }).catch((error) => console.log(error))

  }, []) );


  return (
    <SafeAreaView style={styles.background}>
        <LinearGradient colors={['#FAE7C4', '#FCF7ED']} style={styles.degradado}>
          <View style={styles.header}>
            
            <View style={styles.contentPicker}>
              <Pressable style={ urgente == 1  ? styles.btnFocusL : styles.btnPickerL} onPress={ () => showUrgentes()}>
                <Text style={urgente == 1  ? styles.pickTxtF : styles.pickTxt}>Urgentes</Text>
              </Pressable>

              <Pressable style={urgente == 0 ? styles.btnFocusR : styles.btnPickerR} onPress={() => showPendientes()}>
                <Text style={urgente == 0  ? styles.pickTxtF : styles.pickTxt}>Pendientes</Text>
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
              <Text style={styles.minBlack}>No hay tareas creadas</Text>
              <Text style={styles.minBlack}>Toca el botón Crear para añadir una tarea</Text>
            </View>
          :
            <ScrollView>
              <View style={styles.listaTareas}>
                {data.map( (tarea, i) => {
                    return (
                        <Pressable key={tarea.tarea_id} style={(i === data.length-1) ? styles.last : styles.tarea} onPress={()=>{showDetalle(tarea.tarea_id)}}>
                          <Text style={styles.textT}>{tarea.titulo}</Text>
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

        { modalVisible &&
          <DetalleTarea 
            modalVisible = {modalVisible}
            setModalVisible = {setModalVisible}
            data={dataDetalle}
            setDataDetalle={setDataDetalle}
          />
        }


      </LinearGradient>

      <Pressable onPress={ () => {navegacion.navigate("Crear tarea",{mode:"Creador"});}} 
        style={styles.crearBtn}
      >
          <Text style={styles.crearTxt}>Crear</Text>
          <Text style={styles.crearIcon}>
            <Icon name="add-circle" size={30} color='black'/>
          </Text>
        </Pressable>

    </SafeAreaView>
  );
};



export default Tareas;
