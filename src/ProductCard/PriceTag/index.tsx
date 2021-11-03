import React from 'react';

import styles from './styles.module.scss';

export type PriceTagProps = {
  price: number;
}

const PriceTag: React.FC<PriceTagProps> = ({ price }) => (
  <div className={styles['price-tag']}>
    {price}
  </div>
)

export default PriceTag;
