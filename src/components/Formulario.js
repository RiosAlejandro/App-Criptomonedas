import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-community/picker';
import axios from 'axios';

const Formulario = () => {

  const [moneda, setMoneda] = useState('');
  const [criptoMoneda, setCriptoMoneda] = useState('');
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
    setMoneda(moneda);
  };

  return (
    <View>
      <Text style={styles.label}>Moneda</Text>
      <Picker
        selectedValue={moneda}
        onValueChange={monedaOtenida => obtenerMoneda(monedaOtenida)}
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
});

export default Formulario;
