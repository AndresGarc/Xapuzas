import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import Icon  from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import SplashScreen from  "react-native-splash-screen";

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
import ModalConfirmacion from '../common/ModalConfirmacion';

import { conectarDB, borrarTodo, borrarTTarea } from '../database/db-service'
import { crearTTareas, deleteTarea, getTareaID, getTareas, postTarea, putTarea } from '../database/tarea-service'

const Tareas = ({route}) => {

  const [urgente, setUrgente] = useState(1); // 1 urgente / 0 pendientes
  const [data, setData] = useState([]);
  const [dataDetalle, setDataDetalle] = useState([]);
  const [terminarData, setTerminar] = useState([]);
  const [typeModal, setType] = useState();

  const [modalVisible, setModalVisible] = useState(false);
  const [confVisible, setconfVisible] = useState(false);

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

  const showDetalle = (id) => {
    getTareaID(id).then((data) => {
      setDataDetalle(data);
      setModalVisible(true);
    }).catch((error) => console.log(error)); 

  }

  const showConfirm = (type,id, titulo) => {
    setTerminar([id,titulo]);
    setType(type);
    setconfVisible(true);
  }

  const loadLista= () => {
    getTareas().then((data) => {
      setData(data);
      SplashScreen.hide();
    }).catch((error) => console.log(error))
  }

  const initTabla = () => {
    crearTTareas().then((data) => {
      loadLista();
    })
  }

  const irCrear = () => {
    navegacion.navigate("Crear tarea",{mode:"Creador"});
  }

  //PRIMERA CARGA  
  
  useEffect(()=>{

    initTabla()
  }, []); 
  

  useFocusEffect( React.useCallback(() => {
    if(route.params!=undefined){
      if(route.params.creada==true){
        loadLista();
        navegacion.setParams({creada:false});
      }
    }

  }, [route.params]) );


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
            <ScrollView style={styles.mTopM}>
              <View style={styles.listaTareas}>
                {data.map( (tarea, i) => {
                    return (
                        <Pressable key={tarea.tarea_id} style={(i === data.length-1) ? styles.last : styles.tarea} onPress={()=>{showDetalle(tarea.tarea_id)}}>
                          <Text style={styles.textT}>{tarea.titulo}</Text>
                          <Pressable style={styles.terminar} onPress={()=>{showConfirm(1, tarea.tarea_id, tarea.titulo);}}>
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

        { confVisible &&
          <ModalConfirmacion 
            confVisible={confVisible}
            setconfVisible={setconfVisible}
            type={typeModal}
            data={terminarData}
            loadLista={loadLista}
          />
        }


      </LinearGradient>

      <Pressable onPress={()=>{irCrear()}}  style={styles.crearBtn}
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
