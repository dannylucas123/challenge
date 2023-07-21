import React, {Dispatch, SetStateAction} from 'react';
import SearchBar from '../../components/search-bar/SearchBar';
import ShowTile from '../../components/show-tile/ShowTile';
import {Show} from '../../models/show';
import './Browse.scss';

export interface BrowseProps {
  searchValue: string;
  onChange: Dispatch<SetStateAction<string>>;
  shows?: Show[];
}

const Browse = ({searchValue, onChange, shows = []}: BrowseProps) => (
  <section>
    <div className='browse-bar'>
      <SearchBar onChange={(e) => onChange(e.target.value)} value={searchValue} />
    </div>
    <div className='browse-section'>
      {shows.length > 0 && shows.map((show) => (
        <ShowTile
          key={show.imdbID}
          poster={{src: show.Poster, alt: `Poster for ${show.Title}`}}
          title={show.Title}
        />
      ))}
    </div>
  </section>
);

export default Browse;
