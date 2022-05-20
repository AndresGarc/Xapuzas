import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import {  SafeAreaView, View } from 'react-native';
import Navbar from './src/navigation/Navbar';

const ref = createNavigationContainerRef();

const App = () => {

  const [routeName, setRouteName] = useState();

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
