import React from 'react';
import Home from './src/containers/Home';
import { CriptoProvider } from './src/context/CriptoProvider';

function App() {

  return (
    <CriptoProvider>
      <Home />
    </CriptoProvider>
  );
}

export default App;
