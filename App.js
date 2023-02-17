import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Formulario from './src/components/Formulario';
import Header from './src/components/Header';

function App() {
  return (
  <>
    <Header />
    <Image
      style={styles.imagen}
      source={require('./src/assets/img/cryptomonedas.png')}
    />
    <View style={styles.contenido}>
      <Formulario />
    </View>
  </>
  );
}

const styles = StyleSheet.create({
  imagen: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%',
  },
  contenido: {
    marginHorizontal: '2.5%',
  },
});

export default App;