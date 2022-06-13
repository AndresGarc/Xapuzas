import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import {  SafeAreaView, View } from 'react-native';
import SplashScreen from  "react-native-splash-screen";
import Navbar from './src/navigation/Navbar';

import { crearTConn, getConn, postConn } from './src/database/conexion-service';

const ref = createNavigationContainerRef();

const App = () => {

  const [routeName, setRouteName] = useState();

  const loadConn = () => {
    crearTConn().then((data) => {
      getConn("conexion").then((data) => {
        if(data==undefined) postConn();
      })
    })
  }
  
  useEffect(() => {
    loadConn();
  });
  

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
