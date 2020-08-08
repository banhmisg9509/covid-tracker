import React from 'react';
import styles from './Ribbon.module.css';

function Ribbon(props) {
  return (
    <span id={styles.forkongithub}>
      <a href='https://github.com/banhmisg9509/covid-tracker'>
        Fork me on GitHub
      </a>
    </span>
  );
}

export default Ribbon;
