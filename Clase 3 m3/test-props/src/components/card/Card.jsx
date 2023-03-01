import React from 'react';
import styles from './card.module.css';

const Card = (props) => {
  console.log(props);
  return (
    <div class={`card mx-2 ${styles.ancho}`}>
      <img src='' class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text"></p>
      </div>
    </div>
  )
};

export default Card;
