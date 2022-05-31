import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { createContext, useState } from 'react';
import Icon  from 'react-native-vector-icons/MaterialIcons';


import {
  StyleSheet
} from 'react-native';

//componentes
import Ajustes from '../components/Ajustes';
import StackTareas from './StackTareas';
import StackTrabajos from './StackTrabajos';


const Navbar = (props) => {


  const Tab = createMaterialTopTabNavigator();
  const hide = (props.routeName == "Crear tarea" || props.routeName == "Crear trabajo");

  return (
      <Tab.Navigator 
        screenOptions={{
          tabBarStyle: {
            backgroundColor:'#FAE7C4',
            elevation: 0,
            shadowColor: "#000000",
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.4,
            shadowRadius: 6,
            paddingTop:10,
            display: hide ? "none" : "flex"
          },
          tabBarLabelStyle: {
            fontFamily:'OpenSans-Regular',
            fontSize:18,
          },
          tabBarActiveTintColor: '#000',
          swipeEnabled:false,
          tabBarPressColor: 'transparent',
          tabBarIndicatorStyle: {
            backgroundColor: '#EDAC70',
            height:68,
            width:110,
            marginHorizontal:10,
            marginBottom:5,
            borderRadius:10
          }
        }
      }>

        <Tab.Screen name="Tareas" component={StackTareas} options={{
          tabBarIcon: ({focused}) => ( focused!==false ? <Icon name="assignment-turned-in" size={25} color='black' /> : <Icon name="assignment-turned-in" size={25} />) 
        }}/>
        <Tab.Screen name="Trabajos" component={StackTrabajos} options={{
          tabBarIcon: ({focused}) => ( focused!==false ? <Icon name="file-copy" size={25} color='black' /> : <Icon name="file-copy" size={25} />)
        }} />
        <Tab.Screen name="Ajustes" component={Ajustes} options={{
          tabBarIcon: ({focused}) => ( focused!==false ? <Icon name="settings" size={25} color='black' /> : <Icon name="settings" size={25} />)
        }} />

      </Tab.Navigator>

  );
  }


const styles = StyleSheet.create({
  display:{
    display:'none'
  }
});

export default Navbar;