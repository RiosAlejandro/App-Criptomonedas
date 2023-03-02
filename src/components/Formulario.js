/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import useCripto from '../hooks/useCripto';

const Formulario = () => {

  const {
    moneda,
    criptomoneda,
    criptomonedas,
    obtenerMoneda,
    obtenerCriptoMoneda,
    cotizarCriptomoneda,
    consultarAPI,
  } = useCripto();

  consultarAPI();

  const cotizarPrecio = () => {
    if (moneda.trim() === '' || criptomoneda.trim() === ''){
      mostrarAlerta();
      return;
    }
    cotizarCriptomoneda();
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
        selectedValue={criptomoneda}
        onValueChange={CriptoMonedaOtenida => obtenerCriptoMoneda(CriptoMonedaOtenida)}
        style={{ height: 120 }}
      >
        <Picker.Item
          label="- Seleccione -"
          value=""
        />

          {criptomonedas?.map(cripto => (
          <Picker.Item
            key={cripto.CoinInfo.Id}
            label={cripto.CoinInfo.FullName}
            value={cripto.CoinInfo.Name}
          />
        ))
        }
      </Picker>

      <TouchableHighlight
        style={styles.btnCotizar}
        onPress={() => cotizarPrecio()}
        >
        <Text style={styles.textoCotizar}>Cotizar</Text>
      </TouchableHighlight>
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
