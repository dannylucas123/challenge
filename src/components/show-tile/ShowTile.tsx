import React from 'react';
import './ShowTile.scss';

interface PosterImage {
  src: string;
  alt: string;
}

export interface ShowTileProps {
  poster: PosterImage;
  title: string;
}

const ShowTile = ({poster, title}: ShowTileProps) => (
  <section className="show-tile">
    <img src={poster.src} alt={poster.alt}></img>
    {title}
  </section>
);

export default ShowTile;
