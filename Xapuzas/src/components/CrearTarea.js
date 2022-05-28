import React, { Fragment, useState } from 'react';
import { styles } from '../assets/styles';
import Icon  from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';


import {
    Modal,
    Text,
    Pressable,
    StyleSheet,
    View,
    TextInput,
    SafeAreaView,
    ScrollView,
    Alert,
} from 'react-native'

import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import { IconReloj } from '../common/Octicons';
import { postTarea } from '../database/tarea-service';



//le mando las propiedades que me interesan => ({props})
const CrearTarea = () => {

    const [titulo, setTitulo] = useState(null);
    const [cliente, setCliente] = useState(null);
    const [tlf, setTlf] = useState(null);
    const [dir, setDir] = useState(null);
    const [notas, setNotas] = useState(null);

    const [urgente, setUrgente] = useState(false); //0 pendiente / 1 urgente
    const [show, setShow] = useState(false);
    const [showHora, setShowTime] = useState(false);
    const [fecha, setFecha] = useState(null);
    const [hora, setTime] = useState(null);
    const defaultFecha = new Date();

    const navegacion = useNavigation();

    const pickDate = (event, selectedDate) => {

        if(event.type != "dismissed") setFecha(selectedDate);
        setShow(false);
    }

    const pickTime = (event, selectedTime) => {

        if(event.type != "dismissed") setTime(selectedTime);
        setShowTime(false);
         
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

        //FORMATEAR LOS DATOS
        let data = [titulo,urgente,cliente, dir, tlf, fecha, hora, notas];

        //SUBIR LOS DATOS
        postTarea(data).then((data) => {
            Alert.alert(
                '¡Todo ha ido bien!',
                'Esta tarea ha sido creada correctamente',
                [{
                    text: 'Entendido',
                    onPress: () => navegacion.navigate("ConsultaTarea")
                }]
            )
        }).catch((error) => console.log(error))

    }


    return (
        <SafeAreaView style={styles.background}>

            <LinearGradient colors={['#FAE7C4', '#FCF7ED']} style={styles.degradado}>

                <ScrollView style={styles.mBottomXl}>

                    <View style={styles.headerCrear}>

                        <Pressable onPress={ () => navegacion.navigate("ConsultaTarea") } style={styles.closeCrear}>
                            <Icon name="close" size={40} color='black'/>
                            <Text style={styles.black}>Cerrar</Text>
                        </Pressable>
                        
                        <View style={styles.contentTitle}>
                            <Text style={styles.titCrear}>Creador de tareas</Text>
                        </View>

                        <View style={styles.contentHelp}>
                            <Pressable style={styles.help}>
                                <Icon name="md-help-circle" size={50} color='#EDAC70' />
                            </Pressable>
                        </View>

                    </View>

                    {/* Título */}
                    <View style={styles.campo}>

                        <Text style={styles.label}>Título de la tarea</Text>

                        <TextInput 
                            style= {styles.inputTxt}
                            multiline
                            keyboardType='default'
                            placeholder='escribe aquí el título...'    
                            value={titulo}
                            onChangeText={setTitulo}
                        />
                    
                        <Pressable style={styles.btnVoz}>
                            <Icon name="mic-outline" color='black' size={30}/>
                            <Text style={styles.txtVoz}>Usar voz</Text>
                        </Pressable>                    

                        <Text style={styles.black}>Para crear una tarea sólo es obligatorio escribir un título</Text>

                    </View>
                    
                    {/* Urgente */}
                    <View style={styles.campo}>
                        <View style={styles.contentUrgente}>

                            <CheckBox 
                                value={urgente}
                                onValueChange={setUrgente}
                                tintColors={{true:'#EDAC70', false:'#EDAC70'}}
                            />

                            <Text style={styles.txtUrgente}>¿Es urgente?</Text>

                        </View>
                    </View>

                    {/* Cliente */}
                    <View style={styles.campo}>

                        <View style={styles.content}>
                            <Icon name="person-outline" color='black' size={30}/>
                            <Text style={styles.label}>Cliente</Text>
                        </View>
                        
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

                        <View style={styles.content}>
                            <Icon name="call-outline" color='black' size={30}/>
                            <Text style={styles.label}>Teléfono</Text>
                        </View>    

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
                    
                        <View style={styles.content}>
                            <Icon name="location-outline" color='black' size={30}/>
                            <Text style={styles.label}>Dirección</Text>
                        </View> 


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

                    
                        <View style={styles.content}>
                            <Icon name="today-sharp" color="black" size={30}/>
                            <Text style={styles.label}>Día para hacerla</Text>
                        </View>    


                        <Pressable onPress={ () => setShow(true)} style={styles.inputDate}>
                            { fecha!=undefined ?
                                <Text>{fecha.getDate()}/{fecha.getMonth()+1}/{fecha.getFullYear()}</Text>
                              :
                                <Text>Toca aquí para indicar la fecha</Text>
                            }
                        </Pressable>
                        
                        { show && (
                            <DateTimePicker
                                value={defaultFecha}
                                display='default'
                                mode= "date"
                                onChange={pickDate}
                                minimumDate={defaultFecha}
                            />
                        )}
                    </View>

                    {/* Hora */}
                    <View style={styles.campo}>

                        <View style={styles.content}>
                            <Icon name="time-outline" color='black' size={30}/>
                            <Text style={styles.label}>¿A qué hora?</Text>
                        </View>     

                        <Pressable onPress={ () => setShowTime(true)} style={styles.inputDate}>
                            {
                                hora!=undefined ?
                                    <Text>{hora.getHours()}:{hora.getMinutes()}</Text>
                                :
                                    <Text>Toca aquí para indicar la hora</Text>
                            }
                            
                        </Pressable>
                        
                        { showHora && (
                            <DateTimePicker
                                value={defaultFecha}
                                display='default'
                                mode= "time"
                                onChange={pickTime}
                            />
                        )}
                    </View>

                    
                    {/* Notas */}
                    <View style={styles.campo}>
                    
                        
                        <View style={styles.content}>
                            <Icon name="document-outline" color='black' size={30}/>
                            <Text style={styles.label}>Otras notas</Text>
                        </View>  
                        
                        
                        <TextInput 
                            style= {styles.inputTxt}
                            keyboardType='default'
                            placeholder='escribe aquí una nota...'  
                            value={notas}  
                            onChangeText={setNotas}
                            
                        />
                    </View>

                </ScrollView>

            </LinearGradient>

            <Pressable onPress={ () => handleTarea() } style={styles.crearBtn}>
                <Text style={styles.crearTxt}>Crear</Text>
                <Text style={styles.crearIcon}>
                    <Icon name="add-circle" size={30} color='black'/>
                </Text>
            </Pressable>

        </SafeAreaView>
    )
}


export default CrearTarea;