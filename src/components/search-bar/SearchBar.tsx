import React, {useRef, useState} from 'react';
import useClickOutside from '../../hooks/onClickOutside';
import {Show} from '../../models/show';
import './SearchBar.scss';

export interface SearchBarProps {
  value: string;
  onClick: Function;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  shows: Show[]
}

const SearchBar = ({value, onChange, placeholder = 'Search by name', shows = [], onClick}: SearchBarProps) => {
  // Maybe this can be done with useEffect and adding handlers, but this is just a quick solution.
  const [isFocused, setIsFocused] = useState(false);
  const showQuickSearch = shows.length > 0 && value;
  const searchBar = useRef(null);

  useClickOutside(searchBar, () => setIsFocused(false));

  return (
    <div ref={searchBar}>
      <input
        className="form-control"
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
      />
      <ul role="listbox" className={`quick-search ${showQuickSearch && isFocused && 'show'}`}>
        {showQuickSearch && shows.map((show) => (
          <li tabIndex={0} key={show.imdbID} role="option" onClick={() => onClick(show.imdbID)}>
            <img src={show.Poster} alt={`Poster for ${show.Title}`}></img>
            <div className='wrapper'>
              <b>
                {show.Title}
              </b>
              <p>
                {show.Year}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
