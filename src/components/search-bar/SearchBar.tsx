import React from 'react';
import './SearchBar.scss';

export interface SearchBarProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
}

const SearchBar = ({value, onChange, placeholder = 'Search by name'}: SearchBarProps) => (
  <input
    className="form-control"
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

export default SearchBar;
