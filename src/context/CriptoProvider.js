import React, { createContext, useState } from 'react';
import axios from 'axios';

const CriptoContext = createContext();

const CriptoProvider = ({children}) => {

  const [moneda, setMoneda] = useState('');
  const [criptomoneda, setCriptoMoneda] = useState('');
  const [criptomonedas, setCriptoMonedas] = useState([]);
  const [resultadoFinal, setResultadoFinal] = useState({});
  const [cargando, setCargando] = useState(false);


    const consultarAPI = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=10&tsym=USD';
      const resultado = await axios.get(url);

      return setCriptoMonedas(resultado.data.Data);
    };

  const cotizarCriptomoneda = async () => {
    console.log(moneda, criptomoneda);
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
    const resultado = await axios.get(url);
    setResultadoFinal(resultado.data.DISPLAY[criptomoneda][moneda]);

    setCargando(true);
    setTimeout(() => {
        setCargando(false);
      }, 3000);
  };

  const obtenerMoneda = monedaOtenida => {
    setMoneda(monedaOtenida);
  };
  const obtenerCriptoMoneda = CriptoMonedaOtenida => {
    setCriptoMoneda(CriptoMonedaOtenida);
  };

  return (
    <CriptoContext.Provider
      value={{
        moneda,
        criptomoneda,
        criptomonedas,
        resultadoFinal,
        cargando,
        obtenerMoneda,
        obtenerCriptoMoneda,
        cotizarCriptomoneda,
        consultarAPI,
      }}
    >
      {children}
    </CriptoContext.Provider>
  );
};

export { CriptoProvider };
export default CriptoContext;
