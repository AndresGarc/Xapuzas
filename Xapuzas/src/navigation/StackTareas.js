import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tareas from '../components/Tareas';
import CrearTarea from '../components/CrearTarea';


const StackTareas = () => {

    const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="ConsultaTarea" component={Tareas} />
        <Stack.Screen name="Crear tarea" component={CrearTarea} />
      </Stack.Navigator>

  );
}

export default StackTareas;