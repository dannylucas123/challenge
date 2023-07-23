import React, {useCallback, useEffect, useState} from 'react';
import debounce from 'lodash.debounce';
import Button from '../../components/button/Button';
import SearchBar from '../../components/search-bar/SearchBar';
import ShowTile from '../../components/show-tile/ShowTile';
import {DETAIL} from '../../constants';
import {Show} from '../../models/show';
import {fetchShows} from '../../services/showsService';
import './Browse.scss';

export interface BrowseProps {
  // This could use some better typehinting
  onNavigate: React.Dispatch<React.SetStateAction<string>>;
  onSelected: React.Dispatch<React.SetStateAction<string>>;
}

const getFourShows = (shows: Show[]): Show[] => {
  if (shows.length <= 4) {
    return shows;
  }
  return shows.slice(0, 4);
};

const Browse = ({onNavigate, onSelected}: BrowseProps) => {
  const [search, setSearch] = useState<string>('');
  const [quickShows, setQuickShows] = useState<Show[]>([]);
  const [allShows, setAllShows] = useState<Show[]>([]);

  // Debounce so we don't want to spam the API whenever we type in a letter.
  const quickSearch = useCallback(debounce((s: string) => fetchShows(s).then((result) => setQuickShows(result.Search)), 350, {trailing: true}), []);

  // If the API had supported returning partial results (like top 4) this approach would have made more sense.
  // I want to mimic the behaviour that you see some results when typing and when you press Search you fetch all results.
  useEffect(() => {
    quickSearch(search);
  }, [search, quickSearch]);

  const handleNavigation = (id: string): void => {
    onSelected(id);
    onNavigate(DETAIL);
  };

  const handleSearch = (): void => {
    fetchShows(search).then((result) => setAllShows(result.Search));
  };

  return (
    <section>
      <div className='browse-bar'>
        <SearchBar onClick={handleNavigation} onChange={(e) => setSearch(e.target.value)} value={search} shows={getFourShows(quickShows)}/>
        <Button variant='primary' text='Search' onClick={() => handleSearch()}/>
      </div>
      <div className='browse-section'>
        {allShows.length > 0 && allShows.map((show) => (
          <ShowTile
            key={show.imdbID}
            show={show}
            onClick={handleNavigation}
          />
        ))}
      </div>
    </section>
  );
};

export default Browse;
