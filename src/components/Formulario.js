/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableHighLight, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

const Formulario = ({
  moneda,
  criptoMoneda,
  setMoneda,
  setCriptoMoneda,
  setconsultarApi,
}) => {

  const [criptoMonedas, setCriptoMonedas] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=10&tsym=USD';
      const resultado = await axios.get(url);
      setCriptoMonedas(resultado.data.Data);
    };
    consultarAPI();
  }, []);

  const obtenerMoneda = monedaOtenida => {
    setMoneda(monedaOtenida);
  };
  const obtenerCriptoMoneda = CriptoMonedaOtenida => {
    setCriptoMoneda(CriptoMonedaOtenida);
  };
  const cotizarPrecio = () => {
    if (moneda.trim() === '' || criptoMoneda.trim() === ''){
      mostrarAlerta();
      return;
    }
    setconsultarApi(true);
  };
  const mostrarAlerta = () =>{
    Alert.alert(
      'Error...',
      'Ambos campos son obligatorios',
      [
        {text: 'Ok'},
      ]
    );
  };

  return (
    <View>
      <Text style={styles.label}>Moneda</Text>
      <Picker
        selectedValue={moneda}
        onValueChange={monedaOtenida => obtenerMoneda(monedaOtenida)}
        style={{ height: 120 }}
      >
        <Picker.Item
          label="- Seleccione -"
          value=""
        />
        <Picker.Item
          label="Dolar de Estados Unidos"
          value="USD"
        />
        <Picker.Item
          label="Peso Mexicano"
          value="MXN"
        />
        <Picker.Item
          label="Euro"
          value="EUR"
        />
        <Picker.Item
          label="Libra Esterlina"
          value="GBP"
        />
      </Picker>

      <Text style={styles.label}>Criptomoneda</Text>
      <Picker
        selectedValue={criptoMoneda}
        onValueChange={CriptoMonedaOtenida => obtenerCriptoMoneda(CriptoMonedaOtenida)}
        style={{ height: 120 }}
      >
        <Picker.Item
          label="- Seleccione -"
          value=""
        />
        {criptoMonedas.map(cripto => (
          <Picker.Item
            key={cripto.CoinInfo.Id}
            label={cripto.CoinInfo.FullName}
            value={cripto.CoinInfo.Name}
          />
        ))}
      </Picker>

      <TouchableHighLight
        style={styles.btnCotizar}
        onPress={() => cotizarPrecio()}
        >
        <Text style={styles.textoCotizar}>Cotizar</Text>
      </TouchableHighLight>
    </View>
   );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Lato-Black',
    textTransform: 'uppercase',
    fontSize: 22,
    marginVertical: 20,
  },
  btnCotizar: {
    backgroundColor: '#5e49e2',
    padding: 10,
    marginTop: 20,
  },
  textoCotizar: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Lato-Black',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default Formulario;
