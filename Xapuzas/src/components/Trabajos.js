import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { styles } from '../assets/styles';
import Icon  from 'react-native-vector-icons/Ionicons';
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

import { conectarDB, borrarTodo } from '../database/db-service'
import { crearTTrabajos, deleteTrabajo, getTrabajoID, getTrabajos, postEstados, postTrabajos, putEstado, putIconoEstado, putTrabajos } from '../database/trabajo-service';

const Trabajos = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState(0); //0 - todos / 1 - Pendientes / 2 - Vistos / 3 - Aceptados / 4 - Terminados
  const [data, setData] = useState(["Titulo1", "Titulo2","Titulo2","Titulo1", "Titulo2","Titulo1", "Titulo2",]);
  //const [data, setData] = useState([]);
 
  const navegacion = useNavigation();

  //useCallback para ??
  const loadTrabajos = async ()=> {
    try {

      const db = await conectarDB();
      //await crearTTrabajos(db);
      //await postTrabajos(db); //checke basico
      //await getTrabajos(db); checke basico
      //await getTrabajoID(db, 1); //checke basico
      //await putTrabajos(db, 1); checke basico
      //await putEstado(db, 1, 1); //checke basico
      //await deleteTrabajo(db,4); // checke basico
      //await postEstados(db); //checke basico
      //await putIconoEstado(db, 4, "checkbox-outline"); //checke basico

    } catch(error){
      console.log(`error en el loader ${error}`);
    }
  }

  //0 - todos / 1 - Pendientes / 2 - Vistos / 3 - Aceptados / 4 - Terminados
  const setTrabajos = (value) =>{
    setSelected(value);
    //filtrar
  }



  //todo lo de aquí está escrito en js
  const nuevaCitaHnandler = () => {
    //para modficiar esa variable declarada en el state debe ser mediante la función declarada
    setModalVisible(true);
  }

  const closeModal = () => {
    setModalVisible(false);
  }

  useEffect( ()=>{
    loadTrabajos();
  });

  return (
    <SafeAreaView style={styles.background}>
      
      <Text style={styles.tituloTrabs}>¿Qué trabajos quieres ver?</Text>
      
      <View style={styles.header}>
        
          <Picker
            selectedValue={selected}
            onValueChange={(itemValue, itemIndex) => setTrabajos(itemValue)}
            style={styles.pickerBck}
            mode='dropdown'
          >
            <Picker.Item label="Todos" value={0}/>
            <Picker.Item label="Pendientes" value={1}/>
            <Picker.Item label="Vistos" value={2}/>
            <Picker.Item label="Aceptados" value={3}/>
            <Picker.Item label="Terminados" value={4}/>

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
            <Icon name='sad-outline' size={30}></Icon>
            <Text>No hay trabajos creados</Text>
            <Text>Toca el botón Crear para añadir un trabajo</Text>
          </View>
        :
          <ScrollView>
            <View style={styles.listaTareas}>
              {data.map( (trab, i) => {
                  return (
                      <Pressable style={(i === data.length-1) ? styles.last : styles.tarea} onPress={()=>{console.log("Detalle");}}>
                        <Text style={styles.textT}>{trab}</Text>

                        <Pressable style={styles.terminar} onPress={()=>{console.log("Estado");}}>
                          <Icon name='eye-off-outline' size={35} color='#EDAC70'/>
                        </Pressable>  

                        <Pressable style={styles.terminar} onPress={()=>{console.log("Borrar");}}>
                          <Icon name='trash-outline' size={35} color='#EDAC70'/>
                        </Pressable>  

                      </Pressable>
                  );
                }
              )}
            </View>
          </ScrollView>
        }


      <Pressable onPress={ () => navegacion.navigate("Crear trabajo") } style={styles.crearBtn}>
          <Text style={styles.crearTxt}>Crear</Text>
          <Text style={styles.crearIcon}>
            <Icon name="add-circle" size={30} color='black'/>
          </Text>
        </Pressable>

    </SafeAreaView>
  );
};


export default Trabajos;
