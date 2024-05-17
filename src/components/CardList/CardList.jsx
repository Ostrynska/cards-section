import React, { useState } from 'react';

 import Card from '../Card/Card';

import db from '../../db/data.json';

import styles from './CardList.module.css'

const CardList = () => {
    const [data, setData] = useState(db);
     const colors = ['#179D2E', '#0177B8', '#F5AF23', '#F02E2C'];

  return (
    <ul className={styles.list}>
      {data.map((card, index) => (
          <Card key={card.id} card={card} color={colors[index % colors.length]}/>
      ))}
    </ul>
  );
};

export default CardList;
