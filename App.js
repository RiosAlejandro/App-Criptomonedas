/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {
  Image,
  StyleSheet,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import Formulario from './src/components/Formulario';
import Header from './src/components/Header';
import Cotizacion from './src/components/Cotizacion';

function App() {

  const [moneda, setMoneda] = useState('');
  const [criptoMoneda, setCriptoMoneda] = useState('');
  const [consultarApi, setconsultarApi] = useState(false);
  const [resultadoFinal, setResultadoFinal] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const cotizarCriptoMoneda = async () => {
      if (consultarApi){
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`;
        const resultado = await axios.get(url);

        setCargando(true);

        setTimeout(() => {
          setResultadoFinal(resultado.data.DISPLAY[criptoMoneda][moneda]);
          setconsultarApi(false);
          setCargando(false);
        }, 3000);
      }
    };
    cotizarCriptoMoneda();
  }, [consultarApi]);

  const componente = cargando ?
    <ActivityIndicator
      size="large"
      color="#5e49e2"
    /> :
    <Cotizacion resultadoFinal={resultadoFinal}/>;

  return (
  <ScrollView>
    <Header />
    <Image
      style={styles.imagen}
      source={require('./src/assets/img/cryptomonedas.png')}
    />
    <View style={styles.contenido}>
      <Formulario
        moneda={moneda}
        criptoMoneda={criptoMoneda}
        setMoneda={setMoneda}
        setCriptoMoneda={setCriptoMoneda}
        setconsultarApi={setconsultarApi}
      />
    </View>
    <View style={{ marginTop: 40 }}>
      {componente}
    </View>
  </ScrollView>
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
