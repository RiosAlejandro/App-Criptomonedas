/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Formulario from '../components/Formulario';
import Header from '../components/Header';
import Cotizacion from '../components/Cotizacion';
import useCripto from '../hooks/useCripto';

const Home = () => {

  const {cargando} = useCripto();

  const componente = cargando ?
    <ActivityIndicator
      size="large"
      color="#5e49e2"
    /> :
    <Cotizacion />;

  return (
  <ScrollView>
    <Header />
    <Image
      style={styles.imagen}
      source={require('../assets/img/cryptomonedas.png')}
    />
    <View style={styles.contenido}>
      <Formulario />
    </View>
    <View style={{ marginTop: 40 }}>
      {componente}
    </View>
  </ScrollView>
  );
};

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

export default Home;
