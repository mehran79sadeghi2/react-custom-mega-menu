import React from 'react';
import MegaMenu from './components/MegaMenu';
import { megaData } from './mega-data';

function App() {
  return (
        <MegaMenu data={megaData} />
  );
}

export default App;
