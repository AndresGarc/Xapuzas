import React, { useState } from 'react';
import { styles } from '../assets/styles';
import Icon  from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import {
  SafeAreaView,
  Text,
  View,
  Button,
  Pressable,
  Modal
} from 'react-native';

import ModalConfirmacion from '../common/ModalConfirmacion';
import HelpAjustes from '../common/tutorial/helpAjustes';

const Ajustes = () => {

  const [typeModal, setType] = useState();
  const [confVisible, setconfVisible] = useState(false);
  const [closeHelp, setCloseHelp] = useState(false);

  
  const showConfirm = (type) => {
    setType(type);
    setconfVisible(true);
  }

  return (
    <SafeAreaView style={styles.background}>
      <LinearGradient colors={['#FAE7C4', '#FCF7ED']} style={styles.degradado}>

        <View style={styles.header}>
        
          <Text style={styles.titAjuste}>¿Qué quieres hacer?</Text>

          <View style={styles.contentHelp}>
            <Pressable style={styles.help} onPress={() => setCloseHelp(true)}>
              <Icon name="md-help-circle" size={50} color='#EDAC70' />
            </Pressable>
          </View>

        </View>

        <View style={styles.contentAjustes}>

          <Pressable style={styles.btnAjuste}>
            <Text style={styles.text}>Crear copia de seguridad</Text>
          </Pressable>

          <Pressable style={styles.btnAjuste}>
            <Text style={styles.text}>Recuperar información</Text>
          </Pressable>

          <Pressable style={styles.btnAjuste} onPress={() => {showConfirm(4);}}>
            <Text style={styles.text}>Borrar todos los datos</Text>
          </Pressable>

          { confVisible &&
            <ModalConfirmacion 
              confVisible={confVisible}
              setconfVisible={setconfVisible}
              type={typeModal}
            />
          }

          { closeHelp &&
            <HelpAjustes
              closeHelp={closeHelp}
              setCloseHelp={setCloseHelp}
            />
          }

        </View>

      </LinearGradient>

    </SafeAreaView>
  );
};

export default Ajustes;
