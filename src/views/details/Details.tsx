import React, {useEffect, useState} from 'react';
import Button from '../../components/button/Button';
import {getShow} from '../../services/showsService';

export interface DetailsProps {
  showId: string;
  onBack: Function;
}

const Details = ({showId, onBack}: DetailsProps) => {
  const [show, setShow] = useState(null);

  useEffect(() => {
    getShow(showId).then(setShow);
  }, [showId]);

  if (!show) {
    return <div>Loading...</div>;
  }
  return (
    <section className="details">
      <Button variant="secondary" text="Back" onClick={onBack as React.MouseEventHandler}/>
      <div>
        <img src={show.Poster} alt={`Poster of ${show.Title}`} />
        <p>{show.Title}</p>
        <p>{show.Type}</p>
        <p>{show.Year}</p>
      </div>
    </section>
  );
};

export default Details;
