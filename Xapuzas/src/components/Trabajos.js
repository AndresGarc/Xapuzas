import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { styles } from '../assets/styles';
import Icon  from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {Picker} from '@react-native-picker/picker';

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
import DetalleTrabajo from './DetalleTrabajo';
import ModalConfirmacion from '../common/ModalConfirmacion'

import { conectarDB, borrarTodo } from '../database/db-service'
import { crearTTrabajos, deleteTrabajo, dropEstados, getEstados, getTrabajoID, getTrabajos, postEstados, postTrabajos, putEstado, putIconoEstado, putTrabajos } from '../database/trabajo-service';

const Trabajos = ({route}) => {

  const [selected, setSelected] = useState(0); //0 - todos / 1 - Pendientes / 2 - Vistos / 3 - Aceptados / 4 - Terminados
  const [modalVisible, setModalVisible] = useState(false);
  const [confVisible, setconfVisible] = useState(false);
  const [data, setData] = useState([]);
  const [trabDetalle, setDetalle] = useState([]);
  
  
  const [borrarT, setBorrado] = useState([]);
  const [typeModal, setType] = useState();
 
  const navegacion = useNavigation();

  //0 - todos / 1 - Pendientes / 2 - Vistos / 3 - Aceptados / 4 - Terminados
  const setTrabajos = (value) =>{
    setSelected(value);
    //filtrar
  }


  const showDetalle = (id) => {
    getTrabajoID(id).then((data) => {
      setDetalle(data);
      setModalVisible(true);
    })

  }

  const showConfirm = (type,id, titulo) => {
    setBorrado([id,titulo]);
    setType(type);
    setconfVisible(true);
  }

  const loadLista = () => {
    getTrabajos().then((data) => {
      setData(data);
    }).catch((error) => console.log(error)); 
  }

  const initTabla = () => {
    
    crearTTrabajos().then((data) => {
      getEstados().then((data) =>{
        if(data==undefined){
          postEstados();
        }    
      })
      
      loadLista();
    })
  }

  useEffect( ()=>{
    initTabla();
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
        
        <Text style={styles.tituloTrabs}>¿Qué trabajos quieres ver?</Text>
        
        <View style={styles.header}>
          
            <Picker
              selectedValue={selected}
              onValueChange={(itemValue, itemIndex) => setTrabajos(itemValue)}
              style={styles.pickerBck}
              mode='dropdown'
            >
              <Picker.Item label="Todos" value={0} style={styles.black}/>
              <Picker.Item label="Pendientes" value={1} style={styles.black}/>
              <Picker.Item label="Vistos" value={2} style={styles.black}/>
              <Picker.Item label="Aceptados" value={3} style={styles.black}/>
              <Picker.Item label="Terminados" value={4} style={styles.black}/>

            </Picker>



          <View style={styles.contentHelp}>
            <Pressable style={styles.help}>
              <Icon name="md-help-circle" size={50} color='#EDAC70' />
            </Pressable>
          </View>

        </View>

        {
          data.length==0 ? 
            <View style={styles.noData}>
              <Icon name='sad-outline' size={30} color={'black'}></Icon>
              <Text style={styles.minBlack}>No hay trabajos creados</Text>
              <Text style={styles.minBlack}>Toca el botón Crear para añadir un trabajo</Text>
            </View>
          :
            <ScrollView style={styles.mTopM}>
              <View style={styles.listaTareas}>
                {data.map( (trab, i) => {
                    return (
                        <Pressable key={trab.trabajo_id} style={(i === data.length-1) ? styles.last : styles.tarea} onPress={()=>{showDetalle(trab.trabajo_id)}}>
                          <Text style={styles.textT}>{trab.titulo}</Text>

                          <Pressable style={styles.terminar} onPress={()=>{console.log("Estado");}}>
                            <Icon name='eye-off-outline' size={35} color='#EDAC70'/>
                          </Pressable>  

                          <Pressable style={styles.terminar} onPress={()=>{showConfirm(3, trab.trabajo_id, trab.titulo)}}>
                            <Icon name='trash-outline' size={35} color='#EDAC70'/>
                          </Pressable>  

                        </Pressable>
                    );
                  }
                )}
              </View>
            </ScrollView>
          }

          { modalVisible &&
          <DetalleTrabajo
            modalVisible = {modalVisible}
            setModalVisible = {setModalVisible}
            data={trabDetalle}
            setDataDetalle={setDetalle}
          />
          }

          { confVisible &&
          <ModalConfirmacion 
            confVisible={confVisible}
            setconfVisible={setconfVisible}
            type={typeModal}
            data={borrarT}
            loadLista={loadLista}
          />
        }

      </LinearGradient>

      <Pressable onPress={ () => navegacion.navigate("Crear trabajo", {mode:"Creador"}) } style={styles.crearBtn}>
          <Text style={styles.crearTxt}>Crear</Text>
          <Text style={styles.crearIcon}>
            <Icon name="add-circle" size={30} color='black'/>
          </Text>
        </Pressable>

    </SafeAreaView>
  );
};


export default Trabajos;
