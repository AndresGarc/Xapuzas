import React, { Fragment, useState } from 'react';

import {
    Modal,
    Text,
    Pressable,
    StyleSheet,
    View,
    TextInput,
    SafeAreaView,
    ScrollView,
    Alert
} from 'react-native'

import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';


//le mando las propiedades que me interesan => ({props})
const CrearTrabajo = () => {

    const [titulo, setTitulo] = useState('');
    const [cliente, setCliente] = useState('');
    const [tlf, setTlf] = useState('');
    const [dir, setDir] = useState('');
    const [notas, setNotas] = useState('');

    const [show, setShow] = useState(false);
    const [fecha, setFecha] = useState(new Date());
    const [showHora, setShowTime] = useState(false);
    const [hora, setTime] = useState(new Date());

    const navegacion = useNavigation();

    const pickDate = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setFecha(currentDate);
    }

    const pickTime = (event, selectedTime) => {
        const currentTime = selectedTime;
        setShowTime(false);
        setTime(selectedTime); 
    }

    const handleTarea = () => {
        //VALIDACION
        //La alerta -> titulo, descripcion y los diferentes botones que quieras añadir para la alerta
        if(titulo == ''){
            Alert.alert(
                'Algo va mal',
                'El título es obligatorio',
                [{text: 'Entendido'}]
            );
            return
        }


    }


    return (
            <SafeAreaView style={styles.background}>
                <ScrollView>
                    <View style={styles.flexHorizontal}>
                        <Pressable onPress={() => navegacion.navigate("Trabajos")} style={styles.btn}>
                            <Text style={styles.btnTxt}>Cerrar</Text>
                        </Pressable>
                        <Text style={styles.titulo}>Creador de trabajos</Text>
                    </View>

                    {/* Título */}
                    <View style={styles.campo}>
                        <Text style={styles.label}>Título de la tarea</Text>
                        <TextInput 
                            style= {styles.inputTxt}
                            keyboardType='default'
                            placeholder='escribe aquí el título...'    
                            value={titulo}
                            onChangeText={setTitulo}
                        />
                        <Pressable style={styles.btnVoz}>
                            <Text style={styles.btnTxt}>Usar voz</Text>
                        </Pressable>

                        <Text>Para crear una tarea sólo es obligatorio escribir un título</Text>
                    </View>

                    {/* Cliente */}
                    <View style={styles.campo}>
                        <Text style={styles.label}>Cliente</Text>
                        <TextInput 
                            style= {styles.inputTxt}
                            keyboardType='default'
                            placeholder='escribe aquí el cliente...'  
                            value={cliente}  
                            onChangeText={setCliente}
                            
                        />
                    </View>

                    {/* Teléfono */}
                    <View style={styles.campo}>
                        <Text style={styles.label}>Teléfono</Text>
                                                
                            <TextInput 
                                style= {styles.inputTxt}
                                keyboardType='number-pad'
                                placeholder='escribe aquí el teléfono...'    
                                maxLength={9}
                                value={tlf}  
                                onChangeText={setTlf}
                            />

                    </View>

                    {/* Direccion */}
                    <View style={styles.campo}>
                        <Text style={styles.label}>Dirección</Text>
                        <TextInput 
                            style= {styles.inputTxt}
                            keyboardType='default'
                            placeholder='escribe aquí la dirección...'  
                            value={dir}  
                            onChangeText={setDir}
                            
                        />
                    </View>

                    {/* Fecha */}
                    <View style={styles.campo}>
                        <Text style={styles.label}>Día para hacerla</Text>        
                        <Pressable onPress={ () => setShow(true)} style={styles.inputDate}>
                            <Text>{fecha.getDate()}/{fecha.getMonth()+1}/{fecha.getFullYear()}</Text>
                        </Pressable>
                        
                        { show && (
                        <DateTimePicker
                            value={fecha}
                            display='default'
                            mode= "date"
                            onChange={pickDate}
                        />
                        )}
                    </View>

                    {/* Fecha */}
                    <View style={styles.campo}>
                        <Text style={styles.label}>¿A qué hora?</Text>        
                        <Pressable onPress={ () => setShowTime(true)} style={styles.inputDate}>
                            <Text>{hora.getHours()}:{hora.getMinutes()}</Text>
                        </Pressable>
                        
                        { showHora && (
                        <DateTimePicker
                            value={hora}
                            display='default'
                            mode= "time"
                            onChange={pickTime}
                        />
                        )}
                    </View>

                    
                    {/* Notas */}
                    <View style={styles.campo}>
                        <Text style={styles.label}>Otras notas</Text>
                        <TextInput 
                            style= {styles.inputTxt}
                            keyboardType='default'
                            placeholder='escribe aquí una nota...'  
                            value={notas}  
                            onChangeText={setNotas}
                            
                        />
                    </View>


                    <Pressable onPress={handleTarea} style={styles.btn}>
                        <Text style={styles.btnTxt}>Crear</Text>
                    </Pressable>

                </ScrollView>
            </SafeAreaView>
    )
}

/*ESTILOS*/
const styles = StyleSheet.create({
    /* ESTILOS FORMULARIO*/
    inputTxt:{
        backgroundColor: '#FFF',
        borderRadius: 10
    },
    label:{
        fontSize: 18,
        color: '#000',
        marginBottom: 10,
        fontWeight: 'bold'
    },
    campo:{
        marginHorizontal: 25,
        marginTop: 10
    },
    btnVoz:{
        backgroundColor: '#EDAC70',
        padding: 10,
        borderRadius: 10,
        marginVertical: 10
    },
    inputDate:{
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 10
    },
    


    /*ESTILOS GENERALES (POR AHORA)*/
    titulo: {
      textAlign: 'center',
      fontSize: 30,
      marginTop: 20,
      color: '#000'
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
    },
    flexHorizontal:{
        flexDirection: 'row'
    },

  
  });

export default CrearTrabajo;