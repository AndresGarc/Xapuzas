import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';


//import Tareas from '../components/Tareas';
//import Trabajos from '../components/Trabajos';
import Ajustes from '../components/Ajustes';
import StackTareas from './StackTareas';
import StackTrabajos from './StackTrabajos';


const Navbar = () => {

  //const Tab = createBottomTabNavigator();
  const Tab = createMaterialTopTabNavigator();

  return (
      <Tab.Navigator>
        <Tab.Screen name="Tareas" component={StackTareas} />
        <Tab.Screen name="Trabajos" component={StackTrabajos} />
        <Tab.Screen name="Ajustes" component={Ajustes} />
      </Tab.Navigator>

  );
}

export default Navbar;