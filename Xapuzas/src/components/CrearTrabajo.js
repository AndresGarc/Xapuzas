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
    Alert
} from 'react-native'

import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import RadioGroup from 'react-native-radio-buttons-group';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';


//le mando las propiedades que me interesan => ({props})
const CrearTrabajo = () => {

    //elementos para el formulario
    const [titulo, setTitulo] = useState('');
    const [cliente, setCliente] = useState('');
    const [iTlf, setAddTlf] = useState(1);
    const [tlfnombre1, setTN1] = useState('');
    const [tlf1, setTlf1] = useState('');
    const [tlfnombre2, setTN2] = useState('');
    const [tlf2, setTlf2] = useState('');
    const [tlfnombre3, setTN3] = useState('');
    const [tlf3, setTlf3] = useState('');
    const [dir, setDir] = useState('');
    const [notas, setNotas] = useState('');
    const [fecha, setFecha] = useState(new Date());

    //añadidos
    const [show, setShow] = useState(false);
    const [showFecha, setShowFecha] = useState(false);
    const [radio, setRadio] = useState(0);

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

    const radioData =[{
        id:'1',
        label: 'Sin pedir',
        value: 0
    },{
        id:'2',
        label: 'Pedido',
        value: 1
    },{
        id:'3',
        label: 'Recogido',
        value: 2
    }];

    const addTlf = () => {     
        if (iTlf==1) setAddTlf(2);
        else if(iTlf==2) setAddTlf(3);
    }

    const removeTlf = () => {   
        if(iTlf==3) setAddTlf(2);
        if(iTlf==2) setAddTlf(1);
    }

    const handleRadio = (value) => {
        console.log(value);
        setRadio(value);
        
        /*
        
        //Si se ha pedido en una fecha
        if(array[0].value == 1){
            setShowFecha(true);
        } else { //resto de situaciones
            setShowFecha(false);
        }*/
    }

    const handleCrear = () => {
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

            <LinearGradient colors={['#FAE7C4', '#FCF7ED']} style={styles.degradado}>

                <ScrollView style={styles.mBottomXl}>

                    <View style={styles.headerCrear}>

                        <Pressable onPress={ () => navegacion.navigate("ConsultaTrabajo") } style={styles.closeCrear}>
                            <Icon name="close" size={40} color='black'/>
                            <Text style={styles.black}>Cerrar</Text>
                        </Pressable>

                        <View style={styles.contentTitle}>
                            <Text style={styles.titCrear}>Creador de trabajos</Text>
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
                            placeholder='escribe aquí el título...'    
                            value={titulo}
                            onChangeText={setTitulo}
                        />

                        <Pressable style={styles.btnVoz}>
                            <Icon name="mic-outline" color='black' size={30}/>
                            <Text style={styles.txtVoz}>Usar voz</Text>
                        </Pressable>    

                        <Text style={styles.borderBot}>Para crear una tarea sólo es obligatorio escribir un título</Text>
                    
                    </View>

                    {/* Cliente */}
                    <View style={styles.campo}>

                        <View style={styles.content}>
                            <Icon name="person-outline" color='black' size={30}/>
                            <Text style={styles.label}>Cliente</Text>
                        </View>

                        <TextInput 
                            style= {styles.inputTxt}
                            placeholder='escribe aquí el cliente...'  
                            value={cliente}  
                            onChangeText={setCliente}
                            
                        />
                    </View>

                    {/* Teléfono */}
                    <View style={styles.campo}>
                        
                        <View style={styles.content}>
                            <Icon name="call-outline" color='black' size={30}/>
                            <Text style={styles.label}>Teléfonos</Text>
                        </View>   

                        <View style={styles.contentTlf}>
                            <TextInput 
                                style= {styles.inputTlf}
                                placeholder='nombre'    
                                value={tlfnombre1}  
                                onChangeText={setTN1}
                            />

                            <TextInput 
                                style= {styles.inputTlf}
                                keyboardType='number-pad'
                                placeholder='telefono'    
                                maxLength={9}
                                value={tlf1}  
                                onChangeText={setTlf1}
                            />  
                        </View>

                        <View style={{display: iTlf>=2 ? 'flex' : 'none'}}>
                            <View style={styles.contentTlf}>
                                
                                <Pressable onPress={() => {removeTlf()}} style={styles.removeTlf}>
                                    <Icon name="remove-circle-outline" size={33} color='black'/>
                                </Pressable>

                                <TextInput 
                                    style= {styles.inputNewTlf}
                                    placeholder='nombre'    
                                    value={tlfnombre2}  
                                    onChangeText={setTN2}
                                />

                                <TextInput 
                                    style= {styles.inputNewTlf}
                                    keyboardType='number-pad'
                                    placeholder='telefono'    
                                    maxLength={9}
                                    value={tlf2}  
                                    onChangeText={setTlf2}
                                />  
                            </View>
                        </View>

                        <View style={{display: iTlf==3 ? 'flex' : 'none'}}>
                            <View style={styles.contentTlf}>

                                <Pressable onPress={() => {removeTlf()}} style={styles.removeTlf}>
                                    <Icon name="remove-circle-outline" size={33} color='black'/>
                                </Pressable>

                                <TextInput 
                                    style= {styles.inputNewTlf}
                                    placeholder='nombre'    
                                    value={tlfnombre3}  
                                    onChangeText={setTN3}
                                />

                                <TextInput 
                                    style= {styles.inputNewTlf}
                                    keyboardType='number-pad'
                                    placeholder='telefono'    
                                    maxLength={9}
                                    value={tlf3}  
                                    onChangeText={setTlf3}
                                />  
                            </View>
                        </View>

                        <View style={{display: iTlf==3 ? 'none' : 'flex'}}>
                            <Pressable style={styles.content} onPress={()=>addTlf()}>
                                <Icon name="add-circle" size={33} color='black'/>
                                <Text style={styles.newTlf}>Añadir otro teléfono</Text>
                            </Pressable>
                        </View>

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

                    {/* Materiales pedidos */}
                    <View style={styles.campo}>

                        <View style={styles.content}>
                            <Icon name="today-sharp" color="black" size={30}/>
                            <Text style={styles.label}>Materiales pedidos</Text>
                        </View>  

                        <RadioForm 
                            initial={0}
                            animation={false}
                        >

                        {
                            radioData.map((obj, i) => (
                                <RadioButton key={i}>
                                    
                                    <RadioButtonInput
                                        obj={obj}
                                        index={i}
                                        buttonSize={22}
                                        buttonStyle={{margin:5}}
                                        buttonInnerColor={'#EDAC70'}
                                        buttonOuterColor={'#EDAC70'}
                                        isSelected={radio == i}
                                        onPress={(value) => {setRadio(value)}}
                                    />

                                    <RadioButtonLabel
                                        obj={obj}
                                        index={i}
                                        labelStyle={{fontSize: 18, color: 'black'}}
                                        onPress={(value) => {setRadio(value)}}
                                    />
                                
                                </RadioButton>
                            ))
                        }

                        </RadioForm>

                        <View style={{display: radio==1 ? 'flex' : 'none'}}>

                            <Text style={styles.labelDateMat}>¿Qué día ha sido pedido?</Text>

                            <Pressable onPress={ () => setShow(true)} style={styles.inputDate}>
                                <Text>{fecha.getDate()}/{fecha.getMonth()+1}/{fecha.getFullYear()}</Text>
                            </Pressable>

                        </View>
                        
                        { show && (
                        <DateTimePicker
                            value={fecha}
                            display='default'
                            mode= "date"
                            onChange={pickDate}
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

            <Pressable onPress={ () => handleCrear() } style={styles.crearBtn}>
                <Text style={styles.crearTxt}>Crear</Text>
                <Text style={styles.crearIcon}>
                    <Icon name="add-circle" size={30} color='black'/>
                </Text>
            </Pressable>

        </SafeAreaView>
    )
}

export default CrearTrabajo;