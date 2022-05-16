import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tareas from '../components/Tareas';
import CrearTarea from '../components/CrearTarea';
import { quitarTab } from './Navbar';
import { TabBar } from 'react-native-tab-view';


const StackTareas = () => {

    const Stack = createNativeStackNavigator();

    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          
        }}
      >
        <Stack.Screen name="ConsultaTarea" component={Tareas} />
        <Stack.Screen name="Crear tarea" component={CrearTarea} />
      </Stack.Navigator>

  );
}

export default StackTareas;