import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import {  SafeAreaView, View } from 'react-native';
import Navbar from './src/navigation/Navbar';


const App = () => {

  return (
    <NavigationContainer>
      <Navbar />
    </NavigationContainer>
  );
};



export default App;
