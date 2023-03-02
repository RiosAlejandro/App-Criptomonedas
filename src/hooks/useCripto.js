import { useContext } from 'react';
import CriptoContext from '../context/CriptoProvider';

const useCripto = () => {
  return useContext(CriptoContext);
};

export default useCripto;
