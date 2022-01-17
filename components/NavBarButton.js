import React from 'react';
import styles from './NavBarButton.module.css';

const NavButton = ({ title, handleClick }) => {

  return (
    <div className={styles.butt}>
      <h1 onClick={handleClick}>{title}</h1>
    </div>
  );
};

export default NavButton;