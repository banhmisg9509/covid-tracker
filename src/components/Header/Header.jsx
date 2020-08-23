import React, { Fragment } from 'react';
import { Ribbon } from 'components';
import styles from './Header.module.css';
import conronaImage from '../../images/corona.png';

function Header() {
  return (
    <Fragment>
      <Ribbon />
      <img src={conronaImage} alt='COVID-19' className={styles.image} />
    </Fragment>
  );
}

export default Header;
