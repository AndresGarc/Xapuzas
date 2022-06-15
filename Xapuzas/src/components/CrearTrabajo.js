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
    Alert
} from 'react-native'

import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import RadioGroup from 'react-native-radio-buttons-group';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { postTrabajos, putTrabajos } from '../database/trabajo-service';
import HelpCTrab from '../common/tutorial/helpCTrab';


//le mando las propiedades que me interesan => ({props})
const CrearTrabajo = ({route}) => {

    const {mode, data} = route.params;

    //elementos para el formulario
    const [titulo, setTitulo] = useState(null);
    const [cliente, setCliente] = useState(null);
    const [iTlf, setAddTlf] = useState(1);
    const [tlfnombre1, setTN1] = useState(null);
    const [tlf1, setTlf1] = useState(null);
    const [tlfnombre2, setTN2] = useState(null);
    const [tlf2, setTlf2] = useState(null);
    const [tlfnombre3, setTN3] = useState(null);
    const [tlf3, setTlf3] = useState(null);
    const [dir, setDir] = useState(null);
    const [notas, setNotas] = useState(null);
    const [fecha, setFecha] = useState(null);
    const defaultFecha = new Date();

    //añadidos
    const [show, setShow] = useState(false);
    const [radio, setRadio] = useState(0);

    const [closeHelp, setCloseHelp] = useState(false);

    const navegacion = useNavigation();

    const pickDate = (event, selectedDate) => {
        setShow(false);
        if(event.type != "dismissed") setFecha(selectedDate);
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
       // Keyboard.dismiss();
        if(iTlf==3) setAddTlf(2);
        if(iTlf==2) setAddTlf(1);
    }

    const verDatos = () => {
        console.log(data);
    }

    const handleCrear = () => {

        let vacio;
        let cli; let dire; let not; let date; 
        let tlfo1; let tlfo2; let tlfo3;
        let ntlf1; let ntlf2; let ntlf3; 
        console.log(titulo);

        //VALIDACION
        if(titulo!=null) vacio=titulo.trim();

        if(vacio=='' || titulo == null){
            Alert.alert(
                'Algo va mal',
                'El título es obligatorio',
                [{text: 'Entendido'}]
            );
            return
        }

        //FORMATEAR LOS DATOS
        if(fecha!=null) {
            if(radio==1){
                date = `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()}`;
            }
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
            } else{
                dire=dir;
            }
        } if(tlf1!=null){
            if(tlf1.trim()==''){
                tlfo1= null;
            } else{
                tlfo1=tlf1;
            }
        } if(tlfnombre1!=null){
            if(tlfnombre1.trim()==''){
                ntlf1= null;
            } else{
                ntlf1=tlfnombre1;
            }
        } if (iTlf>=2){
            if(tlf2!=null){
                if(tlf2.trim()==''){
                    tlfo2= null;
                } else{
                    tlfo2=tlf2;
                }
            } if(tlfnombre2!=null){
                if(tlfnombre2.trim()==''){
                    ntlf2= null;
                } else{
                    ntlf2=tlfnombre2;
                }
            } 
        } if(iTlf==3){
            if(tlf3!=null){
                if(tlf3.trim()==''){
                    tlfo3= null;
                } else{
                    tlfo3=tlf3;
                }
            } if(tlfnombre3!=null){
                if(tlfnombre3.trim()==''){
                    ntlf3= null;
                } else{
                    ntlf3=tlfnombre3;
                }
            }
        } if(notas!=null){
            if(notas.trim()==''){
                notas= null;
            } else{
                not=notas;
            }
        }

        //NUEVA TAREA O EDITAR TAREA
        let datos = [titulo, cli, dire, ntlf1, tlfo1, ntlf2, tlfo2, ntlf3, tlfo3, radio ,date, not];
        if(data==undefined){ // CREAR

            postTrabajos(datos).then((data) => {

            Alert.alert(
                '¡Todo ha ido bien!',
                'Este trabajo ha sido creado correctamente',
                [{
                    text: 'Entendido',
                    onPress: () => navegacion.navigate("ConsultaTrabajo", {
                        creada:true
                    })
                }]
            )

            }).catch((error) => console.log(error));
        
        } else { // EDITAR

            putTrabajos(data.trabajo_id, datos).then((data) => {
                Alert.alert(
                    '¡Todo ha ido bien!',
                    'Este trabajo ha sido editado correctamente',
                    [{
                        text: 'Entendido',
                        onPress: () => navegacion.navigate("ConsultaTrabajo", {
                            creada:true
                        })
                    }]
                )
            }).catch((error) => console.log(error))

        } 

        

    }

    useFocusEffect( React.useCallback(() => {

        if(data!=undefined){
            setTitulo(data.titulo);
            setCliente(data.cliente);
            setDir(data.direccion);
            if(data.tlf1 != null)  setTlf1(data.tlf1.toString());
            setTN1(data.cliente_tlf1);

            if(data.tlf2 != null){
                setAddTlf(2);
                setTlf2(data.tlf2.toString());
            }
            setTN2(data.cliente_tlf2);
            if(data.tlf3 != null){
                setAddTlf(3);
                setTlf3(data.tlf3.toString());
            }

            setTN3(data.cliente_tlf3);
            setNotas(data.notas);
            if(data.dia_pedido != null){
                let split = data.dia_pedido.split('/'); let dia= parseInt(split[0]); let mes= parseInt(split[1]); let anyo= parseInt(split[2]);
                let fechita = new Date(anyo, mes-1, dia);
                setFecha(fechita);
            }
            setRadio(data.pedido_mat);
        }

    }, []) )


    return (
        <SafeAreaView style={styles.background}>

            <LinearGradient colors={['#FAE7C4', '#FCF7ED']} style={styles.degradado}>

                <ScrollView style={styles.mBottomXl} keyboardShouldPersistTaps='handled'>

                    <View style={styles.headerCrear}>

                        <Pressable onPress={ () => navegacion.navigate("ConsultaTrabajo", {creada: false}) } style={styles.closeCrear}>
                            <Icon name="close" size={40} color='black'/>
                            <Text style={styles.black}>Cerrar</Text>
                        </Pressable>

                        <View style={styles.contentTitle}>
                            <Text style={styles.titCrear}>{mode} trabajo</Text>
                        </View>

                        <View style={styles.contentHelp}>
                            <Pressable style={styles.help} onPress={() => {setCloseHelp(true)}}>
                                <Icon name="md-help-circle" size={50} color='#EDAC70' />
                            </Pressable>
                        </View>

                    </View>

                    {/* Título */}
                    <View style={styles.campo}>

                        <Text style={styles.label}>Título del trabajo</Text>
                        <TextInput 
                            style= {styles.inputTxt}
                            placeholder='escribe aquí el título...'    
                            value={titulo}
                            multiline
                            onChangeText={setTitulo}
                        />  

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
                                        onPress={(value) => {setRadio(value); Keyboard.dismiss()}}
                                    />

                                    <RadioButtonLabel
                                        obj={obj}
                                        index={i}
                                        labelStyle={{fontSize: 18, color: 'black'}}
                                        onPress={(value) => {setRadio(value); Keyboard.dismiss()}}
                                    />
                                
                                </RadioButton>
                            ))
                        }

                        </RadioForm>

                        <View style={{display: radio==1 ? 'flex' : 'none'}}>

                            <Text style={styles.labelDateMat}>¿Qué día ha sido pedido?</Text>

                            <Pressable onPress={ () => {setShow(true);  Keyboard.dismiss()}} style={styles.inputDate}>
                                { fecha!=undefined ?
                                    <Text style={styles.txtDate}>{fecha.getDate()}/
                                        {(fecha.getMonth()+1)/10<1 ? `0${fecha.getMonth()+1}` : fecha.getMonth()+1 }/
                                        {fecha.getFullYear()}</Text>
                                :
                                    <Text style={styles.placeholderDate}>Toca aquí para indicar la fecha</Text>
                                }
                            </Pressable>

                        </View>
                        
                        { show && (
                        <DateTimePicker
                            value={defaultFecha}
                            display='default'
                            mode= "date"
                            onChange={pickDate}
                            maximumDate={defaultFecha}
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
                            multiline
                            placeholder='escribe aquí una nota...'  
                            value={notas}  
                            onChangeText={setNotas}
                            
                        />
                    </View>
                

                </ScrollView>
                
            </LinearGradient>

            <Pressable onPress={ () => handleCrear() } style={styles.crearBtn}>
                <Text style={styles.crearTxt}>{mode}</Text>
                <Text style={styles.crearIcon}>
                    <Icon name="add-circle" size={30} color='black'/>
                </Text>
            </Pressable>

            { closeHelp &&
                <HelpCTrab
                closeHelp={closeHelp}
                setCloseHelp={setCloseHelp}
                />
            }

        </SafeAreaView>
    )
}

export default CrearTrabajo;