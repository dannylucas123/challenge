import React from 'react';
import {Show} from '../../models/show';
import './ShowTile.scss';

export interface ShowTileProps {
  onClick: Function;
  show: Show
}

const ShowTile = ({show, onClick}: ShowTileProps) => (
  <a className="show-tile" onClick={() => onClick(show.imdbID)} tabIndex={0}>
    <img src={show.Poster} alt={`Poster of ${show.Title}`}></img>
    {show.Title}
  </a>
);

export default ShowTile;
