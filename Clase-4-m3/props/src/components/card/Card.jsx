import React from 'react';
import styles from './card.module.css';

const Card = (props) => {
  const { img, title, subTitle } = props.data;
  const logData = props.mostrarData;

  return (
    <div className={`card ${styles.widthCard}`}>
      <img src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{subTitle}</p>
        <button className='btn btn-success' onClick={() => logData('test')}>test</button>
      </div>
    </div>
  )
};

export default Card;
