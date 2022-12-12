import React, { Children } from 'react';
import styles from '../styles/modules/button.module.scss';

const buttonTypes = {
  primary: 'primary',
  secondary: 'secondary',
};

function Button({ children, variant = 'primary' }) {
  return (
    <button className={styles.button} type="button">
      {children}
    </button>
  );
}

export default Button;
