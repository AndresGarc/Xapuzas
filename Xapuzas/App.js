import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import {  SafeAreaView, View } from 'react-native';
import Navbar from './src/navigation/Navbar';

import SQLite from 'react-native-sqlite-storage';
import { openDatabase } from 'react-native-sqlite-storage';
import { conectarDB, crearTEstados } from './src/database/db-service'

const ref = createNavigationContainerRef();

const App = () => {

  const [routeName, setRouteName] = useState();

  //useCallback para ??
  const vergo = async () =>{
    try {
      const db = await conectarDB();
      console.log("he conectado");

      await crearTEstados(db);
      console.log("he creado");

    } catch (error) {
      console.log(error);
    }
  };
  
//esto puede ser un fallo, en la documentación avisa de que esto se ejecutará una vez se haya renderizado la pantalla
  useEffect(() => {
    vergo();
  }, []);

  return (
    <NavigationContainer
      ref={ref}
      onReady = {()=>{
        setRouteName(ref.getCurrentRoute().name)
      }}
      onStateChange={
        async () => {
          const previousRouteName = routeName;
          const currentRouteName = ref.getCurrentRoute().name;
          setRouteName(currentRouteName);
        }
      }
    >
      <Navbar routeName={routeName}/>
    </NavigationContainer>
  );
};



export default App;
