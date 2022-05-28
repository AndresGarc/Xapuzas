import React, { useEffect, useState } from 'react';
import Icon  from 'react-native-vector-icons/Octicons';

import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Button,
    Pressable,
    Modal
  } from 'react-native';

export const  IconCalendar = () => {
    return (
        <Icon name="calendar" color='black' size={25}/>
    );
}

export const IconReloj = () => {
    return (
        <Icon name="clock" color='black' size={25}/>
    );
}