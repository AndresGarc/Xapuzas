import React, { Fragment, useState } from 'react';
import { styles } from '../assets/styles';
import Icon  from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';


import {
    Modal,
    Text,
    Pressable,
    Keyboard,
    View,
    TextInput,
    SafeAreaView,
    ScrollView,
    Alert,
} from 'react-native'

import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import { IconReloj } from '../common/Octicons';
import { postTarea, putTarea } from '../database/tarea-service';

import HelpCTarea from '../common/tutorial/helpCTarea';



//le mando las propiedades que me interesan => ({props})
const CrearTarea = ({route}) => {

    const {mode, data} = route.params;

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
    const [defFecha, setDefF] = useState(new Date());
    const [defHora, setDefH] = useState(new Date());

    
    const [closeHelp, setCloseHelp] = useState(false);

    const defaultFecha = new Date();

    const navegacion = useNavigation();

    const pickDate = (event, selectedDate) => {

        setShow(false);
        if(event.type != "dismissed") {
            setFecha(selectedDate);
            setDefF(selectedDate);
        }
    }

    const pickTime = (event, selectedTime) => {

        setShowTime(false);
        if(event.type != "dismissed"){
            setTime(selectedTime);
            setDefH(selectedTime);
        } 
        
         
    }

    useFocusEffect( React.useCallback(() => {
        
        
        if(data!=undefined){
            setTitulo(data.titulo)
            if(data.urgente == 1) setUrgente(true);
            setCliente(data.cliente)
            setDir(data.direccion)
            if(data.tlf != null) setTlf(data.tlf.toString())
            setNotas(data.notas)
            if(data.fecha != null){
                let split = data.fecha.split('/'); let dia= parseInt(split[0]); let mes= parseInt(split[1]); let anyo= parseInt(split[2]);
                let fechita = new Date(anyo, mes-1, dia);
                setFecha(fechita);
            }
            if(data.hora != null){
                let split = data.hora.split(':'); let h = parseInt(split[0]); let m = parseInt(split[1]);
                let horita = new Date(); horita.setHours(h,m);
                setTime(horita);
            }
        } 
  
    }, []) );

    const handleTarea = () => {

        let vacio;
        let cli; let dire; let tlfo; let not; let date; let time;

        //VALIDACION 
        if(titulo!=null) vacio=titulo.trim();
        

        if(vacio == '' || titulo == null){
            Alert.alert(
                'Algo va mal',
                'El título es obligatorio',
                [{text: 'Entendido'}]
            );
            return
        }

        //FORMATEAR LOS DATOS
        // {hora.getHours()}:{hora.getMinutes()}
        if(fecha!=null){
            let dia; let mes;
            if(fecha.getDate()/10<1) dia=`0${fecha.getDate()}`; else dia=`${fecha.getDate()}`;
            if(fecha.getMonth()/10<1) mes=`0${fecha.getMonth()+1}`; else mes=`${fecha.getMonth()+1}`

            date = `${dia}/${mes}/${fecha.getFullYear()}`;
        } 

        if(hora!=null) {
            let h; let m;
            if(hora.getHours()/10<1) h=`0${hora.getHours()}`; else h=`${hora.getHours()}`;
            if(hora.getMonth()/10<1) m=`0${hora.getMonth()}`; else h=`${hora.getMonth()}`;

            time = `${h}:${m}`;
        }

        if(cliente!=null) {
            if(cliente.trim()==''){
                cli= null;
            } else{
                cli=cliente;
            }
        } if(dir!=null){
            if(dir.trim()==''){
                dire= null;
            } else {
                dire=dir;
            }
        } if(tlf!=null){
            if(tlf.trim()==''){
                tlfo= null;
            } else{
                tlfo=tlf;
            }
        } if(notas!=null){
            if(notas.trim()==''){
                notas= null;
            } else{
                not=notas;
            }
        }


        //NUEVA TAREA O EDITAR TAREA
        let datos = [titulo,urgente,cli, dire, tlfo, date, time, not];
        if(data==undefined){ // NUEVA TAREA

            postTarea(datos).then((data) => {

                Alert.alert(
                    '¡Todo ha ido bien!',
                    'Esta tarea ha sido creada correctamente',
                    [{
                        text: 'Entendido',
                        onPress: () => navegacion.navigate("ConsultaTarea", {
                            creada: true
                        })
                    }]
                )

            }).catch((error) => {
                Alert.alert(
                    '¡Algo ha salido mal!',
                    'La tarea no se ha podido crear, inténtalo más tarde',
                    [{
                        text: 'Entendido'
                    }]
                )
            })

        } else { // EDITAR

            putTarea(data.tarea_id, datos).then((data) => {

                Alert.alert(
                    '¡Todo ha ido bien!',
                    'Esta tarea ha sido editada correctamente',
                    [{
                        text: 'Entendido',
                        onPress: () => navegacion.navigate("ConsultaTarea", {
                            creada: true
                        })
                    }]
                )

            }).catch((error) =>{
                Alert.alert(
                    '¡Algo ha salido mal!',
                    'La tarea no se ha podido editar, inténtalo más tarde',
                    [{
                        text: 'Entendido'
                    }]
                )
            })

        }


    }


    return (
        <SafeAreaView style={styles.background}>

            <LinearGradient colors={['#FAE7C4', '#FCF7ED']} style={styles.degradado}>

                <ScrollView style={styles.mBottomXl} keyboardShouldPersistTaps='handled'>

                    <View style={styles.headerCrear}>

                        <Pressable onPress={ () => navegacion.navigate("ConsultaTarea", { creada: false }) } style={styles.closeCrear}>
                            <Icon name="close" size={40} color='black'/>
                            <Text style={styles.black}>Cerrar</Text>
                        </Pressable>
                        
                        <View style={styles.contentTitle}>
                            <Text style={styles.titCrear}>{mode} tarea</Text>
                        </View>

                        <View style={styles.contentHelp}>
                            <Pressable style={styles.help}>
                                <Icon onPress={ () => setCloseHelp(true) } name="md-help-circle" size={50} color='#EDAC70' />
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

                    {/* Fecha */}
                    <View style={styles.campo}>

                    
                        <View style={styles.content}>
                            <Icon name="today-sharp" color="black" size={30}/>
                            <Text style={styles.label}>Día para hacerla</Text>
                        </View>    


                        <Pressable onPressIn={ () => {setShow(true); Keyboard.dismiss()}} style={styles.inputDate}>
                            { fecha!=undefined ?
                                <Text style={styles.txtDate}>{fecha.getDate()/10<1 ? `0${fecha.getDate()}` : fecha.getDate()}/
                                {(fecha.getMonth()+1)/10<1 ? `0${fecha.getMonth()+1}` : fecha.getMonth()+1}/
                                {fecha.getFullYear()}</Text>
                              :
                                <Text style={styles.placeholderDate}>Toca aquí para indicar la fecha</Text>
                            }
                        </Pressable>
                        
                        { show && (
                            <DateTimePicker
                                value={defFecha}
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

                        <Pressable onPress={ () => {setShowTime(true); Keyboard.dismiss()}} style={styles.inputDate}>
                            { hora!=undefined ?
                                    <Text style={styles.txtDate}>{hora.getHours()/10<1 ? `0${hora.getHours()}` : hora.getHours()}:
                                        {hora.getMinutes()/10<1 ? `0${hora.getMinutes()}` : hora.getMinutes()}
                                    </Text>
                                :
                                    <Text style={styles.placeholderDate}>Toca aquí para indicar la hora</Text>
                            }
                            
                        </Pressable>
                        
                        { showHora && (
                            <DateTimePicker
                                value={defHora}
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
                            multiline
                            onChangeText={setNotas}
                            
                        />
                    </View>

                </ScrollView>

            </LinearGradient>

            <Pressable onPress={ () => handleTarea() } style={styles.crearBtn}>
                <Text style={styles.crearTxt}>{mode}</Text>
                <Text style={styles.crearIcon}>
                    <Icon name="add-circle" size={30} color='black'/>
                </Text>
            </Pressable>

            { closeHelp &&

                <HelpCTarea
                closeHelp={closeHelp}
                setCloseHelp={setCloseHelp}
                />

            }

        </SafeAreaView>
    )
}


export default CrearTarea;