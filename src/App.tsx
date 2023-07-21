import React, {useCallback, useEffect, useState} from 'react';
import debounce from 'lodash.debounce';
import {Show} from './models/show';
import {fetchShows} from './services/showsService';
import Browse from './views/browse/Browse';
import './App.scss';

const HOME = 'home';
const DETAIL = 'detail';

// Explanation for challenge:
// We will store the movies / movie details in the components themselves so we always fetch fresh data when 'navigating' to any page.
// In the circumstance that this is not the requested behaviour, you can put the state inside of the Browse component and make it "smart".
// In this case I did want this behaviour, so it's inside of App instead of Browse.
const App = () => {
  const [navigation, setNavigation] = useState<'home' | 'detail'>(HOME);
  const [search, setSearch] = useState<string>('');
  const [shows, setShows] = useState<Show[]>([]);

  // Debounce so we don't want to spam the API whenever we type in a letter.
  const debounced = useCallback(debounce((s: string) => fetchShows(s).then((result) => setShows(result.Search)), 350, {trailing: true}), []);

  useEffect(() => {
    debounced(search);
  }, [search, debounced]);

  return (
    <main>
      <h1>Fancy Show Search Engine</h1>
      {navigation === HOME && <Browse searchValue={search} onChange={setSearch} shows={shows}/>}
    </main>
  );
};

export default App;
