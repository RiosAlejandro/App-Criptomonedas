import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Cotizacion = ({resultadoFinal}) => {

  if (Object.keys(resultadoFinal).length === 0) {return null;}//para no renderizar nada en caso de que no este nada seleccionado

  return (
    <View style={styles.resultado}>
      <Text style={[styles.texto, styles.precio]}>
        <Text style={styles.span}>{resultadoFinal.PRICE}</Text>
      </Text>
      <Text style={styles.texto}>Precio más alto del día: {' '}
        <Text style={styles.span}>{resultadoFinal.HIGHDAY}</Text>
      </Text>
      <Text style={styles.texto}>Precio más bajo del día: {' '}
        <Text style={styles.span}>{resultadoFinal.LOWDAY}</Text>
      </Text>
      <Text style={styles.texto}>Variación últimas 24 horas: {' '}
        <Text style={styles.span}>{resultadoFinal.CHANGEPCT24HOUR} %</Text>
      </Text>
      <Text style={styles.texto}>última actualización: {' '}
        <Text style={styles.span}>{resultadoFinal.LASTUPDATE}</Text>
      </Text>
    </View>
   );
};

const styles = StyleSheet.create({
  resultado: {
    backgroundColor: '#5e49e2',
    padding: 20,
  },
  texto: {
    color: '#fff',
    fontFamily: 'Lato-Regular',
    fontSize: 18,
    marginBottom: 10,
  },
  precio: {
    fontSize: 38,
  },
  span: {
    fontFamily: 'Lato-Black',
  },
});

export default Cotizacion;
