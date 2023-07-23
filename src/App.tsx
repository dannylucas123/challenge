import React, {useState} from 'react';
import './App.scss';
import {DETAIL, HOME} from './constants';
import Browse from './views/browse/Browse';
import Details from './views/details/Details';

const App = () => {
  const [navigation, setNavigation] = useState<string>(HOME);
  const [selected, setSelected] = useState<string>(null);

  const handleBack = (): void => {
    setSelected(null);
    setNavigation(HOME);
  };

  return (
    <main>
      <h1>Fancy Show Search Engine</h1>
      {navigation === HOME && <Browse onSelected={setSelected} onNavigate={setNavigation} />}
      {navigation === DETAIL && <Details showId={selected} onBack={handleBack} />}
    </main>
  );
};

export default App;
