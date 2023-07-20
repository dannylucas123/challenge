import React, {useEffect} from 'react';
import './App.scss';
import api from './api/axios';

const App = () => {
  useEffect(() => {
    api.get('', {params: {s: 'Oppenheimer'}});
  });

  return (
    <main>
      <h1>Test</h1>
      {process.env.API_KEY}
    </main>
  );
};

export default App;
