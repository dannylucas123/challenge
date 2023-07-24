import React, {useEffect, useState} from 'react';
import Button from '../../components/button/Button';
import {ShowDetails} from '../../models/show-details';
import {getShow} from '../../services/showsService';
import './Details.scss';

export interface DetailsProps {
  showId: string;
  onBack: Function;
}

const Details = ({showId, onBack}: DetailsProps) => {
  const [show, setShow] = useState<ShowDetails>(null);

  useEffect(() => {
    getShow(showId).then(setShow);
  }, [showId]);

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <section className="details">
      <div className="quick-info">
        <div className="filter">
          <div className="backdrop content">
            <div className="image-wrapper">
              <img src={show.Poster} alt={`Poster of ${show.Title}`} />
            </div>
            <div className="text">
              <b><p>{show.Title} {`(${show.Year})`}</p></b>
              <p>{show.Released} - {show.Type} - {show.Runtime}</p>
              <p>{show.Plot}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content content-middle">
        <Button variant="primary" text="Back" onClick={onBack as React.MouseEventHandler}/>
      </div>
    </section>
  );
};

export default Details;
