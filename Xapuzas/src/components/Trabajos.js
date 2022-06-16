import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { styles } from '../assets/styles';
import Icon  from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {Picker} from '@react-native-picker/picker';
import PushNotification  from 'react-native-push-notification';

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
import ModalConfirmacion from '../common/ModalConfirmacion';
import ModalEstado from '../common/ModalEstado';
import HelpTrabajos from '../common/tutorial/helpTrabajos';

import { crearTTrabajos, getTrabajosFiltros, getEstados, getTrabajoID, getTrabajos, postEstados, postTrabajos, putEstado, putIconoEstado, putTrabajos, getMaterialAtrasado } from '../database/trabajo-service';

const Trabajos = ({route}) => {

  const [selected, setSelected] = useState(0); //0 - todos / 1 - Pendientes / 2 - Vistos / 3 - Aceptados / 4 - Terminados
  const [modalVisible, setModalVisible] = useState(false);
  const [confVisible, setconfVisible] = useState(false);
  const [data, setData] = useState([]);
  const [trabDetalle, setDetalle] = useState([]);
  const [estVisible, setestVisible] = useState(false);
  const [HelpT, setHelpT] = useState(false);
  
  
  const [borrarT, setBorrado] = useState([]);
  const [typeModal, setType] = useState();
  const [dataState, setDataState] = useState([]);

  var filtro = 0;
 
  const navegacion = useNavigation();

  //0 - todos / 1 - Pendientes / 2 - Vistos / 3 - Aceptados / 4 - Terminados
  const setTrabajos = (value) =>{
    setSelected(value);
    filtro=value;
    loadLista();

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

  const showEstado = (id, estadoid, titulo) => {
    //le tengo que pasar el estado actual para poder destacarlo en el selector de estados
    setDataState([id,estadoid,titulo]);
    setestVisible(true);
}

  const loadLista = () => {
    if(filtro==0){ // todos
      
      getTrabajos().then((data) => {
        setData(data);
      }).catch((error) => console.log(error)); 

    } else{ // resto

      getTrabajosFiltros(filtro).then((data) => {
        setData(data);
      }).catch((error) => console.log(error)); 
    }

  }

  const loadListaFiltro= () => {
    if(selected==0){ // todos
      
      getTrabajos().then((data) => {
        setData(data);
      }).catch((error) => console.log(error)); 

    } else{ // resto

      getTrabajosFiltros(selected).then((data) => {
        setData(data);
      }).catch((error) => console.log(error))
      
    }

  }

 const notificarMaterial = () => {
    let hoy = new Date(); hoy.setHours(0,0,0,0); hoy.setMinutes(0,0,0,0);
    getMaterialAtrasado().then((data) => {
      data.forEach(element => {
        let split = element.dia_pedido.split('/');
        let fecha = new Date(parseInt(split[2]),parseInt(split[1])-1, parseInt(split[0]));
        if((hoy-fecha)/86400000 >= 30 ) 
          PushNotification.localNotification({
            channelId: 'channel-id',
            title: `Revisa los materiales de ${element.titulo}`,
            message: `¡Ha pasado mas de un mes desde que los pediste!`,
          })
      });
    });
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
    notificarMaterial();
  }, []);

  useFocusEffect( React.useCallback(() => {
    filtro=selected;
    if(route.params!=undefined){
      if(route.params.creada==true){
        filtro=0;
        setSelected(0); //reseteo por que es el creador
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
            <Pressable style={styles.help} onPress={() => {setHelpT(true)}}>
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

                          <Pressable style={styles.terminar} onPress={()=>{showEstado(trab.trabajo_id, trab.estado_id, trab.titulo)}}>
                            <Icon name={trab.icono} size={35} color='#EDAC70'/>
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
            loadLista={loadListaFiltro}
          />
        }

        { confVisible &&
          <ModalConfirmacion 
            confVisible={confVisible}
            setconfVisible={setconfVisible}
            type={typeModal}
            data={borrarT}
            loadLista={loadListaFiltro}
          />
        }

        { estVisible &&
          <ModalEstado 
              estVisible={estVisible}
              setestVisible={setestVisible}
              dataState={dataState}
              loadLista={loadListaFiltro}
          />
        }

          
        { HelpT &&
          <HelpTrabajos
            closeHelp={HelpT}
            setCloseHelp={setHelpT}
          />
        }

      </LinearGradient>

      <Pressable onPress={ () => navegacion.navigate("Crear trabajo", {mode:"Crear"}) } style={styles.crearBtn}>
          <Text style={styles.crearTxt}>Crear</Text>
          <Text style={styles.crearIcon}>
            <Icon name="add-circle" size={30} color='black'/>
          </Text>
        </Pressable>

    </SafeAreaView>
  );
};


export default Trabajos;
